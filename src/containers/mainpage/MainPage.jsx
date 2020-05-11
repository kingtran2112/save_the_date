import React from 'react';
import Preamble from '../preamble/Preamble';
import EndSection from '../end_section/EndSection';
import Introduction from '../introduction/Introduction';
import Timeline from '../timeline/Timeline';
import WeddingPictures from '../wedding_pictures/WeddingPictures';
import Place from '../place/Place';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="main-page">
      <Preamble />
      <EndSection />
      <Introduction />
      <EndSection />
      <Timeline />
      <EndSection />
      <WeddingPictures />
      <EndSection />
      <Place />
      <EndSection />
    </div>
  );
}
