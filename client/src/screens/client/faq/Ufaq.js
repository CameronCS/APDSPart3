import React, { useEffect } from 'react';
import './Ufaq.css'

export default function Ufaq({user, setUser}) {
  useEffect(() => {
    document.title = 'Swift Portal - FAQ';
  }, []);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [setUser]);

  return (
    <div className="faq-section">
  <div className="navspace">
    {/* This space is for the fixed header */}
  </div>
  <h1 className="site-title">FAQ Section</h1>
  <div className="faq-content">
    <div className="faq-item">
      <h3>What is this website about?</h3>
      <p>SWIFT is an all-in-one payment system where you can securely transfer your funds.</p>
    </div>
    <div className="faq-item">
      <h3>How secure is SWIFT?</h3>
      <p>SWIFT uses SSL to ensure that all your sensitive data is secure, as well as ensuring you data is encrypted. We also ensure different kinds of attas are impossible, such as click-jacking, SQL Injections, MITM Attacks and more!</p>
    </div>
    <div className="faq-item">
      <h3>How can I contact support?</h3>
      <p>Visit our contact us page for more information on reaching out to our support team.</p>
    </div>
    <div className="faq-item">
      <h3>What are the terms of service?</h3>
      <p>You can view our terms of service at the bottom of the page under "Terms & Conditions".</p>
    </div>
    <div className="faq-item">
      <h3>What is your privacy policy?</h3>
      <p>We take the Google approach and <s>'sell' your data for money</s> keep your private data inaccessible and secure :D.</p>
    </div>
  </div>
</div>
    
  );
}
