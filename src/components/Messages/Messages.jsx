import React from 'react';
import s from './Messages.module.css';

const Messages = () => {
    return <div className={s.messages}>
        <div className={s.dialogueItems}>
            <div className={s.dialogue + ' ' + s.active}>
Igor Zaripov</div>
            <div className={s.dialogue}>Roman Zaripov</div>
            <div className={s.dialogue}>Nikita Kuznetsov</div>
        </div>
        <div className={s.messageItems}>
            <div className={s.message}>Hi!</div>
            <div className={s.message}>Hello</div>
            <div className={s.message}>How are you?</div>
        </div>
    </div>;
}

export default Messages;