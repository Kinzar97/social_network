import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts.jsx'
import Photos from './Photos/Photos';
import Desc from './Description/Desc';

const Profile = (props) => {
  return <div className={s.profile}>
    <Photos />
    <Desc />
    <Posts 
      profilePage={props.profilePage}
      store = {props.store} />
  </div>;
}

export default Profile;
