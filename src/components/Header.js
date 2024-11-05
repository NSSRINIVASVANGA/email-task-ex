import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="new-mail">
        <span>📧 New Mail</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search mail and people" />
      </div>
    </div>
  );
}

export default Header;
