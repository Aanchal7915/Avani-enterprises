
import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import ScrollToTop from './components/ScrollToTop';
// import GetConsultation from './pages/GetConsultation';
import NotFound from './pages/NotFound';
const App = () => {
  return (


    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            {/* <Route path="/get-consultation" element={<GetConsultation />} /> */}
            <Route path="/not-found" element={<NotFound/>} />
            <Route path="*" element={<Navigate to="/not-found"/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  )
}

export default App
