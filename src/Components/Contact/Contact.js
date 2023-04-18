import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    // You can add your own code here to submit the form data to your server or API
  };

  return (
    <div>
      <h1 className='text-3xl font-bold mt-5'>Contact Us</h1>
      <div className="contact-us-container rounded-md">

        <form className="contact-us-form content-center" onSubmit={handleSubmit}>
          <div className='mt-3'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='msg'>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>


  );
};

export default Contact;