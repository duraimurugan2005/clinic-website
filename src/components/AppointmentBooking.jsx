import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Shield, 
  ArrowRight, 
  Download, 
  MessageSquare, 
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function AppointmentBooking({ preselectedSpecialty, preselectedDoctor, onResetPreselection }) {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    specialtyId: preselectedSpecialty || '',
    doctorId: preselectedDoctor ? preselectedDoctor.id : '',
    appointmentDate: '',
    timeSlot: '10:00 AM',
    patientType: 'new', // new | returning
    notes: '',
  });

  // Validation state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  // Sync pre-selection updates if passed from other components
  useEffect(() => {
    if (preselectedSpecialty) {
      setFormData(prev => ({
        ...prev,
        specialtyId: preselectedSpecialty,
        doctorId: '', // reset doctor unless specified
      }));
    }
  }, [preselectedSpecialty]);

  useEffect(() => {
    if (preselectedDoctor) {
      setFormData(prev => ({
        ...prev,
        doctorId: preselectedDoctor.id,
        specialtyId: preselectedDoctor.specialtyId,
      }));
    }
  }, [preselectedDoctor]);

  // Today's date in YYYY-MM-DD for min date
  const todayString = new Date().toISOString().split('T')[0];

  // Filter doctors based on selected specialty
  const availableDoctors = formData.specialtyId
    ? clinicData.doctors.filter(d => d.specialtyId === formData.specialtyId)
    : clinicData.doctors;

  // Available Time Slots
  const morningSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:15 AM', '11:45 AM'];
  const afternoonSlots = ['01:30 PM', '02:15 PM', '03:00 PM', '03:45 PM', '04:30 PM'];
  const eveningSlots = ['05:15 PM', '06:00 PM', '06:45 PM', '07:30 PM'];

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for that field on typing
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }

    // If specialty changed, check if current doctor still belongs to that specialty
    if (name === 'specialtyId') {
      const match = clinicData.doctors.find(d => d.id === formData.doctorId && d.specialtyId === value);
      if (!match) {
        setFormData(prev => ({ ...prev, specialtyId: value, doctorId: '' }));
      }
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    // Phone validation (digits, minimum 7 characters)
    const phoneClean = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for appointment confirmation.';
    } else if (phoneClean.length < 7 || !/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (e.g. +1 555-234-5678).';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.specialtyId) {
      newErrors.specialtyId = 'Please select a medical specialty.';
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'Please choose your preferred date.';
    } else {
      const selected = new Date(formData.appointmentDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.appointmentDate = 'Please select today or a future date.';
      }
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please select a preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic asynchronous network submission (1.2s delay)
    setTimeout(() => {
      const selectedSpecObj = clinicData.specialties.find(s => s.id === formData.specialtyId);
      const selectedDocObj = clinicData.doctors.find(d => d.id === formData.doctorId);
      
      const referenceId = `AUR-${Math.floor(1000 + Math.random() * 9000)}-DEMO`;

      setSubmittedBooking({
        referenceId,
        ...formData,
        specialtyName: selectedSpecObj ? selectedSpecObj.name : 'General Consultation',
        doctorName: selectedDocObj ? selectedDocObj.name : 'First Available Specialist',
        doctorQualification: selectedDocObj ? selectedDocObj.qualification : '',
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });

      setIsSubmitting(false);
    }, 1200);
  };

  // Reset form to book another
  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      specialtyId: '',
      doctorId: '',
      appointmentDate: '',
      timeSlot: '10:00 AM',
      patientType: 'new',
      notes: '',
    });
    setErrors({});
    if (onResetPreselection) onResetPreselection();
  };

  // Generate .ICS Calendar File download for the patient
  const downloadCalendarFile = () => {
    if (!submittedBooking) return;
    
    const dateParts = submittedBooking.appointmentDate.split('-');
    if (dateParts.length !== 3) return;
    
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//AuraCare Clinic//Appointment Request//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Clinic Consultation - ${submittedBooking.doctorName} (${clinicData.shortName})`,
      `DESCRIPTION:Appointment request for ${submittedBooking.fullName} with ${submittedBooking.doctorName} (${submittedBooking.specialtyName}). Reference: ${submittedBooking.referenceId}`,
      `LOCATION:${clinicData.contact.address}`,
      `DTSTART:${year}${month}${day}T100000Z`,
      `DTEND:${year}${month}${day}T104500Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `AuraCare-Appointment-${submittedBooking.referenceId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-gradient-to-b from-white via-clinic-surface to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-clinic-primary">
              Online Appointment Desk
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Schedule Your Consultation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Reserve dedicated time with our healthcare specialists. Fill in your preferred department and timing below.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          
          {submittedBooking ? (
            /* SUCCESS CONFIRMATION STATE */
            <div className="bg-white rounded-3xl border border-teal-200 p-6 sm:p-10 shadow-card animate-in zoom-in-95 duration-300">
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-teal-50 border-2 border-teal-500 rounded-full flex items-center justify-center text-clinic-primary mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9 text-teal-600" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                  Demo Request Confirmed
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3 font-heading">
                  Appointment Request Received
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-800">{submittedBooking.fullName}</strong>. Your consultation request has been recorded in this demo system.
                </p>
              </div>

              {/* Booking Reference Summary Card */}
              <div className="bg-clinic-surface rounded-2xl border border-slate-200/80 p-5 sm:p-6 space-y-4 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Reference Code</span>
                    <p className="text-base font-bold text-clinic-primary font-mono">{submittedBooking.referenceId}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-medium">Visit Type</span>
                    <p className="text-xs font-semibold text-slate-700 capitalize">{submittedBooking.patientType} Patient</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 font-medium text-xs block">Department & Doctor:</span>
                    <strong className="text-slate-900 block mt-0.5">{submittedBooking.doctorName}</strong>
                    <span className="text-teal-700 text-xs">{submittedBooking.specialtyName}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 font-medium text-xs block">Date & Time Slot:</span>
                    <strong className="text-slate-900 block mt-0.5">{submittedBooking.appointmentDate}</strong>
                    <span className="text-slate-600 text-xs">{submittedBooking.timeSlot}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 font-medium text-xs block">Contact Phone:</span>
                    <span className="text-slate-800 font-medium">{submittedBooking.phone}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 font-medium text-xs block">Clinic Address:</span>
                    <span className="text-slate-700 text-xs">{clinicData.contact.address}</span>
                  </div>
                </div>
              </div>

              {/* Demo Notice Disclaimer (Mandatory) */}
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3 mb-6">
                <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Demonstration Mode Notice:</strong> This is a frontend interactive preview. To enable real patient SMS notifications, calendar sync, and EHR integration, connect your clinic&apos;s booking API or patient management software.
                </div>
              </div>

              {/* Interactive Actions on Success */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={downloadCalendarFile}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-clinic-primary hover:bg-clinic-primary-hover text-white text-xs sm:text-sm font-medium py-3 px-4 rounded-xl shadow-sm transition-all"
                >
                  <Download className="w-4 h-4 text-teal-200" />
                  <span>Download Calendar (.ics)</span>
                </button>

                <a
                  href={`https://wa.me/${clinicData.contact.whatsappRaw}?text=Hi%2C%20I%20requested%20an%20appointment%20(Ref:%20${submittedBooking.referenceId})%20for%20${submittedBooking.fullName}%20in%20${submittedBooking.specialtyName}%20on%20${submittedBooking.appointmentDate}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium py-3 px-4 rounded-xl shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Notify via WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium py-3 px-4 rounded-xl transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>New Request</span>
                </button>
              </div>

            </div>
          ) : (
            /* ACTIVE FORM STATE */
            <form 
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-card space-y-6"
            >
              
              {/* Form Header Info Banner */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Standard Consultation: 30 minutes</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  * Required fields
                </span>
              </div>

              {/* Patient Type Pill Toggle */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Patient Status
                </label>
                <div className="grid grid-cols-2 gap-3 max-w-sm">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, patientType: 'new' }))}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all text-center ${
                      formData.patientType === 'new'
                        ? 'bg-clinic-primary text-white border-clinic-primary shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    New Patient (First Visit)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, patientType: 'returning' }))}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all text-center ${
                      formData.patientType === 'returning'
                        ? 'bg-clinic-primary text-white border-clinic-primary shadow-sm'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Returning Patient
                  </button>
                </div>
              </div>

              {/* Row 1: Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50/70 rounded-xl border text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName 
                          ? 'border-red-300 focus:ring-red-400 bg-red-50/30' 
                          : 'border-slate-200 focus:ring-teal-600'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Contact Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +1 (555) 000-0000"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50/70 rounded-xl border text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.phone 
                          ? 'border-red-300 focus:ring-red-400 bg-red-50/30' 
                          : 'border-slate-200 focus:ring-teal-600'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email (Optional) */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address <span className="text-slate-400 font-normal">(Optional for calendar invite & digital receipts)</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. patient@example.com"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50/70 rounded-xl border text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.email 
                        ? 'border-red-300 focus:ring-red-400 bg-red-50/30' 
                        : 'border-slate-200 focus:ring-teal-600'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Row 3: Specialty & Doctor Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="specialtyId" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Medical Specialty *
                  </label>
                  <select
                    id="specialtyId"
                    name="specialtyId"
                    value={formData.specialtyId}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50/70 rounded-xl border text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.specialtyId 
                        ? 'border-red-300 focus:ring-red-400 bg-red-50/30' 
                        : 'border-slate-200 focus:ring-teal-600'
                    }`}
                  >
                    <option value="">Select Specialty Department...</option>
                    {clinicData.specialties.map(spec => (
                      <option key={spec.id} value={spec.id}>
                        {spec.name} ({spec.badge})
                      </option>
                    ))}
                  </select>
                  {errors.specialtyId && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.specialtyId}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="doctorId" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Doctor <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="doctorId"
                    name="doctorId"
                    value={formData.doctorId}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50/70 rounded-xl border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                  >
                    <option value="">First Available Doctor</option>
                    {availableDoctors.map(doc => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} — {doc.specialtyName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred Appointment Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="appointmentDate" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                      min={todayString}
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50/70 rounded-xl border text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.appointmentDate 
                          ? 'border-red-300 focus:ring-red-400 bg-red-50/30' 
                          : 'border-slate-200 focus:ring-teal-600'
                      }`}
                    />
                  </div>
                  {errors.appointmentDate && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.appointmentDate}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Time Slot *
                  </label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50/70 rounded-xl border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                  >
                    <optgroup label="Morning">
                      {morningSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </optgroup>
                    <optgroup label="Afternoon">
                      {afternoonSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </optgroup>
                    <optgroup label="Evening">
                      {eveningSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Time Slots Fast Selector Pills */}
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  Quick Select Common Slots:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[...morningSlots.slice(0, 3), ...afternoonSlots.slice(0, 2), ...eveningSlots.slice(0, 2)].map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot }))}
                      className={`text-xs py-1.5 px-3 rounded-lg border transition-all ${
                        formData.timeSlot === slot
                          ? 'bg-clinic-primary text-white border-clinic-primary font-semibold shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 5: Notes / Reason for Visit */}
              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Reason for Visit / Symptoms <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Briefly describe your symptoms or reason for scheduling..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-50/70 rounded-xl border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Privacy conscious reminder */}
              <div className="flex items-start gap-2.5 text-xs text-slate-500 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                <Shield className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Patient Privacy:</strong> Your personal information is kept confidential and utilized solely for managing your appointment request.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-clinic-primary hover:bg-clinic-primary-hover disabled:bg-slate-400 text-white text-base font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-teal-glow transition-all duration-200 group"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Processing Request...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5 text-teal-200" />
                    <span>Submit Appointment Request</span>
                    <ArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Footer Note */}
              <p className="text-center text-[11px] text-slate-400">
                Prefer immediate booking by phone? Call our desk directly at <a href={`tel:${clinicData.contact.phoneRaw}`} className="text-clinic-primary font-semibold hover:underline">{clinicData.contact.phoneDisplay}</a>.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
