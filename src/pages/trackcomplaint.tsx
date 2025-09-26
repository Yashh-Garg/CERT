import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Shield, Search, Phone, Mail, Calendar, Clock, CheckCircle,
    AlertTriangle, FileText, User, Eye, Download, Home,
    ArrowRight, RefreshCw
} from 'lucide-react';

const TrackComplaint = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('complaint_id');
    const [complaintData, setComplaintData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [captcha, setCaptcha] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaValue] = useState('ABC123');

    // Mock complaint data for demonstration
    const mockComplaintData = {
        complaintId: 'CC12345678',
        status: 'Under Investigation',
        dateRegistered: '2024-01-15',
        category: 'Financial Fraud',
        subCategory: 'Online Banking Fraud',
        priority: 'High',
        assignedOfficer: 'Inspector Raj Kumar',
        policeStation: 'Cyber Crime Cell, Delhi',
        lastUpdated: '2024-01-20',
        estimatedResolution: '2024-02-15',
        complainantName: 'John Doe',
        complainantEmail: 'john.doe@email.com',
        complainantPhone: '9876543210',
        incidentDate: '2024-01-10',
        location: 'New Delhi, Delhi',
        totalLoss: '₹50,000',
        description: 'Unauthorized transaction from my bank account through fraudulent website.',
        timeline: [
            {
                date: '2024-01-15',
                time: '10:30 AM',
                status: 'Complaint Registered',
                description: 'Your complaint has been successfully registered and assigned complaint ID CC12345678.',
                officer: 'System'
            },
            {
                date: '2024-01-16',
                time: '02:15 PM',
                status: 'Initial Review Completed',
                description: 'Initial review of the complaint completed. Case forwarded to investigation team.',
                officer: 'Sub Inspector Priya Sharma'
            },
            {
                date: '2024-01-18',
                time: '11:00 AM',
                status: 'Investigation Started',
                description: 'Investigation team has started working on your case. Suspect bank account details being verified.',
                officer: 'Inspector Raj Kumar'
            },
            {
                date: '2024-01-20',
                time: '04:30 PM',
                status: 'Evidence Analysis',
                description: 'Digital forensics team analyzing the evidence provided. Transaction trail being traced.',
                officer: 'Cyber Forensics Team'
            }
        ],
        nextSteps: [
            'Bank account freeze request submitted to concerned bank',
            'Coordination with bank fraud investigation team',
            'Technical analysis of fraudulent website',
            'Tracing of suspect digital footprints'
        ],
        documents: [
            { name: 'FIR Copy', type: 'PDF', size: '245 KB', date: '2024-01-16' },
            { name: 'Bank Statement Analysis', type: 'PDF', size: '1.2 MB', date: '2024-01-18' },
            { name: 'Digital Evidence Report', type: 'PDF', size: '890 KB', date: '2024-01-20' }
        ]
    };

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            alert('Please enter a complaint ID or mobile number');
            return;
        }

        if (captchaInput.toLowerCase() !== captchaValue.toLowerCase()) {
            alert('Please enter the correct captcha');
            return;
        }

        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            if (searchQuery === 'CC12345678' || searchQuery === '9876543210') {
                setComplaintData(mockComplaintData);
            } else {
                setComplaintData(null);
                alert('No complaint found with the provided details. Please check and try again.');
            }
            setLoading(false);
        }, 2000);
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'registered':
                return 'bg-blue-100 text-blue-800';
            case 'under investigation':
                return 'bg-yellow-100 text-yellow-800';
            case 'resolved':
                return 'bg-green-100 text-green-800';
            case 'closed':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-blue-100 text-blue-800';
        }
    };

    const getStatusIcon = (status) => {
        switch (status.toLowerCase()) {
            case 'complaint registered':
                return <CheckCircle className="w-4 h-4 text-blue-600" />;
            case 'initial review completed':
                return <Eye className="w-4 h-4 text-green-600" />;
            case 'investigation started':
                return <Search className="w-4 h-4 text-orange-600" />;
            case 'evidence analysis':
                return <FileText className="w-4 h-4 text-purple-600" />;
            default:
                return <Clock className="w-4 h-4 text-gray-600" />;
        }
    };

    const clearSearch = () => {
        setSearchQuery('');
        setCaptchaInput('');
        setComplaintData(null);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b-4 border-blue-600 shadow-sm">
                <div className="bg-blue-800 text-white py-2">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center text-sm">
                            <span>Government of India | Ministry of Home Affairs</span>
                            <span>Contact: 1930 (Toll Free)</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/120px-Emblem_of_India.svg.png"
                                alt="Government of India"
                                className="h-12 w-auto"
                            />
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">National Cybercrime Reporting Portal</h1>
                                <p className="text-sm text-gray-600">साइबर अपराध रिपोर्टिंग पोर्टल</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => window.location.href = '/'}
                                className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 transition-colors"
                            >
                                <Home className="w-4 h-4 inline mr-1" />
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8 text-sm">
                        <Link to="/" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Home</Link>
                        <Link to="/register_complaint" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Register a Complaint</Link>
                        <Link to="/trackcomplaint" className="py-3 px-2 border-b-2 border-white">Track your Complaint</Link>
                        <Link to="/" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Report & Check Suspect</Link>
                        <Link to="/" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Cyber Volunteers</Link>
                        <Link to="/awareness" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Learning Corner</Link>
                        <Link to="/contact" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Contact Us</Link>
                    </div>
                </div>
            </nav>

            {/* Breadcrumb */}
            <div className="bg-gray-100 py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="text-sm text-gray-600">Home &gt; Track your Complaint</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <Search className="h-16 w-16 text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Track Your Complaint
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Enter your complaint ID or registered mobile number to track the status and progress of your cybercrime complaint.
                    </p>
                </div>

                {/* Search Form */}
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                            Search Your Complaint
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Search Type
                                </label>
                                <select
                                    value={searchType}
                                    onChange={(e) => setSearchType(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="complaint_id">Complaint ID</option>
                                    <option value="mobile">Registered Mobile Number</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {searchType === 'complaint_id' ? 'Complaint ID' : 'Mobile Number'} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={
                                        searchType === 'complaint_id'
                                            ? 'Enter your complaint ID (e.g., CC12345678)'
                                            : 'Enter your registered mobile number'
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Captcha <span className="text-red-500">*</span>
                                </label>
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="bg-gray-100 border border-gray-300 px-4 py-2 rounded font-mono text-lg tracking-wider">
                                        {captchaValue}
                                    </div>
                                    <button
                                        type="button"
                                        className="text-blue-600 hover:text-blue-800"
                                        onClick={() => {/* Refresh captcha logic */ }}
                                    >
                                        <RefreshCw className="h-5 w-5" />
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    value={captchaInput}
                                    onChange={(e) => setCaptchaInput(e.target.value)}
                                    placeholder="Enter captcha"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="flex space-x-4">
                                <button
                                    onClick={clearSearch}
                                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                                >
                                    Clear
                                </button>
                                <button
                                    onClick={handleSearch}
                                    disabled={loading}
                                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {loading ? (
                                        <>
                                            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                            Searching...
                                        </>
                                    ) : (
                                        <>
                                            <Search className="w-4 h-4 mr-2" />
                                            Track Complaint
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <h3 className="font-medium text-blue-900 mb-2">Demo Instructions</h3>
                            <p className="text-sm text-blue-700">
                                For demonstration, use complaint ID: <strong>CC12345678</strong> or mobile number: <strong>9876543210</strong>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Complaint Details */}
                {complaintData && (
                    <div className="space-y-8">
                        {/* Basic Information */}
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Complaint Details</h2>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(complaintData.status)}`}>
                                    {complaintData.status}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">Complaint ID</h3>
                                    <p className="text-lg font-semibold text-gray-900">{complaintData.complaintId}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">Date Registered</h3>
                                    <p className="text-lg font-semibold text-gray-900">{complaintData.dateRegistered}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">Crime Category</h3>
                                    <p className="text-lg font-semibold text-gray-900">{complaintData.category}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">Priority</h3>
                                    <p className={`text-lg font-semibold ${complaintData.priority === 'High' ? 'text-red-600' : 'text-orange-600'}`}>
                                        {complaintData.priority}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">Assigned Officer</h3>
                                    <p className="text-lg font-semibold text-gray-900">{complaintData.assignedOfficer}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500 mb-1">Total Loss</h3>
                                    <p className="text-lg font-semibold text-red-600">{complaintData.totalLoss}</p>
                                </div>
                            </div>
                        </div>

                        {/* Progress Timeline */}
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Investigation Timeline</h2>

                            <div className="space-y-6">
                                {complaintData.timeline.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            {getStatusIcon(item.status)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm font-medium text-gray-900">{item.status}</h3>
                                                <span className="text-xs text-gray-500">{item.date} • {item.time}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                            <p className="text-xs text-gray-400 mt-1">Updated by: {item.officer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Next Steps */}
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Next Steps</h2>
                            <div className="space-y-3">
                                {complaintData.nextSteps.map((step, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Documents */}
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Documents</h2>
                            <div className="space-y-4">
                                {complaintData.documents.map((doc, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <FileText className="w-5 h-5 text-blue-600" />
                                            <div>
                                                <p className="font-medium text-gray-900">{doc.name}</p>
                                                <p className="text-sm text-gray-500">{doc.type} • {doc.size} • {doc.date}</p>
                                            </div>
                                        </div>
                                        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
                                            <Download className="w-4 h-4" />
                                            <span className="text-sm">Download</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                            <h2 className="text-xl font-bold text-blue-900 mb-4">Need Help?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium text-blue-900">Helpline</p>
                                        <p className="text-blue-700">1930 (24x7 Toll Free)</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium text-blue-900">Email Support</p>
                                        <p className="text-blue-700">cybercrime-helpline@gov.in</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-white rounded-lg">
                                <p className="text-sm text-gray-700">
                                    <strong>Investigation Officer:</strong> {complaintData.assignedOfficer}<br />
                                    <strong>Police Station:</strong> {complaintData.policeStation}<br />
                                    <strong>Last Updated:</strong> {complaintData.lastUpdated}<br />
                                    <strong>Estimated Resolution:</strong> {complaintData.estimatedResolution}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackComplaint;