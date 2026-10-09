import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Stethoscope, 
  ClockCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle,
  Building2,
  Users
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import ClinicTourModal from './ClinicTourModal';

const iconMap = {
  HeartHandshake: HeartHandshake,
  Stethoscope: Stethoscope,
  ClockCheck: ClockCheck,
};

export default function AboutClinic({ onBookClick }) {
  const [tourModalOpen, setTourModalOpen] = useState(false);

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with layered clinic context */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                alt="Healthcare professional examining patient warmly"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/80 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Compassionate Practice</h4>
                      <p className="text-xs text-teal-100">Every appointment is dedicated to your well-being.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary floating accent */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-clinic-primary text-white p-4 rounded-2xl shadow-xl border-2 border-white max-w-xs items-center gap-3">
              <Sparkles className="w-6 h-6 text-teal-300 shrink-0" />
              <p className="text-xs font-medium leading-snug">
                Transparent consultations with clear, actionable advice.
              </p>
            </div>
          </div>

          {/* Right Column: Text & 3 Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-clinic-primary">
                About Our Clinic
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Healthcare Built Around You.
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                At {clinicData.clinicName}, we believe quality healthcare begins with truly listening. Our outpatient clinic brings together dedicated general physicians and multi-specialty doctors under one roof to deliver thoughtful, personalised medical attention.
              </p>
              <p className="text-sm sm:text-base text-slate-500">
                Whether you visit for an acute illness, a routine preventive health evaluation, or long-term chronic condition support, our clinical team emphasizes clear communication, thorough clinical reviews, and respectful patient comfort.
              </p>
            </div>

            {/* Three Concise Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {clinicData.values.map((val) => {
                const IconComp = iconMap[val.iconName] || HeartHandshake;
                return (
                  <div 
                    key={val.id} 
                    className="bg-clinic-surface p-4 rounded-2xl border border-slate-200/70 flex flex-col justify-between hover:border-teal-300 transition-colors"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-clinic-primary flex items-center justify-center mb-3">
                        <IconComp className="w-5 h-5 text-teal-700" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                        {val.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setTourModalOpen(true)}
                className="inline-flex items-center gap-2 bg-clinic-primary hover:bg-clinic-primary-hover text-white text-sm font-medium px-6 py-3 rounded-xl shadow-sm hover:shadow-teal-glow transition-all"
              >
                <Building2 className="w-4 h-4 text-teal-200" />
                <span>Discover Our Clinic</span>
                <ArrowRight className="w-4 h-4 text-teal-300" />
              </button>

              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 bg-white text-slate-700 hover:text-clinic-primary text-sm font-medium px-5 py-3 rounded-xl border border-slate-300 hover:border-teal-300 transition-colors"
              >
                <span>Book a Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Clinic Facilities Tour Modal */}
      {tourModalOpen && (
        <ClinicTourModal onClose={() => setTourModalOpen(false)} />
      )}
    </section>
  );
}
