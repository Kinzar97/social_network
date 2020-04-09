import React from 'react';
import s from './Post.module.css';

const Post =(props)=>
{
    return <div className = {s.post}>
    <img src ='https://www.kinonews.ru/insimgs/poster/thumbs/poster9623_1.jpg'></img>
    {props.message}
    <div>Likes: {props.likes}</div>
    </div>
};

export default Post;


