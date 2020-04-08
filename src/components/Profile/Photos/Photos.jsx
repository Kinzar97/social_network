import React from 'react'
import s from './Photos.module.css'

const Photos = () =>{
return <div className = {s.photos}>
      <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"  height = "250px" alt = "photo profile"></img>
    </div>
};
export default Photos;