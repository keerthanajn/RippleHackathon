import React, { useState } from 'react';
import Web3 from 'web3';

const ContractInteraction = () => {
    const [senderAddress, setSenderAddress] = useState('0x12f0eD6bB4e6fE5fa5Ed0bEe24BdF3C08175aD12');
    const [receiverAddress, setReceiverAddress] = useState('0x4df051f5f809085038900b7F603764F0AD595d54');
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('ETH');
    const [result, setResult] = useState('');

    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    } else {
        alert('Please install MetaMask to use this dApp!');
    }

    const contractAddress = '0xf746CE1DDb51AC8a315B8a04A060d9bC4C363679'; // Corrected contract address
    
    const contractABI = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    const tokenAddresses = {
        'ETH': '0x532b30BA08B05D817E3aF447365E5772Aa3c0828',
        'GBP': '0x532b30BA08B05D817E3aF447365E5772Aa3c0828',
        'USD': '0xYour_USD_Token_Address_Here',
        'EUR': '0xYour_EUR_Token_Address_Here'
        // Add more currencies as needed
    };

    const sendPayment = async () => {
        const tokenAddress = tokenAddresses[currency];
        const tokenContract = new Web3.eth.Contract(contractABI, tokenAddress);
        console.log(tokenContract)

        // Approve the transfer
        const approveTx = await tokenContract.methods.approve(contractAddress, Web3.utils.toWei(amount, 'ether')).send({from: senderAddress});
        
        // Transfer tokens via PaymentBridge
        const transferTx = await tokenContract.methods.transferTokens(receiverAddress, Web3.utils.toWei(amount, 'ether')).send({from: senderAddress});

        try {
            setResult(`Transaction Hash: ${transferTx.transactionHash}`);
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.5/web3.min.js"></script>
            <h1>Smart Contract Interaction</h1>
            <p>Sender Address: <input type="text" value={senderAddress} onChange={(e) => setSenderAddress(e.target.value)} /></p>
            <p>Receiver Address: <input type="text" value={receiverAddress} onChange={(e) => setReceiverAddress(e.target.value)} /></p>
            <p>Amount: <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} /></p>
            <p>Currency: 
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <option value="ETH">ETH</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    {/* Add more currencies as needed */}
                </select>
            </p>
            <button onClick={sendPayment}>Send Payment</button>
            <p id="result">{result}</p>
        </div>
    );
};

export default ContractInteraction;
