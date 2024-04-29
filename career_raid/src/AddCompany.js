import React, { useState, useEffect} from 'react';
//import Card from './Card';
import Button from './Button';
import './AddCompany.css';
import { useNavigate } from 'react-router-dom';
import { Component } from 'react';

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
    
    const userData = {
      title: entererdCompany,
      role: entererdPosition,
      image: entererdLogo,
      status: entererdStatus
    };

    
    props.onAddJob(userData);
    console.log(userData);
    
    setEntererdCompany('');
    setentererdPosition('');
    setentererdLogo('');
    setentererdStatus('');

  
    const {title, role, image} = userData;
      console.log('Form Submitted:', userData);
      fetch("http://localhost:8082/newJob",{
          method:"POST",
          crossDomain:true,
          headers:{
              "Content-Type":"application/json",
          },
          body:JSON.stringify({
              title,
              role,
              image
          }),
      })
          .then((res) => res.json())
          .then((data) => {
              console.log(data, "jobSubmitted");
          });
  };

  /** 
  const navigate = useNavigate();
  const handleAddJob = () => {
      navigate('/Raid-Meter');
  }
  */
  useEffect(() => {
    fetch("http://localhost:8082/userData",{
      method:"POST",
      crossDomain:true,
      headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
          token:window.localStorage.getItem("token")
      }),
  })
      .then((res) => res.json())
      .then((data) => {
          console.log(data, "userData");
      });
  }, []);

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
