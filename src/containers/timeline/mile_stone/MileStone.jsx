import React from 'react';
import PropTypes from 'prop-types';
import TimelineNode from '../../../resources/icon/timeline_node.svg';
import './MileStone.css';

export default function MileStone(props) {
  const {
    type, date, title, content,
  } = props;
  return (
    <div className={`mile-stone mile-stone--${type}`}>
      { type !== 'end' && <div className="mile-stone--place-holder" /> }
      <div className="mile-stone--node">
        <img className="mile-stone--node-node" src={TimelineNode} alt="Timeline node" />
        { type !== 'end' && <div className="mile-stone--node-line" /> }
      </div>
      <div className="mile-stone--detail">
        <div className="mile-stone--date">
          {/* TODO: Change format of date */}
          {date.toLocaleDateString()}
        </div>
        <div className="mile-stone--title">
          {title}
        </div>
        <div className="mile-stone--content">
          {content}
        </div>
      </div>
    </div>
  );
}

MileStone.propTypes = {
  type: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string,
  content: PropTypes.string,
};
