// assets
import './assets/css/App.css';
import './assets/css/styles.css';

// js
// import './assets/js/app';

// components
import Header from './components/Header';
import Background from './components/Background';
import Intro from './components/Intro';
import Skill from './components/Skill';
import Work from './components/Work';
import Connect from './components/Connect';
import React from 'react';

const App = () => {
  return (
    <div className="appComponent">
      <Background />
      <Intro />
      {/* <Header />
      <Skill />
      <Work />
      <Connect /> */}
    </div> 
  );
}

export default App;
