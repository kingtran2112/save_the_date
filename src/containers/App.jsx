import React from 'react';
import SideBar from './sidebar/SideBar';
import MainPage from './mainpage/MainPage';
import PatternLeft from '../resources/picture/pattern/pattern-left.svg';
import PatternRight from '../resources/picture/pattern/pattern-right.svg';
import EndPage from '../resources/picture/end_page.png';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <img className="pattern-left" src={PatternLeft} alt="pattern_left" />
      <img className="pattern-right" src={PatternRight} alt="pattern_right" />
      <MainPage />
      <img className="end-page" src={EndPage} alt="end page" />
    </div>
  );
}

export default App;
