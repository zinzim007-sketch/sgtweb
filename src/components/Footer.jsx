
import logo from "../assets/logo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="container-custom py-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="SafeGuard Technologies"
              className="h-10 w-auto"
            />

            <p className="mt-2 text-sm text-slate-400">
              Advancing security through autonomous technology.
            </p>
          </div>

          {/* Contact and Socials */}
          <div className="flex flex-col md:items-end gap-2 text-sm text-slate-400">

            <a
              href="mailto:info@safeguardtechno.com"
              className="hover:text-white transition"
            >
              info@safeguardtechno.com
            </a>

            <p>Stellenbosch, South Africa</p>

            <div className="flex items-center gap-4 mt-1">

              <a
                href="https://www.linkedin.com/company/safeguard-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/safeguardtechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-blue-500 transition"
              >
                <FaInstagram size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-5 pt-4 flex flex-col md:flex-row justify-between gap-2">

          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} SafeGuard Technologies. All rights reserved.
          </p>

       

        </div>

      </div>

    </footer>
  );
}
