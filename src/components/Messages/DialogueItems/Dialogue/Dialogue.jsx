import React from 'react'
import s from './Dialogue.module.css'
import { NavLink } from 'react-router-dom'

const Dialogue = (props) => {
    return <div className={s.dialogue}>
        <NavLink to = {'/messages/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
    </div>
}

export default Dialogue;