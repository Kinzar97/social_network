import React from 'react';
import s from './DialogueItems.module.css';
import Dialogue from './Dialogue/Dialogue';

let dialogues = [
    { id: 1, name: 'Igor Zaripov' },
    { id: 2, name: 'Roman Zaripov' },
    { id: 3, name: 'Nikita Kuznetsov' }
]

let dialogue = dialogues.map(d=><Dialogue id={d.id} name = {d.name}/>)

const DialogueItems = (props) => {
    return <div className={s.dialogueItems}>
        <h2>Dialogues</h2>
        {dialogue}
    </div>
}

export default DialogueItems;