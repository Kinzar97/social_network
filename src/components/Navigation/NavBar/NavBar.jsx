import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom'

const NavBar = ()=>{
    return <nav >
    <div>
        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
    </div>
    <div>
        <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
    </div>
    <div>
        <NavLink to='/news' activeClassName={s.active}>News</NavLink>
    </div>
    <div>
        <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
    </div>
    <div>
        <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
    </div>
</nav>
}

export default NavBar;