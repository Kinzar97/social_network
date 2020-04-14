import React, { createRef } from 'react';
import s from './NewMessage.module.css';

const NewMessage = () => {

    let newMessageElement = createRef();

    let SendMessage =()=>{
        let text = newMessageElement.current.value
        alert(text)
    }

    return <div className = {s.newMessage}>
        <textarea ref={newMessageElement}></textarea>
        <div>
            <button onClick ={SendMessage}>Send message</button>
        </div>
    </div>
}

export default NewMessage;