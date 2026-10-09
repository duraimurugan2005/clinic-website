/**
 * Central Clinic Configuration & Content Data
 * 
 * All data in this file is fully configurable. Real clinic staff or developers
 * can update phone numbers, doctor lists, specialties, and hours directly here.
 */

export const clinicData = {
  // Brand & Clinic Core Details
  clinicName: "AuraCare Multi-Specialty Clinic",
  shortName: "AuraCare",
  tagline: "Compassionate Care • Better Health",
  description: "A modern private healthcare clinic providing comprehensive general consultations and specialist medical care for families and individuals.",
  
  // Contact details (Configurable placeholders)
  contact: {
    phone: "+1 (555) 234-5678",
    phoneDisplay: "+1 (555) 234-5678",
    phoneRaw: "15552345678",
    whatsapp: "+1 (555) 234-5678",
    whatsappRaw: "15552345678",
    email: "care@auracareclinic.com",
    address: "452 Medical Center Boulevard, Suite 300, Metro Health District",
    googleMapsUrl: "https://maps.google.com/?q=452+Medical+Center+Boulevard+Metro+Health+District",
    googleReviewsUrl: "https://google.com/search?q=auracare+clinic+reviews",
  },

  // Hours of Operation
  schedule: {
    weekdays: "Monday – Friday: 8:00 AM – 8:00 PM",
    saturday: "Saturday: 9:00 AM – 5:00 PM",
    sunday: "Sunday & Public Holidays: 10:00 AM – 2:00 PM (Urgent Care Only)",
    emergencyNote: "For life-threatening emergencies, please call 911 or visit the nearest emergency hospital immediately.",
  },

  // Trust Highlights for Hero Section
  trustPoints: [
    { title: "Licensed Specialists", description: "Board-certified doctors across 8 key medical disciplines" },
    { title: "Modern Facilities", description: "Clean, hygienic consultation suites & diagnostic support" },
    { title: "Patient-Centred Care", description: "Dedicated consultation time without rushed appointments" },
    { title: "Follow-Up Support", description: "Seamless prescription refills & digital follow-up access" },
  ],

  // Core Clinic Values (About Section)
  values: [
    {
      id: "patient-first",
      title: "Patient-First Approach",
      description: "We listen attentively to your health concerns and prioritize your comfort, clear communication, and informed shared decisions at every step.",
      iconName: "HeartHandshake",
    },
    {
      id: "comprehensive-consultations",
      title: "Comprehensive Consultations",
      description: "From routine health screenings to multi-specialty evaluations, we take the time required for accurate diagnosis and holistic treatment plans.",
      iconName: "Stethoscope",
    },
    {
      id: "convenient-healthcare",
      title: "Convenient Healthcare",
      description: "Flexible morning and evening appointments, minimal waiting times, and digital appointment management designed around your busy schedule.",
      iconName: "ClockCheck",
    },
  ],

  // Medical Specialties
  specialties: [
    {
      id: "general-medicine",
      name: "General Medicine",
      shortDesc: "Primary care, routine check-ups, acute illness diagnosis, and preventive wellness for adults.",
      fullDesc: "Our General Medicine team provides comprehensive primary healthcare, managing everything from common seasonal infections, fever, and digestive issues to long-term preventive wellness and routine physical exams.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      iconName: "Activity",
      badge: "Primary Care",
      conditions: ["Fever, Cold & Viral Infections", "Hypertension Screening", "Fatigue & Vitamin Deficiencies", "Digestive Health", "Annual Wellness Check-ups"],
    },
    {
      id: "paediatrics",
      name: "Paediatrics",
      shortDesc: "Compassionate, gentle healthcare for newborns, infants, children, and adolescents.",
      fullDesc: "Our paediatric department focuses on physical, emotional, and social development of infants, children, and young adults. We provide regular milestone assessments, immunisation guidance, and treatment for childhood ailments.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      iconName: "Baby",
      badge: "Child Health",
      conditions: ["Childhood Immunisations", "Growth & Milestone Tracking", "Paediatric Fevers & Allergies", "Nutritional Advice for Kids", "School Health Assessments"],
    },
    {
      id: "dermatology",
      name: "Dermatology",
      shortDesc: "Expert clinical care for skin, hair, and nail health, acne management, and allergy treatments.",
      fullDesc: "Our certified dermatologists treat a wide array of dermatological conditions ranging from stubborn acne, eczema, and psoriasis to skin lesion evaluations and age-related skin barrier care.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      iconName: "Sparkles",
      badge: "Skin & Hair",
      conditions: ["Acne & Rosacea Management", "Eczema, Psoriasis & Dermatitis", "Hair Fall & Scalp Health", "Skin Allergy Diagnosis", "Mole & Lesion Screening"],
    },
    {
      id: "gynaecology",
      name: "Gynaecology",
      shortDesc: "Dedicated women's health consultations, routine screenings, and reproductive wellness.",
      fullDesc: "Providing a supportive, confidential environment for women at every life stage. From menstrual irregularities and PCOS to routine wellness screenings, fertility guidance, and menopausal care.",
      image: "https://images.unsplash.com/photo-1594824813533-455b57f02b9e?auto=format&fit=crop&w=800&q=80",
      iconName: "UserHeart",
      badge: "Women's Health",
      conditions: ["Routine Gynaecological Exams", "PCOS / PCOD Management", "Menstrual Cycle Irregularities", "Preconception & Family Planning", "Menopause Support"],
    },
    {
      id: "orthopaedics",
      name: "Orthopaedics",
      shortDesc: "Diagnosis and care for bone, joint, ligament, spine, and musculoskeletal discomfort.",
      fullDesc: "Specialised evaluation for joint pains, sports injuries, lower back discomfort, arthritis, and postural strain. We emphasize non-invasive management, rehabilitation guidance, and physical restoration.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      iconName: "Bone",
      badge: "Joint & Spine",
      conditions: ["Knee, Hip & Shoulder Pain", "Back & Neck Strain", "Osteoarthritis Guidance", "Sports Injuries & Sprains", "Ergonomic & Posture Assessment"],
    },
    {
      id: "cardiology",
      name: "Cardiology",
      shortDesc: "Preventive cardiovascular assessments, blood pressure control, and heart wellness checks.",
      fullDesc: "Focused on heart health preservation, non-invasive risk stratification, high blood pressure regulation, cholesterol management, and lifestyle coaching to maintain cardiovascular vitality.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      iconName: "HeartPulse",
      badge: "Heart Health",
      conditions: ["Cardiovascular Risk Screening", "Hypertension (BP) Management", "Lipid & Cholesterol Optimization", "ECG & Heart Health Review", "Preventive Lifestyle Plans"],
    },
    {
      id: "ent",
      name: "ENT (Ear, Nose & Throat)",
      shortDesc: "Evaluation and relief for sinus issues, hearing complaints, throat infections, and vertigo.",
      fullDesc: "Our ENT consultation addresses persistent allergies, chronic sinusitis, ear infections, hearing difficulties, tonsillitis, voice strain, and balance/vertigo issues with modern diagnostic equipment.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      iconName: "Ear",
      badge: "Ear, Nose, Throat",
      conditions: ["Chronic Sinusitis & Congestion", "Ear Infections & Tinnitus", "Tonsillitis & Persistent Sore Throat", "Allergic Rhinitis", "Vertigo & Dizziness Review"],
    },
    {
      id: "diabetes-care",
      name: "Diabetes Care",
      shortDesc: "Personalised glycemic control, HbA1c tracking, diet planning, and metabolic health.",
      fullDesc: "A structured, empathetic approach to managing Type 2 Diabetes, Pre-diabetes, and metabolic syndrome. We combine regular biomarker tracking with evidence-based nutrition and lifestyle counseling.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      iconName: "Gauge",
      badge: "Metabolic Health",
      conditions: ["Pre-Diabetes Prevention", "Type 2 Diabetes Management", "HbA1c & Blood Glucose Monitoring", "Diabetic Lifestyle & Meal Planning", "Complication Prevention Screenings"],
    },
  ],

  // Sample Doctor Profiles (Clearly identified as configurable placeholders)
  doctors: [
    {
      id: "dr-elena-vance",
      name: "Dr. Elena Vance",
      qualification: "MD (Internal Medicine), FACP",
      specialtyId: "general-medicine",
      specialtyName: "General Medicine",
      timings: "Mon, Wed, Fri: 9:00 AM – 3:00 PM",
      days: ["Monday", "Wednesday", "Friday"],
      languages: ["English", "Spanish"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      bio: "Dedicated physician with extensive clinical focus on preventive adult care, chronic condition monitoring, and acute illness management.",
      isSample: true,
    },
    {
      id: "dr-marcus-chen",
      name: "Dr. Marcus Chen",
      qualification: "MD, FAAP (Paediatrics)",
      specialtyId: "paediatrics",
      specialtyName: "Paediatrics",
      timings: "Tue, Thu, Sat: 9:00 AM – 2:00 PM",
      days: ["Tuesday", "Thursday", "Saturday"],
      languages: ["English", "Mandarin"],
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      bio: "Friendly paediatrician committed to providing a calm, encouraging clinic experience for infants, young children, and their parents.",
      isSample: true,
    },
    {
      id: "dr-sarah-jenkins",
      name: "Dr. Sarah Jenkins",
      qualification: "MD (Dermatology), Board Certified",
      specialtyId: "dermatology",
      specialtyName: "Dermatology",
      timings: "Mon, Tue, Thu: 10:00 AM – 4:00 PM",
      days: ["Monday", "Tuesday", "Thursday"],
      languages: ["English"],
      image: "https://images.unsplash.com/photo-1594824813533-455b57f02b9e?auto=format&fit=crop&w=800&q=80",
      bio: "Clinical dermatologist experienced in therapeutic skincare, chronic inflammatory skin disorders, acne solutions, and barrier repair.",
      isSample: true,
    },
    {
      id: "dr-priya-patel",
      name: "Dr. Priya Patel",
      qualification: "MS (OB-GYN), MRCOG",
      specialtyId: "gynaecology",
      specialtyName: "Gynaecology",
      timings: "Wed, Thu, Fri: 10:00 AM – 5:00 PM",
      days: ["Wednesday", "Thursday", "Friday"],
      languages: ["English", "Hindi"],
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80",
      bio: "Empathetic specialist providing comprehensive women's health consultations, hormone balance management, and routine preventative screenings.",
      isSample: true,
    },
    {
      id: "dr-david-ross",
      name: "Dr. David Ross",
      qualification: "MS (Orthopaedics), MCh",
      specialtyId: "orthopaedics",
      specialtyName: "Orthopaedics",
      timings: "Mon, Wed, Sat: 1:00 PM – 6:00 PM",
      days: ["Monday", "Wednesday", "Saturday"],
      languages: ["English"],
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      bio: "Musculoskeletal consultant with a dedicated interest in joint preservation, back discomfort relief, and non-surgical mobility restoration.",
      isSample: true,
    },
    {
      id: "dr-amara-kalu",
      name: "Dr. Amara Kalu",
      qualification: "MD (Cardiology), FACC",
      specialtyId: "cardiology",
      specialtyName: "Cardiology",
      timings: "Tue, Thu, Fri: 11:00 AM – 4:00 PM",
      days: ["Tuesday", "Thursday", "Friday"],
      languages: ["English", "French"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      bio: "Cardiovascular specialist focusing on non-invasive heart assessments, early vascular risk identification, and proactive blood pressure care.",
      isSample: true,
    },
  ],

  // Clinic Services
  services: [
    {
      id: "general-consultations",
      title: "General Health Consultations",
      description: "One-on-one evaluations for acute symptoms, fevers, infections, digestive issues, and overall everyday health concerns.",
      iconName: "Stethoscope",
      tag: "Everyday Care",
      features: ["30-minute dedicated consultation", "Digital prescription sent to your phone", "Lab referral coordination"],
    },
    {
      id: "preventive-checkups",
      title: "Preventive Health Check-ups",
      description: "Comprehensive annual health screens, blood pressure reviews, lipid profiling, and early risk detection packages.",
      iconName: "ShieldCheck",
      tag: "Wellness",
      features: ["Full vital signs review", "Personalised lifestyle guidance", "Organ health baseline tracking"],
    },
    {
      id: "specialist-consultations",
      title: "Specialist Consultations",
      description: "Direct in-person consultations with board-qualified medical specialists without prolonged referral waits.",
      iconName: "Award",
      tag: "Specialized",
      features: ["Deep-dive clinical evaluation", "Specialist treatment plans", "Collaborative multi-doctor review"],
    },
    {
      id: "followup-visits",
      title: "Follow-up Visits",
      description: "Structured recovery reviews to assess treatment efficacy, adjust medication dosages, and verify lab results.",
      iconName: "RefreshCw",
      tag: "Continuity",
      features: ["Treatment response assessment", "Medication dosage refinement", "In-person or tele-consult options"],
    },
    {
      id: "chronic-management",
      title: "Chronic Condition Management",
      description: "Long-term monitoring plans for hypertension, diabetes, asthma, thyroid disorders, and arthritis.",
      iconName: "ActivitySquare",
      tag: "Ongoing Care",
      features: ["Quarterly biomarker tracking", "Prescription renewal support", "Lifestyle & dietary counseling"],
    },
    {
      id: "patient-health-guidance",
      title: "Patient Health Guidance",
      description: "Clear, jargon-free health counseling on nutrition, sleep, vaccines, ergonomic posture, and stress management.",
      iconName: "HeartHandshake",
      tag: "Education",
      features: ["Jargon-free medical guidance", "Vaccine schedule advisories", "Family wellness roadmaps"],
    },
  ],

  // Patient Testimonials (Placeholder sample reviews for demo)
  testimonials: [
    {
      id: "test-1",
      quote: "The consultation was calm, thorough, and on time. The doctor explained my test results clearly without rushing me through. The clinic environment is exceptionally clean and peaceful.",
      author: "Rachel Sterling",
      visitType: "General Medicine Patient",
      rating: 5,
      date: "Recent Patient",
      isSample: true,
    },
    {
      id: "test-2",
      quote: "Bringing my 4-year-old for her vaccinations has always been stressful, but the paediatric team here made her feel completely safe and happy. Highly recommend AuraCare for families.",
      author: "David & Maya Kowalski",
      visitType: "Paediatric Visit",
      rating: 5,
      date: "Recent Patient",
      isSample: true,
    },
    {
      id: "test-3",
      quote: "My chronic back pain was thoroughly evaluated, and the treatment plan focused on posture correction and physical therapy. The booking system was seamless and quick.",
      author: "Marcus Thorne",
      visitType: "Orthopaedic Consultation",
      rating: 5,
      date: "Recent Patient",
      isSample: true,
    },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "How do I book an appointment at AuraCare Clinic?",
      answer: "You can book directly via our online booking form on this website, call our front desk at +1 (555) 234-5678, or send us a WhatsApp message. We will confirm your preferred doctor and time slot promptly.",
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Please bring a valid photo ID, your insurance card (if applicable), a list of any current medications or supplements you take, and any recent lab reports or diagnostic scans related to your visit.",
    },
    {
      question: "Do you accept walk-in patients?",
      answer: "While we prioritize scheduled appointments to minimize waiting times, we do accommodate same-day urgent walk-in consultations based on doctor availability.",
    },
    {
      question: "How are patient privacy and medical records handled?",
      answer: "We adhere to strict confidentiality standards. All medical records and prescription details are encrypted and stored in compliance with standard healthcare privacy regulations.",
    },
    {
      question: "What is your cancellation or rescheduling policy?",
      answer: "If you need to reschedule or cancel your appointment, we kindly request at least 4 hours' advance notice so we may offer the consultation slot to another patient.",
    },
  ],

  // Clinic Tour Amenities (About modal / highlights)
  amenities: [
    { title: "Private Consultation Rooms", desc: "Acoustically insulated and sanitized after every patient visit." },
    { title: "Comfortable Waiting Lounge", desc: "Spacious seating with filtered air purification and free Wi-Fi." },
    { title: "On-site Sample Collection", desc: "Quick blood and swab collection partnered with certified diagnostic labs." },
    { title: "Digital Prescription Delivery", desc: "Receive your prescriptions and care notes instantly via SMS / Email." },
    { title: "Wheelchair Accessible", desc: "Ground-level ramp access, elevator, and step-free clinic corridors." },
    { title: "Pharmacy Partner Support", desc: "Seamless coordination with nearby pharmacies for direct home delivery." },
  ]
};
