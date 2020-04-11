import React from 'react';
import s from './Messages.module.css';
import DialogueItems from './DialogueItems/DialogueItems';
import MessageItems from './MessageItems/MessageItems';

const Messages = () => {
    return <div className={s.messages}>
        <DialogueItems />
        <MessageItems />
    </div>;
}

export default Messages;