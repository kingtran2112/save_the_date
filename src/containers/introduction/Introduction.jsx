import React from 'react';
import SelfDescription from './self_description/SelfDescription';
import GroomPicture from '../../resources/picture/introduction/groom.png';
import BridePicture from '../../resources/picture/introduction/bride.png';
import GroomSignature from '../../resources/picture/introduction/groom_signature.svg';
import BrideSignature from '../../resources/picture/introduction/bride_signature.svg';
import './Introduction.css';

export default function Introduction() {
  return (
    <div className="introduction">
      <div className="title introduction--title">
        Chúng mình là ai?
      </div>
      <div className="introduction--detail">
        <SelfDescription
          picture={GroomPicture}
          title="Chú rể"
          name="Trần Đăng King"
          description="Consequat non laborum sunt pariatur. Amet esse sunt eiusmod duis ut eu mollit ut aliquip et consectetur cillum"
          signature={GroomSignature}
        />
        <SelfDescription
          picture={BridePicture}
          title="Cô dâu"
          name="Đoàn Diệu Linh"
          description="Consequat non laborum sunt pariatur. Amet esse sunt eiusmod duis ut eu mollit ut aliquip et consectetur cillum"
          signature={BrideSignature}
        />
      </div>
    </div>
  );
}
