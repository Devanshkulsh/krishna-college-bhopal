import React from "react";

const admissionLinks = [
  {
    label: "Eligibility Criteria for BAMS",
    href: "/admission/eligibility",
  },
  {
    label: "BAMS Seat Matrix",
    href: "/admission/seat-matrix",
  },
  {
    label: "BAMS Fee Structure",
    href: "/admission/course-fees",
  },
  {
    label: "BAMS Admission Process",
    href: "/admission/process",
  },
];

const exploreLinks = [
  {
    label: "Overview of BAMS",
    href: "/courses/bams",
  },
  {
    label: "BAMS Syllabus",
    href: "/academics/syllabus",
  },
  {
    label: "Scope of BAMS",
    href: "/courses/bams#scope",
  },
  {
    label: "Career in BAMS",
    href: "/career",
  },
];

const AdmissionOverview = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        border-y
        border-[#E3E6E9]
        bg-[#EEF1F4]
        py-10
        shadow-[inset_0_8px_20px_rgba(0,0,0,0.02),inset_0_-8px_20px_rgba(0,0,0,0.02)]
        md:py-14
        lg:py-20
      "
    >
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-12">

        {/* ================= SECTION HEADING ================= */}

        <div className="mb-8 text-center md:mb-10 lg:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[1.5px] text-[#0b3b74] md:mb-3 md:text-sm md:tracking-[2px]">
            Enrollment Details
          </p>

          <h2 className="text-2xl font-bold text-[#0b3b74] sm:text-3xl md:text-4xl lg:text-[46px]">
            Admission Overview
          </h2>
        </div>

        {/* ================= CARDS ================= */}

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">

          {/* ================= LEFT CARD ================= */}

          <div
            className="
              rounded-[26px]
              bg-white
              p-5
              shadow-[0_14px_35px_rgba(0,0,0,0.08)]
              sm:p-7
              md:p-8
              lg:p-10
            "
          >
            <h3 className="text-xl font-semibold text-[#101828] sm:text-2xl md:text-[28px] lg:text-[31px]">
              BAMS(UG) Admissions 2026-27
            </h3>

            <p className="mt-2 text-sm text-gray-500 sm:mt-3 sm:text-base md:text-lg">
              Find Essential resources for UG medical admissions.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              {admissionLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    flex
                    min-h-[54px]
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#A3621D]
                    px-4
                    py-2
                    text-center
                    text-sm
                    font-bold
                    !text-white
                    transition
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#07634C]
                    hover:!text-white
                    hover:shadow-lg

                    sm:min-h-[58px]
                    sm:text-[15px]

                    md:min-h-[62px]
                    md:px-5
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}

          <div
            className="
              rounded-[26px]
              bg-white
              p-5
              shadow-[0_14px_35px_rgba(0,0,0,0.08)]
              sm:p-7
              md:p-8
              lg:p-10
            "
          >
            <h3 className="text-xl font-semibold text-[#101828] sm:text-2xl md:text-[28px] lg:text-[31px]">
              Explore & Learn
            </h3>

            <p className="mt-2 text-sm text-gray-500 sm:mt-3 sm:text-base md:text-lg">
              Encourages curiosity and continuous learning by discovering new
              ideas
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              {exploreLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    flex
                    min-h-[54px]
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#A3621D]
                    px-4
                    py-2
                    text-center
                    text-sm
                    font-bold
                    !text-white
                    transition
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#07634C]
                    hover:!text-white
                    hover:shadow-lg

                    sm:min-h-[58px]
                    sm:text-[15px]

                    md:min-h-[62px]
                    md:px-5
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionOverview;