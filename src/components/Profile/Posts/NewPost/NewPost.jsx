import React from 'react'
import s from './NewPost.module.css'



const NewPost = (props) => {
    
    let addPost = () => {
        props.addPost();
    }

    let updatePost = () => {
        let newText = newPostElement.current.value;
        props.updatePost(newText);
    }

    let newPostElement = React.createRef()

    return <div className={s.newPost}>
        <div><textarea onChange = {updatePost} ref={newPostElement} value = {props.profilePage.newPostText}/></div>
        <div><button onClick={addPost}>Create post</button></div>
    </div>
};

export default NewPost;