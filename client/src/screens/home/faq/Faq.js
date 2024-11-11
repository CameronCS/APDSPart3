import React, { useEffect } from 'react';
import './Faq.css'

export default function Faq() {
  useEffect(() => {
    document.title = 'Swift Portal - FAQ';
  }, []);

  return (
    <div>
        <h1>Faq section</h1>
    </div>
    
  );
}
