import React, { Component } from 'react';
import axios from 'axios';

//components
import Header from './Components/Header/Header';
import FollowerCardList from './Components/UserCards/FollowersCardList';
import UserCard from './Components/UserCards/UserCard';
import './App.css';


class App extends Component {
  state= {
    myData: [],
    followersData: [],
  }

  componentDidMount = () => {
    axios.all([
      axios.get('https://api.github.com/users/rilladubz'),
      axios.get('https://api.github.com/users/rilladubz/followers')
    ])
    .then(axios.spread((myRes, followerRes) => {
      this.setState({
        myData: myRes.data,
        followersData: followerRes.data,
      })
    }));
  }
  
  render(){

    return (
      <div className="App">
        <Header />
        <UserCard userData={this.state.myData} />
        <FollowerCardList followersData={this.state.followersData} />
      </div>
    );
  }
}

export default App;
