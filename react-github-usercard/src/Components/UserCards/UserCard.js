import React from 'react';
import './UserCard.css'


const userCard = props => {
    const { userData } = props;
    console.log(userData)
    return(
        <div className='userCard'>
            <div className='imgContainer'>
                <img className='img' src={userData.avatar_url}/>
            </div>
            <div className='userInfo'>
                <h1>{userData.name}</h1>
                <h3>{userData.login}</h3>
                <p>Profile:<a className='tag' href={userData.html_url}>{userData.html_url}</a></p>
                <p>Followers: {userData.followers}</p>
                <p>Following: {userData.following}</p>
            </div>
        </div>
    )
}

export default userCard;