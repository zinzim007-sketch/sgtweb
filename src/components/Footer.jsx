import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="container-custom py-20">

        <div className="grid lg:grid-cols-12 gap-12">

          {/* Brand */}

          <div className="lg:col-span-5">

            <img
              src={logo}
              alt="SafeGuard Technologies"
              className="h-12 w-auto"
            />

            <p className="mt-6 max-w-md text-slate-400 leading-8">
              SafeGuard Technologies develops autonomous security
              solutions that combine intelligent software, aerial
              systems and operational awareness into one connected
              platform.
            </p>

          </div>

          {/* Navigation */}

          <div className="lg:col-span-2">

            <h4 className="text-white font-semibold mb-6">
              Navigation
            </h4>

            <div className="flex flex-col gap-4">

              <Link to="/" className="text-slate-400 hover:text-white transition">
                Home
              </Link>

              <Link to="/product" className="text-slate-400 hover:text-white transition">
                Technology
              </Link>

              <Link to="/about" className="text-slate-400 hover:text-white transition">
                Company
              </Link>

              <Link to="/contact" className="text-slate-400 hover:text-white transition">
                Contact
              </Link>

            </div>

          </div>

          {/* Platform */}

          <div className="lg:col-span-2">

            <h4 className="text-white font-semibold mb-6">
              Platform
            </h4>

            <div className="space-y-4 text-slate-400">

              <p>ARGUS</p>

              <p>SafeGuardOS</p>

              <p>Operational Intelligence</p>

            </div>

          </div>

          {/* Contact */}

          <div className="lg:col-span-3">

            <h4 className="text-white font-semibold mb-6">
              Contact
            </h4>

            <div className="space-y-4 text-slate-400">

              <p>tumelomokoena@safeguardtechno.com</p>

              <p>Stellenbosch, South Africa</p>
              <Link
                to="/contact"
                className="text-slate-400 hover:text-white transition"
              >
                Book a Demo
              </Link>

              

            </div>

            <div className="flex items-center gap-5 mt-8">

              <a
                href="https://www.linkedin.com/company/safeguard-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 hover:-translate-y-1 transition-all duration-300"
                
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://www.instagram.com/safeguardtechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 hover:-translate-y-1 transition-all duration-300"
                
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>

            </div>

          </div>

          

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SafeGuard Technologies. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm mt-4 md:mt-0">
            Engineered in South Africa.
          </p>

        </div>

      </div>

    </footer>
  );
}