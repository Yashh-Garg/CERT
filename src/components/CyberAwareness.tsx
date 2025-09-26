import { useState } from 'react';
import {
  Shield,
  Mail,
  CreditCard,
  User,
  ShoppingCart,
  Phone,
  AlertTriangle,
  CheckCircle2,
  Eye,
  Download,
  ChevronDown,
  Smartphone,
  Globe,
  Lock,
  FileText,
  Search,
  Award,
  Clock,
  Users,
  BarChart3
} from 'lucide-react';

const CyberAwareness = () => {
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [expandedScam, setExpandedScam] = useState<string | null>(null);

  const scamTypes = [
    {
      id: 'phishing',
      title: 'Phishing Attacks',
      icon: Mail,
      description: 'Fake emails or messages asking for personal information',
      details: 'Scammers send emails that look like they\'re from legitimate companies to steal your login credentials, credit card numbers, or other sensitive information.',
      warning: 'Never click suspicious links or download attachments from unknown senders'
    },
    {
      id: 'fake-jobs',
      title: 'Fake Job Offers',
      icon: Smartphone,
      description: 'Fraudulent employment opportunities requiring upfront payments',
      details: 'Scammers post fake job listings and ask for registration fees, training costs, or personal documents before offering employment.',
      warning: 'Legitimate employers never ask for money upfront'
    },
    {
      id: 'credit-fraud',
      title: 'Credit Card Fraud',
      icon: CreditCard,
      description: 'Unauthorized use of your credit/debit card information',
      details: 'Criminals use stolen card details to make purchases online or create duplicate cards for fraudulent transactions.',
      warning: 'Monitor your statements regularly and report suspicious transactions immediately'
    },
    {
      id: 'identity-theft',
      title: 'Identity Theft',
      icon: User,
      description: 'Stealing personal information to impersonate you',
      details: 'Fraudsters collect your personal details like Aadhaar, PAN, or passport information to open accounts or take loans in your name.',
      warning: 'Never share personal documents with unverified sources'
    },
    {
      id: 'shopping-fraud',
      title: 'Online Shopping Fraud',
      icon: ShoppingCart,
      description: 'Fake online stores or non-delivery of purchased items',
      details: 'Scammers create fake e-commerce websites with attractive deals, collect payments, but never deliver the products.',
      warning: 'Only shop from verified and trusted websites'
    },
    {
      id: 'investment-fraud',
      title: 'Investment Scams',
      icon: Globe,
      description: 'Fraudulent investment schemes promising high returns',
      details: 'Scammers promise unrealistic returns on investments in cryptocurrency, stocks, or business opportunities.',
      warning: 'If it sounds too good to be true, it probably is'
    }
  ];

  const actionSteps = [
    {
      step: 1,
      title: 'Immediate Response',
      icon: AlertTriangle,
      actions: [
        'Stop all communication with the scammer',
        'Do not share any more personal information',
        'Take screenshots of messages/emails as evidence',
        'Change passwords of affected accounts immediately'
      ]
    },
    {
      step: 2,
      title: 'Secure Your Accounts',
      icon: Lock,
      actions: [
        'Enable two-factor authentication on all accounts',
        'Contact your bank to block cards if compromised',
        'Check and freeze credit reports if identity theft suspected',
        'Update security questions and recovery information'
      ]
    },
    {
      step: 3,
      title: 'Report the Crime',
      icon: Phone,
      actions: [
        'File a complaint on the National Cyber Crime Portal',
        'Report to local police cyber cell',
        'Contact your bank\'s fraud department',
        'Report to relevant regulatory authorities'
      ]
    },
    {
      step: 4,
      title: 'Prevent Future Risks',
      icon: Shield,
      actions: [
        'Install updated antivirus software',
        'Regularly monitor bank and credit card statements',
        'Be cautious with unsolicited calls and emails',
        'Educate family members about common scams'
      ]
    }
  ];

  const safetyTips = [
    { type: 'do', tip: 'Verify website URLs before entering sensitive information', icon: CheckCircle2 },
    { type: 'dont', tip: 'Never share OTPs, passwords, or PINs with anyone', icon: AlertTriangle },
    { type: 'do', tip: 'Use strong, unique passwords for different accounts', icon: CheckCircle2 },
    { type: 'dont', tip: 'Don\'t click on suspicious links or download unknown attachments', icon: AlertTriangle },
    { type: 'do', tip: 'Keep your software and apps updated regularly', icon: CheckCircle2 },
    { type: 'dont', tip: 'Never provide personal information over unsolicited calls', icon: AlertTriangle },
    { type: 'do', tip: 'Use official apps and websites for transactions', icon: CheckCircle2 },
    { type: 'dont', tip: 'Don\'t use public Wi-Fi for banking or sensitive activities', icon: AlertTriangle }
  ];

  const checkQuizAnswer = (answer: string) => {
    setQuizAnswer(answer);
  };

  const toggleScamExpansion = (scamId: string) => {
    setExpandedScam(expandedScam === scamId ? null : scamId);
  };

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
              <button
                onClick={() => window.location.href = '/report'}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-600 rounded hover:bg-red-700 transition-colors"
              >
                Report Crime
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
            <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Register a Complaint</a>
            <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Track your Complaint</a>
            <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Report & Check Suspect</a>
            <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Cyber Volunteers</a>
            <a href="#" className="py-3 px-2 border-b-2 border-white">Learning Corner</a>
            <a href="#" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cyber Crime Awareness Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay Alert, Stay Safe — Learn about the most common online frauds and the steps you should take if you ever face them.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2.1M+</div>
              <div className="text-sm text-gray-600">Cyber Crimes Reported</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Prevention Success Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1930</div>
              <div className="text-sm text-gray-600">24x7 Helpline Number</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">₹15,000 Cr</div>
              <div className="text-sm text-gray-600">Losses Prevented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Cyber Crimes Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Cyber Crimes</h2>
            <p className="text-lg text-gray-600">Click on each type to learn more about how to identify and avoid them</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scamTypes.map((scam) => {
              const Icon = scam.icon;
              const isExpanded = expandedScam === scam.id;

              return (
                <div key={scam.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleScamExpansion(scam.id)}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-red-100 rounded-full mr-3">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{scam.title}</h3>
                        <p className="text-sm text-gray-600">{scam.description}</p>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-gray-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-700 mb-4">{scam.details}</p>
                        <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                          <div className="flex items-start space-x-2">
                            <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <p className="text-sm font-medium text-red-700">{scam.warning}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What To Do Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What To Do If It Happens</h2>
            <p className="text-lg text-gray-600">Follow these steps immediately if you become a victim of cybercrime</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {actionSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-orange-100 rounded-full mr-3">
                      <Icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Step {step.step}: {step.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {step.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Safety Tips</h2>
            <p className="text-lg text-gray-600">Key do's and don'ts to keep yourself safe online</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className={`bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow ${tip.type === 'do' ? 'hover:border-green-200' : 'hover:border-red-200'
                  }`}>
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full ${tip.type === 'do' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                      <Icon className={`h-5 w-5 ${tip.type === 'do' ? 'text-green-600' : 'text-red-600'
                        }`} />
                    </div>
                    <div className="flex-1">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${tip.type === 'do'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                        }`}>
                        {tip.type === 'do' ? "DO" : "DON'T"}
                      </span>
                      <p className="text-sm text-gray-700">{tip.tip}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Spot the Scam</h2>
            <p className="text-lg text-gray-600">Test your knowledge - Can you identify what's wrong with this email?</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quiz: Is this email legitimate?</h3>

            <div className="p-4 bg-gray-100 rounded-lg mb-6 font-mono text-sm">
              <p className="font-bold">From: security@sbi-bank.in</p>
              <p className="font-bold">Subject: Urgent: Your account will be suspended</p>
              <br />
              <p>Dear Customer,</p>
              <br />
              <p>Your SBI account will be suspended within 24 hours due to security reasons. Click the link below to verify your account immediately:</p>
              <br />
              <p className="text-blue-600 underline">www.sbi-verify-account.com/urgent</p>
              <br />
              <p>Provide your login ID, password, and OTP to avoid suspension.</p>
              <br />
              <p>Regards,<br />SBI Security Team</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => checkQuizAnswer('scam')}
                className={`p-4 rounded-lg border-2 transition-colors ${quizAnswer === 'scam'
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-gray-300 hover:border-gray-400'
                  }`}
              >
                This is a scam email
              </button>
              <button
                onClick={() => checkQuizAnswer('legitimate')}
                className={`p-4 rounded-lg border-2 transition-colors ${quizAnswer === 'legitimate'
                    ? 'border-red-500 bg-red-50 text-red-800'
                    : 'border-gray-300 hover:border-gray-400'
                  }`}
              >
                This is a legitimate email
              </button>
            </div>

            {quizAnswer && (
              <div className={`p-4 rounded-lg ${quizAnswer === 'scam'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
                }`}>
                {quizAnswer === 'scam' ? (
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-800">Correct!</span>
                    </div>
                    <p className="text-sm text-green-700 mb-2">This is a phishing scam. Red flags include:</p>
                    <ul className="text-sm text-green-700 space-y-1 list-disc list-inside">
                      <li>Suspicious domain (sbi-bank.in instead of onlinesbi.sbi)</li>
                      <li>Urgent language creating panic</li>
                      <li>Asking for passwords and OTPs</li>
                      <li>Unofficial URL for verification</li>
                    </ul>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <span className="font-semibold text-red-800">Incorrect!</span>
                    </div>
                    <p className="text-sm text-red-700">This is a phishing scam. Banks never ask for passwords or OTPs via email.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources & Help Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Help</h2>
            <p className="text-lg text-gray-600">Get immediate help and access educational resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cyber Helpline</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">1930</p>
              <p className="text-sm text-gray-600">24/7 National Cyber Crime Helpline</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Call Now
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Report Online</h3>
              <p className="text-sm text-gray-600 mb-4">File complaint on official portal</p>
              <button className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                Visit cybercrime.gov.in
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety Checklist</h3>
              <p className="text-sm text-gray-600 mb-4">Download comprehensive safety guide</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

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

export default CyberAwareness;