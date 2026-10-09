import React, { useState } from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import AboutClinic from './components/AboutClinic';
import Doctors from './components/Doctors';
import Services from './components/Services';
import AppointmentBooking from './components/AppointmentBooking';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';

export default function App() {
  const [preselectedSpecialty, setPreselectedSpecialty] = useState('');
  const [preselectedDoctor, setPreselectedDoctor] = useState(null);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSpecialties = () => {
    const specialtiesSection = document.getElementById('specialties');
    if (specialtiesSection) {
      specialtiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookSpecialty = (specialtyId) => {
    setPreselectedSpecialty(specialtyId);
    setPreselectedDoctor(null);
    scrollToBooking();
  };

  const handleSelectDoctor = (doctor) => {
    setPreselectedDoctor(doctor);
    setPreselectedSpecialty(doctor.specialtyId);
    scrollToBooking();
  };

  const handleResetPreselection = () => {
    setPreselectedSpecialty('');
    setPreselectedDoctor(null);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-teal-100 selection:text-teal-900 font-sans">
      {/* Top Status & Emergency Bar */}
      <TopBanner />

      {/* Main Sticky Navigation Bar */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onBookClick={scrollToBooking} 
          onExploreSpecialties={scrollToSpecialties} 
        />

        {/* Medical Specialties Section */}
        <Specialties 
          onBookSpecialty={handleBookSpecialty} 
        />

        {/* About the Clinic Section */}
        <AboutClinic 
          onBookClick={scrollToBooking} 
        />

        {/* Our Specialist Doctors */}
        <Doctors 
          onSelectDoctor={handleSelectDoctor} 
        />

        {/* Clinic Services */}
        <Services 
          onBookClick={scrollToBooking} 
        />

        {/* Appointment Booking Form (Critical Conversion) */}
        <AppointmentBooking 
          preselectedSpecialty={preselectedSpecialty}
          preselectedDoctor={preselectedDoctor}
          onResetPreselection={handleResetPreselection}
        />

        {/* Patient Feedback & Testimonials */}
        <Testimonials />

        {/* Patient FAQs */}
        <FAQ />

        {/* Contact and Location */}
        <ContactLocation />
      </main>

      {/* Dark Teal Footer */}
      <Footer 
        onBookClick={scrollToBooking}
        onSelectSpecialty={handleBookSpecialty}
      />
    </div>
  );
}
