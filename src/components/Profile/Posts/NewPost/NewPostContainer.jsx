import React from 'react';
import { AddPostActionCreator, UpdateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import NewPost from './NewPost'



const NewPostContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(AddPostActionCreator());
    }

    let updatePost = (newText) => {
        props.store.dispatch(UpdateNewPostTextActionCreator(newText));
    }

    let newPostText = props.store.getState().profilePage.newPostText;

    return <NewPost
        addPost={addPost}
        updatePost={updatePost} 
        newPostText={newPostText}/>
};

export default NewPostContainer;