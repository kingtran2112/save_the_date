import React from 'react';
import SelfDescription from './self_description/SelfDescription';
import content from '../../resources/content.json';
import './Introduction.css';

export default function Introduction() {
  const { groom, bride } = content.introduction;
  return (
    <div className="introduction">
      <div className="title introduction--title">
        {content.introduction.title}
      </div>
      <div className="introduction--detail">
        <SelfDescription
          picture={groom.image}
          title={groom.title}
          name={groom.name}
          description={groom.description}
          signature={groom.signature}
        />
        <SelfDescription
          picture={bride.image}
          title={bride.title}
          name={bride.name}
          description={bride.desciption}
          signature={bride.signature}
        />
      </div>
    </div>
  );
}
