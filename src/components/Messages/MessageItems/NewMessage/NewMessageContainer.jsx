import React from 'react';
import { AddMessageActionCreator, UpdateNewMessageTextActionCreator } from '../../../../redux/messagesReducer';
import NewMessage from './NewMessage'


const NewMessageContainer = (props) => {

    let SendMessage = () => {
        props.store.dispatch(AddMessageActionCreator())
    };

    let UpdateNewMessageText = (newText) => {
        props.store.dispatch(UpdateNewMessageTextActionCreator(newText))
    };

    let newMessageText = props.store.getState().messagesPage.newMessageText;

    return <NewMessage 
    addMessage = {SendMessage}
    updateNewMessageText = {UpdateNewMessageText}
    newMessageText = {newMessageText}/>
}

export default NewMessageContainer;
