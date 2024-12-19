import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData,setFormData] = useState({
        name:'',
        email: '',
        feedback: ''
    });

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" name='name' placeholder='Your name' />
        <input type="email" name='email' placeholder='Your email' />
        <textarea name='feedback' placeholder='Your Feedback'></textarea>
        <button type='submit'>Sumbmit FeetBack</button>
      </form>
    </>
  );
};

export default FeedbackForm;
