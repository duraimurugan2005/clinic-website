import React from 'react';
import { X, Sparkles, Building2, CheckCircle2, ShieldCheck, HeartPulse } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function ClinicTourModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-clinic-primary text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 bg-teal-800/80 px-3 py-1 rounded-full text-xs font-semibold text-teal-200 mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>Clinic Facilities & Amenities</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-heading">
            Inside {clinicData.clinicName}
          </h3>
          <p className="mt-2 text-teal-100 text-sm max-w-lg">
            Designed for patient comfort, medical privacy, hygiene, and streamlined outpatient care.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clinicData.amenities.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-clinic-primary font-bold text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-teal-50 border border-teal-200/70 rounded-2xl p-4 mt-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-clinic-primary shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700">
                <span className="font-bold text-slate-900">Hygiene & Safety Protocols: </span>
                Our examination instruments are sterilized using medical autoclaves, air filtration is maintained throughout all consultation suites, and patient touch-points are disinfected regularly.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-clinic-primary hover:bg-clinic-primary-hover text-white text-sm font-medium rounded-xl transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
