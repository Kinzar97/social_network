import React from 'react';
import s from './MessageItems.module.css';
import Message from './Message/Message';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const MessageItems = (props) => {

    let message = props.messagesPage.messages.map(m => <Message message={m.message} />);

    return <div className={s.messageItems}>
        {message}
        <NewMessageContainer
            store = {props.store} />
    </div>
};

export default MessageItems;

