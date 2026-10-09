import React, { useState } from 'react';
import { 
  Stethoscope, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Heart, 
  ArrowUp, 
  ShieldCheck,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import PrivacyModal from './PrivacyModal';

export default function Footer({ onBookClick, onSelectSpecialty }) {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-clinic-primary text-white pt-16 pb-12 border-t border-teal-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-teal-800/80">
          
          {/* Col 1: Brand & Introduction (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-200 shadow-sm">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white tracking-tight block">
                  {clinicData.shortName}
                </span>
                <span className="text-[11px] text-teal-200 font-medium">
                  Multi-Specialty Healthcare
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed max-w-sm">
              {clinicData.description} Dedicated to patient comfort, evidence-based diagnoses, and comprehensive family care.
            </p>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-colors"
              >
                <span>Request Appointment</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Medical Specialties (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-200 font-heading">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs text-teal-100/90">
              {clinicData.specialties.map((spec) => (
                <li key={spec.id}>
                  <button
                    onClick={() => onSelectSpecialty(spec.id)}
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span className="text-teal-400">›</span>
                    <span>{spec.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-200 font-heading">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-teal-100/90">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Clinic</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Specialties</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">Our Doctors</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Clinic Services</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Online</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Hours</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-200 font-heading">
              Clinic Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-teal-100/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                <span className="leading-snug">{clinicData.contact.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-300 shrink-0" />
                <a href={`tel:${clinicData.contact.phoneRaw}`} className="hover:text-white font-medium">
                  {clinicData.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                <a 
                  href={`https://wa.me/${clinicData.contact.whatsappRaw}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Helpdesk
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-300 shrink-0" />
                <a href={`mailto:${clinicData.contact.email}`} className="hover:text-white">
                  {clinicData.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-teal-800/80">
                <Clock className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Mon – Fri: 8:00 AM – 8:00 PM</span>
                  <span className="text-teal-200/80 text-[11px]">Sat: 9:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Privacy & Scroll-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-200/80">
          <div>
            <p>© {new Date().getFullYear()} {clinicData.clinicName}. All rights reserved.</p>
            <p className="text-[10px] text-teal-300/60 mt-0.5">
              Demonstration Website. Connect with your clinic administration system for live appointments.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-white transition-colors underline"
            >
              Privacy Policy
            </button>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-teal-800/80 hover:bg-teal-700 text-teal-100 hover:text-white flex items-center justify-center transition-colors shadow-sm"
              title="Scroll to top of page"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <PrivacyModal onClose={() => setPrivacyOpen(false)} />
      )}
    </footer>
  );
}
