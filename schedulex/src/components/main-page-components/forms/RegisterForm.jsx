import React from 'react';
import './RegisterForm.css';

function RegisterForm({ showRegisterForm, onBack }) {
  return (
    
    <>
    
        <div className={`register-form ${showRegisterForm ? 'slide-in' : ''}`}>
        <button className="back-button" onClick={onBack}><i className="fas fa-arrow-left"></i></button>
        <h1>Register</h1>
        <form id="register-form" action="">
            <div className="name-surname">
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="surname" placeholder="Surname"/>
            </div>
            <input type="text" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="password" name="confirm-password" placeholder="Confirm Password"/>
            <input type="text" name="department" placeholder="Department"/>
            <input type="number" name="phone-number" placeholder="Phone Number"/>
            <button>Register</button>
        </form>
    </div>
    
    
    </>

  );
}

export default RegisterForm;