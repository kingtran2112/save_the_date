import React from 'react';
import Logo from '../../../resources/icon/icon_logo.png';
import ArrowRight from '../../../resources/icon/arrow_right.svg';
import './Intro.css';

export default function Intro() {
  return (
    <div className="intro">
      <a href="/">
        <img src={Logo} alt="Go to Home" />
      </a>
      <div className="intro__introduce">
        <span>
          I have finally deecided to make it official
          with my sweetheart today.
        </span>
        <span className="intro__conclusion">
          Happy and engageed!
        </span>
      </div>
      <a className="intro__join-us" href="#join-us">
        <span>Join us</span>
        <img className="intro__join-us-arrow" src={ArrowRight} alt="Go to invitation" />
      </a>
    </div>
  );
}
