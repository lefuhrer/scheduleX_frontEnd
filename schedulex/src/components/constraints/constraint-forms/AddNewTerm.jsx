import React from 'react';
import './ConstraintForm.css';

function AddNewTerm({ showAddNewTerm, onBack, className }) {
  return (
    <div className={`constraint-form ${className || ''}`}>
      <h1>Add New Term</h1>
      <input type="text" placeholder="Term Name" required/>
      <div className="date-inputs">
        <input type="date" placeholder="Start Date" required/>
        <input type="date" placeholder="End Date" required/>
      </div>
      <input type="number" placeholder="Term Population" required/>
      <select required>
        <option value="">Select Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="planned">Planned</option>
      </select>
      <textarea placeholder="Term Description" rows="4"></textarea>
      <div className="form-buttons">
        <button className="cancel-button" onClick={onBack}>Cancel</button>
        <button className="save-button">Save</button>
      </div>
    </div>
  );
}

export default AddNewTerm;