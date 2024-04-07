import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import './AddCompany.css';

const AddCompany = (props) => {
  const [entererdCompany, setEntererdCompany] = useState('');
  const [entererdPosition, setentererdPosition] = useState('');
  const [entererdLogo, setentererdLogo] = useState('');
  const [entererdStatus, setentererdStatus] = useState('');

  const usernameChangeHandler = (event) => {
    setEntererdCompany(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setentererdPosition(event.target.value);
  };

  const imgChangeHandler = (event) => {
    setentererdLogo(event.target.value);
  };

  const majorChangeHandler = (event) => {
    setentererdStatus(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault(); 
    
    if (entererdCompany.trim().length === 0) {
      return;
    }
    
    const userData = {
      name: entererdCompany,
      age: entererdPosition,
      img: entererdLogo,
      major: entererdStatus
    };

    
    props.onAddUser(userData);

    
    setEntererdCompany('');
    setentererdPosition('');
    setentererdLogo('');
    setentererdStatus('');
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="company">Company Name</label>
        <input
          id="Company"
          type="text"
          value={entererdCompany}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="position">Position</label>
        <input
          id="position"
          type="text"
          value={entererdPosition}
          onChange={ageChangeHandler}
        />
        <label htmlFor="img">Company Logo</label>
        <input
          id="img"
          type="text"
          value={entererdLogo}
          onChange={imgChangeHandler}
        />
        <label htmlFor="status">Status</label>
        <input
          id="Status"
          type="text"
          value={entererdStatus}
          onChange={majorChangeHandler}
        />
        <Button type="submit">Add Job</Button>
      </form>
    </Card>
  );
};

export default AddCompany;
