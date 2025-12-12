// app/components/ContactPage.jsx
"use client";
import { ChevronDown, Mail, MessageSquare, Send, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";
import LetterGlitch from "../LetterGlitch";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });

  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Pure CSS replacements for all custom gradients & effects */}
      <style jsx global>{`
        @font-face {
          font-family: "PoppinsSemiBold";
          src: url("/Poppins-SemiBold.ttf") format("truetype");
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }

        .bg-contact-gradient {
          background: linear-gradient(180deg, #000000 0%, #050c0c 50%, #000000 100%);
        }

        .text-gradient-contact {
          background: linear-gradient(to right, #22d3ee, #ffffff);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .line-gradient {
          background: linear-gradient(to right, transparent, #22d3ee, transparent);
        }

        .glitch-bg-container {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.4;
          pointer-events: none;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .scroll-indicator { animation: bounce 2s infinite; }

        .contact-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 255, 255, 0.15);
        }

        .input-field {
          background: rgba(17, 24, 39, 0.5);
          border: 1px solid rgba(0, 255, 255, 0.2);
          transition: all 0.3s ease;
          color: white;
        }
        .input-field:focus {
          outline: none;
          border-color: rgba(0, 255, 255, 0.6);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
        }
        .input-field::placeholder {
          color: #94a3b8;
        }
      `}</style>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen pt-20 bg-contact-gradient overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="glitch-bg-container">
          <LetterGlitch glitchSpeed={30} centerVignette={true} outerVignette={false} smooth={true} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center fade-in-up">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "PoppinsSemiBold, sans-serif" }}>
            <span className="text-gradient-contact font-bold">CONTACT</span>
            <span className="text-cyan-400 ml-7">US</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Have questions about <span className="text-cyan-400 font-semibold">GhostWare</span>?<br className="hidden sm:block" />
            We're here to help you reclaim your digital privacy.
          </p>

          <div className="w-32 h-[2px] line-gradient mx-auto mb-16"></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <div className="contact-card p-6 rounded-lg bg-gray-900/40 border border-cyan-500/20 backdrop-blur-sm">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "PoppinsSemiBold, sans-serif" }}>Email</h3>
              <p className="text-gray-400 text-sm">contact@ghostware.io</p>
            </div>
            <div className="contact-card p-6 rounded-lg bg-gray-900/40 border border-purple-500/20 backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "PoppinsSemiBold, sans-serif" }}>Location</h3>
              <p className="text-gray-400 text-sm">Decentralized Network</p>
            </div>
            <div className="contact-card p-6 rounded-lg bg-gray-900/40 border border-lime-500/20 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-lime-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "PoppinsSemiBold, sans-serif" }}>Response Time</h3>
              <p className="text-gray-400 text-sm">Within 24 hours</p>
            </div>
          </div>
        </div>

        <button onClick={scrollToForm} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-cyan-400 hover:text-cyan-300 transition-colors scroll-indicator cursor-pointer" aria-label="Scroll to form">
          <ChevronDown className="w-10 h-10" />
        </button>
      </section>

      {/* SECTION 2: FORM */}
      <section id="form-section" className="relative min-h-screen bg-contact-gradient overflow-hidden py-20 px-4 sm:px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-widest mb-6" style={{ fontFamily: "PoppinsSemiBold, sans-serif" }}>
              GET IN <span className="text-cyan-400">TOUCH</span>
            </h2>
            <div className="w-24 h-[2px] line-gradient mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-cyan-400 font-semibold mb-2 text-sm">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="input-field w-full px-4 py-3 rounded-lg placeholder-gray-500" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-cyan-400 font-semibold mb-2 text-sm">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="input-field w-full px-4 py-3 rounded-lg placeholder-gray-500" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-cyan-400 font-semibold mb-2 text-sm">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                  className="input-field w-full px-4 py-3 rounded-lg placeholder-gray-500" placeholder="How can we help you?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-cyan-400 font-semibold mb-2 text-sm">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                  className="input-field w-full px-4 py-3 rounded-lg placeholder-gray-500 resize-none"
                  placeholder="Tell us more about your inquiry..." />
              </div>

              <div className="text-center">
                <button type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400/60 text-white font-semibold text-lg hover:bg-cyan-500/30 hover:border-cyan-400/80 hover:shadow-lg hover:shadow-cyan-600/40 transition-all duration-300 shadow-md shadow-cyan-600/20"
                  style={{ fontFamily: "PoppinsSemiBold, sans-serif" }}>
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </div>
            </form>

            <div className="mt-16 p-8 rounded-xl bg-gray-900/50 border border-cyan-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4 text-center" style={{ fontFamily: "PoppinsSemiBold, sans-serif" }}>
                Why Contact Us?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3 border border-cyan-500/40">
                    <MessageSquare className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300 text-sm">Technical Support</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3 border border-purple-500/40">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-gray-300 text-sm">Partnership Inquiries</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-lime-500/20 flex items-center justify-center mx-auto mb-3 border border-lime-500/40">
                    <Phone className="w-6 h-6 text-lime-400" />
                  </div>
                  <p className="text-gray-300 text-sm">General Questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}