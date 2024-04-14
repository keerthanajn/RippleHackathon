import React, { useState } from 'react';
import './CreateBill.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CreateBill = () => {
    //details for a bill
    const [recipientName, setRecipientName] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [referenceName, setReferenceName] = useState('');
    const [amount, setAmount] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [currency, setCurrency] = useState('');

    //logs the submitted the info
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { recipientName, recipientEmail, referenceName, amount, dueDate, currency });
    };
    const navigate = useNavigate()
    return (
        <body>
            <Helmet>
                <title>Create Bill</title>
                <meta property="og:title" content="Login" />
            </Helmet>
            <div className='home1-container'>
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
            <button className="home1-login buttonFlat" onClick={() => navigate('/AddSource')}>Add Account</button>
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
                <h2 className="heading2"> Create Bill Request :</h2>
                <form className="transaction-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="recipientName">Recipient Name</label>
                        <input
                            type="text"
                            id="recipientName"
                            value={recipientName}
                            onChange={(e) => setRecipientName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="recipientEmail">Recipient Email</label>
                        <input
                            type="email"
                            id="recipientEmail"
                            value={recipientEmail}
                            onChange={(e) => setRecipientEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="referenceName">Reference Name</label>
                        <input
                            type="text"
                            id="referenceName"
                            value={referenceName}
                            onChange={(e) => setReferenceName(e.target.value)}
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
                        <label htmlFor="dueDate">Due Date</label>
                        <input
                            type="date"
                            id="dueDate"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
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

                    <button type="submit" className="make-payment-button">Create Bill</button>
                </form>
            </div>
            </div>
        </body>
    );
};

export default CreateBill;
