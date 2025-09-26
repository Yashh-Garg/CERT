import React, { useState } from "react";
import {
  Shield,
  FileText,
  Search,
  Phone,
  AlertTriangle,
  CheckCircle,
  Clock,
  Award,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import CitizenLogin from "@/components/auth/CitizenLogin";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "awareness":
        return <CyberAwareness />;
      case "auth":
        return <CitizenLogin onForgotLogin={() => {}} />;
      default:
        return <CybercrimeReporting />;
    }
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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/120px-Emblem_of_India.svg.png"
                alt="Government of India"
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Cybercrime Reporting Portal
                </h1>
                <p className="text-sm text-gray-600">
                  साइबर अपराध रिपोर्टिंग पोर्टल
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveTab("awareness")}
                className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 transition-colors"
              >
                Cyber Awareness
              </button>
              <button
                onClick={() => setActiveTab("auth")}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 text-sm">
            <Link
              to="/"
              className={`py-3 px-2 border-b-2 ${activeTab === "home"
                ? "border-white"
                : "border-transparent hover:border-blue-300"
                }`}
              onClick={() => setActiveTab("home")}
            >
              Home
            </Link>

            <Link
              to="/register_complaint"
              className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300"
            >
              Register a Complaint
            </Link>

            <Link
              to="/trackcomplaint"
              className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300"
            >
              Track your Complaint
            </Link>

            <Link
              to="/Report_Check Suspect"
              className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300"
            >
              Report & Check Suspect
            </Link>
            <Link
              to="/Cyber_Volunteers"
              className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300"
            >
              Cyber Volunteers
            </Link>

            <button
              onClick={() => setActiveTab("awareness")}
              className={`py-3 px-2 border-b-2 ${activeTab === "awareness"
                ? "border-white"
                : "border-transparent hover:border-blue-300"
                }`}
            >
              Learning Corner
            </button>

            <Link to="/contact" className="py-3 px-2 border-b-2 border-transparent hover:border-blue-300">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm text-gray-600">
            Home {activeTab === 'auth' ? '> Login' : activeTab === 'awareness' ? '> Learning Corner' : ''}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main>{renderContent()}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="/register_complaint" className="hover:text-white">
                    File Complaint
                  </Link>
                </li>
                <li>
                  <Link to="/trackcomplaint" className="hover:text-white">
                    Track Status
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("awareness")}
                    className="hover:text-white"
                  >
                    Safety Guidelines
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Cyber Laws
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("awareness")}
                    className="hover:text-white"
                  >
                    Prevention Tips
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Training Materials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Statistics
                  </a>
                </li>
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
                  <a href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>
              © 2024 Government of India. All rights reserved. | Privacy Policy |
              Terms & Conditions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* -------------------- Cybercrime Reporting -------------------- */
const CybercrimeReporting = () => {
  const steps = [
    {
      title: "Report Your Incident",
      description: "Secure digital crime reporting",
      icon: Shield,
      action: "Start Report",
      color: "blue",
    },
    {
      title: "Track Your Case",
      description: "Monitor investigation progress",
      icon: Search,
      action: "Track Status",
      color: "green",
    },
    {
      title: "Get Emergency Help",
      description: "24/7 immediate assistance",
      icon: Phone,
      action: "Call 1930",
      color: "red",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cybercrime Reporting Portal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A secure platform to report cybercrime incidents and track their
              resolution. Your digital safety is our priority.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${step.color === "blue"
                        ? "bg-blue-100 text-blue-600"
                        : step.color === "green"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                        }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <button
                      className={`w-full py-3 px-4 rounded font-medium transition-colors inline-flex items-center justify-center ${step.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : step.color === "green"
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-red-600 hover:bg-red-700 text-white"
                        }`}
                      onClick={() => {
                        if (step.color === 'blue') window.location.href = '/register_complaint';
                        else if (step.color === 'green') window.location.href = '/trackcomplaint';
                      }}
                    >
                      {step.action}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard
              icon={FileText}
              color="text-blue-600"
              value="25,847"
              label="Cases Registered"
            />
            <StatCard
              icon={CheckCircle}
              color="text-green-600"
              value="22,156"
              label="Cases Resolved"
            />
            <StatCard
              icon={Clock}
              color="text-orange-600"
              value="2.4 hrs"
              label="Average Response"
            />
            <StatCard
              icon={Award}
              color="text-purple-600"
              value="95.8%"
              label="Success Rate"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({
  icon: Icon,
  color,
  value,
  label,
}: {
  icon: any;
  color: string;
  value: string;
  label: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
    <Icon className={`h-8 w-8 ${color} mx-auto mb-2`} />
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

/* -------------------- Cyber Awareness -------------------- */
const CyberAwareness = () => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const topics = [
    {
      id: "recognize",
      title: "Recognize Threats",
      icon: AlertTriangle,
      color: "red",
      content:
        "Learn to identify phishing emails, fake websites, and social engineering attacks before they harm you.",
    },
    {
      id: "protect",
      title: "Protect Yourself",
      icon: Shield,
      color: "blue",
      content:
        "Implement strong passwords, two-factor authentication, and secure browsing habits to stay safe.",
    },
    {
      id: "respond",
      title: "Respond Quickly",
      icon: Phone,
      color: "orange",
      content:
        "Know exactly what to do if you become a victim - immediate steps to minimize damage.",
    },
    {
      id: "report",
      title: "Report & Recover",
      icon: CheckCircle,
      color: "green",
      content:
        "File complaints properly and work with authorities to recover losses and prevent future attacks.",
    },
  ];

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Cyber Awareness & Education
        </h2>
        <p className="text-lg text-gray-600">
          Your journey to digital safety starts here
        </p>
      </div>

      <div className="space-y-12">
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          const expanded = expandedTopic === topic.id;

          return (
            <div key={topic.id} className="relative">
              <div className="flex items-start">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${topic.color === "red"
                    ? "bg-red-500"
                    : topic.color === "blue"
                      ? "bg-blue-500"
                      : topic.color === "orange"
                        ? "bg-orange-500"
                        : "bg-green-500"
                    }`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-6 flex-1">
                  <h3
                    className={`text-xl font-bold mb-2 ${topic.color === "red"
                      ? "text-red-600"
                      : topic.color === "blue"
                        ? "text-blue-600"
                        : topic.color === "orange"
                          ? "text-orange-600"
                          : "text-green-600"
                      }`}
                  >
                    {topic.title}
                  </h3>
                  <div
                    className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md"
                    onClick={() =>
                      setExpandedTopic(expanded ? null : topic.id)
                    }
                  >
                    <p className="text-gray-700 mb-4">{topic.content}</p>
                    <button
                      className={`text-sm font-medium inline-flex items-center ${topic.color === "red"
                        ? "text-red-600 hover:text-red-800"
                        : topic.color === "blue"
                          ? "text-blue-600 hover:text-blue-800"
                          : topic.color === "orange"
                            ? "text-orange-600 hover:text-orange-800"
                            : "text-green-600 hover:text-green-800"
                        }`}
                    >
                      {expanded ? "Show Less" : "Learn More"}
                      <ArrowRight
                        className={`ml-1 w-4 h-4 transform transition-transform ${expanded ? "rotate-90" : ""
                          }`}
                      />
                    </button>
                    {expanded && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                          Includes real-world case studies, interactive
                          scenarios, and downloadable resources.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {index < topics.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-300"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
