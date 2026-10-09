import React from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function PrivacyModal({ onClose }) {
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
            <Lock className="w-3.5 h-3.5" />
            <span>Patient Privacy & Confidentiality</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-heading">
            Privacy Policy & Data Security
          </h3>
          <p className="mt-1 text-teal-100 text-xs sm:text-sm">
            How {clinicData.clinicName} safeguards your medical and contact information.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">1. Information Collection</h4>
            <p>We only collect information necessary to schedule medical consultations, deliver treatment, and maintain accurate healthcare records. This includes your name, contact phone, email, and stated health concerns.</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">2. Medical Record Confidentiality</h4>
            <p>All clinical notes, diagnostic evaluations, and prescription records are protected under medical secrecy regulations. They are accessible solely to your attending medical doctors and authorized clinic personnel.</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">3. Third-Party Sharing</h4>
            <p>We do not sell or rent patient data to third parties. Diagnostic lab data is shared strictly with accredited pathology partners necessary for fulfilling requested diagnostic tests.</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">4. Appointment Communications</h4>
            <p>We may contact you via SMS, Phone, or WhatsApp regarding your scheduled consultation reminders, lab result readiness, or follow-up wellness checks.</p>
          </div>

          <div className="bg-teal-50 border border-teal-200 p-4 rounded-xl flex items-start gap-3 mt-4">
            <ShieldCheck className="w-5 h-5 text-clinic-primary shrink-0 mt-0.5" />
            <p className="text-xs text-slate-700">
              For any questions regarding your medical data or to request record transfers, please contact our data privacy officer at <strong className="text-slate-900">{clinicData.contact.email}</strong>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-clinic-primary hover:bg-clinic-primary-hover text-white text-sm font-medium rounded-xl transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
