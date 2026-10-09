import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Stethoscope, Phone, ChevronRight, Shield } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Navbar({ onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ['home', 'about', 'specialties', 'doctors', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
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
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Specialties', href: '#specialties', id: 'specialties' },
    { name: 'Our Doctors', href: '#doctors', id: 'doctors' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
        : 'bg-white border-b border-slate-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Clinic Name */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-clinic-primary flex items-center justify-center text-white shadow-sm group-hover:bg-clinic-primary-hover transition-colors">
              <div className="relative">
                <Stethoscope className="w-5 h-5 text-teal-200" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal-400 rounded-full"></span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-xl text-clinic-primary tracking-tight">
                  {clinicData.shortName}
                </span>
                <span className="text-[10px] font-semibold bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded border border-teal-200/60 uppercase tracking-wider">
                  Clinic
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Multi-Specialty Healthcare
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                    isActive
                      ? 'text-clinic-primary bg-teal-50/80 font-semibold'
                      : 'text-slate-600 hover:text-clinic-primary hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${clinicData.contact.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-clinic-primary px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>{clinicData.contact.phoneDisplay}</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 bg-clinic-primary hover:bg-clinic-primary-hover active:scale-[0.98] text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-sm hover:shadow-teal-glow transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-teal-200" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onBookClick}
              className="sm:hidden inline-flex items-center gap-1.5 bg-clinic-primary text-white text-xs font-medium px-3 py-2 rounded-lg"
              aria-label="Book Appointment"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-200" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-clinic-primary hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-lg border-b border-slate-200 shadow-xl transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-teal-50 text-clinic-primary font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-clinic-primary'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 bg-clinic-primary hover:bg-clinic-primary-hover text-white text-base font-medium py-3 rounded-xl shadow-sm"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${clinicData.contact.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-medium py-2.5 rounded-xl border border-slate-200"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call Front Desk: {clinicData.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
