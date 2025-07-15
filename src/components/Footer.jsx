import { Facebook, Twitter, LinkedIn, Email, ArrowUpward } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  // Scroll to top handler
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show scroll-to-top button on scroll
  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      setShowTop(window.scrollY > 200);
    };
  }

  return (
    <footer className="relative bg-slate-900 text-white pt-0 pb-8 px-0 overflow-hidden border-t-4 border-slate-600 shadow-inner" style={{backgroundColor: '#0f172a'}}>
      {/* Top border glow */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 blur-lg opacity-60 z-0" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Column */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <img 
              src="/images/mainLogo.png" 
              alt="Bellatrix Logo" 
              className="h-12 w-auto max-w-[200px] object-contain"
            />
            <p className="text-slate-100/80 text-center lg:text-left max-w-xs">Empowering your business with next-gen enterprise software solutions.</p>
            <div className="flex space-x-4 mt-2">
              {[{icon: <Twitter fontSize="medium" />, href: "#"}, {icon: <LinkedIn fontSize="medium" />, href: "#"}, {icon: <Facebook fontSize="medium" />, href: "#"}].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group p-2 rounded-full bg-slate-800 hover:bg-slate-600 transition-colors duration-300 shadow hover:scale-110"
                  aria-label="Social Link"
                >
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <h4 className="text-xl font-semibold text-slate-100 mb-2">Quick Links</h4>
            <div className="flex flex-col gap-2 text-slate-100/80">
              <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
              <Link to="/about" className="hover:text-white transition-colors duration-300">About Us</Link>
              <Link to="/Support" className="hover:text-white transition-colors duration-300">Support</Link>
              <Link to="/HRSolution" className="hover:text-white transition-colors duration-300">HR Solution</Link>
              <Link to="/Payroll" className="hover:text-white transition-colors duration-300">Payroll</Link>
            </div>
          </div>

          {/* Our Services Column */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <h4 className="text-xl font-semibold text-slate-100 mb-2">Our Services</h4>
            <div className="flex flex-col gap-2 text-slate-100/80">
              <Link to="/Implementation" className="hover:text-white transition-colors duration-300">Implementation</Link>
              <Link to="/Training" className="hover:text-white transition-colors duration-300">Training Programs</Link>
              <Link to="/netsuite-consulting" className="hover:text-white transition-colors duration-300">NetSuite Consulting</Link>
              <Link to="/customization" className="hover:text-white transition-colors duration-300">Customization</Link>
              <Link to="/integration" className="hover:text-white transition-colors duration-300">Integration</Link>
            </div>
          </div>

          {/* Industries Column */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <h4 className="text-xl font-semibold text-slate-100 mb-2">Industries</h4>
            <div className="flex flex-col gap-2 text-slate-100/80">
              <Link to="/industries/manufacturing" className="hover:text-white transition-colors duration-300">Manufacturing</Link>
              <Link to="/industries/retail" className="hover:text-white transition-colors duration-300">Retail & E-commerce</Link>
            </div>
            <div className="mt-4">
              <h5 className="text-lg font-semibold text-slate-100 mb-2">Contact Us</h5>
              <div className="flex flex-col gap-2 text-slate-100/90 text-sm">
                <div className="flex items-center gap-2">
                  <Email fontSize="small" /> 
                  <span>info@bellatrix.com</span>
                </div>
                <div>123 Business Avenue, Suite 500</div>
                <div>San Francisco, CA 94107</div>
                <div>Phone: (555) 123-4567</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-6 text-slate-100/70 text-xs border-t border-slate-800/40">
          <p>&copy; {new Date().getFullYear()} Bellatrix. All rights reserved.</p>
        </div>
        {/* Scroll to Top Button */}
        {showTop && (
          <button
            onClick={handleScrollTop}
            className="fixed bottom-8 right-8 z-50 bg-slate-700 hover:bg-slate-900 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce"
            aria-label="Scroll to top"
          >
            <ArrowUpward />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
