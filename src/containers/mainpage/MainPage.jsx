import React from 'react';
import Preamble from '../preamble/Preamble';
import EndSection from '../end_section/EndSection';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="main-page">
      <Preamble />
      <EndSection />
    </div>
  );
}
