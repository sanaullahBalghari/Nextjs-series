"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, Github, Linkedin, Twitter } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";
import emailjs from '@emailjs/browser';
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // EmailJS implementation
    // You need to: 
    // 1. Sign up at emailjs.com
    // 2. Create email template
    // 3. Get your Service ID, Template ID, and Public Key
    // 4. Install: npm install @emailjs/browser
    
    try {
      // Uncomment when you have EmailJS configured:
      
      const emailjs = require('@emailjs/browser');
      
      await emailjs.send(
        'service_68pc8mj',
        'template_q3nuhlk',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'DQinYqnN4w9xKtqlW'
      );
      

      // Simulated success for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sanaullahakhonzada289@gmail.com",
      link: "mailto:sanaullahakhonzada289@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "03498026152",
      link: "tel:+92XXXXXXXXX",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Skardu Gilgit Baltistan, Pakistan",
      link: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/sanaullahBalghari", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/sana-ullah-akhonzada-606767279/", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com/yourprofile", label: "Twitter" }
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-black text-white overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-sm sm:text-base font-semibold text-purple-400 uppercase tracking-wider mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Let's Work Together
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Left Side - Single Contact Info Card with Meteors */}
          <div className="relative w-full order-2 lg:order-1">
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl" />
            
            {/* Single Combined Card */}
            <div className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-6 sm:p-8 shadow-xl">
              
              {/* Decorative Corner Icon */}
              <div className="mb-4 sm:mb-6 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-500 bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Contact Information</h4>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                Feel free to reach out through any of these channels
              </p>

              {/* Contact Info Items */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${info.color} bg-opacity-20 group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-400 mb-1">{info.title}</p>
                      <p className="text-sm sm:text-base font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all break-all sm:truncate">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6 sm:mb-8" />

              {/* Social Links */}
              <div>
                <h5 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Connect With Me</h5>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-2.5 sm:p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-purple-500/50 hover:bg-gray-700/50 transition-all hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-purple-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Meteor Effect */}
              <Meteors number={40} />
            </div>
          </div>

          {/* Right Side - Contact Form with Meteor Effect */}
          <div className="relative w-full order-1 lg:order-2">
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
            
            {/* Form Container */}
            <div className="relative flex flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-6 sm:p-8 shadow-xl">
              
              {/* Decorative Corner Icon */}
              <div className="mb-4 sm:mb-6 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-500 bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Send Message</h4>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                Fill out the form below and I'll get back to you as soon as possible
              </p>

              {/* Contact Form */}
              <div className="w-full">
                <div className="space-y-4 sm:space-y-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Status Message */}
                  {status.message && (
                    <div className={`p-3 sm:p-4 rounded-lg flex items-start gap-2 sm:gap-3 ${
                      status.type === "success" 
                        ? "bg-green-500/10 border border-green-500/30 text-green-400" 
                        : "bg-red-500/10 border border-red-500/30 text-red-400"
                    }`}>
                      {status.type === "success" && <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />}
                      <span className="text-xs sm:text-sm">{status.message}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Meteor Effect */}
              <Meteors number={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}