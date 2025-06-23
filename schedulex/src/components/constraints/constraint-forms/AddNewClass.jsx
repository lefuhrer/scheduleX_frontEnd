import React from 'react';
import './ConstraintForm.css';

function AddNewClass({ showAddNewClass, onBack, className }) {
  return (
    <div className={`constraint-form ${className || ''}`}>
      <h1>Add New Class</h1>
      <input type="text" placeholder="Class Name" required/>
      <input type="text" placeholder="Class Code" required/>
      <input type="text" placeholder="Instructor" required/>
      <input type="number" placeholder="Class Duration (Minutes)" required/>
      <select required>
        <option value="">Select Class Type</option>
        <option value="theory">Theory Class</option>
        <option value="lab">Lab Class</option>
      </select>
      <textarea placeholder="Class Description" rows="4"></textarea>
      <div className="form-buttons">
        <button className="cancel-button" onClick={onBack}>Cancel</button>
        <button className="save-button">Save</button>
      </div>
    </div>
  );
}

export default AddNewClass;