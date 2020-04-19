import React, { createRef } from 'react';
import s from './NewMessage.module.css';

const NewMessage = (props) => {

    let SendMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
    };

    let UpdateNewMessageText = () => {
        let newText = newMessageElement.current.value;
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newText:newText})
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
