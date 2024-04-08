import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './LoginPage.css';



function LoginPage() {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setUserName(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        navigate('/Add-Company');
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
                    onClick = {handleLogin}
                >
                   LOGIN
                </Button>
            </div>
        </div>
    );
}

export default LoginPage;