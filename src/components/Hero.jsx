import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, HeartHandshake, Layers, Stethoscope, Clock, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Hero({ onBookClick, onExploreSpecialties }) {
  return (
    <section id="home" className="relative bg-gradient-to-b from-teal-50/40 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 bg-teal-50/70 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-clinic-primary">
                COMPASSIONATE CARE • BETTER HEALTH
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Complete Healthcare, <br className="hidden sm:inline" />
              <span className="text-clinic-primary">All in One Place.</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              From everyday health concerns to specialist consultations, we're here to support your health at every stage of life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 bg-clinic-primary hover:bg-clinic-primary-hover active:scale-[0.98] text-white font-medium text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-teal-glow transition-all duration-200 group"
              >
                <Calendar className="w-5 h-5 text-teal-200" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreSpecialties}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-teal-50/60 active:scale-[0.98] text-slate-700 hover:text-clinic-primary font-medium text-base px-6 py-3.5 rounded-xl border border-slate-300 hover:border-teal-300 shadow-sm transition-all duration-200"
              >
                <span>Explore Our Specialties</span>
              </button>
            </div>

            {/* Verifiable Trust-Information Row */}
            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Clinic Standard of Care
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                {clinicData.trustPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-slate-800">{point.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Doctor & Patient Photo Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=85"
                  alt="Doctor consulting with a patient in a bright, modern clinic"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85";
                  }}
                />
                
                {/* Subtle soft gradient overlay at the base for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-slate-900/70 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs flex items-center justify-between border border-white/10">
                    <span className="font-medium flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5 text-teal-300" />
                      Doctor Consultation Room
                    </span>
                    <span className="text-[11px] text-slate-300">Clean & Private</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 1: Patient-Focused Care (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-slate-100 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-500 max-w-[210px]">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-clinic-primary shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Patient-Focused</h4>
                  <p className="text-[11px] text-slate-500 leading-tight">Personalised attention for every patient</p>
                </div>
              </div>

              {/* Floating Card 2: Multiple Specialties (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-slate-100 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[210px]">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-clinic-primary shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">8 Specialties</h4>
                  <p className="text-[11px] text-slate-500 leading-tight">General medicine to specialist care</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
