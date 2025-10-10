import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#03002E]/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Safeguard logo"
            className="h-[70px] w-[100px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-[15px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-sgts-blue" : "text-white"
            }
          >
            Home
          </NavLink>

          <div className="relative group">
            <button className="text-white">Company ▾</button>
            <div
              className="absolute right-0 mt-1 w-40 bg-[#03002E] border border-gray-700 rounded shadow-lg 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:opacity-100 hover:visible
              transition-all duration-200 ease-out transform translate-y-1 group-hover:translate-y-0 hover:translate-y-0"
            >
              <Link
                to="/about"
                className="block px-4 py-2 text-sm text-white hover:bg-slate-800"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-sm text-white hover:bg-slate-800"
              >
                Contact
              </Link>
            </div>
          </div>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive ? "text-sgts-blue" : "text-white"
            }
          >
            Product
          </NavLink>

          {!isHome && (
            <Link
              to="/contact"
              className="bg-black text-white px-4 py-1.5 rounded-full font-medium ml-2 hover:bg-[#111] transition"
            >
              Book a Demo
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            className="text-white text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#03002E] text-white flex flex-col items-center py-6 space-y-5 shadow-lg z-40">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/product" onClick={() => setIsMenuOpen(false)}>
            Product
          </NavLink>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-sgts-blue text-[#03002E] px-5 py-2 rounded-full font-semibold"
          >
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
}

