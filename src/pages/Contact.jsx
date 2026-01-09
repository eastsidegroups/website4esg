import React, { useState } from 'react';
import Button from '../components/Button';


const Contact = () => {
    const [formData, setFormData] = useState({
        subject: '',
        message: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Validation
        if (!formData.subject || !formData.message) {
            alert('Subject and Message are required.');
            setStatus('idle');
            return;
        }
        if (!formData.email && !formData.phone) {
            alert('Please provide either an Email or a Phone Number.');
            setStatus('idle');
            return;
        }

        // Simulate submission
        console.log('Form Submitted to eastsidegroups@gmail.com:', formData);

        // Simulate network delay
        setTimeout(() => {
            setStatus('success');
            setFormData({ subject: '', message: '', email: '', phone: '' });
        }, 1000);
    };

    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in">
                    Contact Us
                </h1>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="bg-surface p-8 rounded-2xl border border-gray-800 animate-slide-up">
                        <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Whether you're looking for a partner to build your next AI product or need expert consultation, we're here to help. Reach out to us directly or fill out the form.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center text-gray-300">
                                <svg className="w-6 h-6 mr-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-lg">+1 (360) 362-0505</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <svg className="w-6 h-6 mr-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-lg">eastsidegroups@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-surface p-8 rounded-2xl border border-gray-800 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                                <Button onClick={() => setStatus('idle')} variant="secondary">Send Another Message</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                        placeholder="Project Inquiry"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500">* Either Email or Phone is required.</p>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                </div>

                                <Button type="submit" variant="primary" className="w-full py-3 text-lg">
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
