import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.post}>
        <img src='https://sun9-41.userapi.com/c858332/v858332398/ac1f0/QGfA6499WV0.jpg' alt='ph-id' />
        {props.message}
        <div>Likes: {props.likes}</div>
    </div>
};

export default Post;


