export const SITE_URL = "https://skuayurvedic.com";
export const SITE_NAME = "Shri Krishna Ayurvedic Hospital";
export const DEFAULT_IMAGE = "/logoayu.png";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}${DEFAULT_IMAGE}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "N-H 86, Village Chauka, Sagar Road",
    addressLocality: "Chhatarpur",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  telephone: "+91-6262618035",
};

const page = ({ path, title, description, image = DEFAULT_IMAGE, type = "website" }) => ({
  path,
  title,
  description,
  image,
  type,
});

export const seoPages = [
  page({
    path: "/",
    title: "Shri Krishna Ayurvedic Hospital | Ayurveda College & BAMS Admission",
    description:
      "Explore BAMS education, Ayurvedic healthcare, clinical training, hospital facilities, departments, faculty and campus life at Shri Krishna Ayurvedic Hospital in Chhatarpur, Madhya Pradesh.",
    image: "/hero/campus.png",
  }),
  page({
    path: "/about",
    title: "About Shri Krishna Ayurvedic Hospital | Ayurvedic Care in Chhatarpur",
    description:
      "Learn about Shri Krishna Ayurvedic Hospital, its Ayurvedic healthcare approach, hospital registration, patient care values and commitment to holistic wellness.",
    image: "/hero/college.png",
  }),
  page({
    path: "/about/college",
    title: "About the Institution | Shri Krishna Ayurvedic Hospital",
    description:
      "Read about the institution, Ayurvedic healthcare services, clinical learning environment and hospital facilities at Shri Krishna Ayurvedic Hospital.",
    image: "/hero/college.png",
    canonicalPath: "/about",
  }),
  page({
    path: "/about/director-message",
    title: "Director Message | Shri Krishna Ayurvedic Hospital",
    description:
      "Read the Director and Medical Superintendent's message about Ayurvedic healing, patient care, clinical education and community wellness.",
  }),
  page({
    path: "/about/vision-mission",
    title: "Vision & Mission | Shri Krishna Ayurvedic Hospital",
    description:
      "Discover the vision and mission of Shri Krishna Ayurvedic Hospital for authentic Ayurveda, compassionate healthcare and holistic well-being.",
  }),
  page({
    path: "/departments",
    title: "Ayurvedic Departments | Shri Krishna Ayurvedic Hospital",
    description:
      "Explore Kayachikitsa, Panchakarma, Shalya Tantra, Shalakya Tantra, Prasuti, Kaumarbhritya, diagnostics, pharmacy and wellness departments.",
    image: "/hero/Kayachikitsa.png",
  }),
  page({
    path: "/faculty",
    title: "Faculty & Staff | Shri Krishna Ayurvedic Hospital",
    description:
      "View teaching staff, non-teaching staff and hospital staff information for Shri Krishna Ayurvedic Hospital and its academic support team.",
  }),
  page({
    path: "/faculty/teaching-staff",
    title: "Teaching Staff | Shri Krishna Ayurvedic Hospital",
    description:
      "View the official teaching staff details and faculty document for Shri Krishna Ayurvedic Hospital.",
  }),
  page({
    path: "/faculty/non-teaching-staff",
    title: "Non-Teaching Staff | Shri Krishna Ayurvedic Hospital",
    description:
      "View the official non-teaching staff details and support staff document for Shri Krishna Ayurvedic Hospital.",
  }),
  page({
    path: "/faculty/hospital-staff",
    title: "Hospital Staff | Shri Krishna Ayurvedic Hospital",
    description:
      "View hospital staff details and the official hospital team document for Shri Krishna Ayurvedic Hospital.",
  }),
  page({
    path: "/hospital",
    title: "Ayurvedic Hospital Services | Shri Krishna Ayurvedic Hospital",
    description:
      "Explore Ayurvedic consultation, clinical care, OPD, IPD, diagnostics, Panchakarma, ICU, ECG, ENT and hospital facilities.",
    image: "/hero/hospital.png",
  }),
  page({
    path: "/facilities",
    title: "Facilities | Shri Krishna Ayurvedic Hospital",
    description:
      "Explore OPD, IPD, Panchakarma, diagnostic services, herbal garden, yoga hall, pharmacy, ambulance and student training facilities.",
    image: "/hero/PHARMACY.png",
  }),
  page({
    path: "/committee",
    title: "Committees & Cells | Shri Krishna Ayurvedic Hospital",
    description:
      "Access committee and cell information including academic council, anti-ragging, college council, IQAC, research, grievance and student support documents.",
  }),
  page({
    path: "/gallery",
    title: "Gallery | Shri Krishna Ayurvedic Hospital",
    description:
      "Explore campus, events and hospital galleries showcasing academic life, facilities, healthcare infrastructure and institutional activities.",
    image: "/hero/campus.png",
  }),
  page({
    path: "/gallery/campus",
    title: "Campus Gallery | Shri Krishna Ayurvedic Hospital",
    description:
      "View campus photos including academic infrastructure, classrooms, pharmacy, Panchakarma, hospital and learning facilities.",
    image: "/hero/campus.png",
  }),
  page({
    path: "/gallery/events",
    title: "Events Gallery | Shri Krishna Ayurvedic Hospital",
    description:
      "View photos from academic activities, seminars, programs, events and institutional celebrations.",
    image: "/hero/banner.png",
  }),
  page({
    path: "/gallery/hospital",
    title: "Hospital Gallery | Shri Krishna Ayurvedic Hospital",
    description:
      "View hospital photos including clinical departments, diagnostics, ICU, Panchakarma, pharmacy and healthcare facilities.",
    image: "/hero/hospital.png",
  }),
  page({
    path: "/contact",
    title: "Contact Shri Krishna Ayurvedic Hospital | Chhatarpur",
    description:
      "Contact Shri Krishna Ayurvedic Hospital for hospital support, appointments, admissions, directions and general enquiries in Chhatarpur, Madhya Pradesh.",
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
