# AuraCare Multi-Specialty Clinic — Premium Healthcare Website Demo

A modern, trustworthy, and client-ready website demo for a **Multi-Specialty General Medical Clinic**, built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React Icons**.

---

## 🌟 Key Features

1. **Brand & Design Identity**
   - **Primary Palette**: Elegant Deep Teal (`#0A4D4E`), Clean White (`#FFFFFF`), Soft Off-White (`#F8FAFC`), and Mint Green accents (`#14B8A6`).
   - **Typography**: Dual-font pairing with *Plus Jakarta Sans* for headings and *Inter* for body text.
   - **Responsive & Accessible**: Optimized for mobile screens (375px/390px), tablets (768px), laptops (1280px), and desktops (1440px).

2. **Homepage Hero Section**
   - Headline: *"Complete Healthcare, All in One Place."*
   - Subtitle: *"From everyday health concerns to specialist consultations, we're here to support your health at every stage of life."*
   - Two CTAs: *Book an Appointment* and *Explore Our Specialties*.
   - Verifiable Trust Indicators row (Licensed Specialists, Modern Diagnostics Support, Patient-Centred Consultations, Dedicated Follow-up).
   - High-quality clinical photography with floating badge accents (*Patient-Focused*, *8 Specialties*).

3. **Medical Specialties (8 Configurable Departments)**
   - General Medicine, Paediatrics, Dermatology, Gynaecology, Orthopaedics, Cardiology, ENT (Ear, Nose & Throat), and Diabetes Care.
   - Live Search & Filtering.
   - In-depth *"Learn More"* modal drawer detailing common evaluated conditions and direct department booking.

4. **About the Clinic & Infrastructure Tour**
   - Section: *"Healthcare Built Around You."*
   - 3 Core Values: *Patient-First Approach*, *Comprehensive Consultations*, and *Convenient Healthcare*.
   - Interactive *"Discover Our Clinic"* modal showcasing sanitized consultation rooms, lounge, sample collection, and digital prescriptions.

5. **Specialist Doctors Directory**
   - Card layout with qualification badges, department filters, languages spoken, and consultation timings.
   - One-click booking button that automatically pre-selects the doctor and department in the booking form.
   - Clearly marked sample placeholder notes for transparent client handoff.

6. **Clinic Services**
   - 6 structured outpatient service cards (General Health Consultations, Preventive Check-ups, Specialist Care, Follow-up Visits, Chronic Condition Management, Patient Health Guidance).

7. **Interactive Appointment Booking Form (Critical Conversion)**
   - Complete input fields: Full Name, Phone, Email, Specialty, Preferred Doctor, Date (with past date protection), Time Slot pills, Patient Status (New / Returning), and Symptoms notes.
   - Real-time client-side validation with inline error messages and anti-duplicate submission handling.
   - **Demo Confirmation Card**: Generates a booking reference code (`AUR-XXXX-DEMO`), summarizes the appointment, allows direct **download of an `.ics` Calendar file**, and enables a pre-filled WhatsApp message.

8. **Patient Testimonials & Google Reviews**
   - Readable feedback cards marked as sample placeholders.
   - Direct button link to authentic Google Business reviews.

9. **Contact & Location**
   - Complete address, phone link (`tel:`), WhatsApp direct chat link (`https://wa.me/`), email, detailed working hours breakdown with live "Open Now" status, and embedded Google Maps view.

10. **Centralized Data Configuration (`clinicData.js`)**
    - All clinic details, phone numbers, addresses, doctor profiles, specialties, and schedules live in `src/data/clinicData.js`. Change details in 30 seconds for any real clinic client.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
├── index.html                    # SEO meta tags, title, favicon
├── package.json                  # Dependencies & scripts
├── tailwind.config.js            # Custom healthcare color tokens & fonts
├── src/
│   ├── main.jsx                  # Entry point
│   ├── index.css                 # Global styles, fonts, and utilities
│   ├── App.jsx                   # Master component & cross-section state
│   ├── data/
│   │   └── clinicData.js         # Single source of truth for all clinic data
│   └── components/
│       ├── TopBanner.jsx         # Live hours status & emergency bar
│       ├── Navbar.jsx            # Sticky navigation with mobile menu
│       ├── Hero.jsx              # Hero screen with 2-column layout
│       ├── Specialties.jsx       # 8 medical specialties grid & search
│       ├── SpecialtyModal.jsx    # Department overview dialog
│       ├── AboutClinic.jsx       # Clinic philosophy & values
│       ├── ClinicTourModal.jsx   # Clinic facilities & hygiene modal
│       ├── Doctors.jsx           # Specialist doctor cards & filtering
│       ├── Services.jsx          # Outpatient service highlights
│       ├── AppointmentBooking.jsx# Validated booking form & calendar export
│       ├── Testimonials.jsx      # Feedback cards & Google reviews link
│       ├── FAQ.jsx               # Patient information accordion
│       ├── ContactLocation.jsx   # Contact details, hours & Google map
│       ├── PrivacyModal.jsx      # Patient privacy & confidentiality dialog
│       └── Footer.jsx            # 4-column footer with quick links
```

---

## 🌐 Deploy to Vercel

```bash
npx vercel
```
Or connect this GitHub repository to [Vercel](https://vercel.com) — it will automatically detect the Vite React configuration with standard output directory `dist`.
