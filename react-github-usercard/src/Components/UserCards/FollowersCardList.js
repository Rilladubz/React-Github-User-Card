import React from 'react';
import FollowerCard from './FollowersCard';

const UserCardList = props => {

    return(
        <div>
            {props.followersData.map(item => <FollowerCard key={item.id} user={item}/>)}
        </div>
    )
}

export default UserCardList;