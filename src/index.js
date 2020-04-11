import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'Hello' },
  { id: 3, message: 'How are you?' },
]

let dialogues = [
  { id: 1, name: 'Igor Zaripov' },
  { id: 2, name: 'Roman Zaripov' },
  { id: 3, name: 'Nikita Kuznetsov' }
]

let posts = [
  { id: 1, message: 'Hi! How are you?', likes: 2 },
  { id: 2, message: 'YOOO', likes: 20 },
  { id: 3, message: 'FIREEE', likes: 30 },
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogues={dialogues} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
