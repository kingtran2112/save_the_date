import React from 'react';
import PatternLeft from '../../resources/picture/pattern/invitation-left.svg';
import Logo from '../../resources/icon/invitation_logo.svg';
import './Invatation.css';

export default function Invitation() {
  return (
    <div className="invitation">
      <img className="invitation--pattern invitation--pattern-left" src={PatternLeft} alt="pattern-left" />
      <div className="invitation--title title">
        Xác nhận tham dự
      </div>
      <div className="invitation--card">
        <img className="invitation--card--logo" src={Logo} alt="Logo" />
        <div className="invitation--card--intro">
          Will you be gracing us with your presence?
        </div>
        <div className="invitation--card--detail">
          Trân trọng mời
          <input
            type="text"
            id="friend-name"
            placeholder="Họ và tên của bạn"
          />
          đến dự buổi tiệc rượu chung vui cùng
          tụi mình tại tư gia. Bạn xác nhận sẽ tham dự chứ?
        </div>
        <div className="invitation--card--choice">
          <label htmlFor="invitation--join" className="invitation--card--choice-label">
            <input type="radio" id="invitation--join" />
            Tôi sẽ tham dự
          </label>
          <label htmlFor="invitation--not-join" className="invitation--card--choice-label">
            <input type="radio" id="invitation--not-join" />
            Tôi không thể tham dự
          </label>
        </div>
      </div>
    </div>
  );
}
