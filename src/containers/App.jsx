import React from 'react';
import MainPage from './mainpage/MainPage';
import content from '../resources/content.json';

import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Disable for the moment */}
      {/* <SideBar /> */}
      <img className="pattern-left" src={content.pattern.left} alt="pattern_left" />
      <img className="pattern-right" src={content.pattern.right} alt="pattern_right" />
      <MainPage />
      <img className="end-page" src={content.endPage.image} alt="end page" />
    </div>
  );
}

export default App;
