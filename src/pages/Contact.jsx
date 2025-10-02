import React from 'react';

const Contact = () => {
    return (
        <div className="py-20 w-full max-w-2xl mx-auto">
            <h1 className="text-3xl text-center font-bold mb-6">Contact Us</h1>
            <p className="mb-4">If you have any questions or inquiries, feel free to reach out to us!</p>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                    <input 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                        type="text" 
                        id="name" 
                        required 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                        type="email" 
                        id="email" 
                        required 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                        id="message" 
                        rows="4" 
                        required
                    ></textarea>
                </div>
                <button 
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    type="submit"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;