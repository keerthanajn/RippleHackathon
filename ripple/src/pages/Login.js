import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
// import ax from './ax'; // Assuming 'ax' is your component to fetch account details

import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // State to hold the account details fetched from the server
    const [accountDetails, setAccountDetails] = useState([]);

    // Fetch account details when the component mounts
    useEffect(() => {
        async function fetchAccountDetails() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/getuser/');
                setAccountDetails(response.data);
            } catch (error) {
                console.error('Error fetching account details:', error);
            }
        }

        fetchAccountDetails();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the entered email and password match any account details
        const foundAccount = accountDetails.find(account => account.username === email && account.password === password);
        if (foundAccount) {
            // Redirect the user to the home page upon successful login
            navigate('/home');
        } else {
            // Display error message if login fails
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <Helmet>
                <title>Login</title>
                <meta property="og:title" content="Login" />
            </Helmet>
            <div className="login-header">
                <header
                    data-thq="thq-navbar"
                    className="navbarContainer login-navbar-interactive"
                >
                  <span className='logo'>PAYBRIDGE</span>
                    {/* <img className="logo" src ={ require('./logo.jpg')}/> */}
                    <div data-thq="thq-navbar-nav" className="login-desktop-menu">
                        <nav className="login-links"></nav>
                    </div>
                    {/* Add your navigation buttons or links here if needed */}
                </header>
            </div>
            <div className="login-login2">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-login-inputs">
                        <label className="login-passwords">
                            <span>Email ID</span>
                            <br />
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="login-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login-login-inputs1">
                        <label className="login-passwords1">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-textinput1 input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button button">
                        Login
                    </button>
                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default Login;
