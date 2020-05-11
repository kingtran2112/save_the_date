import React from 'react';
import DateIcon from '../../resources/icon/map_date_icon.svg';
import PlaceIcon from '../../resources/icon/map_place_icon.svg';
import MapPicture from '../../resources/picture/map_picture.svg';
import './Place.css';

export default function Place() {
  return (
    <div className="place">
      <img className="place--map__google-map" src={MapPicture} alt="map" />
      <div className="title place--title">
        Tiệc đám cưới
      </div>
      <div className="place--map">
        <div className="place--map__information">
          <div className="flex place--map__date-info">
            <img src={DateIcon} alt="Wedding date" />
            <div className="place--map__date">
              <div className="place--map__date-detail wedding__info--title">
                Thứ 4, ngày 10 tháng 10, 2020
              </div>
              <div className="place--map__date-time wedding__info--content">
                Diễn ra vào lúc 18:00
              </div>
            </div>
          </div>
          <div className="flex place--map__place-info">
            <img src={PlaceIcon} alt="Wedding place" />
            <div className="place--map__place-address">
              <div className="place--map__place wedding__info--title">
                Vinpearl Luxury Đà Nẵng
              </div>
              <div className="place--map__place-detail wedding__info--content">
                143 Bạch Đằng, quận Hải Châu, thành phố Đà Nẵng
              </div>
            </div>
          </div>
          <a className="place--map__direction" href="https://goo.gl/maps/3AhQ3pDxArVGB9xD7">
            Tìm đường đi
          </a>
        </div>
      </div>
    </div>
  );
}
