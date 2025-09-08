"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#725edd] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-sm mb-6">
            Expert solutions in software and digital marketing.
          </p>
          <p className="text-xs">© 2025. All rights reserved.</p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-sm font-bold mb-3 uppercase">About</h3>
          <p className="text-sm">+91-7880958868</p>
          <p className="text-sm">+91-7428791233</p>
          <p className="text-sm">info@imalio.com</p>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-sm font-bold mb-3 uppercase">Contact</h3>
          <label className="block text-sm mb-2">Your Email Address</label>
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full px-4 py-2 rounded-lg text-white focus:outline-none  border border-white"
          />
          <button className="mt-4 bg-indigo-900 px-6 py-2 rounded-full hover:bg-indigo-800 transition">
            Submit Your Inquiry
          </button>
        </div>
      </div>
    </footer>
  );
}
