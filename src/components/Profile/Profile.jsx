import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts.jsx'
import Photos from './Photos/Photos';
import Desk from './Description/Desk';

const Profile = () => {
  return <div className={s.profile}>
    <Photos />
    <Desk />
    <Posts />
  </div>;
}

export default Profile;
