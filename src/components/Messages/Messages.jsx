import React from 'react';
import s from './Messages.module.css';
import DialogueItems from './DialogueItems/DialogueItems';
import MessageItems from './MessageItems/MessageItems';


const Messages = (props) => {

    return <div className={s.messages}>
        <DialogueItems dialogues = {props.messagesPage.dialogues}/>
        <MessageItems messages = {props.messagesPage.messages}/>
    </div>;
}

export default Messages;