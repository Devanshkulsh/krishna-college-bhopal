import React from "react";
import {
  Building2,
  BedDouble,
  Activity,
  FlaskConical,
  Leaf,
  PersonStanding,
  Pill,
  GraduationCap,
  Ambulance,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const facilities = [
  {
    number: "01",
    title: "Well-Equipped Ayurvedic OPD & IPD",
    icon: Building2,
    points: [
      "Separate Outpatient (OPD) and Inpatient (IPD) departments",
      "Daily consultation by experienced Ayurvedic physicians",
      "Personalized treatment plans based on Prakriti (body constitution)",
    ],
  },
  {
    number: "02",
    title: "Comfortable Inpatient Facilities",
    icon: BedDouble,
    points: [
      "Clean and spacious general wards and private rooms",
      "Round-the-clock medical care and nursing staff",
      "Hygienic and sattvic diet provided to all inpatients",
    ],
  },
  {
    number: "03",
    title: "Panchakarma Therapy Unit",
    icon: Activity,
    points: [
      "Dedicated Panchakarma rooms for Abhyanga, Basti, Vamana, Virechana, Nasya & Raktamokshana",
      "Trained therapists under expert supervision",
      "Rejuvenation and detoxification packages",
    ],
  },
  {
    number: "04",
    title: "Modern Diagnostic Services",
    icon: FlaskConical,
    points: [
      "Clinical pathology lab for basic blood and urine tests",
      "Collaboration with external labs for advanced diagnostics",
      "Pulse diagnosis (Nadi Pariksha) and other Ayurvedic diagnostic tools",
    ],
  },
  {
    number: "05",
    title: "Herbal Garden",
    icon: Leaf,
    points: [
      "Over 100+ medicinal plants cultivated on-campus",
      "Practical exposure for students and awareness for patients",
      "Fresh herbs used in internal medicine preparation",
    ],
  },
  {
    number: "06",
    title: "Yoga & Meditation Hall",
    icon: PersonStanding,
    points: [
      "Regular yoga sessions for patients and visitors",
      "Guided meditation and lifestyle counselling",
      "Integrated approach for stress management and wellness",
    ],
  },
  {
    number: "07",
    title: "In-House Pharmacy",
    icon: Pill,
    points: [
      "Availability of classical Ayurvedic medicines such as Asava, Arishta, Churna and Vati",
      "Custom-prepared medicines as per doctor's prescription",
      "Quality-assured herbal formulations",
    ],
  },
  {
    number: "08",
    title: "Academic & Training Support",
    icon: GraduationCap,
    points: [
      "Attached to Ayurvedic College for teaching & internship",
      "Real-time clinical training for BAMS students",
      "Regular workshops and CME programs",
    ],
  },
  {
    number: "09",
    title: "Emergency Care & Ambulance Facility",
    icon: Ambulance,
    points: [
      "Basic emergency services available on call",
      "Ambulance support for shifting critical patients to higher centres if needed",
    ],
  },
  {
    number: "10",
    title: "Patient-Centric Services",
    icon: HeartHandshake,
    points: [
      "Affordable treatment packages",
      "Clean campus with eco-friendly practices",
      "Digital records and appointment facility",
    ],
  },
];

const Facilities = () => {
  return (
    <main className="w-full bg-white">

      {/* =====================================================
          PAGE BANNER - SAME AS ABOUT PAGE
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#168486]">

        {/* Decorative Circles */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

        <div className="absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-[#d68a1f]/10" />

        {/* Center Content */}
        <div
          className="
            relative
            mx-auto
            flex
            min-h-[220px]
            max-w-[1720px]
            items-center
            justify-center
            px-4
            text-center
            sm:px-6
            lg:min-h-[250px]
            lg:px-8
          "
        >
          <div className="flex flex-col items-center">

            {/* Small Heading */}
            <div className="flex items-center justify-center gap-3">

              <span className="h-[2px] w-10 bg-[#d68a1f]" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#f2b45d]
                  sm:text-[13px]
                "
              >
                Shri Krishna Ayurvedic Hospital
              </span>

              <span className="h-[2px] w-10 bg-[#d68a1f]" />

            </div>

            {/* Main Heading */}
            <h1
              className="
                mt-5
                text-[36px]
                font-extrabold
                leading-none
                text-white
                sm:text-[44px]
                lg:text-[50px]
              "
            >
              Our Facilities
            </h1>

          </div>
        </div>

        {/* Bottom Orange Line */}
        <div className="h-[4px] w-full bg-[#d68a1f]" />

      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div className="mx-auto max-w-[950px] text-center">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf8f5] text-[#0a756d]">
              <Building2 size={31} />
            </div>

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Hospital Infrastructure
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14245f] md:text-4xl">
              Modern Facilities with Ayurvedic Care
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-gray-600">
              Our hospital combines traditional Ayurvedic healthcare practices
              with well-planned clinical infrastructure, diagnostic support,
              patient amenities and academic training facilities.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          FACILITIES GRID
      ====================================================== */}
      <section className="bg-[#f6faf9] py-16 md:py-20">

        <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">

          <div className="mb-12 text-center">

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Hospital Facilities
            </h2>

            <p className="mx-auto mt-4 max-w-[760px] text-base leading-7 text-gray-600">
              Explore the facilities available for patients, students and
              visitors at Shri Krishna Ayurvedic Hospital.
            </p>

          </div>


          <div className="grid gap-7 md:grid-cols-2">

            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <article
                  key={facility.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-[#e0e9e6]
                    bg-white
                    p-7
                    shadow-[0_10px_35px_rgba(0,0,0,0.06)]
                    transition
                    duration-300
                    hover:-translate-y-1.5
                    hover:shadow-[0_18px_45px_rgba(0,0,0,0.11)]
                    md:p-8
                  "
                >

                  {/* TOP BORDER */}
                  <div className="absolute left-0 top-0 h-[5px] w-full bg-[#0a756d] transition duration-300 group-hover:bg-[#e98b0c]" />


                  {/* HEADER */}
                  <div className="flex items-start gap-5">

                    <div
                      className="
                        flex
                        h-[66px]
                        w-[66px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[17px]
                        bg-[#edf8f5]
                        text-[#0a756d]
                        transition
                        duration-300
                        group-hover:bg-[#0a756d]
                        group-hover:text-white
                      "
                    >
                      <Icon size={31} strokeWidth={1.8} />
                    </div>


                    <div className="min-w-0">

                      <p className="text-xs font-bold uppercase tracking-[2px] text-[#e98b0c]">
                        Facility {facility.number}
                      </p>

                      <h3 className="mt-2 text-[22px] font-bold leading-snug text-[#14245f] md:text-[24px]">
                        {facility.title}
                      </h3>

                    </div>

                  </div>


                  {/* POINTS */}
                  <div className="mt-7 space-y-4">

                    {facility.points.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2
                          size={19}
                          className="mt-[3px] shrink-0 text-[#0a756d]"
                        />

                        <p className="text-[15px] leading-7 text-gray-600">
                          {point}
                        </p>

                      </div>
                    ))}

                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          HIGHLIGHT SECTION
      ====================================================== */}
      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div className="rounded-[28px] bg-[#edf8f5] p-7 md:p-10 lg:p-12">

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

              <div>

                <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
                  Holistic Healthcare
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14245f] md:text-4xl">
                  A Healing Environment for Patients & Students
                </h2>

                <p className="mt-5 text-[16px] leading-8 text-gray-600">
                  From Panchakarma therapy and yoga to diagnostic support,
                  inpatient care and academic training, our facilities are
                  designed to support complete Ayurvedic healthcare and
                  practical medical education.
                </p>

              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  "Ayurvedic OPD & IPD",
                  "Panchakarma Therapy",
                  "Herbal Garden",
                  "Yoga & Meditation",
                  "In-House Pharmacy",
                  "Diagnostic Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >

                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#e98b0c]" />

                    <span className="font-semibold text-[#14245f]">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#0a756d] py-14">

        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-7 px-5 text-center md:px-8 lg:flex-row lg:px-12 lg:text-left">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#f5a623]">
              Patient Support
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Experience Quality Ayurvedic Healthcare
            </h2>

            <p className="mt-3 max-w-[720px] leading-7 text-white/80">
              Contact Shri Krishna Ayurvedic Hospital for consultation,
              appointments, treatment information and patient-related
              enquiries.
            </p>

          </div>


          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="tel:+916262180303"
              className="rounded-xl bg-[#e98b0c] px-8 py-4 font-semibold !text-white transition hover:bg-white hover:!text-[#0a756d]"
            >
              Call Hospital
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-white/40 px-8 py-4 font-semibold !text-white transition hover:bg-white hover:!text-[#0a756d]"
            >
              Contact Us
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Facilities;