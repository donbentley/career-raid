import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
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
        <Button className="button">Sign In</Button>
      </Link>
      <Link to="/Login-Page">
        <Button className="button">Sign Up</Button>
      </Link>
    </div>
    )

    
}

export default Home;