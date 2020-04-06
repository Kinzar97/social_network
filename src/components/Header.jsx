import React from 'react';
import s from './Header.module.css';

const Header = ()=>{
return <header className={s.header}>
        <img src= {require('../images/main_logo.png')} alt = "Logo"/>
</header>
};

export default Header;

