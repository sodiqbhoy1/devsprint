import React from 'react';
import Navbar from './Navbar';

const Courses = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto p-8 pt-28 space-y-8">
      <h1 className="text-5xl font-extrabold text-primary">Our Courses</h1>
      <p className="text-lg text-gray-700 max-w-3xl">
        Whether you're a complete beginner or looking to level up your coding skills, our carefully designed courses will guide you every step of the way. Learn at your own pace with hands-on projects, real-world examples, and expert instructors ready to support you.
      </p>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-secondary">Featured Courses</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold mb-2">Full-Stack Web Development</h3>
            <p className="text-gray-600 mb-4">
              Master frontend and backend technologies like React, Node.js, Express, and databases to build powerful, scalable web apps from scratch.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>React & Tailwind CSS</li>
              <li>Node.js & Express API</li>
              <li>MongoDB & SQL Databases</li>
              <li>Project-based learning</li>
            </ul>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">
              Enroll Now
            </button>
          </div>

          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold mb-2">JavaScript for Beginners</h3>
            <p className="text-gray-600 mb-4">
              Start your coding journey with the most popular programming language in the world. Learn syntax, problem-solving, and build interactive web pages.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Basic to Advanced JS</li>
              <li>DOM Manipulation</li>
              <li>ES6+ Features</li>
              <li>Real-world projects</li>
            </ul>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">
              Enroll Now
            </button>
          </div>

          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold mb-2">Python Programming</h3>
            <p className="text-gray-600 mb-4">
              Learn Python — the language of data science, AI, and web development. Get hands-on experience with coding fundamentals and popular Python libraries.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Python Basics</li>
              <li>Data Analysis</li>
              <li>Automation Scripts</li>
              <li>Project challenges</li>
            </ul>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-secondary mb-4">Why Choose Devsprint?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-3xl">
          <li>Experienced instructors who guide you with care and expertise.</li>
          <li>Practical, project-based learning to build your portfolio.</li>
          <li>Flexible online classes to fit your schedule.</li>
          <li>Community support and networking opportunities.</li>
          <li>Certificate of completion to boost your resume.</li>
        </ul>
      </section>

      <div className="mt-12">
        <button className="bg-primary text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-300">
          Get Started Today
        </button>
      </div>
    </div>
    </>
  );
};

export default Courses;
