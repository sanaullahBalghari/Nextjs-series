'use client';

import { Mail, MessageSquare, Lock, Sparkles, Github, Instagram, Send, Copy, CheckCircle2, Linkedin } from 'lucide-react';

function Footer() {
  return (
   <>
     {/* Enhanced Footer */}
      <footer className="bg-gray-950 text-white border-t border-gray-800">
        <div className="px-4 md:px-24 py-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Mystery Message
              </h3>
              <p className="text-gray-400 mb-4">
                The safest way to send and receive anonymous messages. Your identity, your privacy—always protected.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
              <div className="flex gap-4 mb-6">
                <a 
                  href="https://github.com/sanaullahBalghari" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sana-ullah-akhonzada-606767279/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <Send className="w-5 h-5" />
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Email us:</p>
                <a href="mailto:sanaullahakhonzada289@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  sanaullahakhonzada289@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 px-4 md:px-24 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2024 Mystery Message. All rights reserved.</p>
            <p>Made with 💜 for anonymous communication</p>
          </div>
        </div>
      </footer>
   </>
  )
}

export default Footer