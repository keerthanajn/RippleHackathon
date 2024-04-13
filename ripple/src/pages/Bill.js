import React, { useState,useEffect } from 'react';
import './Bill.css';

const Bill = () => {
    const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from transactions.json
    fetch('bills.json')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


    return (
        <body>
        <div className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/transactions">Transactions</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </div>
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
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.senderName}</td>
                <td>{transaction.referenceName}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                <td>{transaction.date}</td>
                <td>{transaction.paymentDueDate}</td>
                <td>
                  <button className="payment-button">Pay</button>
                  <button className="receipt-button">See Receipt</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </body>
      );
            }

export default Bill;
