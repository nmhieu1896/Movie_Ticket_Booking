import React from 'react';

import UserAvtDefault from '../../assets/avatar.png';
import './Header.styles.scss';

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src="" alt="logo" />
    </div>
    <div className="options">
      <a href="" className="option">
        Lịch Chiếu
      </a>
      <a href="" className="option">
        Cụm rạp
      </a>
      <a href="" className="option">
        Tin tức
      </a>
      <a href="" className="option">
        Ứng dụng
      </a>
    </div>
    <div className="user-option">
      <img src={UserAvtDefault} alt="avt" className="user-option__avatar" />
      <a href="" className="user-option__name">Đăng Nhập</a>
    </div>
  </div>
);

export default Header;
