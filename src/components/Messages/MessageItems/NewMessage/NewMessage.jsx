import React from 'react';
import s from './NewMessage.module.css';


const NewMessage = (props) => {

    let onSendMessage = () => {
        props.addMessage()
    };

    let onUpdateNewMessageText = (event) => {
        let newText = event.target.value;
        props.updateNewMessageText(newText)
    }

    return <div className={s.newMessage}>
        <div><textarea 
        placeholder='Enter your message..'
        onChange={onUpdateNewMessageText} 
        value={props.newMessageText} /></div>
        <div>
            <button onClick={onSendMessage}>Send message</button>
        </div>
    </div>
}

export default NewMessage;
