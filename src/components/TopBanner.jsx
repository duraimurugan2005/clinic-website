import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, AlertCircle } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function TopBanner() {
  const [isOpen, setIsOpen] = useState(true);

  // Dynamic open/closed check (8:00 to 20:00 local time approx)
  useEffect(() => {
    const hour = new Date().getHours();
    // Weekday / Saturday standard hours check (8am to 8pm)
    setIsOpen(hour >= 8 && hour < 20);
  }, []);

  return (
    <div className="bg-clinic-primary text-white text-xs border-b border-teal-800/60 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Left: Address and Live Status */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-teal-100/90 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-teal-300 shrink-0" />
              <span className="truncate max-w-xs lg:max-w-sm">{clinicData.contact.address}</span>
            </div>
            
            <span className="text-teal-700">|</span>

            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
              </span>
              <span className="text-teal-100 font-medium">
                {isOpen ? 'Clinic Open Now' : 'Opens at 8:00 AM'}
              </span>
            </div>
          </div>

          {/* Right: Direct Contacts */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${clinicData.contact.phoneRaw}`}
              className="flex items-center gap-1.5 text-teal-100 hover:text-white transition-colors group"
              title="Call Clinic Reception"
            >
              <Phone className="w-3.5 h-3.5 text-teal-300 group-hover:scale-110 transition-transform" />
              <span>Call: <strong className="font-semibold text-white">{clinicData.contact.phoneDisplay}</strong></span>
            </a>

            <span className="text-teal-700">|</span>

            <a
              href={`https://wa.me/${clinicData.contact.whatsappRaw}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20doctor%20consultation%20at%20AuraCare%20Clinic.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-teal-200 hover:text-white transition-colors bg-teal-800/60 px-2 py-0.5 rounded-full hover:bg-teal-800"
              title="WhatsApp Clinic Desk"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
              <span className="font-medium">WhatsApp Helpdesk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
