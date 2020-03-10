import React from 'react';
import Logo from '../../../resources/icon/icon_logo.png';
import ArrowRight from '../../../resources/icon/arrow_right.png';
import './Intro.css';

export default function Intro() {
  return (
    <div className="intro">
      <a href="/">
        <img src={Logo} alt="Go to Home" />
      </a>
      <div className="happy-engaged">
        <span>
          I have finally deecided to make it official
          with my sweetheart today.
        </span>
        <span className="wish">
          Happy and engageed!
        </span>
      </div>
      <a className="join-us-btn" href="#join-us">
        <span>Join us</span>
        <img className="arrow-right-btn" src={ArrowRight} alt="Go to invitation" />
      </a>
    </div>
  );
}
