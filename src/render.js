import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost } from './redux/state';
import { BrowserRouter } from "react-router-dom";
import {updateNewPostText} from './redux/state';


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} 
        addPost={addPost} 
        updatePost={updateNewPostText}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
  serviceWorker.unregister();
}