import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = (event) => {
        setName(event.target.value);
    }

    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    }
    
    const handlePhoneNumberBlur = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        const shipping = {name, email, address, phoneNumber};
        console.log(shipping);
    }

    return (
        <div className="form-container">
      <div>
        <h2 className="form-title">Sipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleNameBlur} type="text" name="name" id=""  required/>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input value={user?.email} readOnly type="email" name="email" id=""  required/>
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="address" id=""  required/>
          </div>
          <div className="input-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input onBlur={handlePhoneNumberBlur} type="text" name="Phone-number" id=""  required/>
          </div>
          <p style={{color: 'red'}}>{error}</p>
          <div style={{marginBottom: '30px'}}>
            <input className="form-submit" type="submit" value="Add Shipping" />
          </div>
        </form>
      </div>
    </div>
    );
};

export default Shipment;