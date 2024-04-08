import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Taskbar from './Taskbar';
import SignUpPage from './SignUpPage';
import RaidMeter from './RaidMeter';
import LoginPage from './LoginPage';
import CardGrid from './CardGrid';

function App() {
  return (
    <Router>
      <div className="App">
        <Taskbar />
        <RaidMeter />
        <CardGrid />
      </div>
    </Router>
  );
}

export default App;
