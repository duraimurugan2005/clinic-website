import React, { useState } from 'react';
import { Calendar, Clock, Languages, Award, ChevronRight, Info, UserCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Doctors({ onSelectDoctor }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const specialtiesList = [
    { id: 'all', name: 'All Specialties' },
    ...clinicData.specialties.map(s => ({ id: s.id, name: s.name }))
  ];

  const filteredDoctors = selectedFilter === 'all'
    ? clinicData.doctors
    : clinicData.doctors.filter(d => d.specialtyId === selectedFilter);

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-clinic-surface border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-clinic-primary">
              Medical Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Consult With Our Doctors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our physicians and specialists are dedicated to attentive, evidence-based care tailored to your specific health needs.
          </p>

          {/* Sample Placeholder Banner (Required for transparency) */}
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-600 text-xs px-3.5 py-1.5 rounded-full">
            <Info className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Demonstration profiles: Replaceable with actual clinic doctor rosters and schedules before launch.</span>
          </div>
        </div>

        {/* Specialty Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {specialtiesList.slice(0, 6).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-150 ${
                selectedFilter === tab.id
                  ? 'bg-clinic-primary text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Doctors Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col group"
            >
              {/* Doctor Photo & Badges */}
              <div className="relative h-64 bg-slate-100 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                
                {/* Specialty Badge */}
                <div className="absolute top-3 left-3 bg-clinic-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                  {doctor.specialtyName}
                </div>

                {/* Sample Badge */}
                <div className="absolute top-3 right-3 bg-white/90 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-md backdrop-blur-sm">
                  Sample Profile
                </div>

                {/* Languages bottom badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <Languages className="w-3.5 h-3.5 text-teal-300" />
                    <span>{doctor.languages.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-clinic-primary transition-colors">
                      {doctor.name}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-teal-700 mt-1 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>{doctor.qualification}</span>
                  </p>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>

                {/* Timings Box */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2 font-medium text-slate-800 mb-1">
                    <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>Consultation Timings:</span>
                  </div>
                  <p className="text-slate-600 pl-5.5 text-[11px] leading-tight">
                    {doctor.timings}
                  </p>
                </div>

                {/* Book Action Button */}
                <button
                  onClick={() => onSelectDoctor(doctor)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-clinic-primary hover:bg-clinic-primary-hover text-white text-sm font-medium py-3 rounded-xl shadow-sm hover:shadow-teal-glow transition-all"
                >
                  <Calendar className="w-4 h-4 text-teal-200" />
                  <span>Book with {doctor.name.split(' ')[1] ? doctor.name.split(' ')[0] + ' ' + doctor.name.split(' ')[1] : doctor.name}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500">
            Looking for a specific consultant or multi-disciplinary evaluation? <a href="#contact" className="text-clinic-primary font-semibold hover:underline">Contact our front desk</a> for direct assistance.
          </p>
        </div>

      </div>
    </section>
  );
}
