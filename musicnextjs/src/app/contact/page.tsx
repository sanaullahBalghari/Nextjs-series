import React from "react";
import { Meteors } from "@/components/ui/meteors";

function Page() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-950 flex items-center justify-center px-4">
      
      {/* Meteor Effect – Full Page Background */}
      <Meteors number={50} />

      {/* Contact Form Card */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl border mt-30 border-gray-800 bg-gray-900/90 p-8 shadow-xl backdrop-blur">
        
        <h2 className="text-2xl font-bold text-white mb-6 text-center ">
          Contact Us
        </h2>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full rounded-lg bg-gray-800 border border-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 py-2 font-semibold text-white hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
