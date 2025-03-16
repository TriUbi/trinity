
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAnimation } from '../contexts/AnimationContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAnimating } = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary tracking-tight transition-opacity duration-300"
          >
            Trinity<span className="text-foreground">Tech</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Hem
            </Link>
            <Link to="/plans" className={`nav-link ${isActive('/plans') ? 'active' : ''}`}>
              Våra planer
            </Link>
            <Link to="/how-it-works" className={`nav-link ${isActive('/how-it-works') ? 'active' : ''}`}>
              Så fungerar det
            </Link>
            <Link to="/testimonials" className={`nav-link ${isActive('/testimonials') ? 'active' : ''}`}>
              Kundrecensioner
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Kontakt
            </Link>
            <Link to="/dashboard" className="btn-primary">
              Dashboard
            </Link>
          </nav>
          
          <button 
            className="md:hidden text-foreground focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 glass-dark z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`} 
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-4 py-6">
          <Link to="/" className={`text-xl font-medium ${isActive('/') ? 'text-primary' : 'text-foreground'}`}>
            Hem
          </Link>
          <Link to="/plans" className={`text-xl font-medium ${isActive('/plans') ? 'text-primary' : 'text-foreground'}`}>
            Våra planer
          </Link>
          <Link to="/how-it-works" className={`text-xl font-medium ${isActive('/how-it-works') ? 'text-primary' : 'text-foreground'}`}>
            Så fungerar det
          </Link>
          <Link to="/testimonials" className={`text-xl font-medium ${isActive('/testimonials') ? 'text-primary' : 'text-foreground'}`}>
            Kundrecensioner
          </Link>
          <Link to="/contact" className={`text-xl font-medium ${isActive('/contact') ? 'text-primary' : 'text-foreground'}`}>
            Kontakt
          </Link>
          <Link to="/dashboard" className="btn-primary w-full text-center">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
