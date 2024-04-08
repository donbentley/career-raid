import React from 'react';
import Button from './Button';
import './LoginPage.css';


function LoginPage() {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleInputChange = (event) => {
        setUserName(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    return(
        <div className='loginPage-container' >
            <h2>Log in</h2>
            <input
                type="text"
                value={userName}
                onChange={handleInputChange}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={handlePassword}
                placeholder="Password"
            />
             <button class="donbutton"type="submit">Log In</button>
                <div className='logIn'>
                    <p>Dont have an account already? <a href="#">Sign Up</a></p>
                    </div>
        </div>
    );
}

export default LoginPage;