import './Sidebar.css';
import React from 'react';

function Sidebar({ activeTab, onTabChange }) {
    return (
      <>
        <h1>Constraints</h1>
        <ul className='sidebar-list'>
          <li className={activeTab === 'class' ? 'active' : ''} onClick={() => onTabChange('class')}>
            <a href="#">Class Constraints</a>
          </li>
          <li className={activeTab === 'term' ? 'active' : ''} onClick={() => onTabChange('term')}>
            <a href="#">Term Constraints</a>
          </li>
          <li className={activeTab === 'instructor' ? 'active' : ''} onClick={() => onTabChange('instructor')}>
            <a href="#">Instructor Constraints</a>
          </li>
          <li className={activeTab === 'room' ? 'active' : ''} onClick={() => onTabChange('room')}>
            <a href="#">Room Constraints</a>
          </li>
        </ul>
      </>
    );
  }
  
  export default Sidebar;
  