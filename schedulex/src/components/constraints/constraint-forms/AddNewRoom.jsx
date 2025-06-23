import React from 'react';  
import './ConstraintForm.css';

function AddNewRoom({ showAddNewRoom, onBack, className }) {
  return (
    <div className={`constraint-form ${className || ''}`}>
      <h1>Add New Room</h1>
      <input type="text" placeholder="Room Name" required/>
      <input type="number" placeholder="Capacity" required/>
      <select required>
        <option value="">Select Room Type</option>
        <option value="lecture">Lecture Hall</option>
        <option value="lab">Laboratory</option>
      </select>
      <input type="text" placeholder="Building" required/>
      <input type="text" placeholder="Floor" required/>
      <div className="time-inputs">
        <input type="time" placeholder="Available From" required/>
        <input type="time" placeholder="Available To" required/>
      </div>
      <textarea placeholder="Description" rows="4"></textarea>
      <div className="form-buttons">
        <button className="cancel-button" onClick={onBack}>Cancel</button>
        <button className="save-button">Save</button>
      </div>
    </div>
  );
}

export default AddNewRoom;