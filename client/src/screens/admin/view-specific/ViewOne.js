import React, { useEffect, useState } from 'react';
import "./ViewOne.css"

export default function ViewOne({ user, setUser }) {
    const url = window.location.href;
    const __split = url.split('/');
    const __id = __split[__split.length - 1];

    const [vpayment, setVPayment] = useState(null);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [setUser]);

    useEffect(() => {
        if (!user || !user.token) return;

        const __fetch = async () => {
            try {
                const get_res = await fetch(`https://localhost:3001/api/employee/payments/${__id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${user.token}`
                    }
                });

                if (get_res.ok) {
                    const { payment } = await get_res.json();
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

    const render_user_options = () => {
        switch (vpayment.status) {
            case 'Pending':
                return (
                    <div className='Buttons'>
                        <button className='viewButton' onClick={() => {
                            verifyPayment()
                            window.location.reload();
                        }}>
                            Verify
                        </button>
                        <button className='viewButton' onClick={() => {
                            verifyAndSubmit()
                            window.location.reload();
                        }}>
                            Verify and Submit</button>
                    </div>
                );
            case 'Verified':
                return (
                    <div>
                        <button className='viewButton' onClick={() => {
                            submitPayment()
                            window.location.reload()
                        }}>
                            Submit
                        </button>
                    </div>
                );
            case 'Submitted':
                return <p>No Options available</p>;
            default:
                return null;
        }
    }
    


    const verifyPayment = async () => {
        try {
            const post_data = await fetch(`https://localhost:3001/api/employee/payments/${__id}/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${user.token}`
                }
            });

            const { message } = await post_data.json();

            alert(message);
        } catch (error) {
            console.error('Error submitting claim:', error);
            alert('An error occurred while submitting the claim');
        }
    }

    const submitPayment = async () => {
        try {
            const post_data = await fetch(`https://localhost:3001/api/employee/payments/${__id}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${user.token}`
                }
            });

            const { message } = await post_data.json();

            alert(message);
        } catch (error) {
            console.error('Error submitting claim:', error);
            alert('An error occurred while submitting the claim');
        }
    }

    const verifyAndSubmit = async () => {
        try {
            await verifyPayment();
            await submitPayment();
        } catch (error) {
            console.error('Error during verification and submission:', error);
            alert('An error occurred during the process');
        }
    }
    

    return (
        <div className="payment-details-container">
            <div className="navspace">
                {/* This space is for the fixed header */}
            </div>
            <h1 className="payment-id-header">Viewing Payment ID: {__id}</h1>
            <div className="payment-section">
                <h2 className="section-title">Payment Info</h2>
                <div className="info-block">
                    <p className="info-item">
                        <span className="sub-title">Amount Info</span>
                        <span className="label">Amount: </span>
                        <span className="value">{vpayment.amount}</span>
                    </p>
                    <p className="info-item">
                        <span className="label">Currency: </span>
                        <span className="value">{vpayment.currency}</span>
                    </p>
                    <p className="info-item">
                        <span className="label">Provider: </span>
                        <span className="value">{vpayment.provider}</span>
                    </p>
                </div>

                <div className="account-info">
                    <h2 className="section-title">Account Information</h2>
                    <p className="info-item">
                        <span className="label">Account Number: </span>
                        <span className="value">{vpayment.accountInfo.accountNumber}</span>
                    </p>
                    <p className="info-item">
                        <span className="label">Account Holder: </span>
                        <span className="value">{vpayment.accountInfo.accountHolder}</span>
                    </p>
                </div>

                <div className="other-data">
                    <h2 className="section-title">Other Data</h2>
                    <p className="info-item">
                        <span className="label">Created At: </span>
                        <span className="value">{new Date(vpayment.createdAt).toLocaleString()}</span>
                    </p>
                    <p className="info-item">
                        <span className="label">Status: </span>
                        <span className="value">{vpayment.status}</span>
                    </p>
                </div>

                <div className="user-options">
                    <h2 className="section-title">User Options</h2>
                    {render_user_options()}
                </div>
            </div>
        </div>
    );
}
