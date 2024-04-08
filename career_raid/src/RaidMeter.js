import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import './RaidMeter.css'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

const chartData = {
    labels: ['accepted', 'rejected', 'in-progress'],
    data: [1, 1, 1],
};

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);


const RaidMeter = () => {
    const data = {
        labels: ['accepted', 'rejected', 'in-progress'],
        datasets: [
            {
                label: 'Job Status',
                data: chartData.data,
                backgroundColor: ['#21D19F','#FE5F55','#FDB043'],
                circumference: 180,
                rotation: 270,
            },
        ],
    }
    const options =  {
        borderWidth: 10,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend:{
                display: false,            
            },
        },
    };

  return (
    <div class="wrapper">
    <h2>Raid Meter ™️</h2>
    <div class="meter-container"> 
      <div class="meter">
        <Doughnut 
        data={data} 
        options={options}/>  
      </div>
    <div class="programming-stats">
        <ul class="details">
        <li>jobs accepted: <span style={{ color: '#21D19F',fontWeight:'bold' }}>{chartData.data[0]}</span></li>
        <li>jobs rejected: <span style={{ color: '#FE5F55',fontWeight:'bold' }}>{chartData.data[1]}</span></li>
        <li>in progress: <span style={{ color: '#FDB043',fontWeight:'bold' }}>{chartData.data[2]}</span></li>
        </ul>
    </div>

    </div>
    </div>
  );
};


export default RaidMeter;
