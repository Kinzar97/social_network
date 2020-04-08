import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';
import New_post from './New_post/New_post';



const Posts = () => {
    return <div className={s.posts}>
        Posts:
        <New_post />
        <Post message = 'Hi! How are you?'/>
        <Post message = 'Today is very hot'/>
        <Post message = 'FIREEE' />
    </div >
};

export default Posts;