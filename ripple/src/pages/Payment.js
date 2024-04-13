import React, { useState } from 'react';
import './Payment.css';
import { useNavigate } from 'react-router-dom'

const TransactionForm = () => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { source, destination, amount, currency });
    };
    const navigate = useNavigate()
    return (
        <body>
            <header
          data-thq="thq-navbar"
          className="navbarContainer home1-navbar-interactive"
        >
          <span className="logo">BANKIFY</span>
          <div data-thq="thq-navbar-nav" className="home1-desktop-menu">
            <nav className="home1-links"></nav>
            <div className="home1-buttons">
            <button className="home1-login buttonFlat" onClick={() => navigate('/CreateBill')}>Create Bill</button>
            <button className="home1-login buttonFlat" onClick={() => navigate('/home')}>Home</button>
            <button className="home1-login buttonFlat" onClick={() => navigate('/AddSource')}>Add Account</button>
            <button className="home1-login buttonFlat" onClick={() => navigate('/home')}>Home</button>
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
        <h2 className="heading2"> Enter Transaction Detail :</h2>
            <form className="transaction-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="source">Source</label>
                    <div className="input-group">
                        <select id="source" value={source} onChange={(e) => setSource(e.target.value)}>
                            {/* Dropdown options go here */}
                            <option value="account1">Account 1</option>
                            <option value="account2">Account 2</option>
                        </select>
                        <button type="button" className="add-button">Add Source</button>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="destination">Destination</label>
                    <input
                        type="text"
                        id="destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="text"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="currency">Currency</label>
                    <input
                        type="text"
                        id="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    />
                </div>

                <button type="submit" className="make-payment-button">Make Payment</button>
            </form>
        </div>
        </body>
    );
};

export default TransactionForm;
