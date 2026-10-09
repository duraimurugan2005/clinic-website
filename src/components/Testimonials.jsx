import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, Info, Heart } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-clinic-primary">
              Patient Experiences
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Patient Feedback & Care Stories
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Read placeholder feedback representing the patient-first standard of care we strive to uphold every day.
          </p>

          {/* Sample Label */}
          <div className="mt-3 inline-flex items-center gap-1.5 text-slate-400 text-xs bg-slate-50 px-3 py-1 rounded-full border border-slate-200/60">
            <Info className="w-3.5 h-3.5 text-teal-600" />
            <span>Sample feedback cards for demonstration purposes</span>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {clinicData.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-clinic-surface rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between hover:border-teal-300 hover:shadow-soft transition-all duration-300 relative group"
            >
              <div>
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-2xl bg-teal-50 text-clinic-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <MessageSquareQuote className="w-5 h-5 text-teal-700" />
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.author}</h4>
                  <span className="text-xs text-teal-700 font-medium block">{item.visitType}</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">{item.date}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Genuine Google Reviews Link CTA */}
        <div className="mt-12 text-center">
          <a
            href={clinicData.contact.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-clinic-primary text-sm font-medium px-6 py-3 rounded-xl border border-slate-300 hover:border-teal-300 shadow-sm transition-all"
          >
            <span>View & Submit Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
          <p className="text-[11px] text-slate-400 mt-2">
            Links to your clinic's authentic Google Business profile once configured.
          </p>
        </div>

      </div>
    </section>
  );
}
