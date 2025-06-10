
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Why QFB", href: "/why-qfb" },
    { name: "Accident", href: "/accident" },
    { name: "Critical Illness", href: "/critical-illness" },
    { name: "Cancer & Dread Disease", href: "/cancer-dread-disease" },
    { name: "Life Insurance", href: "/life-insurance" },
    { name: "Long Term Care", href: "/long-term-care" },
    { name: "Dental", href: "#", comingSoon: true },
    { name: "Contact", href: "#" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed w-full z-50">
      <div className="bg-primary-800 text-white py-2 px-4 md:px-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-sm md:text-base">
            <span className="mr-4">
              <strong>Call:</strong> 708.866.5057
            </span>
            <span className="hidden md:inline">
              <strong>Email:</strong> info@qualityfamilybenefits.com
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-accent-gold transition-colors">
              <svg
                className="w-5 h-5"
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
      
      <nav 
        className={cn(
          "bg-white py-4 px-4 md:px-8 transition-all duration-300 shadow-sm",
          isScrolled && "shadow-md"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/11685cf7-8d75-4249-b5bd-f14c01a4b056.png" 
                alt="Quality Family Benefits Logo" 
                className="h-12 md:h-16" 
              />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              item.href.startsWith('#') ? (
                <a 
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-gray-700 hover:text-primary-500 font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full",
                    isActive(item.href) && "text-primary-500 after:w-full",
                    item.comingSoon && "opacity-70"
                  )}
                >
                  {item.name}
                  {item.comingSoon && (
                    <span className="ml-2 text-xs bg-accent-gold text-primary-800 px-2 py-0.5 rounded-full">
                      Soon
                    </span>
                  )}
                </a>
              ) : (
                <Link 
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-gray-700 hover:text-primary-500 font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full",
                    isActive(item.href) && "text-primary-500 after:w-full",
                    item.comingSoon && "opacity-70"
                  )}
                >
                  {item.name}
                  {item.comingSoon && (
                    <span className="ml-2 text-xs bg-accent-gold text-primary-800 px-2 py-0.5 rounded-full">
                      Soon
                    </span>
                  )}
                </Link>
              )
            ))}
          </div>
          
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-primary-500 focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl animate-fade-in">
          <div className="container mx-auto px-4 py-3">
            {menuItems.map((item) => (
              item.href.startsWith('#') ? (
                <a 
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block py-3 text-gray-700 hover:text-primary-500 font-medium border-b border-gray-100",
                    isActive(item.href) && "text-primary-500"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {item.comingSoon && (
                      <span className="text-xs bg-accent-gold text-primary-800 px-2 py-0.5 rounded-full">
                        Soon
                      </span>
                    )}
                  </div>
                </a>
              ) : (
                <Link 
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block py-3 text-gray-700 hover:text-primary-500 font-medium border-b border-gray-100",
                    isActive(item.href) && "text-primary-500"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {item.comingSoon && (
                      <span className="text-xs bg-accent-gold text-primary-800 px-2 py-0.5 rounded-full">
                        Soon
                      </span>
                    )}
                  </div>
                </Link>
              )
            ))}
            <div className="mt-4 flex items-center space-x-4">
              <a href="#" className="text-primary-500 hover:text-primary-700 transition-colors">
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
              <div className="text-sm">
                <div><strong>Call:</strong> 708.866.5057</div>
                <div><strong>Email:</strong> info@qualityfamilybenefits.com</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
