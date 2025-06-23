// src/components/Navbar.jsx
import React from 'react';
import './Expandable.css';

function TermExpandable({ className }) {
  const termData = [
    {
      id: 1,
      name: 'First Term',
      startDate: '01.09.2024',
      endDate: '31.01.2028',
      population: '50 Students',
      status: 'Active',
      description: 'This term includes fall semester courses and activities.'
    }
  ];

  return (
    <>
      {termData.map((term) => (
        <div key={term.id} className={`expandable-container ${className || ''}`}>
          <h3>Term Details</h3>
          
          <p className="term-attributes">
            <b>Term Name:</b> {term.name}
          </p>
          <p className="term-attributes">
            <b>Start Date:</b> {term.startDate}
          </p>
          <p className="term-attributes">
            <b>End Date:</b> {term.endDate}
          </p>
          <p className="term-attributes">
            <b>Term Population:</b> {term.population}
          </p>
          <p className="term-attributes">
            <b>Status:</b> {term.status}
          </p>
          <p className="term-description">
            <b>Description:</b> {term.description}
          </p>
          
          <div className="button-actions">
            <button className="edit-button">
              <i className="fas fa-edit"></i>Edit Term
            </button>
            <button className="delete-button">
              <i className="fas fa-trash-alt"></i>Delete Term
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TermExpandable;