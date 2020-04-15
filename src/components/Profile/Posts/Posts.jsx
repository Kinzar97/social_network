import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';
import NewPost from './NewPost/NewPost';


const Posts = (props) => {

    let post = props.posts.map(p => <Post message={p.message} likes={p.likes} />)

    return <div className={s.posts}>
        <h3>My posts</h3>
        <NewPost addPost={props.addPost}/>
        {post}
    </div>
};

export default Posts;