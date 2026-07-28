import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  const linkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-blue-600 font-semibold"
        : scrolled || !isHome
        ? "text-slate-800 hover:text-blue-600"
        //: "text-white hover:text-blue-200"
        : "text-slate-800 hover:text-blue-600"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom h-24 flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="SafeGuard Technologies"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium">

            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/product" className={linkClass}>
              Product
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              Company
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

          </nav>

          {/* Desktop CTA */}

          <div className="hidden lg:block">

            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                scrolled || !isHome
                  ? "bg-slate-900 text-white hover:bg-blue-600"
                  //: "bg-white text-slate-900 hover:bg-blue-50"
                  : "bg-slate-900 text-white hover:bg-blue-600"
              }`}
            >
              Book a Demo

              <ArrowRight size={18} />
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden transition ${
              scrolled || !isHome ? "text-slate-900" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="fixed top-24 left-0 right-0 bg-white border-b border-slate-200 shadow-xl lg:hidden z-40">

          <div className="container-custom py-8 flex flex-col">

            <NavLink
              to="/"
              onClick={closeMenu}
              className="py-3 text-slate-800 font-medium"
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              onClick={closeMenu}
              className="py-3 text-slate-800 font-medium"
            >
              Product
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className="py-3 text-slate-800 font-medium"
            >
              Company
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="py-3 text-slate-800 font-medium"
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white py-4 font-semibold hover:bg-blue-600 transition"
            >
              Book a Demo

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      )}
    </>
  );
}