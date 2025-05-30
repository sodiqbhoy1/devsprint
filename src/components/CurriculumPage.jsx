import React, { useState } from 'react';
import {
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaLaptopCode,
  FaGraduationCap,
  FaCertificate
} from 'react-icons/fa';
import Navbar from './Navbar';

const CurriculumPage = () => {
  const [expandedModule, setExpandedModule] = useState(-1);

  const curriculum = [
    {
      title: 'Module 1: Frontend Foundations',
      duration: '4 weeks',
      topics: [
        'HTML5 & Semantic Web',
        'CSS3, Flexbox & Grid Layouts',
        'JavaScript Fundamentals (ES6+)',
        'Responsive Web Design Principles',
        'Git & GitHub Fundamentals',
        'Introduction to React'
      ],
      projects: 'Personal Portfolio Website'
    },
    {
      title: 'Module 2: React Development',
      duration: '4 weeks',
      topics: [
        'React Components & Props',
        'State Management with Hooks',
        'React Router for Navigation',
        'Context API for Global State',
        'API Integration with Axios',
        'State Management with Redux'
      ],
      projects: 'E-commerce Product Catalog'
    },
    {
      title: 'Module 3: Backend Development',
      duration: '4 weeks',
      topics: [
        'Node.js & Express Framework',
        'RESTful API Design',
        'MongoDB & Mongoose ODM',
        'User Authentication with JWT',
        'PostgreSQL & SQL Fundamentals',
        'API Security Best Practices'
      ],
      projects: 'Authentication System with User Profiles'
    },
    {
      title: 'Module 4: Full Stack Integration',
      duration: '4 weeks',
      topics: [
        'Connecting React Frontend to Node Backend',
        'Deployment Strategies (Vercel, Netlify, Heroku)',
        'Testing (Jest, React Testing Library)',
        'CI/CD Pipelines',
        'WebSockets & Real-time Applications',
        'Performance Optimization Techniques'
      ],
      projects: 'Capstone Project: Full Stack Application'
    }
  ];

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? -1 : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6">
              Full Stack Development Curriculum
            </h1>
            <p className="text-base sm:text-xl max-w-3xl mx-auto mb-8">
              Master the complete web development stack in our intensive 16-week program
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              <div className="flex items-center bg-blue-800 bg-opacity-50 px-3 py-2 rounded-lg">
                <FaClock className="mr-2" />
                <span>16 Weeks Program</span>
              </div>
              <div className="flex items-center bg-blue-800 bg-opacity-50 px-3 py-2 rounded-lg">
                <FaLaptopCode className="mr-2" />
                <span>500+ Hours of Learning</span>
              </div>
              <div className="flex items-center bg-blue-800 bg-opacity-50 px-3 py-2 rounded-lg">
                <FaGraduationCap className="mr-2" />
                <span>4 Portfolio Projects</span>
              </div>
              <div className="flex items-center bg-blue-800 bg-opacity-50 px-3 py-2 rounded-lg">
                <FaCertificate className="mr-2" />
                <span>Industry-recognized Certificate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Curriculum Breakdown</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive program covers all essential technologies for modern web development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-2 sm:px-4">
            {[
              {
                title: 'Frontend Technologies',
                items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux']
              },
              {
                title: 'Backend Technologies',
                items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs']
              },
              {
                title: 'Development Tools',
                items: ['Git & GitHub', 'Docker', 'VS Code', 'Postman', 'Webpack']
              },
              {
                title: 'Professional Skills',
                items: [
                  'Agile Methodology',
                  'Code Reviews',
                  'Technical Interview Prep',
                  'Portfolio Building',
                  'Career Coaching'
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold mb-4 text-blue-800 break-words">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Detailed Modules */}
          <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 text-center">Detailed Program Structure</h3>
            <div className="space-y-6">
              {curriculum.map((module, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all"
                >
                  <div
                    className={`flex justify-between items-center p-6 cursor-pointer ${
                      expandedModule === index ? 'bg-blue-50' : 'bg-white'
                    }`}
                    onClick={() => toggleModule(index)}
                  >
                    <div>
                      <h4 className="text-lg font-semibold">{module.title}</h4>
                      <p className="text-sm text-gray-600">{module.duration}</p>
                    </div>
                    {expandedModule === index ? (
                      <FaChevronUp className="text-blue-800" />
                    ) : (
                      <FaChevronDown className="text-blue-800" />
                    )}
                  </div>
                  {expandedModule === index && (
                    <div className="bg-white px-6 pb-6">
                      <h5 className="font-semibold mb-2 text-blue-700">Topics Covered:</h5>
                      <ul className="list-disc ml-5 text-gray-700 space-y-1 mb-4">
                        {module.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                      <p className="text-gray-800 font-medium">
                        <span className="text-blue-700 font-semibold">Project:</span> {module.projects}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurriculumPage;
