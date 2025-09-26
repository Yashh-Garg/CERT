import { useState } from 'react';
import {
  Shield,
  FileText,
  Upload,
  CheckCircle,
  AlertTriangle,
  Lock,
  Users,
  Calendar,
  Phone,
  Search,
  Award,
  Clock,
  BarChart3
} from 'lucide-react';

const INCIDENT_TYPES = [
  { value: 'phishing', label: 'Phishing Attack', icon: AlertTriangle },
  { value: 'malware', label: 'Malware/Virus', icon: Shield },
  { value: 'unauthorized-access', label: 'Unauthorized Access', icon: Lock },
  { value: 'identity-theft', label: 'Identity Theft', icon: Users },
  { value: 'financial-fraud', label: 'Financial Fraud', icon: FileText },
  { value: 'ddos', label: 'DDoS Attack', icon: Shield },
  { value: 'other', label: 'Other', icon: AlertTriangle },
];

export default function CybercrimeReporting() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    incidentType: '',
    discoveryDate: '',
    startDate: '',
    description: '',
    affectedSystems: '',
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    financialLoss: '',
    evidenceFiles: [] as File[],
  });

  const steps = [
    'Incident Type',
    'Discovery Details',
    'Impact Assessment',
    'Reporter Information',
    'Evidence Upload',
    'Review & Submit'
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit the form
      alert('Report submitted successfully! You will receive a confirmation email shortly.');
      window.location.href = '/';
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      setFormData(prev => ({
        ...prev,
        evidenceFiles: [...prev.evidenceFiles, ...Array.from(files)]
      }));
    }
  };

  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Official Government Header */}
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/120px-Emblem_of_India.svg.png"
                  alt="Government of India" className="h-12 w-auto" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">National Cybercrime Reporting Portal</h1>
                  <p className="text-sm text-gray-600">साइबर अपराध रिपोर्टिंग पोर्टल</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => window.location.href = '/awareness'}
                  className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 transition-colors"
                >
                  Cyber Awareness
                </button>
                <button
                  onClick={() => window.location.href = '/auth'}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded hover:bg-blue-700 transition-colors"
                >
                  Citizen Login
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 text-sm">
              <a href="/" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Home</a>
              <a href="#" className="py-3 px-2 border-b-2 border-white">Register a Complaint</a>
              <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Track your Complaint</a>
              <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Report & Check Suspect</a>
              <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Cyber Volunteers</a>
              <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Learning Corner</a>
              <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Contact Us</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cybercrime Reporting Portal
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Report cybercrime incidents to the Computer Emergency Response Team (CERT)
              with our secure, comprehensive reporting system.
            </p>
            <button
              onClick={() => setCurrentStep(1)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start Report
              <FileText className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <section className="bg-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">25,847</div>
                <div className="text-sm text-gray-600">Cases Registered</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">22,156</div>
                <div className="text-sm text-gray-600">Cases Resolved</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">2.4 hrs</div>
                <div className="text-sm text-gray-600">Average Response</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">95.8%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Our streamlined process ensures your incident is properly documented and reported
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Document the Incident",
                description: "Provide detailed information about the cybercrime incident"
              },
              {
                icon: Upload,
                title: "Upload Evidence",
                description: "Attach supporting documents, screenshots, and transaction records"
              },
              {
                icon: CheckCircle,
                title: "Submit Report",
                description: "Your report is securely transmitted to the appropriate CERT team"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white">File Complaint</a></li>
                  <li><a href="#" className="hover:text-white">Track Status</a></li>
                  <li><a href="#" className="hover:text-white">Safety Guidelines</a></li>
                  <li><a href="#" className="hover:text-white">FAQs</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white">Cyber Laws</a></li>
                  <li><a href="#" className="hover:text-white">Prevention Tips</a></li>
                  <li><a href="#" className="hover:text-white">Training Materials</a></li>
                  <li><a href="#" className="hover:text-white">Statistics</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>Helpline: 1930 (24x7)</p>
                  <p>Email: cybercrime-helpline@gov.in</p>
                  <p>Ministry of Home Affairs</p>
                  <p>Government of India</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>Stay updated with latest</p>
                  <p>cybersecurity information</p>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
              <p>© 2024 Government of India. All rights reserved. | Privacy Policy | Terms & Conditions</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Official Government Header */}
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
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/120px-Emblem_of_India.svg.png"
                alt="Government of India" className="h-12 w-auto" />
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
            <a href="/" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Home</a>
            <a href="#" className="py-3 px-2 border-b-2 border-white">Register a Complaint</a>
            <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Track your Complaint</a>
            <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Report & Check Suspect</a>
            <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Cyber Volunteers</a>
            <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Learning Corner</a>
            <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Contact Us</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Cybercrime Incident Report
          </h1>
          <p className="text-gray-600">
            Step {currentStep} of {steps.length}: {steps[currentStep - 1]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">{steps[currentStep - 1]}</h2>
          </div>

          <div className="space-y-6">
            {/* Step 1: Incident Type */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Type of Incident *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {INCIDENT_TYPES.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.value}
                        onClick={() => handleInputChange('incidentType', type.value)}
                        className={`p-4 border-2 rounded-lg text-left transition-colors ${formData.incidentType === type.value
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-gray-600" />
                          <span className="font-medium">{type.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Discovery Details */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date and Time Discovered *</label>
                  <input
                    type="datetime-local"
                    value={formData.discoveryDate}
                    onChange={(e) => handleInputChange('discoveryDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Start Date and Time</label>
                  <input
                    type="datetime-local"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description *</label>
                  <textarea
                    placeholder="Please provide a detailed description of the incident, including what happened, where it occurred, and any relevant circumstances..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Impact Assessment */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Affected Systems/Accounts *</label>
                  <textarea
                    placeholder="List all affected systems, networks, accounts, or devices..."
                    value={formData.affectedSystems}
                    onChange={(e) => handleInputChange('affectedSystems', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Financial Loss (₹)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={formData.financialLoss}
                    onChange={(e) => handleInputChange('financialLoss', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Reporter Information */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.reporterName}
                    onChange={(e) => handleInputChange('reporterName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.reporterEmail}
                    onChange={(e) => handleInputChange('reporterEmail', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.reporterPhone}
                    onChange={(e) => handleInputChange('reporterPhone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Step 5: Evidence Upload */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Supporting Evidence</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-gray-600 mb-4">
                      Upload screenshots, bank statements, emails, or other evidence
                    </p>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png,.txt,.doc,.docx"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="max-w-xs mx-auto"
                    />
                  </div>
                  {formData.evidenceFiles.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Uploaded Files:</p>
                      <ul className="text-sm text-gray-600">
                        {formData.evidenceFiles.map((file, index) => (
                          <li key={index}>• {file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 6: Review */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Report Summary</h3>
                  <div className="grid gap-4">
                    <div>
                      <strong>Incident Type:</strong> {formData.incidentType}
                    </div>
                    <div>
                      <strong>Discovery Date:</strong> {formData.discoveryDate}
                    </div>
                    <div>
                      <strong>Reporter:</strong> {formData.reporterName} ({formData.reporterEmail})
                    </div>
                    <div>
                      <strong>Evidence Files:</strong> {formData.evidenceFiles.length} files attached
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" className="rounded" />
                  <label htmlFor="terms" className="text-sm">
                    I confirm that the information provided is accurate and complete to the best of my knowledge
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <button
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                {currentStep === steps.length ? 'Submit Report' : 'Next'}
                {currentStep === steps.length && <CheckCircle className="ml-2 w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}