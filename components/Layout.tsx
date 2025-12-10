import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Facebook, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Handle 'home' link (logo)
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'History', href: '#history' },
    { name: 'Insights', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className={`text-2xl font-serif font-bold ${scrolled ? 'text-navy-900' : 'text-slate-800'}`}
        >
          Second Act
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-medium hover:text-gold-600 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-700'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2 bg-navy-900 text-white rounded-md hover:bg-navy-800 transition-colors text-sm font-semibold cursor-pointer"
          >
            Consulting Inquiry
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 md:hidden flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-slate-700 hover:text-gold-600"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2 bg-navy-900 text-white rounded-md hover:bg-navy-800 transition-colors text-sm font-semibold cursor-pointer"
          >
            Consulting Inquiry
          </a>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-serif text-white font-bold mb-4">{SITE_CONFIG.name}</h3>
          <p className="mb-4 text-slate-400">{SITE_CONFIG.title}</p>
          <p className="text-sm leading-relaxed max-w-xs">
            Helping experienced professionals find their purpose and passion in their second act of life.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: {SITE_CONFIG.email}</li>
            <li>Phone: {SITE_CONFIG.phone}</li>
            <li>Location: Seoul, South Korea</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold-500 transition-colors"><Linkedin size={24} /></a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold-500 transition-colors"><Facebook size={24} /></a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold-500 transition-colors"><Mail size={24} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Second Act Career Consulting. All rights reserved.
      </div>
    </footer>
  );
};