import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages'
import { Route, BrowserRouter } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


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

const App = () => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <Navigation />
        <div className='app_wrapper_content'>
          <Route path='/profile' render={() => <Profile posts={posts}/>} />
          <Route path='/messages' render={() => <Messages messages={messages} dialogues={dialogues} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
