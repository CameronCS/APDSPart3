import React, {useEffect} from 'react'
import './ContactUs.css'

export default function ContactUs() {

  useEffect(() => {
    document.title = 'Swift Portal - Contact Us';
  }, []);

  return (   
    <div>
        <h1>Contact Us</h1>
    </div>
    
  )
}
