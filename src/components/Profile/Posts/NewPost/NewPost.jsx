import React from 'react'
import s from './NewPost.module.css'



const NewPost = (props) => {

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value = '';
    }
    
    let newPostElement = React.createRef()

    return <div className={s.newPost}>
        <div><textarea ref={newPostElement}></textarea></div>
        <div><button onClick={addPost}>Create post</button></div>
    </div>
};

export default NewPost;