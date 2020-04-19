import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post.jsx';
import NewPost from './NewPost/NewPost';


const Posts = (props) => {

    let post = props.profilePage.posts.map(p => <Post message={p.message} likes={p.likes} />)

    return <div className={s.posts}>
        <h3>My posts</h3>
        <NewPost 
        dispatch={props.dispatch} 
        profilePage = {props.profilePage}/>
        {post}
    </div>
};

export default Posts;