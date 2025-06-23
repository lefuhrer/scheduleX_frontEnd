// src/components/Navbar.jsx
import React from 'react';
import './Expandable.css';

function RoomExpandable({ className }) {
  const roomData = [
    {
      id: 1,
      name: 'M101',
      capacity: '50 Students',
      type: 'Laboratory Room',
      building: 'Block M - Software Engineering Department',
      floor: '1st Floor',
      availableHours: '09:00 - 18:00',
      description: 'Modern lecture hall equipped with smart board and projector.'
    }
  ];

  return (
    <>
      {roomData.map((room) => (
        <div key={room.id} className={`expandable-container ${className || ''}`}>
          <h3>Room Details</h3>
          
          <p className="room-attributes">
            <b>Room Name:</b> {room.name}
          </p>
          <p className="room-attributes">
            <b>Capacity:</b> {room.capacity}
          </p>
          <p className="room-attributes">
            <b>Room Type:</b> {room.type}
          </p>
          <p className="room-attributes">
            <b>Building:</b> {room.building}
          </p>
          <p className="room-attributes">
            <b>Floor:</b> {room.floor}
          </p>
          <p className="room-attributes">
            <b>Available Hours:</b> {room.availableHours}
          </p>
          <p className="room-description">
            <b>Description:</b> {room.description}
          </p>
          
          <div className="button-actions">
            <button className="edit-button">
              <i className="fas fa-edit"></i>Edit Room
            </button>
            <button className="delete-button">
              <i className="fas fa-trash-alt"></i>Delete Room
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default RoomExpandable;