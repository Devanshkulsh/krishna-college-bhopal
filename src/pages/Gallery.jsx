import React from "react";
import { Link } from "react-router-dom";
import {
  Images,
  Building2,
  CalendarDays,
  Hospital,
  ArrowRight,
  Camera,
  Image,
  Sparkles,
} from "lucide-react";

/* =========================================================
   GALLERY CATEGORIES
========================================================= */

const galleryCategories = [
  {
    id: 1,
    title: "Campus Photos",
    subtitle: "Explore Our Campus",
    description:
      "Take a visual tour of our campus, academic infrastructure, classrooms, laboratories and other institutional facilities.",
    icon: Building2,
    link: "/gallery/campus",
    image: "/hero/campus.png",
  },
  {
    id: 2,
    title: "Events",
    subtitle: "Activities & Celebrations",
    description:
      "Explore photographs from academic programs, seminars, workshops, celebrations and other institutional activities.",
    icon: CalendarDays,
    link: "/gallery/events",
    image: "/hero/college.png",
  },
  {
    id: 3,
    title: "Hospital Gallery",
    subtitle: "Healthcare & Clinical Facilities",
    description:
      "Explore our hospital infrastructure, clinical departments, treatment facilities and patient-care environment.",
    icon: Hospital,
    link: "/gallery/hospital",
    image: "/hero/hospital.png",
  },
];

const Gallery = () => {
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
              Gallery
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

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div className="mx-auto max-w-[900px] text-center">

            {/* ICON */}
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf8f5] text-[#0a756d]">
              <Images size={31} />
            </div>

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Explore Our Institution
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14245f] md:text-4xl">
              Moments That Define Our Journey
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-gray-600">
              Discover Shri Krishna Ayurvedic Hospital through photographs
              showcasing our campus, academic activities, events, healthcare
              facilities and institutional environment.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          GALLERY CATEGORY CARDS
      ====================================================== */}
      <section className="bg-[#f6faf9] py-16 md:py-20">

        <div className="mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">

          {/* HEADING */}
          <div className="mb-12 text-center">

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Photo Gallery
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Explore Our Gallery
            </h2>

            <p className="mx-auto mt-4 max-w-[720px] text-base leading-7 text-gray-600">
              Select a gallery category to explore photographs from different
              areas of our institution.
            </p>

          </div>


          {/* CARDS */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {galleryCategories.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className="group overflow-hidden rounded-[24px] border border-[#e0e9e6] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.14)]"
                >

                  {/* IMAGE */}
                  <div className="relative h-[250px] overflow-hidden bg-[#eaf5f2]">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* ICON */}
                    <div className="absolute bottom-5 left-5 flex h-[58px] w-[58px] items-center justify-center rounded-[15px] bg-[#0a756d] text-white shadow-lg transition duration-300 group-hover:bg-[#e98b0c]">
                      <Icon size={27} />
                    </div>

                  </div>


                  {/* CONTENT */}
                  <div className="p-7">

                    <p className="text-xs font-bold uppercase tracking-[2px] text-[#e98b0c]">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-2 text-[25px] font-bold text-[#14245f]">
                      {item.title}
                    </h3>

                    <p className="mt-4 min-h-[84px] text-[15px] leading-7 text-gray-600">
                      {item.description}
                    </p>

                    {/* VIEW BUTTON */}
                    <div className="mt-6 flex items-center gap-2 font-bold text-[#0a756d] transition group-hover:text-[#e98b0c]">

                      View Gallery

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          GALLERY HIGHLIGHT SECTION
      ====================================================== */}
      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div className="overflow-hidden rounded-[28px] bg-[#edf8f5]">

            <div className="grid lg:grid-cols-2">

              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[15px] bg-[#0a756d] text-white">
                  <Camera size={27} />
                </div>

                <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
                  Life At Our Institution
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14245f] md:text-4xl">
                  Capturing Learning, Care & Celebration
                </h2>

                <p className="mt-5 text-[16px] leading-8 text-gray-600">
                  Our gallery reflects the academic, cultural and healthcare
                  environment of the institution. From classrooms and campus
                  activities to hospital facilities and institutional events,
                  explore the moments that represent our journey.
                </p>


                {/* MINI FEATURES */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <Image
                      size={20}
                      className="shrink-0 text-[#e98b0c]"
                    />

                    <span className="font-semibold text-[#14245f]">
                      Campus Life
                    </span>
                  </div>


                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <Sparkles
                      size={20}
                      className="shrink-0 text-[#e98b0c]"
                    />

                    <span className="font-semibold text-[#14245f]">
                      Special Events
                    </span>
                  </div>


                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <Hospital
                      size={20}
                      className="shrink-0 text-[#e98b0c]"
                    />

                    <span className="font-semibold text-[#14245f]">
                      Hospital Facilities
                    </span>
                  </div>


                  <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <GraduationCapIcon />
                  </div>

                </div>

              </div>


              {/* RIGHT IMAGE */}
              <div className="relative min-h-[420px]">

                <img
                  src="/hero/campus.png"
                  alt="Shri Krishna Campus"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0a756d]/20 to-transparent" />

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="bg-[#0a756d] py-14">

        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-7 px-5 text-center md:px-8 lg:flex-row lg:px-12 lg:text-left">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#f5a623]">
              Discover More
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Explore Shri Krishna Ayurvedic Hospital
            </h2>

            <p className="mt-3 max-w-[700px] leading-7 text-white/80">
              Explore our campus, facilities, hospital services and academic
              environment through our photo galleries.
            </p>

          </div>


          <Link
            to="/gallery/campus"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#e98b0c] px-8 py-4 font-bold !text-white transition duration-300 hover:bg-white hover:!text-[#0a756d]"
          >
            Explore Gallery
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   SMALL ICON COMPONENT
========================================================= */

const GraduationCapIcon = () => {
  return (
    <>
      <Building2
        size={20}
        className="shrink-0 text-[#e98b0c]"
      />

      <span className="font-semibold text-[#14245f]">
        Academic Activities
      </span>
    </>
  );
};

export default Gallery;