import React from 'react';
import './ConstraintForm.css';

function AddNewInstructor({ showAddNewInstructor, onBack, className }) {
  return (
    <div className={`constraint-form ${className || ''}`}>
      <h1>Add New Instructor</h1>
      <input type="text" placeholder="Full Name" required/>
      <input type="text" placeholder="Title" required/>
      <input type="text" placeholder="Department" required/> 
      <input type="email" placeholder="Email" required/>
      <input type="tel" placeholder="Phone Number" required/>
      <input type="text" placeholder="Dismissed Times" required/>
      <textarea placeholder="Bio" rows="4"></textarea>
      <div className="form-buttons">
        <button className="cancel-button" onClick={onBack}>Cancel</button>
        <button className="save-button">Save</button>
      </div>
    </div>
  );
}

export default AddNewInstructor;