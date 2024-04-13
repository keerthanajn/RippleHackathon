import React, { useState } from 'react';
import './CreateBill.css';

const CreateBill = () => {
    const [recipientName, setRecipientName] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [referenceName, setReferenceName] = useState('');
    const [amount, setAmount] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [currency, setCurrency] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { recipientName, recipientEmail, referenceName, amount, dueDate, currency });
    };

    return (
        <body>
            <div className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/transactions">Transactions</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </div>
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

                    <button type="submit" className="make-payment-button">Make Payment</button>
                </form>
            </div>
        </body>
    );
};

export default CreateBill;
