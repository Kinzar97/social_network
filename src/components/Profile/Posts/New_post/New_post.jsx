import React from 'react'
import s from './New_post.module.css'

const New_post = ()=>{
    return <div className = {s.new_post}>
        <div><textarea></textarea></div>
        <div><button> Create post</button></div>
    </div>
};

export default New_post;