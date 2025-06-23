import React, { useState } from 'react';
import './ConstraintList.css';
import calendarIcon from '../../assets/calendar.png';
import AddNewTerm from './constraint-forms/AddNewTerm';
import TermExpandable from './expandable/TermExpandable';

function TermConstraintList() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  
  const terms = [
    {
      id: 1,
      name: 'Term 1',
      icon: calendarIcon,
      startDate: '01.09.2024',
      endDate: '31.01.2025',
      population: '50 Students',
      status: 'Active',
      description: 'This term includes fall semester courses and activities.'
    },
    {
      id: 2,
      name: 'Term 2',
      icon: calendarIcon,
      startDate: '01.02.2025',
      endDate: '30.06.2025',
      population: '45 Students',
      status: 'Planned',
      description: 'Spring semester with advanced programming and database courses.'
    },
    {
      id: 3,
      name: 'Term 3',
      icon: calendarIcon,
      startDate: '01.07.2025',
      endDate: '31.08.2025',
      population: '30 Students',
      status: 'Inactive',
      description: 'Summer term with elective courses and project work.'
    },
  ];

  const handleAddTerm = () => {
    setShowAddForm(true);
  };

  const handleBack = () => {
    setShowAddForm(false);
  };

  const handleItemClick = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div className="term-constraints constraints">
      <ul>
        {terms.map((term) => (
          <React.Fragment key={term.id}>
            <li onClick={() => handleItemClick(term.id)}>
              <img src={term.icon} alt={`${term.name} icon`} />
              <span>{term.name}</span>
              <button className="expand-button">
                <i className={`fas fa-chevron-${expandedItem === term.id ? 'up' : 'down'}`}></i>
              </button>
            </li>
            {expandedItem === term.id && <TermExpandable className="show" />}
          </React.Fragment>
        ))}
      </ul>

      {!showAddForm && (
        <button className="add-term add-button" onClick={handleAddTerm}>
          + Add New Term
        </button>
      )}
      
      <AddNewTerm 
        showAddNewTerm={showAddForm} 
        onBack={handleBack}
        className={showAddForm ? 'show' : ''}
      />
    </div>
  );
}

export default TermConstraintList;

