import React, { useState } from 'react';
import './ConstraintList.css'; // İstersen stil dosyası ayırabilirsin
import booksIcon from '../../assets/books.png';
import computerIcon from '../../assets/computer.png';
import AddNewClass from './constraint-forms/AddNewClass';
import ClassExpandable from './expandable/ClassExpandable';

function ClassConstraintList() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  
  const constraints = [
    {
      id: 1,
      code: 'YMH354',
      name: 'Web Tasarımı ve Programlama',
      icon: booksIcon,
    },
    {
      id: 2,
      code: 'YMH415',
      name: 'Veri Yapıları',
      icon: booksIcon,
    },
    {
      id: 3,
      code: 'YMH416',
      name: 'Veri Yapıları Laboratuvarı',
      icon: computerIcon,
    },
    {
      id: 4,
      code: 'YMH340',
      name: 'Veri Madenciliği',
      icon: booksIcon,
    },
  ];

  const handleAddClass = () => {
    setShowAddForm(true);
  };

  const handleBack = () => {
    setShowAddForm(false);
  };

  const handleItemClick = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div className="class-constraints constraints">
      <ul>
        {constraints.map((item) => (
          <React.Fragment key={item.id}>
            <li onClick={() => handleItemClick(item.id)}>
              <img src={item.icon} alt={`${item.code} icon`} />
              <span>{item.code} - {item.name}</span>
              <button className="expand-button">
                <i className={`fas fa-chevron-${expandedItem === item.id ? 'up' : 'down'}`}></i>
              </button>
            </li>
            {expandedItem === item.id && <ClassExpandable className="show" />}
          </React.Fragment>
        ))}
      </ul>

      {!showAddForm && (
        <button className="add-class add-button" onClick={handleAddClass}>
          + Add New Class
        </button>
      )}
      
      <AddNewClass 
        showAddNewClass={showAddForm} 
        onBack={handleBack}
        className={showAddForm ? 'show' : ''}
      />
    </div>
  );
}

export default ClassConstraintList;
