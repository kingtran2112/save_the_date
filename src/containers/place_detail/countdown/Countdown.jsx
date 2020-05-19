import React from 'react';
import './Countdown.css';

export default function Countdown() {
  const timerValue = [
    {
      unitValue: '120',
      unitName: 'ngày',
      key: 'day',
    },
    {
      unitValue: '08',
      unitName: 'giờ',
      key: 'hour',
    },
    {
      unitValue: '39',
      unitName: 'phút',
      key: 'minute',
    },
    {
      unitValue: '50',
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
