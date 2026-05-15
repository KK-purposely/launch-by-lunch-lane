import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
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

  const servicesItems = [
    { label: "Keynotes & Workshops", to: "/keynotes-workshops", external: false },
    { label: "Events", to: "https://luma.com/launchbylunch", external: true },
    { label: "Chief of Staff", to: "/claude-code", external: false },
    { label: "Automations", to: "https://marketplace.launchbylunch.co/", external: true },
    { label: "Trainer Application", to: "/trainer-application", external: false },
  ];

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
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange">
                  Home
                </Link>

                <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange">
                  About
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange focus:outline-none inline-flex items-center gap-1">
                    Services
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 bg-white">
                    {servicesItems.map((item) =>
                      item.external ? (
                        <DropdownMenuItem
                          key={item.label}
                          onClick={() => window.open(item.to, '_blank')}
                        >
                          {item.label}
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem key={item.label} asChild>
                          <Link to={item.to} className="w-full">
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      )
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link to="/enterprise" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange">
                  Enterprise
                </Link>

                <Link to="/community" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange">
                  Community
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-launch-orange hover:bg-launch-orange/90 text-white rounded-full font-medium transition-all duration-300"
              onClick={() => window.open("https://learn.launchbylunch.co/?modal=signup", "_blank")}
            >
              Get Our Newsletter
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-launch-purple hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  <Menu className="block h-6 w-6" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/about" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <div className="px-2 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Services
                </div>

                {servicesItems.map((item) =>
                  item.external ? (
                    <DropdownMenuItem
                      key={item.label}
                      onClick={() => {
                        window.open(item.to, '_blank');
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem key={item.label} asChild>
                      <Link to={item.to} className="w-full" onClick={() => setIsMenuOpen(false)}>
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  )
                )}

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link to="/enterprise" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Enterprise
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/community" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Community
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link
                    to="/contact"
                    className="w-full text-launch-orange font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
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
