import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-600 font-semibold" : "opacity-80 hover:opacity-100"; 
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="font-medium text-xl">MicroFund</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`text-sm font-medium transition-all ${isActive('/')}`}>Home</Link>
            <Link to="/apply" className={`text-sm font-medium transition-all ${isActive('/apply')}`}>Apply for a Loan</Link>
            <Link to="/invest" className={`text-sm font-medium transition-all ${isActive('/invest')}`}>Invest in Businesses</Link>
            <Link to="/how-it-works" className={`text-sm font-medium transition-all ${isActive('/how-it-works')}`}>How It Works</Link>
            <Link to="/success-stories" className={`text-sm font-medium transition-all ${isActive('/success-stories')}`}>Success Stories</Link>
            <Link to="/contact" className={`text-sm font-medium transition-all ${isActive('/contact')}`}>Contact Us</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full" asChild>
              <Link to="/login">
                <LogIn size={16} className="mr-1" />
                Log In
              </Link>
            </Button>
            <Button className="rounded-full" asChild>
              <Link to="/register">
                <UserPlus size={16} className="mr-1" />
                Register
              </Link>
            </Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg animate-slide-in">
          <div className="px-6 py-6 space-y-4">
            <Link to="/" className={`block text-sm font-medium py-2 ${isActive('/')}`}>Home</Link>
            <Link to="/apply" className={`block text-sm font-medium py-2 ${isActive('/apply')}`}>Apply for a Loan</Link>
            <Link to="/invest" className={`block text-sm font-medium py-2 ${isActive('/invest')}`}>Invest in Businesses</Link>
            <Link to="/how-it-works" className={`block text-sm font-medium py-2 ${isActive('/how-it-works')}`}>How It Works</Link>
            <Link to="/success-stories" className={`block text-sm font-medium py-2 ${isActive('/success-stories')}`}>Success Stories</Link>
            <Link to="/contact" className={`block text-sm font-medium py-2 ${isActive('/contact')}`}>Contact Us</Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="rounded-full w-full" asChild>
                <Link to="/login">
                  <LogIn size={16} className="mr-1" />
                  Log In
                </Link>
              </Button>
              <Button className="rounded-full w-full" asChild>
                <Link to="/register">
                  <UserPlus size={16} className="mr-1" />
                  Register
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
