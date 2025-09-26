import { useState } from 'react';
import { Shield, RefreshCw, User, Phone, Lock } from 'lucide-react';

// Updated Auth component matching Index page styling
const Auth = () => {
  const [currentView, setCurrentView] = useState<'login' | 'forgot'>('login');

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
              <a
                href="/"
                className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 text-sm">
            <a href="/" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Home</a>
            <a href="/register_complaint" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Register a Complaint</a>
            <a href="/trackcomplaint" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Track your Complaint</a>
            <a href="/" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Report & Check Suspect</a>
            <a href="/" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Cyber Volunteers</a>
            <a href="/awareness" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Learning Corner</a>
            <a href="/contact" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm text-gray-600">
            Home &gt; {currentView === 'login' ? 'Login' : 'Forgot Login Id'}
          </span>
        </div>
      </div>

      {/* Main Content with Timeline Elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Process Timeline */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login Process</h2>
          <div className="flex justify-center items-center space-x-4 md:space-x-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
              <div className="ml-2 md:ml-3">
                <p className="text-xs md:text-sm font-medium text-gray-900">Enter Details</p>
              </div>
            </div>
            <div className="w-8 md:w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold">2</div>
              <div className="ml-2 md:ml-3">
                <p className="text-xs md:text-sm font-medium text-gray-600">Verify OTP</p>
              </div>
            </div>
            <div className="w-8 md:w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold">3</div>
              <div className="ml-2 md:ml-3">
                <p className="text-xs md:text-sm font-medium text-gray-600">Access Portal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                — CHECK LIST FOR COMPLAINANT —
              </h2>
              <p className="text-red-600 font-medium">
                Please keep this information ready before filing your complaint:
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-bold mb-2 text-gray-900">Mandatory Information</h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li>Incident Date and Time.</li>
                  <li>Incident details (minimum 200 characters) without any special characters (#@^*"-|).</li>
                  <li>Soft copy of any national Id ( Voter Id, Driving license, Passport, PAN Card, Aadhar Card) of complainant in .jpeg, .jpg, .png format (file size should not more than 5 MB).</li>
                  <li className="font-medium">In case of financial fraud, please keep following information ready:</li>
                  <ul className="list-none ml-4 space-y-1">
                    <li>i) Name of the Bank/ Wallet/Merchant</li>
                    <li>ii) 12-digit Transaction id/UTR No.</li>
                    <li>iii) Date of transaction</li>
                    <li>iv) Fraud amount</li>
                  </ul>
                  <li>Soft copy of all the relevant evidences related to the cyber crime (not more than 10 MB each)</li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold mb-2 text-gray-900">Optional/Desirable Information:</h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li>Suspected website URLs/ Social Media handles (wherever applicable)</li>
                  <li>Suspect Details (if available)</li>
                  <ul className="list-none ml-4 space-y-1">
                    <li>i) Mobile No</li>
                    <li>ii) Email id</li>
                    <li>iii) Bank Account No</li>
                    <li>iv) Address</li>
                    <li>v) Soft copy of photograph of suspect in .jpeg, .jpg, .png format (not more than 5 MB)</li>
                    <li>vi) Any other document through which suspect can be identified.</li>
                  </ul>
                </ol>
              </div>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {currentView === 'login' ? (
              <CitizenLogin onForgotLogin={() => setCurrentView('forgot')} />
            ) : (
              <ForgotLoginId onBack={() => setCurrentView('login')} />
            )}
          </div>
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
};

