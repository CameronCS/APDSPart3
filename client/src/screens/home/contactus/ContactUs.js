import React, {useEffect} from 'react'
import './ContactUs.css'

export default function ContactUs() {

  useEffect(() => {
    document.title = 'Swift Portal - Contact Us';
  }, []);

  return (   
<div className="contactus">
  <div className="navspace">
    {/* This space is for the fixed header */}
  </div>
  <h1 className="site-title">Contact Us</h1>

  <div className="contact-info">
    <h2>Contact Our Support Team</h2>
    <p>If you need any help or have any questions, feel free to reach out to our support team:</p>
    <p className="support-phone">Call us at: <strong>011 222 3333</strong></p>
    <p>If you prefer to email us, you can reach us at:</p>
    <p className="support-email">Email us at: <strong><a href="mailto:SWIFT@APDSmail.co.za">SWIFT@APDSmail.co.za</a></strong></p>
    <br/>
    <p className="support-location">You can also always reach us at our headquarters at: <strong>144 Peter Rd, Ruimsig, Roodepoort, 1724</strong></p>
  </div>

  <div className="map-container">
    <iframe
      className="iframe-map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3013.337724212726!2d27.876534104345424!3d-26.08316343948323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1731325623316!5m2!1sen!2sza"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
    
  )
}
