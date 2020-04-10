import React from 'react';
import SideBar from './sidebar/SideBar';
import MainPage from './mainpage/MainPage';
import PatternLeft from '../resources/picture/pattern/pattern-left.svg';
import PatternRight from '../resources/picture/pattern/pattern-right.svg';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <img className="pattern-left" src={PatternLeft} alt="pattern_left" />
      <img className="pattern-right" src={PatternRight} alt="pattern_right" />
      <MainPage />
    </div>
  );
}

export default App;
