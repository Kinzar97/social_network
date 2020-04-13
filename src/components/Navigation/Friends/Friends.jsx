import React from 'react'
import s from './Friends.module.css'
import Friend from './Friend/Friend'


const Friends = (props) => {

    let FriendInfo = props.friends.map(el => <Friend image={el.image} name={el.name} />)

    return <div className={s.friends}>
        <h2 align='center'>Friends</h2>
        {FriendInfo}
    </div>
};

export default Friends;