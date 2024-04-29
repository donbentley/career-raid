import React from "react";
import { Link } from 'react-router-dom';
import './Home.css'
import Button from "./Button";


function Home () {

    return (
        
        <div className="Home">
        <h1 className="header">Start your raid here!</h1>
        <h3 className="header">Track your job applications, start to finish! </h3>
        <div className="background">
        
        </div>

        <Link to="/Login-Page">
        <button className="button">Sign In</button>
      </Link>
      <Link to="/Signup-Page">
        <button className="button">Sign Up</button>
      </Link>
    </div>
    )

    
}

export default Home;