import React from 'react';
import s from './MessageItems.module.css';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const MessageItems = (props) => {

    let message = props.messages.map(m => <Message message={m.message} />);

    return <div className={s.messageItems}>
        {message}
        <NewMessage />
    </div>
};

export default MessageItems;