import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages'
import { Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    <div className='app_wrapper'>
      <Header />
      <Navigation navigation={props.state.navigation} />
      <div className='app_wrapper_content'>
        <Route path='/profile' render={() =>
          <Profile
            profilePage={props.state.profilePage}
            store = {props.store} />} />
        <Route path='/messages' render={() =>
          <Messages
            messagesPage={props.state.messagesPage}
            store = {props.store} 
            />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
}

export default App;
