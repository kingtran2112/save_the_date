import React from 'react';
import './Carousel.css';

export default function Carousel() {
  const pictureNames = ['carousel_1', 'carousel_2', 'carousel_3', 'carousel_4'];
  const indicators = pictureNames.map(
    (pictureName) => (<li className="carousel__indicator" key={pictureName} />),
  );
  return (
    <div className="carousel">
      <ul className="carousel_indicator-list">
        {indicators}
      </ul>
    </div>
  );
}
