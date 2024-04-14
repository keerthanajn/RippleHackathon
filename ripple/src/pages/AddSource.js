import React, { useState } from 'react';
import './AddSource.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Helmet from 'react-helmet'
const AddSource = () => {
    const [account_type, setSource] = useState(''); //account type
    const [walletAccountId, setWalletAccountId] = useState(''); //wallent account
    const [account_id, setAccountId] = useState(''); //acoount id 
    const [account_name, setFirstName] = useState(''); // account name
    const navigate = useNavigate(); //navigate to different page

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            //format accepted
            const response = await axios.post('http://127.0.0.1:8000/postaccount/', { 
                account_id, 
                account_name,
                account_type
            });
            console.log('Account created successfully:', response.data);
            // Redirect to desired page after successful account creation
            navigate('/home');
        } catch (error) {
            console.error('Error creating account:', error);
        }
    };

    const renderAccountInputs = () => {
        if (account_type === 'Crypto') { //if chooosen account type is crypto
            return (
                <div className="form-group">
                    <label htmlFor="walletAccountId">Wallet Name</label>
                    <input
                        type="text"
                        id="walletAccountId"
                        value={walletAccountId}
                        onChange={(e) => setWalletAccountId(e.target.value)}
                    />
                </div>
            ); //if chosen account type is other than crypto 
        } else if (account_type === 'Micro-Finance' || account_type === 'Bank') {
            return (
                <>
                    <div className="form-group">
                        <label htmlFor="accountId">Account ID</label>
                        <input
                            type="text"
                            id="accountId"
                            value={account_id}
                            onChange={(e) => setAccountId(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">Bank Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={account_name}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                </>
            );
        }
        return null;
    };

    return (
        <body>
            <div className='home1-container'>
            <Helmet>
                <title>Add Account</title>
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
                            <button className="home1-login buttonFlat" onClick={() => navigate('/home')}>Home</button>
                            <button className="home1-login buttonFlat" onClick={() => navigate('/Bill')}>My Bills</button>
                            <button className="home1-login buttonFlat" onClick={() => navigate('/CreateBill')}>Create Bill</button>
                            <button className="home1-login buttonFlat" onClick={() => navigate('/payment')}>Transaction</button>
                            <button className="home1-login buttonFlat" onClick={() => navigate('/')}>Logout</button>
                        </div>
                    </div>
                    <div data-thq="thq-burger-menu" className="home1-burger-menu">

                    </div>
                    <div
                        data-thq="thq-mobile-menu"
                        className="home1-mobile-menu1 mobileMenu"
                    >

                    </div>
                </header>
                <div className="transaction-form-container">
                    <h2 className="heading2"> Add Account:</h2>
                    <form className="transaction-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="source">Account Type: </label>
                            <div className="input-group">
                                <select id="source" value={account_type} onChange={(e) => setSource(e.target.value)}>
                                    <option value="">Select Account Type</option>
                                    <option value="Micro-Finance">Micro-Finance</option>
                                    <option value="Bank">Bank</option>
                                    <option value="Crypto">Crypto</option>
                                </select>
                            </div>
                        </div>

                        {renderAccountInputs()}

                        <button type="submit" className="make-payment-button">Create Account </button>
                    </form>
                </div>
            </div>
        </body>
    );
};

export default AddSource;

