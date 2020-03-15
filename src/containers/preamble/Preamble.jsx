import React from 'react';
import Intro from './intro/Intro';
import Carousel from './carousel/Carousel';
import './Preamble.css';

export default function Preamble() {
  return (
    <div className="preamble">
      <Intro />
      <Carousel />
    </div>
  );
}
