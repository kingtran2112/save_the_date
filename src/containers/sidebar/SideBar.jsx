import React from 'react';
import './SideBar.css';

function SideBar() {
  const items = [
    'Lời mở đầu',
    'Who are we',
    'Các cột mốc',
    'Ảnh cưới',
    'Thông tin',
    'Thư mời',
  ];
  const liList = items.map((item) => (
    <li key={item} className="sidebar__item">{item}</li>
  ));
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {liList}
      </ul>
    </div>
  );
}

export default SideBar;
