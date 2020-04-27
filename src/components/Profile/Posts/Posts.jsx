import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';
import NewPostContainer from './NewPost/NewPostContainer';


const Posts = (props) => {

    let post = props.profilePage.posts.map(p => <Post message={p.message} likes={p.likes} />)

    return <div className={s.posts}>
        <h3>My posts</h3>
        <NewPostContainer 
        dispatch={props.dispatch} 
        store = {props.store} />
        {post}
    </div>
};

export default Posts;