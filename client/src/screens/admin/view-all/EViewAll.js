import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './EViewAll.css'

export default function EViewAll({ user, setUser }) {
    const [allPayments, setAllPayments] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
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
                const data = await fetch('https://localhost:3001/api/employee/payments', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${user.token}`,
                    },
                });

                if (!data.ok) {
                    throw new Error('Error fetching payments');
                }

                const { payments } = await data.json();
                console.log(payments);

                if (payments) {
                    setAllPayments(payments);
                } else {
                    alert('No payments found');
                }
            } catch (error) {
                console.error(error);
                alert('There was an error fetching all payments');
            }
        };

        __fetch();
    }, [user]);

    const viewSingle = (__id) => {
        console.log(__id);
        navigate(`/employee/view/${__id}`)
    }

    return (
        <div className="payments-container">
            <h1 className="payments-header">All Payments</h1>
            <div className="payments-content">
                {
                    allPayments.length > 0 ? (
                        <table className="payments-table">
                            <thead>
                                <tr className="table-header-row">
                                    <th>Amount</th>
                                    <th>Currency</th>
                                    <th>Provider</th>
                                    <th>Account Number</th>
                                    <th>Account Holder</th>
                                    <th>Swift Code</th>
                                    <th className="date">Created At</th>
                                    <th>Status</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allPayments.map(payment => {
                                        return (
                                            <tr key={payment._id} claclassNamess="table-data-row">
                                                <td>{payment.amount}</td>
                                                <td>{payment.currency}</td>
                                                <td>{payment.provider}</td>
                                                <td>{payment.accountInfo.accountNumber}</td>
                                                <td>{payment.accountInfo.accountHolder}</td>
                                                <td>{payment.swiftCode}</td>
                                                <td className="date">{new Date(payment.createdAt).toLocaleString()}</td>
                                                <td>{payment.status}</td>
                                                <td>
                                                    <button className="viewButton" onClick={() => { viewSingle(payment._id) }}>
                                                        View Payment
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    ) : (
                        <h2 className="no-payments-message">There are no payments at all</h2>
                    )
                }
            </div>
        </div>
    );
}
