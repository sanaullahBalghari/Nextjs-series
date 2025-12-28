import React from 'react'

function Footer() {
return (
  <footer className="bg-black text-gray-400 py-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
      
      {/* About Us */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
        <p className="text-sm leading-relaxed">
          We are a musical learning platform offering live webinars, expert
          instructors, and creative resources to help musicians grow and shine.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition">Home</a></li>
          <li><a href="#" className="hover:text-white transition">Webinars</a></li>
          <li><a href="#" className="hover:text-white transition">Instructors</a></li>
          <li><a href="#" className="hover:text-white transition">Pricing</a></li>
        </ul>
      </div>

      {/* Follow Us */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition">Facebook</a></li>
          <li><a href="#" className="hover:text-white transition">Instagram</a></li>
          <li><a href="#" className="hover:text-white transition">YouTube</a></li>
          <li><a href="#" className="hover:text-white transition">Twitter</a></li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-2 text-sm">
          <li>Email: support@musicweb.com</li>
          <li>Phone: +92 300 1234567</li>
          <li>Location: Pakistan</li>
        </ul>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
      © 2025 MasterMusic. All rights reserved.
    </div>
  </footer>
);

}

export default Footer