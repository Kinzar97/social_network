import React from 'react'
import s from './NewPost.module.css'

let addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
}

let newPostElement = React.createRef()

const NewPost = () => {
    return <div className={s.newPost}>
        <div><textarea ref={newPostElement}></textarea></div>
        <div><button onClick={addPost}> Create post</button></div>
    </div>
};

export default NewPost;