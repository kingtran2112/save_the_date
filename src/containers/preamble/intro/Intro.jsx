import React from 'react';
import Logo from '../../../resources/icon/icon_logo.png';
import './Intro.css';

export default function Intro() {
  return (
    <div className="intro">
      <a href="/">
        <img src={Logo} alt="Go to Home" />
      </a>
      <div className="happy-engaged">
        I have finally deecided to make it official
        with my sweetheart today.
        <br />
        <br />
        Happy and engageed!
      </div>
    </div>
  );
}
