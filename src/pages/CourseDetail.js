import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Play,
  BookOpen,
  Briefcase,
  Phone,
  Mail,
  MessageSquare,
} from 'lucide-react';
import PaymentModal from '../components/PaymentModal';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  // const [isEnrolled, setIsEnrolled] = useState(false);

  // Course data - in a real app, this would come from an API
  const courseData = {
    1: {
      title: "Graphic Designing and Adobe Photoshop",
      subtitle: "Master the Art of Digital Design",
      description: "Full step by step course about graphic design, Adobe Photoshop, and digital art creation with AI tools integration. Learn professional design techniques and create stunning visuals for various platforms.",
      duration: "80 hours",
      price: "₹19,999",
      originalPrice: "₹29,999",
      rating: 4.8,
      students: 1250,
      instructor: "Priya Sharma",
      level: "Beginner to Advanced",
      language: "Hindi & English",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
      category: "Design",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Assured paid 30-day internship",
        "Assured job in reputed firm",
        "MCQ test for course completion",
        "Lifetime access to course materials",
        "24/7 support from instructors"
      ],
      curriculum: [
        {
          title: "Introduction to Graphic Design",
          topics: ["Design principles", "Color theory", "Typography basics", "Layout fundamentals"]
        },
        {
          title: "Adobe Photoshop Mastery",
          topics: ["Interface overview", "Selection tools", "Layer management", "Filters and effects"]
        },
        {
          title: "Digital Art Creation",
          topics: ["Digital painting", "Photo manipulation", "Logo design", "Brand identity"]
        },
        {
          title: "AI Tools Integration",
          topics: ["AI-powered design tools", "Automation techniques", "Smart templates", "Future of design"]
        }
      ],
      requirements: [
        "Basic computer knowledge",
        "Adobe Photoshop (trial version provided)",
        "Creative mindset",
        "Dedication to learn"
      ],
      outcomes: [
        "Create professional graphic designs",
        "Master Adobe Photoshop tools",
        "Develop brand identities",
        "Work with AI design tools",
        "Build a strong portfolio"
      ]
    },
    2: {
      title: "100-Hour Digital Marketing Mastery",
      subtitle: "Comprehensive Digital Marketing Course",
      description: "Unlock the power of digital marketing with our comprehensive 100-hour course covering all aspects of modern marketing. From SEO to social media, learn everything you need to succeed in the digital world.",
      duration: "100 hours",
      price: "₹19,999",
      originalPrice: "₹35,000",
      rating: 4.9,
      students: 2100,
      instructor: "Rahul Kumar",
      level: "Beginner to Advanced",
      language: "Hindi & English",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Marketing",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Assured paid 30-day internship",
        "Assured job in reputed firm",
        "MCQ test for course completion",
        "Real project experience",
        "Industry expert mentorship"
      ],
      curriculum: [
        {
          title: "Digital Marketing Fundamentals",
          topics: ["Marketing basics", "Digital landscape", "Customer behavior", "Marketing funnel"]
        },
        {
          title: "Search Engine Optimization (SEO)",
          topics: ["On-page SEO", "Off-page SEO", "Technical SEO", "Local SEO"]
        },
        {
          title: "Social Media Marketing",
          topics: ["Platform strategies", "Content creation", "Community management", "Paid advertising"]
        },
        {
          title: "Content Marketing",
          topics: ["Content strategy", "Blog writing", "Video marketing", "Email marketing"]
        }
      ],
      requirements: [
        "Basic internet knowledge",
        "Analytical thinking",
        "Creativity",
        "Willingness to learn"
      ],
      outcomes: [
        "Master digital marketing strategies",
        "Create effective marketing campaigns",
        "Analyze marketing performance",
        "Land high-paying jobs",
        "Start your own agency"
      ]
    },
    9: {
      title: "BSc Nursing Course",
      subtitle: "Mastering Nursing Jobs in Indian Hospitals",
      description: "Comprehensive nursing course designed specifically for mastering nursing jobs in Indian hospitals. Learn essential nursing skills, patient care, and hospital procedures with hands-on training.",
      duration: "120 hours",
      price: "₹19,999",
      originalPrice: "₹35,000",
      rating: 4.9,
      students: 890,
      instructor: "Dr. Priya Patel",
      level: "Beginner to Advanced",
      language: "Hindi & English",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      category: "Healthcare",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Mock interviews and interview questions",
        "Assured paid 30-day internship",
        "Assured job in reputed firm",
        "Hospital training sessions",
        "Medical equipment training"
      ],
      curriculum: [
        {
          title: "Nursing Fundamentals",
          topics: ["Basic nursing concepts", "Patient care principles", "Medical terminology", "Health assessment"]
        },
        {
          title: "Clinical Skills",
          topics: ["Vital signs monitoring", "Medication administration", "Wound care", "Emergency procedures"]
        },
        {
          title: "Hospital Procedures",
          topics: ["ICU protocols", "Operation theater assistance", "Patient documentation", "Infection control"]
        },
        {
          title: "Career Preparation",
          topics: ["Interview preparation", "Resume building", "Job search strategies", "Professional development"]
        }
      ],
      requirements: [
        "12th standard completion",
        "Interest in healthcare",
        "Compassionate nature",
        "Physical fitness"
      ],
      outcomes: [
        "Secure nursing jobs in hospitals",
        "Handle emergency situations",
        "Provide quality patient care",
        "Work in various departments",
        "Advance in nursing career"
      ]
    }
  };

  const course = courseData[id];

  if (!course) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <Link
            to="/courses"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              <h2 className="text-2xl text-gray-600 mb-6">
                {course.subtitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {course.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-600">{course.rating} rating</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">{course.level}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Enroll Now - {course.price}
                </button>
                <Link
                  to="/contact"
                  className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Get Free Consultation
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-gray-700">
                    {Math.round(((parseInt(course.originalPrice.replace('₹', '').replace(',', '')) - parseInt(course.price.replace('₹', '').replace(',', ''))) / parseInt(course.originalPrice.replace('₹', '').replace(',', ''))) * 100)}% OFF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8">
                  {[
                    { id: 'overview', name: 'Overview', icon: <BookOpen className="w-4 h-4" /> },
                    { id: 'curriculum', name: 'Curriculum', icon: <BookOpen className="w-4 h-4" /> },
                    { id: 'requirements', name: 'Requirements', icon: <CheckCircle className="w-4 h-4" /> },
                    { id: 'outcomes', name: 'Outcomes', icon: <Briefcase className="w-4 h-4" /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="min-h-96">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Overview</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {course.description}
                    </p>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {course.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                    <div className="space-y-4">
                      {course.curriculum.map((module, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Module {index + 1}: {module.title}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {module.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center">
                                <Play className="w-4 h-4 text-blue-600 mr-2" />
                                <span className="text-gray-600 text-sm">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'requirements' && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Requirements</h3>
                    <div className="space-y-4">
                      {course.requirements.map((requirement, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'outcomes' && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Outcomes</h3>
                    <div className="space-y-4">
                      {course.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{course.price}</div>
                  <div className="text-lg text-gray-400 line-through">{course.originalPrice}</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  Enroll Now
                </button>
              </div>

              {/* Instructor */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructor</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{course.instructor}</div>
                    <div className="text-sm text-gray-600">Expert Instructor</div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919253625099"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +91 9253625099
                  </a>
                  <a
                    href="mailto:kapilatavanienterprises@gmail.com"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    kapilatavanienterprises@gmail.com
                  </a>
                  <a
                    href="https://wa.me/919253625099"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who have transformed their careers with our premium courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Enroll Now - {course.price}
            </button>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        course={course}
        onSuccess={(paymentData) => {
          console.log('Payment successful:', paymentData);
          // You can add additional success handling here
        }}
      />
    </div>
  );
};

export default CourseDetail; 