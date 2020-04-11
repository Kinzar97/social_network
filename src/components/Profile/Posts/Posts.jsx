import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';
import New_post from './New_post/New_post';


const Posts = (props) => {

    let post = props.posts.map(p => <Post message={p.message} likes={p.likes} />)

    return <div className={s.posts}>
        <h3>My posts</h3>
        <New_post />
        {post}
    </div>
};

export default Posts;