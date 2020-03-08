import React from 'react';
import SideBar from './sidebar/SideBar';
import MainPage from './mainpage/MainPage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <MainPage />
    </div>
  );
}

export default App;
