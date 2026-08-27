import React from 'react'

const admissionLinks = [
  {
    label: 'Eligibility Criteria for BAMS',
    href: '/admission/eligibility',
  },
  {
    label: 'BAMS Seat Matrix',
    href: '/admission/seat-matrix',
  },
  {
    label: 'BAMS Fee Structure',
    href: '/admission/course-fees',
  },
  {
    label: 'BAMS Admission Process',
    href: '/admission/process',
  },
]

const exploreLinks = [
  {
    label: 'Overview of BAMS',
    href: '/courses/bams',
  },
  {
    label: 'BAMS Syllabus',
    href: '/academics/syllabus',
  },
  {
    label: 'Scope of BAMS',
    href: '/courses/bams#scope',
  },
  {
    label: 'Career in BAMS',
    href: '/career',
  },
]

const AdmissionOverview = () => {
  return (
    <section className="w-full bg-[#fffafa] py-16 lg:py-20">

      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <div className="mb-12 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-[#0b3b74]">
            Enrollment Details
          </p>

          <h2 className="text-3xl font-bold text-[#0b3b74] md:text-4xl lg:text-[46px]">
            Admission Overview
          </h2>

        </div>

        {/* CARDS */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT CARD */}
          <div
            className="
              rounded-[26px]
              bg-white
              p-7
              shadow-[0_14px_35px_rgba(0,0,0,0.06)]
              md:p-10
            "
          >

            <h3 className="text-2xl font-semibold text-[#101828] md:text-[31px]">
              BAMS(UG) Admissions 2026-27
            </h3>

            <p className="mt-3 text-base text-gray-500 md:text-lg">
              Find Essential resources for UG medical admissions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {admissionLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    flex
                    min-h-[62px]
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#db1038]
                    px-5
                    text-center
                    text-[15px]
                    font-bold
                    text-white
                    transition
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#b90c2f]
                    hover:shadow-lg
                  "
                >
                  {item.label}
                </a>
              ))}

            </div>

          </div>

          {/* RIGHT CARD */}
          <div
            className="
              rounded-[26px]
              bg-white
              p-7
              shadow-[0_14px_35px_rgba(0,0,0,0.06)]
              md:p-10
            "
          >

            <h3 className="text-2xl font-semibold text-[#101828] md:text-[31px]">
              Explore & Learn
            </h3>

            <p className="mt-3 text-base text-gray-500 md:text-lg">
              Encourages curiosity and continuous learning by discovering new ideas
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {exploreLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    flex
                    min-h-[62px]
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#db1038]
                    px-5
                    text-center
                    text-[15px]
                    font-bold
                    text-white
                    transition
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#b90c2f]
                    hover:shadow-lg
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
  )
}

export default AdmissionOverview