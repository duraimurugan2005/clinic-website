import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Navigation, 
  ExternalLink,
  ShieldAlert,
  Building,
  CheckCircle2
} from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function ContactLocation() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-clinic-primary">
              Find & Contact Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinic Location & Hours
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conveniently located in the medical district with ample visitor parking and step-free wheelchair access.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards & Schedule */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Buttons Card */}
            <div className="bg-clinic-surface rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 font-heading">
                <Building className="w-5 h-5 text-clinic-primary" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-4">
                
                {/* Address Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-clinic-primary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address</h4>
                    <p className="text-sm font-medium text-slate-800 mt-0.5">
                      {clinicData.contact.address}
                    </p>
                    <a
                      href={clinicData.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-clinic-primary hover:underline mt-1"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions in Google Maps</span>
                    </a>
                  </div>
                </div>

                <div className="border-t border-slate-200/60 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Phone Item */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-clinic-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-teal-700" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Front Desk</h4>
                      <a
                        href={`tel:${clinicData.contact.phoneRaw}`}
                        className="text-sm font-semibold text-slate-900 hover:text-clinic-primary block mt-0.5"
                      >
                        {clinicData.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Item */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp</h4>
                      <a
                        href={`https://wa.me/${clinicData.contact.whatsappRaw}?text=Hello%2C%20I%20have%20an%20inquiry%20regarding%20AuraCare%20Clinic.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 block mt-0.5"
                      >
                        Message Us
                      </a>
                    </div>
                  </div>

                </div>

                {/* Email Item */}
                <div className="border-t border-slate-200/60 pt-4 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-clinic-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Inquiries Email</h4>
                    <a
                      href={`mailto:${clinicData.contact.email}`}
                      className="text-sm font-semibold text-slate-900 hover:text-clinic-primary mt-0.5 inline-block"
                    >
                      {clinicData.contact.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-clinic-surface rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-soft">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 font-heading">
                <Clock className="w-5 h-5 text-clinic-primary" />
                <span>Working Hours</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-800">Monday – Friday</span>
                  <span className="text-slate-600">8:00 AM – 8:00 PM</span>
                </div>

                <div className="flex justify-between py-2 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-800">Saturday</span>
                  <span className="text-slate-600">9:00 AM – 5:00 PM</span>
                </div>

                <div className="flex justify-between py-2 text-slate-600">
                  <span className="font-semibold text-slate-800">Sunday & Holidays</span>
                  <span className="text-slate-600">10:00 AM – 2:00 PM (Urgent Care)</span>
                </div>
              </div>

              {/* Emergency Advisory */}
              <div className="mt-5 bg-amber-50/90 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  {clinicData.schedule.emergencyNote}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Map with directions card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-soft flex flex-col h-full min-h-[420px]">
              
              {/* Top Map Action Bar */}
              <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <MapPin className="w-4 h-4 text-clinic-primary" />
                  <span>Interactive Map Preview</span>
                </div>

                <a
                  href={clinicData.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinic-primary hover:text-teal-700 transition-colors"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Responsive Google Maps Embed / Visual Map */}
              <div className="relative flex-1 w-full h-[380px] bg-slate-100">
                <iframe
                  title="Clinic Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373631531675!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sMedical%20Centre!5e0!3m2!1sen!2sus!4v1651829492193!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Overlay Card on Map */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-md sm:max-w-xs">
                  <h4 className="text-xs font-bold text-slate-900">{clinicData.shortName} Medical Suite</h4>
                  <p className="text-[11px] text-slate-600 mt-1">Ground floor visitor parking available in Zone B.</p>
                  <a
                    href={clinicData.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center gap-1.5 bg-clinic-primary text-white text-[11px] font-medium px-3 py-1.5 rounded-lg shadow-xs"
                  >
                    <Navigation className="w-3 h-3 text-teal-200" />
                    <span>Get Navigation Directions</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
