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
        if (vpayment.status === 'Pending') {
            return (
                <div>
                    <button
                        onClick={() => {
                            verifyPayment()
                            window.location.reload()
                        }}
                    >
                        Verify
                    </button>
                    <button
                        onClick={() => {
                            verifyAndSubmit()
                            window.location.reload()
                        }}
                    >
                        Verify and Submit
                    </button>
                </div>
            )
        }
        if (vpayment.status === 'Verified') {
            return (
                <div>
                    <button
                        onClick={() => {
                            submitPayment()
                            window.location.reload()
                        }}
                    >
                        Submit
                    </button>
                </div>
            )
        }
        if (vpayment.status === 'Submitted') {
            return (
                <div>
                    <p>No Options available</p>
                </div>
            )
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
            window.location.reload()
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

            window.location.reload();

        } catch (error) {
            console.error('Error submitting claim:', error);
            alert('An error occurred while submitting the claim');
        }
    }

    const verifyAndSubmit = async () => {
        verifyPayment();
        submitPayment();
    }

    return (
        <div class="payment-details-container">
            <div className="navspace">
                {/* This space is for the fixed header */}
            </div>
            <h1 class="payment-id-header">Viewing Payment ID: {__id}</h1>
            <div class="payment-section">
                <h2 class="section-title">Payment Info</h2>
                <div class="info-block">
                    <p class="info-item">
                        <h3 class="sub-title">Amount Info</h3>
                        <span class="label">Amount: </span>
                        <span class="value">{vpayment.amount}</span>
                    </p>
                    <p class="info-item">
                        <span class="label">Currency: </span>
                        <span class="value">{vpayment.currency}</span>
                    </p>
                    <p class="info-item">
                        <span class="label">Provider: </span>
                        <span class="value">{vpayment.provider}</span>
                    </p>
                </div>

                <div class="account-info">
                    <h2 class="section-title">Account Information</h2>
                    <p class="info-item">
                        <span class="label">Account Number: </span>
                        <span class="value">{vpayment.accountInfo.accountNumber}</span>
                    </p>
                    <p class="info-item">
                        <span class="label">Account Holder: </span>
                        <span class="value">{vpayment.accountInfo.accountHolder}</span>
                    </p>
                </div>

                <div class="other-data">
                    <h2 class="section-title">Other Data</h2>
                    <p class="info-item">
                        <span class="label">Created At: </span>
                        <span class="value">{new Date(vpayment.createdAt).toLocaleString()}</span>
                    </p>
                    <p class="info-item">
                        <span class="label">Status: </span>
                        <span class="value">{vpayment.status}</span>
                    </p>
                </div>

                <div class="user-options">
                    <h2 class="section-title">User Options</h2>
                    {render_user_options()}
                </div>
            </div>
        </div>
    );
}
