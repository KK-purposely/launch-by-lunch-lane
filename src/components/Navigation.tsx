
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/lovable-uploads/9e01cb2b-d7f4-4b83-adb5-706805de7735.png"
                alt="Launch by Lunch Logo"
                className="h-12 w-auto"
              />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange">
                  Home
                </Link>
                <Link to="/services" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange">
                  Services
                </Link>
                <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className="bg-launch-orange hover:bg-launch-orange/90 text-white rounded-full font-medium transition-all duration-300"
              onClick={() => window.open('https://learn.launchbylunch.co/subscribe', '_blank')}
            >
              Get Our Newsletter
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-launch-purple hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-launch-purple hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-launch-purple hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-launch-purple hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5">
              <Button 
                size="sm" 
                className="w-full bg-launch-orange hover:bg-launch-orange/90 text-white rounded-full font-medium transition-all duration-300"
                onClick={() => window.open('https://learn.launchbylunch.co/subscribe', '_blank')}
              >
                Get Our Newsletter
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
