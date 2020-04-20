import React from 'react';
import s from './NewPost.module.css';
import { AddPostActionCreator, UpdateNewPostTextActionCreator } from '../../../../redux/store';



const NewPost = (props) => {

    let AddPost = () => {
        props.dispatch(AddPostActionCreator());
    }

    let updatePost = () => {
        let newText = newPostElement.current.value;
        props.dispatch(UpdateNewPostTextActionCreator(newText));
    }

    let newPostElement = React.createRef()

    return <div className={s.newPost}>
        <textarea onChange={updatePost} ref={newPostElement} value={props.profilePage.newPostText} />
        <div><button onClick={AddPost}>Create post</button></div>
    </div>
};

export default NewPost;