import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Taskbar from './Taskbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Taskbar />
      </div>
    </Router>
  );
}

export default App;
