import React, { useState } from 'react';
import './AddSource.css';

const AddSource = () => {
    const [source, setSource] = useState('');
    const [walletAccountId, setWalletAccountId] = useState('');
    const [accountId, setAccountId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', {
            source,
            walletAccountId,
            accountId,
            firstName,
            lastName
        });
    };

    const renderAccountInputs = () => {
        if (source === 'Crypto Wallet') {
            return (
                <div className="form-group">
                    <label htmlFor="walletAccountId">Wallet Account ID</label>
                    <input
                        type="text"
                        id="walletAccountId"
                        value={walletAccountId}
                        onChange={(e) => setWalletAccountId(e.target.value)}
                    />
                </div>
            );
        } else if (source === 'Micro Finance' || source === 'Bank Detail') {
            return (
                <>
                    <div className="form-group">
                        <label htmlFor="accountId">Account ID</label>
                        <input
                            type="text"
                            id="accountId"
                            value={accountId}
                            onChange={(e) => setAccountId(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </>
            );
        }
        return null;
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
                <h2 className="heading2"> Add Account:</h2>
                <form className="transaction-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="source">Account Type: </label>
                        <div className="input-group">
                            <select id="source" value={source} onChange={(e) => setSource(e.target.value)}>
                                <option value="">Select Account Type</option>
                                <option value="Micro Finance">Micro Finance</option>
                                <option value="Bank Detail">Bank Detail</option>
                                <option value="Crypto Wallet">Crypto Wallet</option>
                            </select>
                        </div>
                    </div>

                

                    {renderAccountInputs()}

                    <button type="submit" className="make-payment-button">Create Account </button>
                </form>
            </div>
        </body>
    );
};

export default AddSource;
