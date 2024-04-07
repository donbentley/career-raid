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
            <input
                type="text"
                value={userName}
                onChange={handleInputChange}
                placeholder="User Name"
            />
            <input
                type="password"
                value={password}
                onChange={handlePassword}
                placeholder="Password"
            />
            <div className='loginPage-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                   LOGIN
                </Button>
            </div>
        </div>
    );
}

export default LoginPage;