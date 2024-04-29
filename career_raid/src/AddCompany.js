import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import './AddCompany.css';

const AddCompany = (props) => {
  const [entererdCompany, setEntererdCompany] = useState('');
  const [entererdPosition, setentererdPosition] = useState('');
  const [entererdLogo, setentererdLogo] = useState('');
  const [entererdStatus, setentererdStatus] = useState('');

  const companyChangeHandler = (event) => {
    setEntererdCompany(event.target.value);
  };

  const positionChangeHandler = (event) => {
    setentererdPosition(event.target.value);
  };

  const logoChangeHandler = (event) => {
    setentererdLogo(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setentererdStatus(event.target.value);
  };

  const addJobHandler = (event) => {
    event.preventDefault();
    
    if (entererdCompany.trim().length === 0) {
      return;
    }
    
    const newJob = {
        title: entererdCompany,
        role: entererdPosition,
        image: entererdLogo,
        status: entererdStatus,
    };

    props.onAddJob(newJob);

    setEntererdCompany('');
    setentererdPosition('');
    setentererdLogo('');
    setentererdStatus('');
  };

  return (
    <div className="input">
      <form onSubmit={addJobHandler}>
        <label htmlFor="title">Company Name</label>
        <input
          id="title"
          type="text"
          value={entererdCompany}
          onChange={companyChangeHandler}
        />

        <label htmlFor="role">Position</label>
        <input
          id="role"
          type="text"
          value={entererdPosition}
          onChange={positionChangeHandler}
        />

        <label htmlFor="image">Company Logo</label>
        <input
          id="image"
          type="text"
          value={entererdLogo}
          onChange={logoChangeHandler}
        />

        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={entererdStatus}
          onChange={statusChangeHandler}
        >
          <option value="">Select a status</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
          <option value="In Progress">In Progress</option>
        </select>

        <div className="addJobButton">
          <Button type="submit">Add Job</Button>
        </div>

      </form>
    </div>
  );
};

export default AddCompany;
