import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './RaidMeter.css';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const RaidMeter = ({ acceptedCount, rejectedCount, inProgressCount }) => {
    const data = {
        labels: ['accepted', 'rejected', 'in-progress'],
        datasets: [
            {
                label: 'Job Status',
                data: [acceptedCount, rejectedCount, inProgressCount],
                backgroundColor: ['#21D19F', '#FE5F55', '#FDB043'],
                circumference: 180,
                rotation: 270,
            },
        ],
    };

    const options = {
        borderWidth: 10,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="wrapper">
            <h2>Raid Meter ™️</h2>
            <div className="meter-container">
                <div className="meter">
                    <Doughnut data={data} options={options} />
                </div>
                <div className="programming-stats">
                    <ul className="details">
                        <li>Jobs Accepted: <span style={{ color: '#21D19F', fontWeight: 'bold' }}>{acceptedCount}</span></li>
                        <li>Jobs Rejected: <span style={{ color: '#FE5F55', fontWeight: 'bold' }}>{rejectedCount}</span></li>
                        <li>In Progress: <span style={{ color: '#FDB043', fontWeight: 'bold' }}>{inProgressCount}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RaidMeter;