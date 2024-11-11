import React, { useEffect, useState } from 'react';
import './UViewOne.css';
import { useNavigate } from 'react-router-dom';

export default function UViewOne({ user, setUser }) {
    const url = window.location.href;
    const __split = url.split('/');
    const __id = __split[__split.length - 1];
    const navigate = useNavigate();

    const [vpayment, setVPayment] = useState(null);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [setUser]);

    useEffect(() => {
        if (!user || !user.token) return;

        const __fetch = async () => {
            try {
                const get_res = await fetch(`https://localhost:3001/api/payments/payment/${__id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${user.token}`
                    }
                });

                if (get_res.ok) {
                    const { payment } = await get_res.json();
                    console.log(payment);
                    setVPayment(payment);
                } else {
                    console.error('Failed to fetch payment details');
                    alert('Error fetching payment details');
                }
            } catch (error) {
                console.error('Error fetching payment:', error);
                alert('An error occurred while fetching payment details');
            }
        };

        __fetch();
    }, [user, __id]);

    if (!vpayment) {
        return <h2>Loading payment details...</h2>;
    }

    return (
        <div className="payment-details">
            <h1>Viewing Payment ID: {__id}</h1>
            <button
                onClick={() => {
                    navigate('/user/view-all')
                }}
            >
                Back
            </button>
            <div className="payment-section">
                <h2>Payment Info</h2>
                <div className="payment-info">
                    <h3>Amount Info</h3>
                    <p>
                        <span>Amount: </span>
                        <span>{vpayment.amount}</span>
                    </p>
                    <p>
                        <span>Currency: </span>
                        <span>{vpayment.currency}</span>
                    </p>
                    <p>
                        <span>Provider: </span>
                        <span>{vpayment.provider}</span>
                    </p>
                </div>

                <div className="account-info">
                    <h2>Account Information</h2>
                    <p>
                        <span>Account Number: </span>
                        <span>{vpayment.accountInfo.accountNumber}</span>
                    </p>
                    <p>
                        <span>Account Holder: </span>
                        <span>{vpayment.accountInfo.accountHolder}</span>
                    </p>
                </div>

                <div className="other-data">
                    <h2>Other Data</h2>
                    <p>
                        <span>Created At: </span>
                        <span>{new Date(vpayment.createdAt).toLocaleString()}</span>
                    </p>
                    <p>
                        <span>Status: </span>
                        <span>{vpayment.status}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
