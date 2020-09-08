import React, { useState } from 'react';
import ArrowUp from '../../../resources/icon/arrow_up.svg';
import ArrowDown from '../../../resources/icon/arrow_down.svg';
import content from '../../../resources/content.json';
import { counterFormat } from '../../../services/utils';
import './Carousel.css';

function getExpectCarouselIndex(expectIndex, maxIndex) {
  if (expectIndex > maxIndex - 1) {
    return 0;
  } if (expectIndex < 0) {
    return maxIndex - 1;
  }
  return expectIndex;
}

// TODO: Divide this into smaller component
export default function Carousel() {
  const { carouselPics } = content.preamble;
  const [currentIndex, setCurrentIndex] = useState(0);
  const indicators = carouselPics.map(
    (info, index) => {
      const id = carouselPics.length - 1 - index;
      const boldClass = currentIndex === id ? 'carousel__indicator-element--active' : '';
      return <li className={`carousel__indicator-element ${boldClass}`} key={info} />;
    },
  );
  return (
    <div className="carousel">
      <div className="carousel__indicator">
        <div className="carousel__counter">
          <span className="carousel__counter-index">
            {counterFormat(currentIndex + 1)}
          </span>
          <span className="carousel__counter-total">
            /
            {counterFormat(carouselPics.length)}
          </span>
        </div>
        <ul className="carousel__indicator-list">
          {indicators}
        </ul>
        <div className="carousel__arrows">
          <button
            className="carousel__arrow carousel__arrow--up"
            onClick={
              () => setCurrentIndex(getExpectCarouselIndex(currentIndex + 1, carouselPics.length))
            }
            type="button"
          >
            <img src={ArrowUp} alt="Next" />
          </button>
          <button
            className="carousel__arrow carousel__arrow--down"
            onClick={
              () => setCurrentIndex(getExpectCarouselIndex(currentIndex - 1, carouselPics.length))
            }
            type="button"
          >
            <img src={ArrowDown} alt="Previous" />
          </button>
        </div>
      </div>
      <div>
        <img className="carousel__image" src={carouselPics[currentIndex]} alt="Test" />
      </div>
    </div>
  );
}
