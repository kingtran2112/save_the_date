import React from 'react';
import MileStone from './mile_stone/MileStone';
import './Timeline.css';

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="title timeline--title">
        Chúng mình đã gặp nhau như thế nào
      </div>
      <MileStone
        type="right"
        date={new Date(2013, 1, 14)}
        title="Cuộc gặp gỡ đầu tiên"
        content="Incididunt fugiat est laborum common ea proident consectetur"
      />
      <MileStone
        type="left"
        date={new Date(2013, 9, 29)}
        title="Cuộc mốc thứ hai"
        content="Incididunt fugiat est laborum common ea proident consectetur"
      />
      <MileStone
        type="right"
        date={new Date(2018, 1, 14)}
        title="Cuộc mốc thứ ba"
        content="Incididunt fugiat est laborum common ea proident consectetur"
      />
      <MileStone
        type="end"
        date={new Date(2020, 9, 10)}
        title="Và bây giờ, chúng mình đã về chung một nhà"
        content="Incididunt fugiat est laborum common ea proident consectetur"
      />
    </div>
  );
}
