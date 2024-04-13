// import React, { useState,useEffect } from 'react';
// import './Bill.css';
// import { useNavigate } from 'react-router-dom'

// const Bill = () => {
//     const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     // Fetch data from transactions.json
//     fetch('bills.json')
//       .then((response) => response.json())
//       .then((data) => setTransactions(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

// const navigate = useNavigate()


//     return (
//         <body>
//         <header
//           data-thq="thq-navbar"
//           className="navbarContainer home1-navbar-interactive"
//         >
//           <span className="logo">BANKIFY</span>
//           <div data-thq="thq-navbar-nav" className="home1-desktop-menu">
//             <nav className="home1-links"></nav>
//             <div className="home1-buttons">
//             <button className="home1-login buttonFlat" onClick={() => navigate('/CreateBill')}>Create Bill</button>
//             <button className="home1-login buttonFlat" onClick={() => navigate('/home')}>Home</button>
//             <button className="home1-login buttonFlat" onClick={() => navigate('/AddSource')}>Add Account</button>
//             <button className="home1-login buttonFlat" onClick={() => navigate('/payment')}>Transaction</button>
//               <button className="home1-login buttonFlat" onClick={() => navigate('/')}>Logout</button>
//             </div>
//           </div>
//           <div data-thq="thq-burger-menu" className="home1-burger-menu">
           
//           </div>
//           <div
//             data-thq="thq-mobile-menu"
//             className="home1-mobile-menu1 mobileMenu"
//           >
             
//           </div>
//         </header>
//         <table>
//           <thead>
//             <tr>
//               <th>Sender Name</th>
//               <th>Reference Name</th>
//               <th>Amount</th>
//               <th>Date</th>
//               <th>Payment Due Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((transaction) => (
//               <tr key={transaction.id}>
//                 <td>{transaction.senderName}</td>
//                 <td>{transaction.referenceName}</td>
//                 <td>${transaction.amount.toFixed(2)}</td>
//                 <td>{transaction.date}</td>
//                 <td>{transaction.paymentDueDate}</td>
//                 <td>
//                   <button className="payment-button">Pay</button>
//                   <button className="receipt-button">See Receipt</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </body>
//       );
//             }

// export default Bill;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bill.css';
import { useNavigate } from 'react-router-dom'

const Bill = () => {
    const [transactions, setTransactions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/getbills/')
            .then(response => {
                setTransactions(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
            <table>
                <thead>
                    <tr>
                        <th>Sender Name</th>
                        <th>Reference Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Payment Due Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.sender_name}</td>
                            <td>{transaction.reference}</td>
                            <td>${transaction.amount}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.due_date}</td>
                            <td>
                                {transaction.status === 'Pending' ? (
                                    <>
                                        <button className="payment-button" onClick={() => navigate('/payment')}>Pay</button>
                                    </>
                                ) : (
                                    <span>{transaction.status}</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </body>
    );
};

export default Bill;
