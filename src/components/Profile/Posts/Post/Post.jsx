import React from 'react';
import s from './Post.module.css';

const Post =(props)=>
{
    return <div className = {s.post} >
    Post: {props.message}
    </div>
};

export default Post;


