import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Search, 
  Share2, 
  Brain, 
  Mic, 
  Calculator,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'web-development',
      category: 'development',
      icon: <Globe className="w-8 h-8" />,
      title: "Web & App Development",
      description: "Custom websites and mobile applications that drive conversions and user engagement.",
      features: [
        "Responsive design for all devices",
        "Custom CMS development",
        "E-commerce solutions",
        "Mobile app development",
        "API integration",
        "Performance optimization"
      ],
      price: "₹50,000 - ₹5,00,000",
      duration: "4-12 weeks",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 'seo-content',
      category: 'marketing',
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Content Marketing",
      description: "Data-driven SEO strategies and compelling content that ranks and converts.",
      features: [
        "Technical SEO audit",
        "Keyword research & strategy",
        "Content creation & optimization",
        "Link building campaigns",
        "Local SEO optimization",
        "Performance tracking"
      ],
      price: "₹25,000 - ₹2,00,000",
      duration: "3-6 months",
      color: "from-green-500 to-green-600"
    },
    {
      id: 'social-media',
      category: 'marketing',
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Strategic SMM campaigns that build brand awareness and drive engagement.",
      features: [
        "Platform-specific strategies",
        "Content calendar creation",
        "Community management",
        "Paid social campaigns",
        "Influencer partnerships",
        "Analytics & reporting"
      ],
      price: "₹15,000 - ₹1,50,000",
      duration: "Ongoing",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 'ai-solutions',
      category: 'technology',
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Cutting-edge AI integration for automation and intelligent decision-making.",
      features: [
        "Chatbot development",
        "Predictive analytics",
        "Process automation",
        "Data analysis & insights",
        "Machine learning models",
        "AI-powered tools"
      ],
      price: "₹1,00,000 - ₹10,00,000",
      duration: "6-16 weeks",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 'podcast-production',
      category: 'content',
      icon: <Mic className="w-8 h-8" />,
      title: "Podcast Production",
      description: "Professional podcast creation and distribution to amplify your brand voice.",
      features: [
        "Podcast strategy & planning",
        "Professional recording",
        "Audio editing & mixing",
        "Show notes & transcripts",
        "Distribution & promotion",
        "Analytics & optimization"
      ],
      price: "₹30,000 - ₹3,00,000",
      duration: "Ongoing",
      color: "from-red-500 to-red-600"
    },
    {
      id: 'financial-consulting',
      category: 'consulting',
      icon: <Calculator className="w-8 h-8" />,
      title: "Financial Consulting",
      description: "Strategic financial planning and investment guidance for business growth.",
      features: [
        "Financial planning",
        "Investment strategies",
        "Risk assessment",
        "Tax optimization",
        "Funding guidance",
        "Performance analysis"
      ],
      price: "₹50,000 - ₹5,00,000",
      duration: "Ongoing",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'technology', name: 'Technology' },
    { id: 'content', name: 'Content' },
    { id: 'consulting', name: 'Consulting' }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions designed to drive growth, enhance brand presence, 
                and deliver measurable results for your business.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <AnimatedSection key={service.id} animation="fadeInUp" delay={0.4 + (filteredServices.indexOf(service) * 0.1)}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-sm opacity-90">Starting from</div>
                        <div className="text-lg font-bold">{service.price.split(' - ')[0]}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm">{service.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">Team of 3-5</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={`/contact?service=${service.id}`}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures successful project delivery and exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">
                We analyze your business, goals, and requirements to create a strategic plan.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive strategy tailored to your specific needs and objectives.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">
                Our expert team implements the strategy with regular updates and quality assurance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor, analyze, and optimize for maximum performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from businesses we've helped transform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Avani Enterprises transformed our digital presence completely. Their SEO and content 
                marketing strategies helped us achieve 300% increase in organic traffic."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-600">CEO, TechStart India</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The team's expertise in web development and AI solutions helped us automate 
                70% of our customer service operations."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                  <div className="text-sm text-gray-600">Founder, EcoSolutions</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Their social media marketing campaigns increased our brand awareness by 200% 
                and generated 150% more leads for our business."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Anita Patel</div>
                  <div className="text-sm text-gray-600">Marketing Director, HealthTech</div>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your project requirements and create a custom solution that fits your budget and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
             to="/get-consultation"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Consultation
            </Link>
            <a
              href="tel:+919253625099"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 