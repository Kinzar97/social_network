import React from 'react';
import s from './MessageItems.module.css';
import Message from './Message/Message';

const MessageItems = (props) => {
    
    let message = props.messages.map(m=><Message message = {m.message}/>);

    return <div className={s.messageItems}>
       {message}
    </div>
};

export default MessageItems;