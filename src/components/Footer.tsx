
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 px-4 sm:px-6 bg-launch-purple text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="mb-4 text-center">
          <p className="text-xl font-bold">Launch by Lunch</p>
          <p className="text-sm text-white/70">The no-code fast lane</p>
        </div>
        
        <div className="mt-4 text-sm text-white/70">
          &copy; {currentYear} Launch by Lunch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
