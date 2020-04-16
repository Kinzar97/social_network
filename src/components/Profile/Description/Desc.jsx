import React from 'react';
import s from './Desc.module.css'

const Desc = ()=>{
    return <div className = {s.desc}>
    <h1> Igor Zaripov</h1>
    <p> Country: Russia</p>
    <p> City: Magnitogorsk</p>
    <p> Age: 22</p>
    <p> About me: programmer, sportsman, student</p>

    </div>
};

export default Desc;