import React from 'react';
import './Contact.css'; // Make sure to create and import this

const Contact = () => {
  return (
    <div className="contact-background">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p className="description">
          We'd love to hear from you! Feel free to reach out through any of the contact methods below:
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:hello@barkandbuy.com">hello@barkandbuy.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p><strong>Address:</strong> 123 Puppy Lane, Dogtown, CA 90210</p>
        </div>

        <p className="business-hours">Business Hours: Mon - Fri, 9am - 6pm (PST)</p>
      </div>
    </div>
  );
};

export default Contact;
