import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Import the icons

export default function Footer() {
  return (
    <footer className="bg-[#010122] text-white py-8 mt-16">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Company info */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} SafeGuard Technologies. All rights reserved.
        </p>

        {/* Social media icons */}
        <div className="flex items-center gap-6 text-2xl">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/safeguardtechnologies" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-sgts-blue transition"
          >
            <FaInstagram />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/company/safeguard-technologies/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-sgts-blue transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
