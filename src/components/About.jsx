import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto p-8 pt-28 space-y-8">
      <h1 className="text-5xl font-extrabold text-primary">About Devsprint</h1>
      <p className="text-lg text-gray-700 max-w-3xl">
        At Devsprint, we believe that anyone can learn to code with the right guidance and support. Founded in 2020, our mission is to empower learners worldwide to unlock their potential and build thriving tech careers.
      </p>

      <section>
        <h2 className="text-3xl font-semibold text-secondary mb-4">Our Mission</h2>
        <p className="text-gray-700 max-w-3xl">
          We aim to provide accessible, affordable, and high-quality programming education that helps students gain practical skills and confidence to succeed in the fast-paced tech industry.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-secondary mb-4">What Makes Us Different?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-3xl">
          <li><strong>Hands-on Projects:</strong> Learn by building real-world applications, not just theory.</li>
          <li><strong>Experienced Mentors:</strong> Get personalized feedback from industry professionals.</li>
          <li><strong>Community Driven:</strong> Join a supportive network of learners and instructors.</li>
          <li><strong>Career Support:</strong> Resume reviews, interview prep, and job placement assistance.</li>
          <li><strong>Flexible Learning:</strong> Study at your own pace with online and live class options.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-secondary mb-4">Our Team</h2>
        <p className="text-gray-700 max-w-3xl">
          Our team is made up of passionate developers, educators, and industry experts who care deeply about helping you succeed. We continuously update our curriculum to reflect the latest industry trends and technologies.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-secondary mb-4">Join Us</h2>
        <p className="text-gray-700 max-w-3xl">
          Ready to start your coding journey? Join thousands of students who have transformed their lives through Devsprint.
        </p>
        <a href="/enroll" className="inline-block mt-4 px-6 py-3 bg-accent text-white rounded hover:bg-red-700 transition">
  Enroll Now
</a>
       
      </section>
    </div>
    </>
  );
};

export default About;
