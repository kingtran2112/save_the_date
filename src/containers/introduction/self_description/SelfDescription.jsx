import React from 'react';
import PropTypes from 'prop-types';
import './SelfDescription.css';

export default function SelfDescription(props) {
  const {
    picture, title, name, description, signature,
  } = props;
  return (
    <div className="self-description">
      <img className="self-description--picture" src={picture} alt="Self" />
      <div className="self-description--title">
        {title}
      </div>
      <div className="self-description--name">
        {name}
      </div>
      <div className="self-description--description">
        {description}
      </div>
      <img className="self-description--signature" src={signature} alt="Signature" />
    </div>
  );
}

SelfDescription.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  signature: PropTypes.string,
};
