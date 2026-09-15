export const SITE_URL = "https://skuayurvedic.com";
export const SITE_NAME = "Shri Krishna Ayurvedic Hospital";
export const DEFAULT_IMAGE = "/logoayu.png";
export const PRIMARY_KEYWORDS = [
  "Shri Krishna Ayurvedic Hospital",
  "Shri Krishna Ayurvedic Hospital Chhatarpur",
  "Krishna Ayurvedic Hospital Chhatarpur",
  "Department of Ayurveda Shri Krishna University",
  "BAMS college in Chhatarpur",
  "BAMS admission 2026",
  "Ayurvedic college in Madhya Pradesh",
  "Ayurvedic hospital in Chhatarpur",
  "Panchakarma treatment Chhatarpur",
  "Ayurvedic healthcare Madhya Pradesh",
  "Bachelor of Ayurvedic Medicine and Surgery",
  "BAMS course Madhya Pradesh",
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "MedicalOrganization"],
  name: SITE_NAME,
  alternateName: [
    "Krishna Ayurvedic Hospital Chhatarpur",
    "Department of Ayurveda Shri Krishna University",
  ],
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}${DEFAULT_IMAGE}`,
  image: `${SITE_URL}/hero/campus.png`,
  description:
    "Shri Krishna Ayurvedic Hospital in Chhatarpur, Madhya Pradesh offers BAMS education, Ayurvedic healthcare, Panchakarma therapy, clinical training, departments, faculty information and hospital facilities.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "N-H 86, Village Chauka, Sagar Road",
    addressLocality: "Chhatarpur",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  telephone: "+91-6262618035",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-6262618035",
      contactType: "admissions and general enquiry",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-6262180303",
      contactType: "hospital enquiry",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Chhatarpur",
    },
    {
      "@type": "State",
      name: "Madhya Pradesh",
    },
  ],
  sameAs: [`${SITE_URL}/`],
};

const page = ({
  path,
  title,
  description,
  keywords = [],
  image = DEFAULT_IMAGE,
  type = "website",
  canonicalPath,
}) => ({
  path,
  title,
  description,
  keywords,
  image,
  type,
  canonicalPath,
});

export const seoPages = [
  page({
    path: "/",
    title: "Shri Krishna Ayurvedic Hospital | Ayurveda College & BAMS Admission",
    description:
      "Study BAMS and explore Ayurvedic healthcare, Panchakarma, clinical training, hospital facilities, departments, faculty and campus life at Shri Krishna Ayurvedic Hospital in Chhatarpur, Madhya Pradesh.",
    keywords: [
      "Shri Krishna Ayurvedic Hospital",
      "BAMS admission 2026",
      "BAMS college in Chhatarpur",
      "Ayurvedic college in Madhya Pradesh",
      "Ayurvedic hospital in Chhatarpur",
    ],
    image: "/hero/campus.png",
  }),
  page({
    path: "/about",
    title: "About Shri Krishna Ayurvedic Hospital | Ayurvedic Care in Chhatarpur",
    description:
      "Learn about Shri Krishna Ayurvedic Hospital in Chhatarpur, its Ayurvedic healthcare approach, patient care values, clinical education and commitment to holistic wellness.",
    keywords: [
      "about Shri Krishna Ayurvedic Hospital",
      "Ayurvedic care Chhatarpur",
      "Ayurvedic healthcare Madhya Pradesh",
      "Krishna Ayurvedic Hospital Chhatarpur",
    ],
    image: "/hero/college.png",
  }),
  page({
    path: "/about/college",
    title: "About the Institution | Shri Krishna Ayurvedic Hospital",
    description:
      "Read about the institution, Ayurvedic healthcare services, BAMS clinical learning environment and hospital facilities at Shri Krishna Ayurvedic Hospital.",
    keywords: [
      "Ayurvedic institution Chhatarpur",
      "BAMS clinical learning",
      "Shri Krishna University Ayurveda",
    ],
    image: "/hero/college.png",
    canonicalPath: "/about",
  }),
  page({
    path: "/about/director-message",
    title: "Director Message | Shri Krishna Ayurvedic Hospital",
    description:
      "Read the Director and Medical Superintendent's message about Ayurvedic healing, patient care, BAMS clinical education and community wellness.",
    keywords: [
      "Director message Shri Krishna Ayurvedic Hospital",
      "Ayurvedic education Chhatarpur",
      "BAMS clinical education",
    ],
  }),
  page({
    path: "/about/vision-mission",
    title: "Vision & Mission | Shri Krishna Ayurvedic Hospital",
    description:
      "Discover the vision and mission of Shri Krishna Ayurvedic Hospital for authentic Ayurveda, BAMS education, compassionate healthcare and holistic well-being.",
    keywords: [
      "vision mission Ayurvedic hospital",
      "authentic Ayurveda Chhatarpur",
      "holistic healthcare Madhya Pradesh",
    ],
  }),
  page({
    path: "/departments",
    title: "Ayurvedic Departments | Shri Krishna Ayurvedic Hospital",
    description:
      "Explore Kayachikitsa, Panchakarma, Shalya Tantra, Shalakya Tantra, Prasuti, Kaumarbhritya, diagnostics, pharmacy and wellness departments.",
    keywords: [
      "Ayurvedic departments Chhatarpur",
      "Kayachikitsa department",
      "Panchakarma department",
      "Shalya Tantra",
      "Shalakya Tantra",
      "BAMS departments",
    ],
    image: "/hero/Kayachikitsa.png",
  }),
  page({
    path: "/faculty",
    title: "Faculty & Staff | Shri Krishna Ayurvedic Hospital",
    description:
      "View teaching staff, non-teaching staff and hospital staff information for Shri Krishna Ayurvedic Hospital and its BAMS academic support team.",
    keywords: [
      "Ayurvedic faculty Chhatarpur",
      "BAMS teaching staff",
      "Shri Krishna Ayurvedic Hospital faculty",
    ],
  }),
  page({
    path: "/faculty/teaching-staff",
    title: "Teaching Staff | Shri Krishna Ayurvedic Hospital",
    description:
      "View official BAMS teaching staff details and faculty document for Shri Krishna Ayurvedic Hospital in Chhatarpur.",
    keywords: [
      "BAMS teaching staff Chhatarpur",
      "Ayurveda faculty",
      "Shri Krishna Ayurvedic Hospital teaching staff",
    ],
  }),
  page({
    path: "/faculty/non-teaching-staff",
    title: "Non-Teaching Staff | Shri Krishna Ayurvedic Hospital",
    description:
      "View official non-teaching staff details and support staff document for Shri Krishna Ayurvedic Hospital in Chhatarpur.",
    keywords: [
      "non teaching staff Ayurvedic college",
      "Shri Krishna Ayurvedic Hospital staff",
    ],
  }),
  page({
    path: "/faculty/hospital-staff",
    title: "Hospital Staff | Shri Krishna Ayurvedic Hospital",
    description:
      "View hospital staff details and the official hospital team document for Shri Krishna Ayurvedic Hospital in Chhatarpur.",
    keywords: [
      "Ayurvedic hospital staff Chhatarpur",
      "Shri Krishna hospital team",
      "Ayurvedic doctors Chhatarpur",
    ],
  }),
  page({
    path: "/hospital",
    title: "Ayurvedic Hospital Services | Shri Krishna Ayurvedic Hospital",
    description:
      "Explore Ayurvedic consultation, clinical care, OPD, IPD, diagnostics, Panchakarma, ICU, ECG, ENT and hospital facilities in Chhatarpur.",
    keywords: [
      "Ayurvedic hospital Chhatarpur",
      "Ayurvedic treatment Chhatarpur",
      "Panchakarma treatment Chhatarpur",
      "OPD IPD Ayurvedic hospital",
      "Ayurvedic consultation Madhya Pradesh",
    ],
    image: "/hero/hospital.png",
  }),
  page({
    path: "/facilities",
    title: "Facilities | Shri Krishna Ayurvedic Hospital",
    description:
      "Explore OPD, IPD, Panchakarma, diagnostic services, herbal garden, yoga hall, pharmacy, ambulance and BAMS student training facilities.",
    keywords: [
      "Ayurvedic hospital facilities",
      "Panchakarma facilities Chhatarpur",
      "BAMS training facilities",
      "herbal garden Ayurvedic college",
    ],
    image: "/hero/PHARMACY.png",
  }),
  page({
    path: "/committee",
    title: "Committees & Cells | Shri Krishna Ayurvedic Hospital",
    description:
      "Access committee and cell information including academic council, anti-ragging, college council, IQAC, research, grievance and student support documents.",
    keywords: [
      "Ayurvedic college committees",
      "anti ragging committee",
      "college council Ayurveda",
      "NCISM compliance",
    ],
  }),
  page({
    path: "/gallery",
    title: "Gallery | Shri Krishna Ayurvedic Hospital",
    description:
      "Explore campus, events and hospital galleries showcasing academic life, facilities, healthcare infrastructure and institutional activities.",
    keywords: [
      "Shri Krishna Ayurvedic Hospital gallery",
      "Ayurvedic college campus photos",
      "BAMS college gallery",
      "hospital gallery Chhatarpur",
    ],
    image: "/hero/campus.png",
  }),
  page({
    path: "/gallery/campus",
    title: "Campus Gallery | Shri Krishna Ayurvedic Hospital",
    description:
      "View campus photos including academic infrastructure, classrooms, pharmacy, Panchakarma, hospital and BAMS learning facilities.",
    keywords: [
      "Ayurvedic college campus Chhatarpur",
      "BAMS campus photos",
      "Shri Krishna campus gallery",
    ],
    image: "/hero/campus.png",
  }),
  page({
    path: "/gallery/events",
    title: "Events Gallery | Shri Krishna Ayurvedic Hospital",
    description:
      "View photos from BAMS academic activities, seminars, programs, events and institutional celebrations at Shri Krishna Ayurvedic Hospital.",
    keywords: [
      "BAMS events Chhatarpur",
      "Ayurvedic college events",
      "Shri Krishna Ayurvedic Hospital events",
    ],
    image: "/hero/banner.png",
  }),
  page({
    path: "/gallery/hospital",
    title: "Hospital Gallery | Shri Krishna Ayurvedic Hospital",
    description:
      "View hospital photos including clinical departments, diagnostics, ICU, Panchakarma, pharmacy and Ayurvedic healthcare facilities.",
    keywords: [
      "Ayurvedic hospital photos",
      "Panchakarma gallery",
      "hospital facilities Chhatarpur",
    ],
    image: "/hero/hospital.png",
  }),
  page({
    path: "/contact",
    title: "Contact Shri Krishna Ayurvedic Hospital | Chhatarpur",
    description:
      "Contact Shri Krishna Ayurvedic Hospital for BAMS admission, hospital support, appointments, directions and general enquiries in Chhatarpur, Madhya Pradesh.",
    keywords: [
      "contact Shri Krishna Ayurvedic Hospital",
      "BAMS admission contact",
      "Ayurvedic hospital phone number Chhatarpur",
      "Ayurvedic college address Chhatarpur",
    ],
  }),
];

export const routeMetadata = Object.fromEntries(seoPages.map((item) => [item.path, item]));

export const aliasCanonicalMap = {
  "/about/mission-vision": "/about/vision-mission",
  "/about/director": "/about/director-message",
  "/about/chairman": "/about/director-message",
  "/about/principal": "/about/director-message",
  "/about/superintendent": "/about/director-message",
  "/about/objectives": "/about/vision-mission",
  "/academics/chairman": "/about/director-message",
  "/academics/director": "/about/director-message",
  "/academics/teaching-staff": "/faculty/teaching-staff",
  "/academics/non-teaching-staff": "/faculty/non-teaching-staff",
  "/facility": "/facilities",
  "/medical-camp": "/gallery/events",
  "/equipment": "/facilities",
  "/attendance": "/committee",
  "/hospital/opd-ipd-summary": "/hospital",
  "/admission": "/contact",
  "/admission/course-fees": "/contact",
  "/academics/syllabus": "/departments",
  "/courses/bams": "/departments",
  "/approvals": "/committee",
  "/career": "/contact",
  "/notification": "/committee",
  "/ncism-mandates": "/committee",
  "/ncism-mandates/permissions": "/committee",
  "/ncism-mandates/compliance": "/committee",
  "/ncism-mandates/reports": "/committee",
  "/ncism-mandates/college-council": "/committee",
  "/ncism-mandates/clinical-materials": "/committee",
  "/ncism-mandates/teaching-staff": "/faculty/teaching-staff",
  "/ncism-mandates/research-publication": "/committee",
  "/ncism-mandates/principal-information": "/about/director-message",
};
