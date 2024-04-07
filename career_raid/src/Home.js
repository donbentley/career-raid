import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import './Home.css'


function Home () {

    return (
        
        <div className="Home">
        <h1 className="header">Start your raid here!</h1>
        <h3 className="header">Track your job applications, start to finish! </h3>
        <div className="background">
        
        </div>

        <button className="button">Sign In</button>
        <button className="button">Sign Up</button>
        </div>
    )

    
}

export default Home;