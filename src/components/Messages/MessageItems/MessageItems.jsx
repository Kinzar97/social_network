import React from 'react';
import s from './MessageItems.module.css';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const MessageItems = (props) => {

    let message = props.messagesPage.messages.map(m => <Message message={m.message} />);

    return <div className={s.messageItems}>
        {message}
        <NewMessage
            messagesPage={props.messagesPage}
            dispatch={props.dispatch} />
    </div>
};

export default MessageItems;

