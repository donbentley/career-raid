import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Taskbar from './Taskbar';
import SignUpPage from './SignUpPage';
import RaidMeter from './RaidMeter';
import LoginPage from './LoginPage';
import CardGrid from './CardGrid';
import Home from './Home';
import AddCompany from './AddCompany';
import AppPage from './AppPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Taskbar />
         < Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Login-Page' exact element={<LoginPage />} />
          <Route path='/Signup-Page' exact element={<SignUpPage />} />
          <Route path='/App-Page' exact element={<AppPage />}   /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
