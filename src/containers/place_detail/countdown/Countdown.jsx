import React, { useState, useEffect } from 'react';
import { counterFormat } from '../../../services/utils';
import './Countdown.css';

function timeDistance(tartgetDate) {
  const currentDate = new Date();
  const distance = Math.abs(tartgetDate - currentDate);
  // Divide distance to miliseconds in one day
  const dateDistance = counterFormat(Math.floor(distance / (24 * 60 * 60 * 1000)));
  // Get the remainder hour not enough for 1 day and divide to miliseconds in one hour
  const hourDistance = counterFormat(Math.floor((distance % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000)));
  const minuteDistance = counterFormat(Math.floor((distance % (1000 * 60 * 60)) / (60 * 1000)));
  const secondDistance = counterFormat(Math.floor((distance % (1000 * 60)) / 1000));
  return {
    dateDistance,
    hourDistance,
    minuteDistance,
    secondDistance,
  };
}

export default function Countdown() {
  const weddingDate = new Date(2020, 9, 3, 9, 0, 0);
  const [countdownTime, setCountdownTime] = useState(timeDistance(weddingDate));

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdownTime(timeDistance(weddingDate));
    }, 1000);

    return () => clearInterval(countdownInterval);
  });

  const timerValue = [
    {
      unitValue: countdownTime.dateDistance,
      unitName: 'ngày',
      key: 'day',
    },
    {
      unitValue: countdownTime.hourDistance,
      unitName: 'giờ',
      key: 'hour',
    },
    {
      unitValue: countdownTime.minuteDistance,
      unitName: 'phút',
      key: 'minute',
    },
    {
      unitValue: countdownTime.secondDistance,
      unitName: 'giây',
      key: 'second',
    },
  ];
  const timerComponent = timerValue.map((unit, index) => (
    <React.Fragment key={unit.key}>
      <div className={`countdown__${unit.key} countdown__part`}>
        <div className="countdown__unit-value">
          {unit.unitValue}
        </div>
        <div className="countdown__unit-name">
          {unit.unitName}
        </div>
      </div>
      {index < timerValue.length - 1 && <div className="countdown__separate">:</div>}
    </React.Fragment>
  ));
  return (
    <div className="countdown">
      <div className="countdown__introduction">
        Cùng nhau đếm ngược nào!
      </div>
      <div className="countdown__timer">
        {timerComponent}
      </div>
    </div>
  );
}
