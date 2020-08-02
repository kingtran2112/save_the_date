import React from 'react';
import MileStone from './mile_stone/MileStone';
import content from '../../resources/content.json';
import './Timeline.css';

export default function Timeline() {
  const { mileStones } = content.timeLine;
  const mileStoneComponents = mileStones.map((mileStone, index) => {
    if (index === mileStones.length - 1) {
      return (
        <MileStone
          key={mileStone.title}
          type="end"
          date={new Date(mileStone.date)}
          title={mileStone.title}
          content={mileStone.content}
        />
      );
    }
    return (
      <MileStone
        key={mileStone.title}
        type={index % 2 === 0 ? 'right' : 'left'}
        date={new Date(mileStone.date)}
        title={mileStone.title}
        content={mileStone.content}
      />
    );
  });
  return (
    <div className="timeline">
      <div className="title timeline--title">
        {content.timeLine.title}
      </div>
      {mileStoneComponents}
    </div>
  );
}
