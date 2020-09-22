import React from 'react';
import ArrowRight from '../../../resources/icon/arrow_right.svg';
import content from '../../../resources/content.json';
import './Intro.css';

export default function Intro() {
  return (
    <div className="intro">
      <a href="/">
        <div className="intro__logo-cover">
          <img className="intro__logo" src={content.logoUrl} alt="Go to Home" />
        </div>
      </a>
      <div className="intro__introduce">
        <span>
          {content.preamble.introduce}
        </span>
        <span className="intro__conclusion">
          {content.preamble.conclusion}
        </span>
      </div>
      <a className="intro__join-us" href="#join-us">
        <span>{content.preamble.joinUs}</span>
        <img className="intro__join-us-arrow" src={ArrowRight} alt="Go to invitation" />
      </a>
    </div>
  );
}
