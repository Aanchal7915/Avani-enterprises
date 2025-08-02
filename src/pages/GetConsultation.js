import React, { useState } from "react";

const GetConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Get Razorpay key and amount from environment variables
  const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY;
  // Remove trailing underscore from env variable name
  const amount = Number(process.env.REACT_APP_RAZORPAY_CONSULTATION_AMOUNT_) || 50000; // fallback to 50000 paise (₹500)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      key: razorpayKey,
      amount: amount,
      currency: "INR",
      name: "Avani Enterprises",
      description: "Consultation Fee",
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      theme: {
        color: "#6366f1"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Load Razorpay script
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      {/* Animated gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob1"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob2"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob3"></div>
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl px-8 py-10 md:py-14 md:px-14 animate-fade-in-up transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 drop-shadow-lg transition-all duration-500">
            Book Your Expert Consultation
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Unlock business growth with a 1:1 session with our experts. Fill in your details and pay securely to reserve your slot.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                placeholder="Enter your phone number"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Pay ₹{(amount / 100).toLocaleString("en-IN")} & Book Consultation
            </button>
          </form>
          <div className="mt-8 text-center text-gray-600 text-sm animate-fade-in transition-all duration-700">
            <span className="inline-block bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4 py-2 rounded-lg shadow">
              100% secure payment via Razorpay. You’ll receive a confirmation email after booking.
            </span>
          </div>
        </div>
      </div>
      {/* Animation keyframes */}
      <style>
        {`
          .animate-fade-in-up {
            animation: fadeInUp 1s cubic-bezier(.39,.575,.565,1) both;
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fadeIn 1.5s cubic-bezier(.39,.575,.565,1) both;
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-blob1 {
            animation: blob1 12s infinite ease-in-out alternate;
          }
          .animate-blob2 {
            animation: blob2 14s infinite ease-in-out alternate;
          }
          .animate-blob3 {
            animation: blob3 16s infinite ease-in-out alternate;
          }
          @keyframes blob1 {
            0% { transform: translate(0,0) scale(1);}
            100% { transform: translate(40px, -30px) scale(1.1);}
          }
          @keyframes blob2 {
            0% { transform: translate(0,0) scale(1);}
            100% { transform: translate(-30px, 30px) scale(1.05);}
          }
          @keyframes blob3 {
            0% { transform: translate(-20px,10px) scale(1);}
            100% { transform: translate(20px,-20px) scale(1.15);}
          }
        `}
      </style>
    </div>
  );
};

export default GetConsultation;