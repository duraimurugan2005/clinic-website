import React, { useState } from 'react';
import { 
  Stethoscope, 
  ShieldCheck, 
  Award, 
  RefreshCw, 
  Activity, 
  HeartHandshake,
  CheckCircle,
  ArrowRight,
  Info
} from 'lucide-react';
import { clinicData } from '../data/clinicData';

const iconMap = {
  Stethoscope: Stethoscope,
  ShieldCheck: ShieldCheck,
  Award: Award,
  RefreshCw: RefreshCw,
  ActivitySquare: Activity,
  HeartHandshake: HeartHandshake,
};

export default function Services({ onBookClick }) {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-clinic-primary">
              Outpatient Care
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Clinic Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From single-visit symptom assessments to long-term health coordination, our clinical workflows are built for accuracy, patient comfort, and continuity.
          </p>
        </div>

        {/* Services 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {clinicData.services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Stethoscope;

            return (
              <div
                key={service.id}
                className="bg-clinic-surface rounded-3xl border border-slate-200/80 p-6 sm:p-8 hover:border-teal-300 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Icon and Tag */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-clinic-primary group-hover:bg-clinic-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold bg-white text-teal-800 border border-slate-200/80 px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-clinic-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-5 space-y-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={onBookClick}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinic-primary hover:text-teal-700 group/link"
                  >
                    <span>Request Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5 group-link:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-slate-400 font-medium">In-Clinic</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Informational Banner */}
        <div className="mt-12 bg-teal-50/70 border border-teal-200/80 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-clinic-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">Customized Healthcare Plans Available</h4>
              <p className="text-xs text-slate-600 mt-0.5">Need assistance selecting the right doctor or diagnostic profile? Speak with our nursing triage desk.</p>
            </div>
          </div>
          <button
            onClick={onBookClick}
            className="shrink-0 bg-clinic-primary hover:bg-clinic-primary-hover text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-sm transition-colors"
          >
            Inquire at Desk
          </button>
        </div>

      </div>
    </section>
  );
}
