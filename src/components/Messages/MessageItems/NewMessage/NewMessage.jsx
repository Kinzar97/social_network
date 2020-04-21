import React from 'react';
import s from './NewMessage.module.css';
import { AddMessageActionCreator, UpdateNewMessageTextActionCreator } from '../../../../redux/store';


const NewMessage = (props) => {

    let SendMessage = () => {
        props.dispatch(AddMessageActionCreator())
    };

    let UpdateNewMessageText = (event) => {
        let newText = event.target.value;
        props.dispatch(UpdateNewMessageTextActionCreator(newText))
    }

    return <div className={s.newMessage}>
        <div><textarea 
        placeholder='Enter your message..'
        onChange={UpdateNewMessageText} 
        value={props.messagesPage.newMessageText} /></div>
        <div>
            <button onClick={SendMessage}>Send message</button>
        </div>
    </div>
}

export default NewMessage;
