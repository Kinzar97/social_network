import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return <div className={s.friend}>
        <img src={props.image} alt='' />
        <b>{props.name}</b>
        </div>
}


export default Friend;