// Citizen Login Component with Index theme
const CitizenLogin = ({ onForgotLogin }: { onForgotLogin: () => void }) => {
  const [formData, setFormData] = useState({
    loginId: '',
    mobile: '',
    otp: '',
    captcha: ''
  });
  const [otpSent, setOtpSent] = useState(false);
  const [captchaValue] = useState('DSZubc');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGetOtp = () => {
    const mobile = formData.mobile;
    if (!mobile || mobile.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setOtpSent(true);
    alert(`OTP sent to +91 ${mobile}`);
  };

  const handleSubmit = () => {
    if (!formData.loginId || !formData.mobile || !formData.otp || !formData.captcha) {
      alert('Please fill all required fields');
      return;
    }

    if (formData.captcha.toLowerCase() !== captchaValue.toLowerCase()) {
      alert('Please enter the correct captcha');
      return;
    }

    alert('Login successful! Redirecting...');
    window.location.href = '/';
  };

  const handleClear = () => {
    setFormData({
      loginId: '',
      mobile: '',
      otp: '',
      captcha: ''
    });
    setOtpSent(false);
  };

  return (
    <div>
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Shield className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-blue-900 mb-2">
          — LOGIN —
        </h2>
        <button
          onClick={() => window.location.href = '/register'}
          className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
        >
          Click Here for New User Registration
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LOGIN ID: <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={formData.loginId}
              onChange={(e) => handleInputChange('loginId', e.target.value)}
              placeholder="Your Login Id"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            MOBILE NO: <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
              <option>+91</option>
            </select>
            <div className="relative flex-1">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => handleInputChange('mobile', e.target.value)}
                placeholder="Mobile No."
                maxLength={10}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="button"
              onClick={handleGetOtp}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Get OTP
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            OTP: <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={formData.otp}
              onChange={(e) => handleInputChange('otp', e.target.value)}
              placeholder="Your OTP Number"
              maxLength={6}
              disabled={!otpSent}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Captcha: <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-gray-100 border border-gray-300 px-4 py-2 rounded font-mono text-lg tracking-wider">
              {captchaValue}
            </div>
            <button type="button" className="text-blue-600 hover:text-blue-800">
              <RefreshCw className="h-5 w-5" />
            </button>
          </div>
          <input
            type="text"
            value={formData.captcha}
            onChange={(e) => handleInputChange('captcha', e.target.value)}
            placeholder="Enter Captcha"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="flex space-x-4 pt-4">
          <button
            type="button"
            onClick={handleClear}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          onClick={onForgotLogin}
          className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
        >
          Forgot Login Id?
        </button>
        <span className="mx-2 text-gray-400">|</span>
        <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
          New User Registration
        </a>
      </div>
    </div>
  );
};

// Forgot Login ID Component
const ForgotLoginId = ({ onBack }: { onBack: () => void }) => {
  const [formData, setFormData] = useState({
    mobile: '',
    otp: '',
    captcha: ''
  });
  const [otpSent, setOtpSent] = useState(false);
  const [captchaValue] = useState('DSZubc');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGetOtp = () => {
    const mobile = formData.mobile;
    if (!mobile || mobile.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setOtpSent(true);
    alert(`OTP sent to +91 ${mobile}`);
  };

  const handleSubmit = () => {
    if (!formData.mobile || !formData.otp || !formData.captcha) {
      alert('Please fill all required fields');
      return;
    }

    if (formData.captcha.toLowerCase() !== captchaValue.toLowerCase()) {
      alert('Please enter the correct captcha');
      return;
    }

    alert('Your Login ID has been sent to your mobile number');
  };

  return (
    <div>
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Shield className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-blue-900 mb-2">
          — FORGOT LOGIN ID —
        </h2>
        <p className="text-gray-600 text-sm">
          Enter your registered mobile number to recover your Login ID
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            MOBILE NO: <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
              <option>+91</option>
            </select>
            <div className="relative flex-1">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => handleInputChange('mobile', e.target.value)}
                placeholder="Mobile No."
                maxLength={10}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="button"
              onClick={handleGetOtp}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Get OTP
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            OTP: <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={formData.otp}
              onChange={(e) => handleInputChange('otp', e.target.value)}
              placeholder="Your OTP Number"
              maxLength={6}
              disabled={!otpSent}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Captcha: <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-gray-100 border border-gray-300 px-4 py-2 rounded font-mono text-lg tracking-wider">
              {captchaValue}
            </div>
            <button type="button" className="text-blue-600 hover:text-blue-800">
              <RefreshCw className="h-5 w-5" />
            </button>
          </div>
          <input
            type="text"
            value={formData.captcha}
            onChange={(e) => handleInputChange('captcha', e.target.value)}
            placeholder="Enter Captcha"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="flex space-x-4 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
          >
            Back to Login
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;