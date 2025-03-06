import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  // Handle form submission with Formsubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !message) {
      toast.error('Please fill in both fields.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      return;
    }

    // Set loading to true while the form is being submitted
    setLoading(true);

    // Prepare form data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('message', message);
    formData.append('_subject', 'Contact Form Submission'); // Set the subject of the email

    // Send form data to Formsubmit.io
    fetch('https://formsubmit.co/himanshu9922967@gmail.com', { // Replace with your email
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Reset form fields after successful submission
          setEmail('');
          setMessage('');
          setLoading(false); // Set loading to false after submission
          toast.success('Your message has been sent!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false); // Set loading to false if there's an error
        toast.error('Something went wrong. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Stay connected with us! Enter your email below to get the latest updates.
      </p>

      <div className="flex justify-center items-center space-x-8 mb-8">
        {/* Email Subscription Form */}
        <div className="w-full max-w-md text-center bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Send us a Message</h2>

          {/* Form for email and message */}
          <form onSubmit={handleSubmit}>
            {/* Email input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Message textarea */}
            <div className="mb-4">
              <textarea
                placeholder="Your message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                rows="5"
              />
            </div>

            {/* Submit button with loader */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
              disabled={loading} // Disable the button when loading
            >
              {loading ? (
                <div className="flex justify-center items-center space-x-2">
                  <div className="spinner-border animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container for Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
