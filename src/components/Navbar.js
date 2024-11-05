import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <span className="office-logo">Office 365</span>
        <span>Outlook</span>
        <span>Calendar</span>
        <span>People</span>
        <span>Yammer</span>
        <span>OneDrive</span>
        <span>Sites</span>
        <span>Tasks</span>
      </div>
      <div className="nav-right">
        <span className="settings-icon">⚙</span>
        <span className="help-icon">❓</span>
        <div className="user-icon">👤</div>
      </div>
    </div>
  );
}

export default Navbar;
