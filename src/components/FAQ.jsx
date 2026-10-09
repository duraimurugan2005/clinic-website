import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 lg:py-24 bg-clinic-surface border-t border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-clinic-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-clinic-primary">
              Patient Information
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything you need to know about scheduling, arriving for your consultation, and medical records.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {clinicData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900 font-heading">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-teal-50 text-clinic-primary' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
