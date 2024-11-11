import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Submit.css'

export default function Submit({ user, setUser }) {
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
        console.log(user);
    }, [setUser])

    const navigate = useNavigate();
    const [amount, setAmount] = useState();
    const [currency, setCurrency] = useState();
    const [provider, setProvider] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [swiftCode, setSwiftCode] = useState();

    const submit_claim = async () => {

        const submitData = {
            amount: amount,
            currency: currency,
            provider: provider,
            accountInfo: {
                accountNumber: accountNumber,
                accountHolder: user.username,
            },
            swiftCode: swiftCode,
            userID: user._id
        }

        const result = await fetch('https://localhost:3001/api/payments/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(submitData)
        })

        if (result.ok) {
            alert('Payment Submitted Successfully')
            navigate('/user/')
        }
    }

    return (
        <div className="submitpage">
            <div className="navspace">
                {/* This space is for the fixed header */}
            </div>
            <div className="submitcontainer">
                <h2>Submit Claim</h2>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="currency">Currency</label>
                    <input
                        type="text"
                        id="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="provider">Provider</label>
                    <input
                        type="text"
                        id="provider"
                        value={provider}
                        onChange={(e) => setProvider(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="accountNumber">Account Number</label>
                    <input
                        type="text"
                        id="accountNumber"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="swiftCode">Swift Code</label>
                    <input
                        type="text"
                        id="swiftCode"
                        value={swiftCode}
                        onChange={(e) => setSwiftCode(e.target.value)}
                        required
                    />
                </div>
                <button onClick={submit_claim} className="submit-btn">Submit Claim</button>
            </div>
        </div>
    )
}
