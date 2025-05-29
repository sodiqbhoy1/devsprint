import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaClock, FaLaptopCode, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import Navbar from './Navbar';

const CurriculumPage = () => {
  const [expandedModule, setExpandedModule] = useState(0);
  
  const curriculum = [
    {
      title: "Module 1: Frontend Foundations",
      duration: "4 weeks",
      topics: [
        "HTML5 & Semantic Web",
        "CSS3, Flexbox & Grid Layouts",
        "JavaScript Fundamentals (ES6+)",
        "Responsive Web Design Principles",
        "Git & GitHub Fundamentals",
        "Introduction to React"
      ],
      projects: "Personal Portfolio Website"
    },
    {
      title: "Module 2: React Development",
      duration: "4 weeks",
      topics: [
        "React Components & Props",
        "State Management with Hooks",
        "React Router for Navigation",
        "Context API for Global State",
        "API Integration with Axios",
        "State Management with Redux"
      ],
      projects: "E-commerce Product Catalog"
    },
    {
      title: "Module 3: Backend Development",
      duration: "4 weeks",
      topics: [
        "Node.js & Express Framework",
        "RESTful API Design",
        "MongoDB & Mongoose ODM",
        "User Authentication with JWT",
        "PostgreSQL & SQL Fundamentals",
        "API Security Best Practices"
      ],
      projects: "Authentication System with User Profiles"
    },
    {
      title: "Module 4: Full Stack Integration",
      duration: "4 weeks",
      topics: [
        "Connecting React Frontend to Node Backend",
        "Deployment Strategies (Vercel, Netlify, Heroku)",
        "Testing (Jest, React Testing Library)",
        "CI/CD Pipelines",
        "WebSockets & Real-time Applications",
        "Performance Optimization Techniques"
      ],
      projects: "Capstone Project: Full Stack Application"
    }
  ];

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? -1 : index);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen  bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Full Stack Development Curriculum</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Master the complete web development stack in our intensive 16-week program
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-lg">
                <FaClock className="mr-2" />
                <span>16 Weeks Program</span>
              </div>
              <div className="flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-lg">
                <FaLaptopCode className="mr-2" />
                <span>500+ Hours of Learning</span>
              </div>
              <div className="flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-lg">
                <FaGraduationCap className="mr-2" />
                <span>4 Portfolio Projects</span>
              </div>
              <div className="flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-lg">
                <FaCertificate className="mr-2" />
                <span>Industry-recognized Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Curriculum Breakdown</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive program covers all essential technologies for modern web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Frontend Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  React.js
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Next.js
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  TypeScript
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Redux
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Backend Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Node.js
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Express.js
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  MongoDB
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  PostgreSQL
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  REST APIs
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Development Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Git & GitHub
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Docker
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  VS Code
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Postman
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Webpack
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Professional Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Agile Methodology
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Code Reviews
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Technical Interview Prep
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Portfolio Building
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">✓</span>
                  Career Coaching
                </li>
              </ul>
            </div>
          </div>

          {/* Detailed Curriculum */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Detailed Program Structure</h3>
            
            <div className="space-y-6">
              {curriculum.map((module, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div 
                    className={`flex justify-between items-center p-6 cursor-pointer ${
                      expandedModule === index ? 'bg-blue-50' : 'bg-white'
                    }`}
                    onClick={() => toggleModule(index)}
                  >
                    <div>
                      <h4 className="text-xl font-bold text-blue-800">{module.title}</h4>
                      <p className="text-gray-600 flex items-center mt-1">
                        <FaClock className="mr-2" /> {module.duration}
                      </p>
                    </div>
                    <div className="text-blue-800">
                      {expandedModule === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>
                  
                  {expandedModule === index && (
                    <div className="p-6 bg-white border-t border-gray-200">
                      <div className="mb-6">
                        <h5 className="font-bold text-lg mb-3 text-blue-800">Topics Covered:</h5>
                        <ul className="space-y-2">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-start">
                              <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3 text-xs">✓</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold text-lg mb-3 text-blue-800">Project:</h5>
                        <p className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          {module.projects}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Learning Experience */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our immersive approach ensures you gain practical, job-ready skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-laptop-code text-blue-800 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Hands-on Projects</h3>
              <p className="text-gray-600">
                Build 4 real-world applications from scratch to showcase in your portfolio
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-users text-blue-800 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Mentor Support</h3>
              <p className="text-gray-600">
                Get personalized guidance from industry professionals with real-world experience
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-briefcase text-blue-800 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Career Services</h3>
              <p className="text-gray-600">
                Resume reviews, mock interviews, and job placement assistance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Developer Career?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join our next cohort and transform into a professional full stack developer
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition duration-300 shadow-lg">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition duration-300">
              Download Syllabus
            </button>
          </div>
          <p className="mt-6 text-blue-200">
            Limited seats available for our June 15, 2024 cohort
          </p>
        </div>
      </div>
    </div>
                  </>
  );
};

export default CurriculumPage;