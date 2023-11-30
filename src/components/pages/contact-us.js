import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { useTitle } from '../../utils/utils';

const ContactUs = () => {
    useTitle("Contact Us");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        const botApiEndpoint = 'https://api.telegram.org/bot6968099785:AAETa0O2C1O_Y6OtsbFIJH8q0tOdnnWiYOI/sendMessage';

        try {
            const response = await axios.post(botApiEndpoint, {
                chat_id: '861027511', // User ID
                text: `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
          
${formData.message}
        `,
            });

            console.log(response.data);

            // Optionally, you can reset the form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            // Show success alert
            swal("Thank you for your message", "We will reach out to you in with in 24 hours", "success");
        } catch (error) {
            console.error('Error sending message:', error);

            // Show error alert
            swal("Oops", "An error occurred while sending your message. Please try again later.", "error");
        }
    };

    return (
        <section className='section'>
            <div className="container">
                <h1 className='title'>Contact Us</h1>
                <hr></hr>
                <div className="field">
                    <label className="label">Your Name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Your Email</label>
                    <div className="control">
                        <input
                            className="input"
                            type="email"
                            placeholder="Your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Subject</label>
                    <div className="control">
                        <div className="select">
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select a subject
                                </option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Technical Support">Technical Support</option>
                                <option value="Feature Request">Feature Request</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Your Message</label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            placeholder="Your message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button
                            className="button is-primary"
                            type="button"
                            onClick={handleSubmit}
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
