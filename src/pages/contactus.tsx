import React from "react";
import { Mail, Phone, MapPin, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b-4 border-blue-600 shadow-sm">
                <div className="bg-blue-800 text-white py-2">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between text-sm">
                        <span>Government of India | Ministry of Home Affairs</span>
                        <span>Contact: 1930 (Toll Free)</span>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/120px-Emblem_of_India.svg.png"
                            alt="Government of India"
                            className="h-12 w-auto"
                        />
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">
                                National Cybercrime Reporting Portal
                            </h1>
                            <p className="text-sm text-gray-600">
                                साइबर अपराध रिपोर्टिंग पोर्टल
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            to="/awareness"
                            className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 transition-colors"
                        >
                            Cyber Awareness
                        </Link>
                        <Link
                            to="/auth"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded hover:bg-blue-700 transition-colors"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8 text-sm">
                        <Link to="/" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Home</Link>
                        <Link to="/register_complaint" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Register a Complaint</Link>
                        <Link to="/trackcomplaint" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Track your Complaint</Link>
                        <Link to="/" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Report & Check Suspect</Link>
                        <Link to="/" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Cyber Volunteers</Link>
                        <Link to="/awareness" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Learning Corner</Link>
                        <Link to="/contact" className="py-3 px-2 border-b-2 border-white">Contact Us</Link>
                    </div>
                </div>
            </nav>

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="text-sm text-gray-600">Home &gt; Contact Us</span>
                </div>
            </div>

            {/* Main Content */}
            <main className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                        <p className="text-lg text-gray-600">
                            We're here to help you with cybercrime-related concerns
                        </p>
                    </div>

                    {/* Contact Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <Phone className="w-10 h-10 text-green-600 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Helpline
                            </h3>
                            <p className="text-gray-600">1930 (24x7 Toll-Free)</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <Mail className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Email
                            </h3>
                            <p className="text-gray-600">cybercrime-helpline@gov.in</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <MapPin className="w-10 h-10 text-red-600 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Address
                            </h3>
                            <p className="text-gray-600">
                                Ministry of Home Affairs, New Delhi, India
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="mt-16 bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Send us a Message
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-400">
                    <p>
                        © 2024 Government o f India. All rights reserved. | Privacy Policy |
                        Terms & Conditions
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
