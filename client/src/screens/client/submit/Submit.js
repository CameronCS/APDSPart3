import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Submit({user, setUser}) {
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
        <div>
            <div>
                <label>Amount</label>
                <input onChange={(e) => { setAmount(e.target.value) }} />
                <label>currency</label>
                <input onChange={(e) => { setCurrency(e.target.value) }} />
                <label>Provider</label>
                <input onChange={(e) => { setProvider(e.target.value) }} />
                <label>Account Number</label>
                <input onChange={(e) => { setAccountNumber(e.target.value) }} />
                <label>Swift Code</label>
                <input onChange={(e) => { setSwiftCode(e.target.value) }} />
                <button onClick={submit_claim}>Submit Claim</button>
            </div>
        </div>
    )
}
