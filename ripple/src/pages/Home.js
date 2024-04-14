import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
    //variables
    const [bankAccounts, setBankAccounts] = useState([]);
    const [cryptoAccounts, setCryptoAccounts] = useState([]);
    const [microFinanceAccounts, setMicroFinanceAccounts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/getaccount/') //display accounts based on type
            .then(response => {
                const data = response.data;
                const bank = data.filter(account => account.account_type === 'Bank');
                const crypto = data.filter(account => account.account_type === 'Crypto');
                const microFinance = data.filter(account => account.account_type === 'Micro-Finance');

                setBankAccounts(bank);
                setCryptoAccounts(crypto);
                setMicroFinanceAccounts(microFinance);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="home1-container">
            <Helmet>
                <title>Home</title>
                <meta property="og:title" content="Login" />
            </Helmet>
            <header
                data-thq="thq-navbar"
                className="navbarContainer home1-navbar-interactive"
            >
                <span className="logo">PAYBRIDGE</span>
                <div data-thq="thq-navbar-nav" className="home1-desktop-menu">
                    <nav className="home1-links"></nav>
                    <div className="home1-buttons">
                        <button className="home1-login buttonFlat" onClick={() => navigate('/CreateBill')}>Create Bill</button>
                        <button className="home1-login buttonFlat" onClick={() => navigate('/Bill')}>My Bills</button>
                        <button className="home1-login buttonFlat" onClick={() => navigate('/AddSource')}>Add Account</button>
                        <button className="home1-login buttonFlat" onClick={() => navigate('/payment')}>Transaction</button>
                        <button className="home1-login buttonFlat" onClick={() => navigate('/')}>Logout</button>
                    </div>
                </div>
                <div data-thq="thq-burger-menu" className="home1-burger-menu"></div>
                <div data-thq="thq-mobile-menu" className="home1-mobile-menu1 mobileMenu"></div>
            </header>
            <div className="account-boxes">
                <div className="account-box">
                    <h3>Bank Accounts</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Account Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bankAccounts.map(account => (
                                <tr key={account.id}>
                                    <td>{account.account_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="account-box">
                    <h3>Crypto Accounts</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Account Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cryptoAccounts.map(account => (
                                <tr key={account.id}>
                                    <td>{account.account_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="account-box">
                    <h3>Micro-Finance Accounts</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Account Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {microFinanceAccounts.map(account => (
                                <tr key={account.id}>
                                    <td>{account.account_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="home1-hero">
                <div className="home1-hero1 heroContainer">
                    <div className="home1-container1">
                        <h2 className="heading2"> Transaction History</h2>
                        <div className="home1-container2">
                            <div className="home1-btn-group"></div>
                        </div>
                    </div>
                    <div className="transaction-history">
                        <table>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Name of Receiver</th>
                                    <th>Amount</th>
                                    <th>Transaction Reference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2024-04-13 10:30 AM</td>
                                    <td>John Doe</td>
                                    <td>$100.00</td>
                                    <td>Term 1</td>
                                </tr>
                                <tr>
                                    <td>2024-04-12 02:45 PM</td>
                                    <td>Jane Doe</td>
                                    <td>$50.00</td>
                                    <td>Term 2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            



            <div className="home1-footer"></div>
        </div>
    );
};

export default Home;
