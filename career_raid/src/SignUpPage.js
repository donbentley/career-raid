import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form submission logic here, like sending data to a server
        console.log('Form Submitted:', formData);
    };

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="signup-info">
                    <input
                        type="email"id="email"name="email" placeholder='Email' value={formData.email} onChange={handleChange}
                    />
                </div>
                <div className="signup-info">
                    <input
                        type="password"id="password"name="password"placeholder='Password' value={formData.password}onChange={handleChange}
                    />
                </div>
                <button type="submit">Sign Up</button>
                <div className='signIn'>
                    <p>Already have an account? <a href="#">Sign In</a></p>
                    </div>
            </form>
        </div>
    );
};

export default SignUpPage;
