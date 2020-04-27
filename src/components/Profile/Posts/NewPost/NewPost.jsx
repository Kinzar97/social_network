import React from 'react';
import s from './NewPost.module.css';


const NewPost = (props) => {

    let onAddPost = () => {
        props.addPost();
    }

    let onUpdatePost = (event) => {
        let newText = event.target.value;
        props.updatePost(newText);
    }

    return <div className={s.newPost}>
        <div><textarea 
        placeholder='Enter your text..'
        onChange={onUpdatePost} 
        value={props.newPostText} /></div>
        <div><button onClick={onAddPost}>Create post</button></div>
    </div>
};

export default NewPost;