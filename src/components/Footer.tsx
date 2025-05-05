
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 px-4 sm:px-6 bg-launch-purple text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-xl font-bold">Launch by Lunch</p>
          <p className="text-sm text-white/70">The no-code fast lane</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Programs
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Contact
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Privacy
          </a>
        </div>
        
        <div className="mt-4 md:mt-0 text-sm text-white/70">
          &copy; {currentYear} Launch by Lunch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
