
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const servicesLinks = [
    { to: "/services", label: "Our Services" },
    { to: "/accelerators", label: "Accelerators" },
    { to: "/office-hours", label: "Office Hours" },
    { to: "/teardown", label: "TearDown" },
    { to: "/community", label: "Join Community" },
  ];

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
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange">
                      Home
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-launch-orange">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-80 bg-white">
                        {servicesLinks.map((link) => (
                          <NavigationMenuLink key={link.to} asChild>
                            <Link
                              to={link.to}
                              className="block p-3 space-y-1 rounded-md hover:bg-gray-50 transition-colors"
                            >
                              <div className="text-sm font-medium text-gray-900">
                                {link.label}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/members" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange">
                      Members Only
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/join" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange">
                      Join
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange">
                      About
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-launch-orange">
                      Contact
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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
                  <Link 
                    to="/" 
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                {servicesLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link 
                      to={link.to} 
                      className="w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem asChild>
                  <Link 
                    to="/members" 
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Members Only
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                  <Link 
                    to="/join" 
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                  <Link 
                    to="/about" 
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild>
                  <Link 
                    to="/contact" 
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem 
                  onClick={() => {
                    window.open('https://learn.launchbylunch.co/subscribe', '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="text-launch-orange font-medium"
                >
                  Get Our Newsletter
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
