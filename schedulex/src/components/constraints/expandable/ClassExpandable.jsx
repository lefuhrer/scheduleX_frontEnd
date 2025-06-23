// src/components/Navbar.jsx
import React from 'react';
import './Expandable.css';

function ClassExpandable({ className }) {
  const classData = [
    {
      id: 1,
      name: 'Web Tasarımı ve Programlama',
      code: 'YMH354',
      instructor: 'Doç. Dr. Rukiye Savran Kızıltepe',
      duration: '2 Hours',
      type: 'Theory Class',
      description: 'This class covers web design and programming topics. It provides a suitable path for learning HTML, CSS, and JavaScript techniques.'
    }
  ];

  return (
    <>
      {classData.map((classItem) => (
        <div key={classItem.id} className={`expandable-container ${className || ''}`}>
          <h3>{classItem.name}</h3>
          
          <p className="course-attributes">
            <b>Class Code:</b> {classItem.code}
          </p>
          <p className="course-attributes">
            <b>Instructor:</b> {classItem.instructor}
          </p>
          <p className="course-attributes">
            <b>Class Duration:</b> {classItem.duration}
          </p>
          <p className="course-attributes">
            <b>Class Type:</b> {classItem.type}
          </p>
          <p className="course-description">
            <b>Class Description:</b> {classItem.description}
          </p>
          
          <div className="button-actions">
            <button className="edit-button">
              <i className="fas fa-edit"></i>Edit Class
            </button>
            <button className="delete-button">
              <i className="fas fa-trash-alt"></i>Delete Class
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ClassExpandable;