import React from 'react';
import SelfDescription from './self_description/SelfDescription';
import GroomPicture from '../../resources/picture/introduction/groom.png';
import BridePicture from '../../resources/picture/introduction/bride.png';
import GroomSignature from '../../resources/picture/introduction/groom_signature.svg';
import BrideSignature from '../../resources/picture/introduction/bride_signature.svg';
import content from '../../resources/content.json';
import './Introduction.css';

export default function Introduction() {
  return (
    <div className="introduction">
      <div className="title introduction--title">
        {content.introduction.title}
      </div>
      <div className="introduction--detail">
        <SelfDescription
          picture={GroomPicture}
          title={content.introduction.groom.title}
          name={content.introduction.groom.name}
          description={content.introduction.groom.description}
          signature={GroomSignature}
        />
        <SelfDescription
          picture={BridePicture}
          title={content.introduction.bride.title}
          name={content.introduction.bride.name}
          description={content.introduction.bride.desciption}
          signature={BrideSignature}
        />
      </div>
    </div>
  );
}
