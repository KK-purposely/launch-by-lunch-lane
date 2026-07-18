import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0" onClick={handleLogoClick}>
              <img
                src="/lovable-uploads/9e01cb2b-d7f4-4b83-adb5-706805de7735.png"
                alt="Launch by Lunch Logo"
                className="h-12 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-lbl-orange">
                  About
                </Link>

                <Link to="/pricing" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-lbl-orange">
                  Services
                </Link>

                <Link to="/comm-corp-express-ai-training-in-ma" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-lbl-orange">
                  Free AI Upskilling
                </Link>

                <Link to="/keynotes-workshops" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-lbl-orange">
                  Keynotes
                </Link>

                <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-lbl-orange">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-lbl-orange hover:bg-lbl-orange/90 text-white rounded-full font-medium transition-all duration-300"
              onClick={() => window.open("https://learn.launchbylunch.co/?modal=signup", "_blank")}
            >
              Get Our Newsletter
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-lbl-ink hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  <Menu className="block h-6 w-6" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/keynotes-workshops" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Keynotes
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/pricing" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Services
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/comm-corp-express-ai-training-in-ma" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Free AI Upskilling
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
