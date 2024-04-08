import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Taskbar from './Taskbar';
import SignUpPage from './SignUpPage';
import RaidMeter from './RaidMeter';

function App() {
  return (
    <Router>
      <div className="App">
        <Taskbar />
        <RaidMeter />
      </div>
    </Router>
  );
}

export default App;
