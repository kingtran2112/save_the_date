import React from 'react';
import EndSectionImg from '../../resources/picture/end_section/end_section.svg';
import './EndSection.css';

export default function EndSection() {
  return (
    <div className="end-section">
      <img src={EndSectionImg} alt="End section" />
    </div>
  );
}
