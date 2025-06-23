import React, { useState } from 'react';
import './ConstraintList.css'; // stil dosyası istersen
import teacherIcon from '../../assets/teacher.png';
import AddNewInstructor from './constraint-forms/AddNewInstructor';
import InstructorExpandable from './expandable/InstructorExpandable';

function InstructorConstraintList() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  
  const instructors = [
    {
      id: 1,
      name: 'Doç. Dr. Rukiye Savran Kızıltepe',
      icon: teacherIcon,
      title: 'Professor',
      department: 'Computer Science and Engineering',
      email: 'rukiye.savran@gmail.com',
      phone: '+90 555 123 4567',
      dismissedTimes: 'Monday - 9:00 - 14:00, Wednesday - 14:00 - 18:00',
      bio: 'Experienced instructor with expertise in computer science and software engineering.'
    },
    {
      id: 2,
      name: 'Doç Dr. Murat Karakuş',
      icon: teacherIcon,
      title: 'Associate Professor',
      department: 'Computer Science and Engineering',
      email: 'murat.karakus@gmail.com',
      phone: '+90 555 234 5678',
      dismissedTimes: 'Tuesday - 10:00 - 15:00, Thursday - 13:00 - 17:00',
      bio: 'Specialized in data structures and algorithms with extensive research experience.'
    },
    {
      id: 3,
      name: 'Doç. Dr. Damla Topallı',
      icon: teacherIcon,
      title: 'Assistant Professor',
      department: 'Computer Science and Engineering',
      email: 'damla.topalli@gmail.com',
      phone: '+90 555 345 6789',
      dismissedTimes: 'Monday - 14:00 - 18:00, Friday - 9:00 - 13:00',
      bio: 'Expert in software engineering and database systems with industry experience.'
    },
  ];

  const handleAddInstructor = () => {
    setShowAddForm(true);
  };

  const handleBack = () => {
    setShowAddForm(false);
  };

  const handleItemClick = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div className="instructor-constraints constraints">
      <ul>
        {instructors.map((instructor) => (
          <React.Fragment key={instructor.id}>
            <li onClick={() => handleItemClick(instructor.id)}>
              <img src={instructor.icon} alt={`${instructor.name} icon`} />
              <span>{instructor.name}</span>
              <button className="expand-button">
                <i className={`fas fa-chevron-${expandedItem === instructor.id ? 'up' : 'down'}`}></i>
              </button>
            </li>
            {expandedItem === instructor.id && <InstructorExpandable className="show" />}
          </React.Fragment>
        ))}
      </ul>

      {!showAddForm && (
        <button className="add-instructor add-button" onClick={handleAddInstructor}>
          + Add New Instructor
        </button>
      )}
      
      <AddNewInstructor 
        showAddNewInstructor={showAddForm} 
        onBack={handleBack}
        className={showAddForm ? 'show' : ''}
      />
    </div>
  );
}

export default InstructorConstraintList;
