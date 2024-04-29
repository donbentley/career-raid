import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Taskbar from './Taskbar';
import Home from './Home';
import AddCompany from './AddCompany';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import JobPage from './JobPage';

function App() {
  return (
      <div className="App">
        <Router>
        <Taskbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Add-Company' exact element={<AddCompany />} />
          <Route path='/Login-Page' exact element={<LoginPage />} />
          <Route path='/Signup-Page' exact element={<SignUpPage />} />
          <Route path='/Raid-Meter' exact element={<JobPage />} />
        </Routes>
      </Router>

      </div>
  );
}

export default App;
