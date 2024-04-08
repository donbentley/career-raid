import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Taskbar from './Taskbar';
import SignUpPage from './SignUpPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Taskbar />
        <SignUpPage/>
      </div>
    </Router>
  );
}

export default App;
