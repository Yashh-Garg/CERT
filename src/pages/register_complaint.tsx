import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Shield, FileText, AlertTriangle, MapPin, User, CreditCard,
    Search, Upload, CheckCircle, Calendar, Phone, Mail,
    ArrowRight, ArrowLeft, Home, X, Trash2
} from 'lucide-react';

const RegisterComplaint = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        crimeCategory: '',
        subCategory: '',
        incidentDate: '',
        incidentTime: '',
        reportingDate: new Date().toISOString().split('T')[0],
        incidentState: '',
        incidentCity: '',
        incidentAddress: '',
        complainantName: '',
        complainantEmail: '',
        complainantPhone: '',
        complainantAddress: '',
        incidentDescription: '',
        totalLoss: '',
        currency: 'INR',
        bankName: '',
        transactionId: '',
        suspectName: '',
        suspectPhone: '',
        evidenceFiles: [],
        additionalInfo: ''
    });

    const crimeCategories = {
        'financial': {
            label: 'Financial Fraud',
            subCategories: [
                'Online Banking Fraud',
                'Credit/Debit Card Fraud',
                'UPI/Digital Wallet Fraud',
                'Investment/Stock Trading Fraud',
                'Cryptocurrency Fraud',
                'Insurance Fraud',
                'Loan Fraud'
            ]
        },
        'cyber_bullying': {
            label: 'Cyber Bullying / Stalking',
            subCategories: [
                'Cyber Stalking',
                'Cyber Bullying',
                'Online Harassment',
                'Morphing/Fake Profile',
                'Impersonation',
                'Threat via Email/SMS'
            ]
        },
        'hacking': {
            label: 'Hacking / Damage to Computer System',
            subCategories: [
                'Website Hacking',
                'Email Account Hacking',
                'Social Media Account Hacking',
                'Computer System Damage',
                'Data Theft',
                'Malware/Virus Attack'
            ]
        },
        'other': {
            label: 'Other Cyber Crime',
            subCategories: [
                'Fake Job Offers',
                'Online Matrimonial Fraud',
                'E-commerce Fraud',
                'Fake News/Misinformation',
                'Others'
            ]
        }
    };

    const indianStates = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
        'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
        'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
        'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
        'Uttarakhand', 'West Bengal'
    ];

    const steps = [
        { id: 1, title: 'Category Selection', icon: FileText },
        { id: 2, title: 'Incident Details', icon: AlertTriangle },
        { id: 3, title: 'Location Details', icon: MapPin },
        { id: 4, title: 'Personal Details', icon: User },
        { id: 5, title: 'Financial Details', icon: CreditCard },
        { id: 6, title: 'Suspect Information', icon: Search },
        { id: 7, title: 'Evidence Upload', icon: Upload },
        { id: 8, title: 'Review & Submit', icon: CheckCircle }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleFileUpload = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const newFiles = Array.from(files).slice(0, 10 - formData.evidenceFiles.length);
            setFormData(prev => ({
                ...prev,
                evidenceFiles: [...prev.evidenceFiles, ...newFiles]
            }));
        }
    };

    const removeFile = (index) => {
        setFormData(prev => ({
            ...prev,
            evidenceFiles: prev.evidenceFiles.filter((_, i) => i !== index)
        }));
    };

    const validateCurrentStep = () => {
        switch (currentStep) {
            case 1:
                if (!formData.crimeCategory || !formData.subCategory) {
                    alert('Please select both crime category and sub category');
                    return false;
                }
                break;
            case 2:
                if (!formData.incidentDate || formData.incidentDescription.length < 200) {
                    alert('Please provide incident date and description (minimum 200 characters)');
                    return false;
                }
                break;
            case 3:
                if (!formData.incidentState || !formData.incidentCity) {
                    alert('Please provide at least state and city information');
                    return false;
                }
                break;
            case 4:
                if (!formData.complainantName || !formData.complainantEmail || !formData.complainantPhone) {
                    alert('Please provide complainant name, email, and phone number');
                    return false;
                }
                break;
        }
        return true;
    };

    const nextStep = () => {
        if (validateCurrentStep()) {
            if (currentStep < steps.length) {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const submitComplaint = () => {
        const complaintId = `CC${Date.now().toString().slice(-8)}`;
        alert(`Complaint registered successfully!\n\nComplaint ID: ${complaintId}\n\nPlease save this ID for future reference. You will receive a confirmation email shortly.`);
        window.location.href = '/';
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Crime Category <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.crimeCategory}
                                onChange={(e) => {
                                    handleInputChange('crimeCategory', e.target.value);
                                    handleInputChange('subCategory', '');
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select Crime Category</option>
                                {Object.entries(crimeCategories).map(([key, category]) => (
                                    <option key={key} value={key}>{category.label}</option>
                                ))}
                            </select>
                        </div>

                        {formData.crimeCategory && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Sub Category <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={formData.subCategory}
                                    onChange={(e) => handleInputChange('subCategory', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="">Select Sub Category</option>
                                    {crimeCategories[formData.crimeCategory].subCategories.map((sub) => (
                                        <option key={sub} value={sub}>{sub}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {formData.crimeCategory && formData.subCategory && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <h3 className="font-medium text-blue-900 mb-2">Selected Category Information</h3>
                                <p className="text-sm text-blue-700">
                                    <strong>Category:</strong> {crimeCategories[formData.crimeCategory].label}
                                </p>
                                <p className="text-sm text-blue-700">
                                    <strong>Sub Category:</strong> {formData.subCategory}
                                </p>
                            </div>
                        )}
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Calendar className="w-4 h-4 inline mr-1" />
                                    Incident Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    value={formData.incidentDate}
                                    onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                                    max={new Date().toISOString().split('T')[0]}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Incident Time (Approximate)
                                </label>
                                <input
                                    type="time"
                                    value={formData.incidentTime}
                                    onChange={(e) => handleInputChange('incidentTime', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Incident Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                value={formData.incidentDescription}
                                onChange={(e) => handleInputChange('incidentDescription', e.target.value)}
                                placeholder="Please provide detailed description of the incident. Include what happened, how it happened, what devices/accounts were affected, and any other relevant information. (Minimum 200 characters required)"
                                rows={8}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <div className="flex justify-between mt-1">
                                <p className={`text-sm ${formData.incidentDescription.length >= 200 ? 'text-green-600' : 'text-red-500'}`}>
                                    Character count: {formData.incidentDescription.length}/200 (minimum required)
                                </p>
                                {formData.incidentDescription.length >= 200 && (
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Total Loss Amount (if any)
                                </label>
                                <div className="flex">
                                    <select
                                        value={formData.currency}
                                        onChange={(e) => handleInputChange('currency', e.target.value)}
                                        className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="INR">₹ INR</option>
                                        <option value="USD">$ USD</option>
                                        <option value="EUR">€ EUR</option>
                                    </select>
                                    <input
                                        type="number"
                                        value={formData.totalLoss}
                                        onChange={(e) => handleInputChange('totalLoss', e.target.value)}
                                        placeholder="0.00"
                                        min="0"
                                        step="0.01"
                                        className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Reporting Date
                                </label>
                                <input
                                    type="date"
                                    value={formData.reportingDate}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <MapPin className="w-4 h-4 inline mr-1" />
                                    State/UT <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={formData.incidentState}
                                    onChange={(e) => handleInputChange('incidentState', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="">Select State/UT</option>
                                    {indianStates.map((state) => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.incidentCity}
                                    onChange={(e) => handleInputChange('incidentCity', e.target.value)}
                                    placeholder="Enter City"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Complete Address (if applicable)
                            </label>
                            <textarea
                                value={formData.incidentAddress}
                                onChange={(e) => handleInputChange('incidentAddress', e.target.value)}
                                placeholder="Enter complete address where incident occurred (if physical location is relevant)"
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                            <h3 className="font-medium text-blue-900 mb-2">Complainant Information</h3>
                            <p className="text-sm text-blue-700">
                                Please provide your personal details as the person filing this complaint.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <User className="w-4 h-4 inline mr-1" />
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.complainantName}
                                    onChange={(e) => handleInputChange('complainantName', e.target.value)}
                                    placeholder="Enter your full name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Mail className="w-4 h-4 inline mr-1" />
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={formData.complainantEmail}
                                    onChange={(e) => handleInputChange('complainantEmail', e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Phone className="w-4 h-4 inline mr-1" />
                                    Mobile Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    value={formData.complainantPhone}
                                    onChange={(e) => handleInputChange('complainantPhone', e.target.value)}
                                    placeholder="Enter 10-digit mobile number"
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Complete Address <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                value={formData.complainantAddress}
                                onChange={(e) => handleInputChange('complainantAddress', e.target.value)}
                                placeholder="Enter your complete address"
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="space-y-6">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                            <h3 className="font-medium text-orange-900 mb-2">Financial Details</h3>
                            <p className="text-sm text-orange-700">
                                Please provide financial details if this is a financial fraud case.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Bank Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.bankName}
                                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                                    placeholder="Enter bank name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Transaction ID/UTR Number
                                </label>
                                <input
                                    type="text"
                                    value={formData.transactionId}
                                    onChange={(e) => handleInputChange('transactionId', e.target.value)}
                                    placeholder="Enter transaction ID"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                );

            case 6:
                return (
                    <div className="space-y-6">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                            <h3 className="font-medium text-red-900 mb-2">Suspect Information</h3>
                            <p className="text-sm text-red-700">
                                Please provide any information you have about the suspect(s).
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Suspect Name (if known)
                                </label>
                                <input
                                    type="text"
                                    value={formData.suspectName}
                                    onChange={(e) => handleInputChange('suspectName', e.target.value)}
                                    placeholder="Enter suspect name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Suspect Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={formData.suspectPhone}
                                    onChange={(e) => handleInputChange('suspectPhone', e.target.value)}
                                    placeholder="Enter phone number"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                );

            case 7:
                return (
                    <div className="space-y-6">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                            <h3 className="font-medium text-green-900 mb-2">Evidence Upload</h3>
                            <p className="text-sm text-green-700">
                                Upload supporting evidence such as screenshots, bank statements, emails, etc.
                            </p>
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-sm text-gray-600 mb-4">
                                Upload evidence files (Max 10 files, 5MB each)
                            </p>
                            <input
                                type="file"
                                multiple
                                accept=".pdf,.jpg,.jpeg,.png,.txt,.doc,.docx"
                                onChange={handleFileUpload}
                                className="hidden"
                                id="evidence-upload"
                            />
                            <label
                                htmlFor="evidence-upload"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                            >
                                Choose Files
                            </label>
                        </div>

                        {formData.evidenceFiles.length > 0 && (
                            <div className="mt-6">
                                <h4 className="font-medium mb-3">Uploaded Files:</h4>
                                <div className="space-y-2">
                                    {formData.evidenceFiles.map((file, index) => (
                                        <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                                            <span className="text-sm">{file.name}</span>
                                            <button
                                                type="button"
                                                onClick={() => removeFile(index)}
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Additional Information
                            </label>
                            <textarea
                                value={formData.additionalInfo}
                                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                                placeholder="Any additional information that might help with the investigation"
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                );

            case 8:
                return (
                    <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                            <h3 className="font-medium text-blue-900 mb-2">Review Your Complaint</h3>
                            <p className="text-sm text-blue-700">
                                Please review all information before submitting your complaint.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900">Crime Category</h4>
                                    <p className="text-sm text-gray-600">
                                        {formData.crimeCategory && crimeCategories[formData.crimeCategory].label} - {formData.subCategory}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900">Incident Details</h4>
                                    <p className="text-sm text-gray-600">Date: {formData.incidentDate}</p>
                                    <p className="text-sm text-gray-600">Location: {formData.incidentCity}, {formData.incidentState}</p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900">Complainant</h4>
                                    <p className="text-sm text-gray-600">{formData.complainantName}</p>
                                    <p className="text-sm text-gray-600">{formData.complainantEmail}</p>
                                    <p className="text-sm text-gray-600">{formData.complainantPhone}</p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-900">Evidence Files</h4>
                                    <p className="text-sm text-gray-600">{formData.evidenceFiles.length} files uploaded</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <div className="flex items-center">
                                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                                <div>
                                    <h4 className="font-medium text-yellow-900">Important Notice</h4>
                                    <p className="text-sm text-yellow-700">
                                        By submitting this complaint, you confirm that all information provided is true and accurate to the best of your knowledge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const progress = (currentStep / steps.length) * 100;
    const StepIcon = steps[currentStep - 1].icon;

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
                        <Link to="/register_complaint" className="py-3 px-2 border-b-2 border-white">Register a Complaint</Link>
                        <Link to="/trackcomplaint" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Track your Complaint</Link>
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
                    <span className="text-sm text-gray-600">Home &gt; Register a Complaint</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Step {currentStep} of {steps.length}</span>
                        <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                            <StepIcon className="w-5 h-5 mr-2" />
                            {steps[currentStep - 1].title}
                        </h2>
                    </div>
                </div>

                {/* Form Content */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
                    {renderStepContent()}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
                        <button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Previous
                        </button>

                        <div className="flex space-x-4">
                            <button
                                onClick={() => window.location.href = '/'}
                                className="px-6 py-2 border border-red-300 text-red-700 rounded-md hover:bg-red-50 transition-colors"
                            >
                                Cancel
                            </button>

                            {currentStep === steps.length ? (
                                <button
                                    onClick={submitComplaint}
                                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
                                >
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Submit Complaint
                                </button>
                            ) : (
                                <button
                                    onClick={nextStep}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
                                >
                                    Next
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterComplaint;