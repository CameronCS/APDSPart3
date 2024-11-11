import React, { useEffect, useState } from 'react';

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
                    <div>
                        <button onClick={() => {
                            verifyPayment()
                            window.location.reload();
                        }}>
                            Verify
                        </button>
                        <button onClick={() => {
                            verifyAndSubmit()
                            window.location.reload();
                        }}>
                            Verify and Submit</button>
                    </div>
                );
            case 'Verified':
                return (
                    <div>
                        <button onClick={() => {
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
        <div>
            <h1>Viewing Payment ID: {__id}</h1>
            <div>
                <h2>Payment Info</h2>
                <div>
                    <p>
                        <h3>Amount Info</h3>
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

                <div>
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

                <div>
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

                <div>
                    <h2>User Options</h2>
                    {render_user_options()}
                </div>
            </div>
        </div>
    );
}
