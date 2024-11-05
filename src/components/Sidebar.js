import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Favorites</h3>
      <ul>
        <li>Inbox 3</li>
        <li>Sent Items</li>
        <li>Drafts</li>
      </ul>
      <h3>People</h3>
      <ul>
        <li>Mash 1</li>
        <li>Tom Manville</li>
      </ul>
      <h3>Tasks</h3>
      <ul>
        <li>Inbox 3</li>
        <li>Drafts</li>
        <li>Sent Items</li>
        <li>Deleted Items</li>
        <li>Junk Email</li>
        <li>Notes</li>
      </ul>
    </div>
  );
}

export default Sidebar;
