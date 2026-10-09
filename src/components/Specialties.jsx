import React, { useState } from 'react';
import { 
  Activity, 
  Baby, 
  Sparkles, 
  HeartHandshake, 
  Bone, 
  HeartPulse, 
  Ear, 
  Gauge, 
  ArrowRight, 
  Search,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import SpecialtyModal from './SpecialtyModal';

// Icon Map helper
const iconMap = {
  Activity: Activity,
  Baby: Baby,
  Sparkles: Sparkles,
  UserHeart: HeartHandshake,
  Bone: Bone,
  HeartPulse: HeartPulse,
  Ear: Ear,
  Gauge: Gauge,
  Stethoscope: Stethoscope,
};

export default function Specialties({ onBookSpecialty }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpecialties = clinicData.specialties.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="specialties" className="py-16 lg:py-24 bg-clinic-surface border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-clinic-primary">
              Medical Specialties
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Healthcare for Every Stage of Life
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore our medical departments and find the care that suits your needs.
          </p>

          {/* Quick Search & Filter Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by department, symptom, or condition..."
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSpecialties.map((specialty) => {
            const IconComponent = iconMap[specialty.iconName] || Activity;

            return (
              <div
                key={specialty.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-card-hover hover:border-teal-300 transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Fallback */}
                <div className="relative h-44 bg-slate-100 overflow-hidden">
                  <img
                    src={specialty.image}
                    alt={specialty.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 right-3 text-[11px] font-semibold bg-white/95 text-clinic-primary px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    {specialty.badge}
                  </span>

                  {/* Icon floating */}
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-clinic-primary shadow-sm">
                    <IconComponent className="w-5 h-5 text-teal-700" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-clinic-primary transition-colors">
                      {specialty.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {specialty.shortDesc}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedSpecialty(specialty)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinic-primary hover:text-teal-700 transition-colors group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => onBookSpecialty(specialty.id)}
                      className="text-xs font-medium text-slate-600 hover:text-white bg-slate-100 hover:bg-clinic-primary px-2.5 py-1.5 rounded-lg transition-colors"
                      title={`Book appointment in ${specialty.name}`}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Result */}
        {filteredSpecialties.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 max-w-lg mx-auto">
            <p className="text-slate-600 text-sm">No specialty matched &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-semibold text-clinic-primary underline"
            >
              Clear search filter
            </button>
          </div>
        )}

      </div>

      {/* Specialty Detail Modal */}
      {selectedSpecialty && (
        <SpecialtyModal
          specialty={selectedSpecialty}
          onClose={() => setSelectedSpecialty(null)}
          onBookSpecialty={onBookSpecialty}
        />
      )}
    </section>
  );
}
