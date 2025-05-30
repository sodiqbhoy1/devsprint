
import { Link } from 'react-router'
import Navbar from './Navbar'
// import { AcademicCapIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, ShoppingCartIcon, UsersIcon, CalendarDaysIcon, ClockIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const Homepage = () => {
  return (
    <>
    <Navbar/>
      {/* Hero Section */}
      <div className="relative hero-pattern pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        {/* SVG Wave */}
        <svg className="absolute top-0 left-0 w-full h-40 md:h-64" viewBox="0 0 1440 320">
          <path fill="#f97316" fillOpacity="0.15" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary via-accent to-orange-400 bg-clip-text text-transparent animate-gradient">
                Become a <span className="text-accent">Full Stack Developer</span> in 16 Weeks
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Master both frontend and backend technologies with our intensive bootcamp. Build production-ready applications and launch your tech career.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/enroll" className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition duration-300 shadow-lg">
                  Enroll Now
                </Link>
                <Link to='/curriculum' className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition duration-300">
                  Curriculum Overview
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Full Stack Development" 
                  className="rounded-xl shadow-2xl w-full max-w-md"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <i className="fas fa-graduation-cap text-green-600 text-xl"></i>
                    </div>
                    <div>
                      <p className="font-bold text-lg">2,500+</p>
                      <p className="text-gray-600">Developers Trained</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <i className="fas fa-briefcase text-primary text-xl"></i>
                    </div>
                    <div>
                      <p className="font-bold text-lg">92%</p>
                      <p className="text-gray-600">Hired as Developers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Stack Program */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Master Full Stack Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training covering all essential technologies for modern web development
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="course-card bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl border-4 border-gradient-to-r from-primary via-accent to-orange-400 overflow-hidden transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Full Stack Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    16 Weeks Intensive
                  </span>
                  <span className="text-gray-500">
                    <i className="fas fa-star text-yellow-400"></i> 4.9 (850+ reviews)
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional Full Stack Developer Program</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2">Frontend Technologies:</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">React.js</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Next.js</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Redux</span>
                  </div>
                  
                  <h4 className="font-bold text-lg mb-2">Backend Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Express</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">MongoDB</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">REST APIs</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">GraphQL</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Build complete web applications from scratch. Learn industry best practices, testing, deployment, and DevOps fundamentals. Finish with 4 portfolio projects.
                </p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-primary font-bold text-xl">$1,499</span>
                    <span className="text-gray-500 line-through ml-2">$2,499</span>
                  </div>
                  <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">What You'll Build</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fas fa-shopping-cart text-primary text-xl"></i>
                  </div>
                  <h4 className="font-bold text-lg">E-commerce Platform</h4>
                </div>
                <p className="text-gray-600">
                  Full-featured online store with product catalog, shopping cart, user authentication, and payment integration.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fas fa-comments text-primary text-xl"></i>
                  </div>
                  <h4 className="font-bold text-lg">Real-time Chat App</h4>
                </div>
                <p className="text-gray-600">
                  Interactive messaging application with WebSockets, user profiles, and media sharing.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fas fa-briefcase text-primary text-xl"></i>
                  </div>
                  <h4 className="font-bold text-lg">Job Board Platform</h4>
                </div>
                <p className="text-gray-600">
                  Professional job listing site with search filters, employer dashboards, and application tracking.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <i className="fas fa-map-marked-alt text-primary text-xl"></i>
                  </div>
                  <h4 className="font-bold text-lg">Location-based Service</h4>
                </div>
                <p className="text-gray-600">
                  Geolocation application with mapping integration, user check-ins, and real-time updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Devsprint for Full Stack */}
      <div className="py-20 gradient-bg ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Learn Full Stack at Devsprint?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our specialized approach trains you for real-world development roles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-6">
                <i className="fas fa-laptop-code text-3xl text-accent"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Production-Grade Projects</h3>
              <p>Build portfolio-worthy applications using industry-standard tools and workflows.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-6">
                <i className="fas fa-code text-3xl text-accent"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Modern Tech Stack</h3>
              <p>Learn the most in-demand technologies used by top tech companies.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-6">
                <i className="fas fa-user-friends text-3xl text-accent"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Pair Programming</h3>
              <p>Collaborate on real coding tasks like professional development teams.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-6">
                <i className="fas fa-server text-3xl text-accent"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">DevOps Fundamentals</h3>
              <p>Deploy and maintain applications with CI/CD pipelines and cloud services.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Testimonials */}
      <div className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Our Developers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from graduates now working in full stack roles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card bg-white p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Sarah Johnson" 
                  className="w-20 h-20 rounded-full border-4 border-accent shadow-lg"
                />
              </div>
              <div className="pt-12 text-center">
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-gray-600">Frontend Developer @ Google</p>
                <p className="text-gray-700 mb-6">
                  "The React and Next.js training was exceptional. I went from basics to building complex applications in just 4 months."
                </p>
                <div className="flex items-center justify-center">
                  <div className="flex text-yellow-400 mr-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-sm text-gray-500">Full Stack Graduate, 2023</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card bg-white p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Michael Chen" 
                  className="w-20 h-20 rounded-full border-4 border-accent shadow-lg"
                />
              </div>
              <div className="pt-12 text-center">
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-gray-600">Full Stack Developer @ Netflix</p>
                <p className="text-gray-700 mb-6">
                  "The backend modules with Node and Express gave me the confidence to design robust APIs. The portfolio projects were key to my job search."
                </p>
                <div className="flex items-center justify-center">
                  <div className="flex text-yellow-400 mr-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-sm text-gray-500">Full Stack Graduate, 2022</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card bg-white p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" 
                  alt="Jessica Williams" 
                  className="w-20 h-20 rounded-full border-4 border-accent shadow-lg"
                />
              </div>
              <div className="pt-12 text-center">
                <h4 className="font-bold">Jessica Williams</h4>
                <p className="text-gray-600">Backend Engineer @ Microsoft</p>
                <p className="text-gray-700 mb-6">
                  "The database and API design sections were incredibly practical. I use concepts from the bootcamp every day in my current role."
                </p>
                <div className="flex items-center justify-center">
                  <div className="flex text-yellow-400 mr-4">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-sm text-gray-500">Full Stack Graduate, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Developer Journey</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join our next cohort and transform into a professional full stack developer
          </p>
          
          <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-gray-800">
              <div>
                <h3 className="font-bold text-xl mb-4">Next Cohort Starts</h3>
                <div className="flex items-center mb-4">
                  <i className="fas fa-calendar-alt text-primary text-xl mr-3"></i>
                  <span>June 15, 2024</span>
                </div>
                <div className="flex items-center mb-4">
                  <i className="fas fa-clock text-primary text-xl mr-3"></i>
                  <span>16 Weeks | Full-time</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-users text-primary text-xl mr-3"></i>
                  <span>Limited to 20 students</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4">Apply Now</h3>
                <p className="mb-4">Secure your spot with early enrollment discount</p>
                <button className="bg-primary text-white w-full py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300">
                  Apply Today - Save $300
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-tr from-primary via-dark to-accent text-white pt-16 pb-8">
        <svg className="absolute -top-8 left-0 w-full h-8" viewBox="0 0 1440 80">
          <path fill="#fff" fillOpacity="1" d="M0,32L80,53.3C160,75,320,117,480,117.3C640,117,800,75,960,69.3C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary rounded-lg p-2">
                  <span className="text-white font-bold text-xl">DS</span>
                </div>
                <span className="ml-3 text-xl font-bold text-white">Devsprint</span>
              </div>
              <p className="text-gray-400 mb-6">
                Accelerate your journey to becoming a professional full stack developer.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Full Stack Curriculum</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Frontend Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Backend Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Database Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">DevOps & Deployment</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Learning Path</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Developer Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Web Dev Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                  <span>123 Developer Road, San Francisco, CA 94103</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-primary"></i>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-primary"></i>
                  <span>admissions@devsprint.io</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">© 2024 Devsprint Full Stack Bootcamp. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Homepage