
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 px-4 sm:px-6 bg-launch-purple text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="mb-4 text-center">
          <p className="text-xl font-bold">Launch by Lunch</p>
          <p className="text-sm text-white/70">The no-code fast lane</p>
        </div>
        
        <div className="mb-4 text-sm text-center">
          Reach out at <a href="mailto:welcome@launchbylunch.co" className="underline hover:text-launch-orange transition-colors">welcome@launchbylunch.co</a>
        </div>
        
        <div className="mb-4 flex flex-wrap justify-center gap-4 text-sm">
          <a href="https://cdn.launchbylunch.co/pages/privacy_policy" className="underline hover:text-launch-orange transition-colors" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="https://cdn.launchbylunch.co/pages/terms_of_service" className="underline hover:text-launch-orange transition-colors" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          <a href="https://cdn.launchbylunch.co/pages/customer_service" className="underline hover:text-launch-orange transition-colors" target="_blank" rel="noopener noreferrer">
            Customer Service
          </a>
          <a href="https://status.launchbylunch.co/" className="underline hover:text-launch-orange transition-colors" target="_blank" rel="noopener noreferrer">
            Status
          </a>
        </div>
        
        <div className="text-sm text-white/70">
          &copy; {currentYear} Launch by Lunch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
