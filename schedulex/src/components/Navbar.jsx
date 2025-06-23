// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
            <h1>Schedule<span className="gradient-text">X</span></h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create-schedule">Create Schedule</Link></li>
                <li><Link to="/constraints">Constraints</Link></li>
            </ul>
            <a href="/" className="logout-link"><i className="fas fa-sign-out-alt"></i> Çıkış</a>
        </nav>  
  );
}

export default Navbar;