import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return <div className={s.message}>
        <img src="https://s12.stc.all.kpcdn.net/share/i/12/10896475/inx960x640.jpg"  alt="my_profile"></img>
        {props.message}
        </div>
};

export default Message;