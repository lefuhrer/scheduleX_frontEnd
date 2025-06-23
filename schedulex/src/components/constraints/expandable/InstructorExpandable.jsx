// src/components/Navbar.jsx
import React from 'react';
import './Expandable.css';

function InstructorExpandable({ className }) {
  const instructorData = [
    {
      id: 1,
      name: 'Doç. Dr. Rukiye Savran Kızıltepe',
      title: 'Professor',
      department: 'Computer Science and Engineering',
      email: 'rukiye.savran@gmail.com',
      phone: '+90 555 123 4567',
      dismissedTimes: 'Monday - 9:00 - 14:00, Wednesday - 14:00 - 18:00',
      bio: 'Experienced instructor with expertise in computer science and software engineering.'
    }
  ];

  return (
    <>
      {instructorData.map((instructor) => (
        <div key={instructor.id} className={`expandable-container ${className || ''}`}>
          <h3>Instructor Details</h3>
          
          <p className="instructor-attributes">
            <b>Name:</b> {instructor.name}
          </p>
          <p className="instructor-attributes">
            <b>Title:</b> {instructor.title}
          </p>
          <p className="instructor-attributes">
            <b>Department:</b> {instructor.department}
          </p>
          <p className="instructor-attributes">
            <b>Email:</b> {instructor.email}
          </p>
          <p className="instructor-attributes">
            <b>Phone:</b> {instructor.phone}
          </p>
          <p className="instructor-attributes">
            <b>Dismissed Times:</b> {instructor.dismissedTimes}
          </p>
          <p className="instructor-description">
            <b>Bio:</b> {instructor.bio}
          </p>
          
          <div className="button-actions">
            <button className="edit-button">
              <i className="fas fa-edit"></i>Edit Instructor
            </button>
            <button className="delete-button">
              <i className="fas fa-trash-alt"></i>Delete Instructor
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default InstructorExpandable;