import React from 'react'
import s from './NewPost.module.css'

const NewPost = ()=>{
    return <div className = {s.newPost}>
        <div><textarea></textarea></div>
        <div><button> Create post</button></div>
    </div>
};

export default NewPost;