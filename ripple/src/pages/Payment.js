
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Payment.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const TransactionForm = () => {
    //transaction details needed
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [accountTypes, setAccountTypes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        //provide user with a list registed accounts
        axios.get('http://127.0.0.1:8000/getaccount/')
            .then(res => {
                const types = res.data.map(account => account.account_name);
                // Filter out duplicate account types
                const uniqueTypes = [...new Set(types)];
                setAccountTypes(uniqueTypes);
            })
            .catch(err => {
                console.error('Error fetching account types:', err);
            });
    }, []);
//logs the info
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { source, destination, amount, currency });
        const newTab = window.open('http://127.0.0.1:5501/ripple/src/pages/test2.html', '_blank');
        newTab.focus();
    };

    return (
        <div className='home1-container'>
            <Helmet>
                <title>Transaction</title>
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
                        <button className="home1-login buttonFlat" onClick={() => navigate('/AddSource')}>Add Account</button>
                        <button className="home1-login buttonFlat" onClick={() => navigate('/')}>Logout</button>
                    </div>
                </div>
                <div data-thq="thq-burger-menu" className="home1-burger-menu"></div>
                <div
                    data-thq="thq-mobile-menu"
                    className="home1-mobile-menu1 mobileMenu"
                ></div>
            </header>
            <div className="transaction-form-container">
                <h2 className="heading2"> Enter Transaction Detail :</h2>
                <form className="transaction-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="source">Source</label>
                        <div className="input-group">
                            <select id="source" value={source} onChange={(e) => setSource(e.target.value)}>
                                <option value="">Select source account</option>
                                {accountTypes.map((type, index) => (
                                    <option key={index} value={type}>{type}</option>
                                ))}
                            </select>
                            <button type="button" className="add-button" onClick={() => navigate('/AddSource')}>Add Source</button>
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
        </div>
    );
};

export default TransactionForm;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Payment.css';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

// const TransactionForm = () => {
//     const senderAddress = '0x12f0eD6bB4e6fE5fa5Ed0bEe24BdF3C08175aD12';
//     const receiverAddress = '0x4df051f5f809085038900b7F603764F0AD595d54';
//     const [web3, setWeb3] = useState(null);
    

//     useEffect(() => {
//         if (typeof window.ethereum !== 'undefined') {
//             const web3Instance = new web3(window.ethereum);
//             window.ethereum.enable();
//             setWeb3(web3Instance);
//         } else {
//             alert('Please install MetaMask to use this dApp!');
//         }
//     }, []);

//     const contractAddress = '0xf746CE1DDb51AC8a315B8a04A060d9bC4C363679'; // Corrected contract address
//     useEffect(() => {
//         const script = document.createElement('script');
      
//         script.src = "https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.5/web3.min.js";
//         script.async = true;
      
//         document.body.appendChild(script);
      
//         return () => {
//           document.body.removeChild(script);
//         }
//       }, []);
//     const contractABI = [
//         // ... (rest of your contract ABI code)
//     ];

//     const contract = web3 ? new web3.eth.Contract(contractABI, contractAddress) : null;

//     const tokenAddresses = {
//         'ETH': '0x532b30BA08B05D817E3aF447365E5772Aa3c0828',
//         'GBP': '0x532b30BA08B05D817E3aF447365E5772Aa3c0828',
//         'USD': '0xYour_USD_Token_Address_Here',
//         'EUR': '0xYour_EUR_Token_Address_Here'
//         // Add more currencies as needed
//     };

//     async function sendPayment() {
//         const amount = document.getElementById('amount').value;
//         const currency = document.getElementById('currency').value;

//         const tokenAddress = tokenAddresses[currency];
//         const tokenContract = new web3.eth.Contract(contractABI, tokenAddress);

//         // Approve the transfer
//         const approveTx = await tokenContract.methods.approve(contractAddress, web3.utils.toWei(amount, 'ether')).send({from: senderAddress});
        
//         // Transfer tokens via PaymentBridge
//         const transferTx = await contract.methods.transferTokens(receiverAddress, web3.utils.toWei(amount, 'ether')).send({from: senderAddress});

//         try {
//             document.getElementById('result').innerText = `Transaction Hash: ${transferTx.transactionHash}`;
//         } catch (error) {
//             document.getElementById('result').innerText = `Error: ${error.message}`;
//         }
//     }

//     return (
//         <div>
//             <h1>Smart Contract Interaction</h1>
//             <p>Amount: <input type="text" id="amount" /></p>
//             <p>Currency: 
//                 <select id="currency">
//                     <option value="ETH">ETH</option>
//                     <option value="GBP">GBP</option>
//                     <option value="USD">USD</option>
//                     <option value="EUR">EUR</option>
//                 </select>
//             </p>
//             <button onClick={sendPayment}>Send Payment</button>
//             <p id="result"></p>
//         </div>
//     );
// };

// export default TransactionForm;
