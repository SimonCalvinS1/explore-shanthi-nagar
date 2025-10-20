import React, { useState } from 'react';
import { contactAPI } from "../components/services/api";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await contactAPI.sendMessage(form);
            if (res.success) {
                setStatus(" ~ Message sent successfully!");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus(" ~ Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus(" >< Server error. Please try later.");
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="py-20 w-full max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">Send us a Message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                                Name:
                            </label>
                            <input 
                                className="w-full p-3 border border-gray-300 rounded-lg transition-colors" 
                                type="text" 
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input 
                                className="w-full p-3 border border-gray-300 rounded-lg transition-colors" 
                                type="email" 
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                                Message:
                            </label>
                            <textarea 
                                className="w-full p-3 border border-gray-300 rounded-lg transition-colors" 
                                id="message"
                                name="message"
                                rows="2"
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button 
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            type="submit"
                        >
                            Send Message
                        </button>
                        {status && (
                            <p className="text-center mt-2">{status}</p>
                        )}
                    </form>
                </div>
                
                {/* Contact Information */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">Get in Touch</h2>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <svg className="w-6 h-6 text-blue-600 mt-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div className="mt-12">
                                <h3 className="font-semibold text-gray-800">Location</h3>
                                <p className="text-gray-600">Shanti Nagar, Bengaluru, Karnataka, India</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <svg className="w-6 h-6 text-blue-600 mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div className="mt-2">
                                <h3 className="font-semibold text-gray-800">Email</h3>
                                <p className="text-gray-600">explore.shantinagar@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-gray-800 mt-15">&copy; {new Date().getFullYear()} Explore Shanthi Nagar. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;