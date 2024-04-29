import React from 'react';
import './CardGrid.css';

const CardGrid = ({ data, onDeleteJob }) => {
    // Handle right-click (context menu) on each job card
    const handleRightClick = (event, index) => {
        event.preventDefault(); // Prevent the default context menu

        // Call the delete function with the index of the job to delete
        onDeleteJob(index);
    };

    return (
        <div className="card-grid">
            {data.map((item, index) => (
                <div
                    key={item._id}
                    className="card"
                    onContextMenu={(event) => handleRightClick(event, index)}
                >
                    {/* Render the company logo */}
                    <img src={item.image} alt={`${item.title} logo`} />

                    {/* Render the company name and position */}
                    <h2>{item.title}</h2>
                    <p>{item.role}</p>

                    {/* Render the status */}
                    <p>Status: {item.status}</p>

                    {/* Optional: Add any other details or content you want to display in each job card */}
                </div>
            ))}
        </div>
    );
};

export default CardGrid;