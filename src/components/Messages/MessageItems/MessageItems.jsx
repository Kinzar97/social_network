import React from 'react';
import s from './MessageItems.module.css';
import Message from './Message/Message';

let messages = [
    {id: 1, message:'Hello'},
    {id: 2, message:'Hello'},
    {id: 3, message:'How are you?'},
]

let message = messages.map(m=><Message message = {m.message}/>)

const MessageItems = () => {
    return <div className={s.messageItems}>
       {message}
    </div>
};

export default MessageItems;