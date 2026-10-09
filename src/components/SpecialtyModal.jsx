import React from 'react';
import { X, CheckCircle2, Calendar, ArrowRight, Stethoscope, Shield } from 'lucide-react';

export default function SpecialtyModal({ specialty, onClose, onBookSpecialty }) {
  if (!specialty) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image & Close */}
        <div className="relative h-48 sm:h-56 bg-slate-100 overflow-hidden">
          <img
            src={specialty.image}
            alt={specialty.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/90 text-white mb-1.5 uppercase tracking-wider">
              {specialty.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">{specialty.name}</h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">Department Overview</h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {specialty.fullDesc || specialty.shortDesc}
            </p>
          </div>

          {specialty.conditions && specialty.conditions.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                Common Consultations & Conditions Evaluated:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {specialty.conditions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-teal-50/70 border border-teal-200/60 rounded-xl p-4 text-xs text-slate-700 flex items-start gap-3">
            <Shield className="w-4 h-4 text-clinic-primary shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-clinic-primary">Need a Consultation? </span>
              Appointments can be scheduled online or by calling our desk. Our doctors provide unhurried, evidence-based care.
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-200/60 transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onBookSpecialty(specialty.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-clinic-primary hover:bg-clinic-primary-hover text-white text-sm font-medium px-6 py-2.5 rounded-xl shadow-sm hover:shadow-teal-glow transition-all"
          >
            <Calendar className="w-4 h-4 text-teal-200" />
            <span>Book in {specialty.name}</span>
            <ArrowRight className="w-4 h-4 text-teal-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
