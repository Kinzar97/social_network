import React from 'react';
import s from './NewPost.module.css';
import { AddPostActionCreator, UpdateNewPostTextActionCreator } from '../../../../redux/store';



const NewPost = (props) => {

    let AddPost = () => {
        props.dispatch(AddPostActionCreator());
    }

    let updatePost = (event) => {
        let newText = event.target.value;
        props.dispatch(UpdateNewPostTextActionCreator(newText));
    }

    return <div className={s.newPost}>
        <div><textarea 
        placeholder='Enter your text..'
        onChange={updatePost} 
        value={props.profilePage.newPostText} /></div>
        <div><button onClick={AddPost}>Create post</button></div>
    </div>
};

export default NewPost;