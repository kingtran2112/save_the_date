import React from 'react';
import SideBar from './sidebar/SideBar';
import MainPage from './mainpage/MainPage';
import PatternLeft from '../resources/picture/pattern/pattern-left.svg';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <img className="preamble--pattern-left" src={PatternLeft} alt="pattern_left" />
      <MainPage />
    </div>
  );
}

export default App;
