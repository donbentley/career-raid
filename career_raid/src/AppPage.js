
    import React, { useState } from 'react';
    import AddCompany from './AddCompany';
    import CardGrid from './CardGrid';
    import RaidMeter from './RaidMeter';
    import './AppPage.css'; // Import your AppPage-specific CSS file if you have one
    
    const AppPage = () => {
        // State to hold job entries
        const [jobEntries, setJobEntries] = useState([
            // Initial data for cards (example data)
            { title: 'Google', role: 'Data Analyst', image: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png', status: 'Accepted' },
            { title: 'Amazon', role: 'Software Engineer', image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png', status: 'Rejected' },
            { title: 'Apple', role: 'Program Analyst', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png', status: 'In Progress' },
            // Add more initial data as needed
        ]);
    
        // State variables for job status counts
        const [acceptedCount, setAcceptedCount] = useState(1);
        const [rejectedCount, setRejectedCount] = useState(1);
        const [inProgressCount, setInProgressCount] = useState(1);
    
        // State to manage the current view
        const [currentView, setCurrentView] = useState('CardGrid');
    
        // Handler function to add a new job entry and switch back to the job board view
        const addJobHandler = (newJob) => {
            // Add the new job to the list of job entries
            setJobEntries((prevEntries) => [...prevEntries, newJob]);
    
            // Update job status counts based on the new job's status
            if (newJob.status === 'Accepted') {
                setAcceptedCount((prevCount) => prevCount + 1);
            } else if (newJob.status === 'Rejected') {
                setRejectedCount((prevCount) => prevCount + 1);
            } else if (newJob.status === 'In Progress') {
                setInProgressCount((prevCount) => prevCount + 1);
            }
    
            // Switch back to CardGrid view after adding a job
            setCurrentView('CardGrid');
        };
    
        // Function to delete a job entry
        const deleteJobHandler = (jobIndex) => {
            // Find the job entry to be deleted
            const jobToDelete = jobEntries[jobIndex];
    
            // Update job status counts based on the job to delete
            if (jobToDelete.status === 'Accepted') {
                setAcceptedCount((prevCount) => prevCount - 1);
            } else if (jobToDelete.status === 'Rejected') {
                setRejectedCount((prevCount) => prevCount - 1);
            } else if (jobToDelete.status === 'In Progress') {
                setInProgressCount((prevCount) => prevCount - 1);
            }
    
            // Update the jobEntries state by filtering out the job to be deleted
            setJobEntries((prevEntries) => prevEntries.filter((_, index) => index !== jobIndex));
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
                    <p className='note'>tip: <i>right click job to delete</i></p>
                </div>
            </div>
        );
    };
    
    export default AppPage;
    