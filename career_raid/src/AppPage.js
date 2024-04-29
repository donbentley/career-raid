import React, { useState } from 'react';
import AddCompany from './AddCompany';
import CardGrid from './CardGrid';
import RaidMeter from './RaidMeter';
import './AppPage.css'; // Import your AppPage-specific CSS file if you have one

const AppPage = () => {
  // State to hold job entries
  
  const [jobEntries, setJobEntries] = useState([
   
  ]);

  
  // State variables for job status counts
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);

  // State to manage the current view
  const [currentView, setCurrentView] = useState('CardGrid');

  // Handler function to add a new job entry and switch back to the job board view
  const addJobHandler = (newJob) => {
    setJobEntries((prevEntries) => [...prevEntries, newJob]);
    setCurrentView('CardGrid'); // Switch back to CardGrid view after adding a job
    
    if (newJob.status === 'Accepted') {
        setAcceptedCount((prevCount) => prevCount + 1);
      } else if (newJob.status === 'Rejected') {
        setRejectedCount((prevCount) => prevCount + 1);
      } else if (newJob.status === 'In Progress') {
        setInProgressCount((prevCount) => prevCount + 1);
      }
  };

  const deleteJobHandler = (jobId) => {

    fetch(`http://localhost:8082/jobDelete/${jobId}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'ok') {
            // Handle success
            console.log(data.message);
            // Update the jobEntries state by filtering out the deleted job
            setJobEntries((prevEntries) => prevEntries.filter((job) => job._id !== jobId));
        } else {
            // Handle error
            console.error(data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
    // Find the job entry to be deleted
    const jobToDelete = jobEntries[jobId];

    // Update job status counts based on the job to delete
    if (jobToDelete.status === 'Accepted') {
        setAcceptedCount((prevCount) => prevCount - 1);
    } else if (jobToDelete.status === 'Rejected') {
        setRejectedCount((prevCount) => prevCount - 1);
    } else if (jobToDelete.status === 'In Progress') {
        setInProgressCount((prevCount) => prevCount - 1);
    }

    // Update the jobEntries state by filtering out the job to be deleted
    setJobEntries((prevEntries) => prevEntries.filter((_, index) => index !== jobId));
};


  // Function to toggle the current view
  const toggleView = () => {
    setCurrentView((prevView) => (prevView === 'CardGrid' ? 'AddCompany' : 'CardGrid'));
  };

  return (
    <div className="app-page">

      {/* Conditionally render components based on currentView */}
      {currentView === 'AddCompany' && (
        <AddCompany onAddJob={addJobHandler} />
      )}
      {currentView === 'CardGrid' && (
        <>
          {/* Render the RaidMeter component on top */}
          <RaidMeter
           acceptedCount={acceptedCount}
           rejectedCount={rejectedCount}
           inProgressCount={inProgressCount}
          />

          {/* Render the CardGrid component with job entries */}
          <CardGrid data={jobEntries} onDeleteJob={deleteJobHandler} />
        </>
      )}
        {/* Single button that toggles between views */}
        <div className='buttonnn'>
            <button onClick={toggleView}>
            {currentView === 'CardGrid' ? 'Add Job' : 'Job Board'}
            </button>
        </div>
    </div>
  );
};

export default AppPage;