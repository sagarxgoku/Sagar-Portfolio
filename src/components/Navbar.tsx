import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    smoothScrollTo(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="text-lg sm:text-xl font-bold tracking-tight text-white font-display hover:text-neutral-200 transition-colors"
          >
            Sagar Sharma
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative py-1 transition-colors hover:text-white ${
                  activeSection === link.id ? 'text-white' : 'text-neutral-400'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-rose-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 border border-neutral-700/80 rounded-lg hover:border-rose-500/60 hover:bg-neutral-800 transition-all shadow-sm hover:shadow-rose-950/20 whitespace-nowrap"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-rose-400" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-neutral-400 hover:text-white md:hidden rounded-md border border-neutral-800 bg-neutral-900/50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-200">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">Navigation</span>
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left text-2xl font-display font-semibold transition-colors ${
                    activeSection === link.id ? 'text-rose-400' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-800 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-rose-600 rounded-xl hover:bg-rose-500 transition-colors flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-xs text-neutral-500 text-center font-mono">
              Sagar Sharma · Creative Portfolio
            </div>
          </div>
        </div>
      )}
    </>
  );
};
