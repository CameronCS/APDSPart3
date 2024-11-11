import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewVerified.css'

export default function ViewPending({ user, setUser }) {
    const [pendingPayments, setPendingPayments] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        // Ensure user is set from localStorage if not available
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [setUser]);

    console.log(user);

    useEffect(() => {
        if (!user || !user.token) return;

        const __fetch = async () => {
            try {
                const result = await fetch('https://localhost:3001/api/employee/payments/verified', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${user.token}`
                    }
                });

                if (result.ok) {
                    const payments = await result.json();
                    console.log(payments);
                    setPendingPayments(payments);
                } else {
                    console.error('Failed to fetch pending payments');
                    alert('There was an error fetching pending payments');
                }
            } catch (error) {
                console.error('Error fetching payments:', error);
                alert('An error occurred while fetching payments');
            }
        };

        __fetch();
    }, [user]); // Only rerun when user changes

    const submitClaim = async (paymentId) => {
        try {
            console.log(paymentId);
            const post_data = await fetch(`https://localhost:3001/api/employee/payments/${paymentId}/submit`, {
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
    };

    return (
        <div className="payments-container">
            <h1>All Pending Payments</h1>
            <div>
                {pendingPayments.length > 0 ? (
                    <table className="payments-table">
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Currency</th>
                                <th>Provider</th>
                                <th>Account Number</th>
                                <th>Account Holder</th>
                                <th>Swift Code</th>
                                <th className="date">Created At</th>
                                <th>Status</th>
                                <th>Submit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingPayments.map((pm) => (
                                <tr key={pm._id} className="table-data-row">
                                    <td>{pm.amount}</td>
                                    <td>{pm.currency}</td>
                                    <td>{pm.provider}</td>
                                    <td>{pm.accountInfo.accountNumber}</td>
                                    <td>{pm.accountInfo.accountHolder}</td>
                                    <td>{pm.swiftCode}</td>
                                    <td className="date">{new Date(pm.createdAt).toLocaleString()}</td>
                                    <td>{pm.status}</td>
                                    <td>
                                        <button className="viewButton" onClick={() => submitClaim(pm._id)}>Submit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <h2 className="no-payments">No Verified Payments found!</h2>
                )}
            </div>
        </div>
    );
}
