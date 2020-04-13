import React from 'react';
import s from './Navigation.module.css';
import Friends from './Friends/Friends';
import NavBar from './NavBar/NavBar';

const Navigation = (props) => {
        
        return <div className={s.nav}>
                <NavBar />
                <Friends friends ={props.state.friends} />
        </div >
};

export default Navigation;

