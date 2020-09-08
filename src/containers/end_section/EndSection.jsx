import React from 'react';
import content from '../../resources/content.json';
import './EndSection.css';

export default function EndSection() {
  const endSectionImg = content.pattern.endSection;
  return (
    <div className="end-section">
      <img src={endSectionImg} alt="End section" />
    </div>
  );
}
