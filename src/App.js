import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className= {s.app_wrapper}>
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;
