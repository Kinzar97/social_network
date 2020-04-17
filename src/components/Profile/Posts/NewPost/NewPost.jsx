import React from 'react'
import s from './NewPost.module.css'



const NewPost = (props) => {

    let AddPost = () => {
        props.addPost();
    }

    let updatePost = () => {
        let newText = newPostElement.current.value;
        props.updatePost(newText);
    }

    let newPostElement = React.createRef()

    return <div className={s.newPost}>
        <textarea onChange={updatePost} ref={newPostElement} value={props.profilePage.newPostText} />
        <div><button onClick={AddPost}>Create post</button></div>
    </div>
};

export default NewPost;