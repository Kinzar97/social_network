import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';
import New_post from './New_post/New_post';

let posts = [
    { id: 1, message: 'Hi! How are you?', likes: 2 },
    { id: 2, message: 'YOOO', likes: 20 },
    { id: 3, message:'FIREEE', likes: 30 },
]

let post = posts.map(p=><Post message = {p.message} likes = {p.likes}/>)

const Posts = () => {
    return <div className={s.posts}>
        <h3>My posts</h3>
        <New_post />
        {post}
    </div>
};

export default Posts;