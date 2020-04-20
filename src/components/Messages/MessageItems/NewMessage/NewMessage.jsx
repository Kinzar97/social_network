import React, { createRef } from 'react';
import s from './NewMessage.module.css';
import { AddMessageActionCreator, UpdateNewMessageTextActionCreator } from '../../../../redux/store';


const NewMessage = (props) => {

    let SendMessage = () => {
        props.dispatch(AddMessageActionCreator())
    };

    let UpdateNewMessageText = () => {
        let newText = newMessageElement.current.value;
        props.dispatch(UpdateNewMessageTextActionCreator(newText))
    }

    let newMessageElement = createRef();

    return <div className={s.newMessage}>
        <textarea onChange={UpdateNewMessageText} ref={newMessageElement} value={props.messagesPage.newMessageText} />
        <div>
            <button onClick={SendMessage}>Send message</button>
        </div>
    </div>
}

export default NewMessage;
