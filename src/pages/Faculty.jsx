import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  Stethoscope,
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Award,
} from "lucide-react";

const facultyCategories = [
  {
    id: 1,
    title: "Teaching Staff",
    subtitle: "Academic Faculty",
    description:
      "Explore information about our experienced teaching faculty dedicated to quality Ayurvedic education, practical learning and clinical training.",
    icon: GraduationCap,
    link: "/faculty/teaching-staff",
  },
  {
    id: 2,
    title: "Non-Teaching Staff",
    subtitle: "Administrative & Support Team",
    description:
      "View information about our administrative, library, laboratory and support staff who contribute to the smooth functioning of the institution.",
    icon: Users,
    link: "/faculty/non-teaching-staff",
  },
  {
    id: 3,
    title: "Hospital Staff",
    subtitle: "Healthcare Professionals",
    description:
      "Explore information about the medical and healthcare professionals supporting patient care and clinical services at our hospital.",
    icon: Stethoscope,
    link: "/faculty/hospital-staff",
  },
];

const Faculty = () => {
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
              Our Faculty & Staff
            </h1>

          </div>
        </div>

        {/* Bottom Orange Line */}
        <div className="h-[4px] w-full bg-[#d68a1f]" />

      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">

          <div className="mx-auto max-w-[950px] text-center">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf8f5] text-[#0a756d]">
              <GraduationCap size={32} />
            </div>

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Our Team
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14245f] md:text-4xl">
              Dedicated Professionals, Quality Education
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-gray-600">
              Our institution is supported by qualified teaching faculty,
              dedicated non-teaching personnel and experienced hospital staff.
              Together, they create an environment focused on academic
              excellence, practical learning, clinical exposure and
              professional development.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACULTY CATEGORY CARDS
      ====================================================== */}

      <section className="bg-[#f6faf9] py-16 md:py-20">

        <div className="mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">

          {/* HEADING */}
          <div className="mb-12 text-center">

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Faculty Directory
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Explore Our Faculty & Staff
            </h2>

            <p className="mx-auto mt-4 max-w-[750px] text-base leading-7 text-gray-600">
              Select a category below to view detailed information and
              official staff documents.
            </p>

          </div>


          {/* CARDS */}
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {facultyCategories.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className="
                    group
                    relative
                    flex
                    min-h-[350px]
                    flex-col
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-[#e0e9e6]
                    bg-white
                    p-7
                    shadow-[0_10px_35px_rgba(0,0,0,0.06)]
                    transition
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
                    md:p-8
                  "
                >

                  {/* TOP DECORATION */}
                  <div className="absolute left-0 top-0 h-[5px] w-full bg-[#0a756d] transition-all duration-300 group-hover:bg-[#e98b0c]" />


                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-[72px]
                      w-[72px]
                      items-center
                      justify-center
                      rounded-[18px]
                      bg-[#edf8f5]
                      text-[#0a756d]
                      transition
                      duration-300
                      group-hover:bg-[#0a756d]
                      group-hover:text-white
                    "
                  >
                    <Icon size={34} strokeWidth={1.8} />
                  </div>


                  {/* SUBTITLE */}
                  <p className="mt-7 text-xs font-bold uppercase tracking-[2px] text-[#e98b0c]">
                    {item.subtitle}
                  </p>


                  {/* TITLE */}
                  <h3 className="mt-2 text-[26px] font-bold text-[#14245f]">
                    {item.title}
                  </h3>


                  {/* DESCRIPTION */}
                  <p className="mt-4 flex-1 text-[15px] leading-7 text-gray-600">
                    {item.description}
                  </p>


                  {/* BUTTON */}
                  <div className="mt-7 flex items-center gap-2 font-bold text-[#0a756d] transition group-hover:text-[#e98b0c]">

                    View Details

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />

                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY OUR FACULTY
      ====================================================== */}

      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* LEFT */}
            <div>

              <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
                Academic Excellence
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14245f] md:text-4xl">
                Supporting Education, Training & Patient Care
              </h2>

              <p className="mt-5 max-w-[650px] text-[16px] leading-8 text-gray-600">
                Our academic and support teams work together to provide
                students with a structured learning environment that combines
                theoretical knowledge, practical education and clinical
                exposure.
              </p>

            </div>


            {/* RIGHT */}
            <div className="grid gap-5 sm:grid-cols-3">

              {/* CARD 1 */}
              <div className="rounded-[18px] border border-[#e3ebe8] bg-[#f7fbfa] p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a756d] text-white">
                  <BookOpen size={23} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#14245f]">
                  Quality Education
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Focused academic learning and practical knowledge.
                </p>

              </div>


              {/* CARD 2 */}
              <div className="rounded-[18px] border border-[#e3ebe8] bg-[#f7fbfa] p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a756d] text-white">
                  <Award size={23} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#14245f]">
                  Professional Guidance
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Guidance for academic and professional development.
                </p>

              </div>


              {/* CARD 3 */}
              <div className="rounded-[18px] border border-[#e3ebe8] bg-[#f7fbfa] p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a756d] text-white">
                  <HeartHandshake size={23} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#14245f]">
                  Clinical Exposure
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Practical clinical learning and patient-care exposure.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="bg-[#0a756d] py-14">

        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            flex-col
            items-center
            justify-between
            gap-7
            px-5
            text-center
            md:px-8
            lg:flex-row
            lg:px-12
            lg:text-left
          "
        >

          <div>

            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#f5a623]">
              Our Institution
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Meet Our Dedicated Team
            </h2>

            <p className="mt-3 max-w-[700px] leading-7 text-white/80">
              Explore our teaching, non-teaching and hospital staff to learn
              more about the professionals supporting our institution.
            </p>

          </div>


          <Link
            to="/contact"
            className="
              shrink-0
              rounded-xl
              bg-[#e98b0c]
              px-8
              py-4
              font-semibold
              !text-white
              transition
              duration-300
              hover:bg-white
              hover:!text-[#0a756d]
            "
          >
            Contact Us
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Faculty;