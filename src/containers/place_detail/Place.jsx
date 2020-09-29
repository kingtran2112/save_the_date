import React from 'react';
import DateIcon from '../../resources/icon/map_date_icon.svg';
import PlaceIcon from '../../resources/icon/map_place_icon.svg';
import Countdown from './countdown/Countdown';
import content from '../../resources/content.json';
import './Place.css';

export default function Place() {
  const { placeDetail } = content;
  return (
    <div className="place" id="wedding-place">
      <div className="place--map__google-map__cover">
        <img className="place--map__google-map" src={placeDetail.directionImage} alt="map" />
      </div>
      <div className="title place--title">
        {placeDetail.title}
      </div>
      <div className="place--map">
        <div className="place--map__information">
          <div className="flex place--map__date-info">
            <img src={DateIcon} alt="Wedding date" />
            <div className="place--map__date">
              <div className="place--map__date-detail wedding__info--title">
                {placeDetail.date}
              </div>
              <div className="place--map__date-time wedding__info--content">
                {placeDetail.time}
              </div>
            </div>
          </div>
          <div className="flex place--map__place-info">
            <img src={PlaceIcon} alt="Wedding place" />
            <div className="place--map__place-address">
              <div className="place--map__place wedding__info--title">
                {placeDetail.place}
              </div>
              <div className="place--map__place-detail wedding__info--content">
                {placeDetail.address}
              </div>
            </div>
          </div>
          <a className="place--map__direction" href={placeDetail.link} target="_blank" rel="noopener noreferrer">
            {placeDetail.mapDirection}
          </a>
        </div>
      </div>
      <Countdown date={new Date(placeDetail.weddingTime)} />
    </div>
  );
}
