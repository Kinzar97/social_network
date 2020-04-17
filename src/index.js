import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from './redux/state';
import { BrowserRouter } from "react-router-dom";



let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state}
          addPost={addPost}
          updatePost={updateNewPostText}
          addMessage={addMessage}
          updateMessage={updateNewMessageText} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
  serviceWorker.unregister();
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);


