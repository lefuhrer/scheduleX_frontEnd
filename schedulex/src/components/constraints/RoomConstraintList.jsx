import React, { useState } from 'react';
import './ConstraintList.css'; // varsa stil dosyan burada
import doorIcon from '../../assets/door.png';
import AddNewRoom from './constraint-forms/AddNewRoom';
import RoomExpandable from './expandable/RoomExpandable';

function RoomConstraintList() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  
  const rooms = [
    {
      id: 1,
      name: 'M101',
      icon: doorIcon,
      capacity: '50 Students',
      type: 'Laboratory Room',
      building: 'Block M - Software Engineering Department',
      floor: '1st Floor',
      availableHours: '09:00 - 18:00',
      description: 'Modern lecture hall equipped with smart board and projector.'
    },
    {
      id: 2,
      name: 'Derslik 6',
      icon: doorIcon,
      capacity: '30 Students',
      type: 'Lecture Hall',
      building: 'Block A - Main Building',
      floor: '2nd Floor',
      availableHours: '08:00 - 20:00',
      description: 'Traditional lecture hall with whiteboard and audio system.'
    },
    {
      id: 3,
      name: 'Derslik 7',
      icon: doorIcon,
      capacity: '40 Students',
      type: 'Computer Lab',
      building: 'Block B - Technology Center',
      floor: '3rd Floor',
      availableHours: '09:00 - 17:00',
      description: 'Computer laboratory with 40 workstations and network access.'
    },
  ];

  const handleAddRoom = () => {
    setShowAddForm(true);
  };

  const handleBack = () => {
    setShowAddForm(false);
  };

  const handleItemClick = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div className="room-constraints constraints">
      <ul>
        {rooms.map((room) => (
          <React.Fragment key={room.id}>
            <li onClick={() => handleItemClick(room.id)}>
              <img src={room.icon} alt={`${room.name} icon`} />
              <span>{room.name}</span>
              <button className="expand-button">
                <i className={`fas fa-chevron-${expandedItem === room.id ? 'up' : 'down'}`}></i>
              </button>
            </li>
            {expandedItem === room.id && <RoomExpandable className="show" />}
          </React.Fragment>
        ))}
      </ul>

      {!showAddForm && (
        <button className="add-room add-button" onClick={handleAddRoom}>
          + Add New Room
        </button>
      )}
      
      <AddNewRoom 
        showAddNewRoom={showAddForm} 
        onBack={handleBack}
        className={showAddForm ? 'show' : ''}
      />
    </div>
  );
}

export default RoomConstraintList;
