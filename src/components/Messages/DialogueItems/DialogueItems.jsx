import React from 'react';
import s from './DialogueItems.module.css';
import Dialogue from './Dialogue/Dialogue';

const DialogueItems = (props) => {

    let dialogue = props.dialogues.map(d=><Dialogue id={d.id} name = {d.name}/>)

    return <div className={s.dialogueItems}>
        <h2>Dialogues</h2>
        {dialogue}
    </div>
}

export default DialogueItems;