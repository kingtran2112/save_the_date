import React from 'react';
import './Carousel.css';

export default function Carousel() {
  const pictureNames = ['carousel_1', 'carousel_2', 'carousel_3', 'carousel_4'];
  const indicators = pictureNames.map(
    (pictureName) => (<li className="carousel__indicator-element" key={pictureName} />),
  );
  return (
    <div className="carousel">
      <div className="carousel__indicator">
        <div className="carousel__counter">
          <span className="carousel__counter-index">02 </span>
          <span className="carousel__counter-total">
            / 0
            {pictureNames.length}
          </span>
        </div>
        <ul className="carousel__indicator-list">
          {indicators}
        </ul>
      </div>
    </div>
  );
}
