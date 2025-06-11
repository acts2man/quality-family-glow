import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Coverage",
      links: [
        { name: "Accident", href: "/accident" },
        { name: "Critical Illness", href: "/critical-illness" },
        { name: "Cancer & Dread Disease", href: "/cancer-dread-disease" },
        { name: "Life Insurance", href: "/life-insurance" },
        { name: "Dental (Coming Soon)", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Why QFB", href: "/why-qfb" },
        { name: "About Us", href: "#" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-accent-gold">Quality</span> Family Benefits
              </span>
            </div>
            <p className="mb-6 text-gray-300 max-w-md">
              We provide supplemental insurance plans that pay YOU directly when you need it most. 
              Our coverage options include accident, critical illness, cancer, and life insurance plans.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                </svg>
                <span>708.330.4516</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>info@qualityfamilybenefits.com</span>
              </p>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-accent-gold transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-accent-gold transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter / Call to Action */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-2">Ready to get covered?</h3>
              <p className="text-gray-300 mb-4 lg:mb-0">
                Schedule a consultation today and find the right coverage for you and your family.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link to="https://calendly.com" className="glow-button gold-button">
                <span>Schedule a Call</span>
              </Link>
              <Link to="tel:7083304516" className="glow-button">
                <span>Call Now</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© {currentYear} Quality Family Benefits. All rights reserved.</p>
              <p className="mt-1">
                Plans underwritten by Allstate Health Solutions and Manhattan Life. 
                Coverage subject to limitations and exclusions.
              </p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61574028545289#"
                className="text-gray-400 hover:text-accent-gold transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
