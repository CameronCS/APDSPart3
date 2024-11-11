import React, { useEffect, useState } from 'react'
import './ViewAll.css'
import { useNavigate } from 'react-router-dom';

export default function ViewAll({ user, setUser }) {
  const [payments, setPayments] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [setUser]);
  console.log(user);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const result = await fetch(`https://localhost:3001/api/payments/${user._id}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${user.token}`,
          },
        });

        const { payments } = await result.json();

        if (result.ok) {
          console.log('Payments: ', payments);
          setPayments(payments);
        } else {
          alert('There was an error viewing your payments');
        }
      } catch (error) {
        console.error("Error fetching payments:", error);
        alert('There was an error fetching your payments');
      }
    };

    if (user && user._id) {
      fetchPayments();
    }
  }, [user]);

  console.log(payments);

  return (
    <div class="payments-container">
      <div className="navspace">
        {/* This space is for the fixed header */}
      </div>
      <h1>Your Payments</h1>
      {payments.length > 0 ? (
        <table class="payments-table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Currency</th>
              <th>Provider</th>
              <th>Account Holder</th>
              <th>Account Number</th>
              <th>Created At</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id}>
                <td>{payment.amount}</td>
                <td>{payment.currency}</td>
                <td>{payment.provider}</td>
                <td>{payment.accountInfo.accountHolder}</td>
                <td>{payment.accountInfo.accountNumber}</td>
                <td class="date">{new Date(payment.createdAt).toLocaleString()}</td>
                <td>{payment.status}</td>
                <td>
                  <button className='viewButton' onClick={() => {
                    navigate(`/user/view/${payment._id}`)
                  }}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div class="no-payments">
          <h2>You Have No Payments</h2>
        </div>
      )}
    </div>
  );
}
