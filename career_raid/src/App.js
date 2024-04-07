import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Taskbar from './Taskbar';
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Taskbar />
        <Home/>
      </div>
    </Router>
  );
}

export default App;
