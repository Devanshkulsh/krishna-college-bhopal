import React, { useState } from 'react'
import {
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa'

const programmes = [
  {
    title: 'Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S)',
    duration: '4½ Years + 1 Year Internship',
    eligibility: '10+2 with Physics, Chemistry & Biology (PCB)',
    readMore: '/courses/bams',
    syllabus: '/academics/syllabus',
    fees: '/admission/course-fees',
  },

  // Add more courses later if needed
  // {
  //   title: 'Another Programme',
  //   duration: '...',
  //   eligibility: '...',
  //   readMore: '#',
  //   syllabus: '#',
  //   fees: '#',
  // },
]

const ProgrammesCourses = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const currentProgramme = programmes[activeIndex]

  const previousProgramme = () => {
    setActiveIndex((current) =>
      current === 0
        ? programmes.length - 1
        : current - 1
    )
  }

  const nextProgramme = () => {
    setActiveIndex((current) =>
      (current + 1) % programmes.length
    )
  }

  return (
    <section className="w-full bg-white py-16 lg:py-20">

      <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-12">

        {/* ================= TOP HEADING ================= */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="mb-3 text-base font-medium uppercase tracking-[1.5px] text-[#00a93f]">
              What We Offer
            </p>

            <h2 className="text-3xl font-bold text-[#1f2768] md:text-4xl lg:text-[42px]">
              Programmes and Courses
            </h2>

          </div>

          {/* BROWSE BUTTON */}
          <a
            href="/courses"
            className="
              inline-flex
              w-fit
              items-center
              gap-4
              rounded-xl
              bg-[#e97800]
              px-7
              py-3.5
              text-base
              font-bold
              text-white
              transition
              duration-300

              hover:-translate-y-1
              hover:bg-[#c96300]
            "
          >
            Browse All Programmes

            <FaArrowRight />
          </a>

        </div>

        {/* ================= COURSE AREA ================= */}
        <div className="relative">

          {/* COURSE CARD */}
          <div
            className="
              max-w-[780px]
              rounded-[20px]
              border
              border-[#1f2768]
              bg-white
              px-6
              py-7
              shadow-[0_3px_8px_rgba(31,39,104,0.25)]

              md:px-8
              md:py-8
            "
          >

            {/* TITLE */}
            <h3 className="max-w-[700px] text-2xl font-bold leading-[1.4] text-[#1f2768] md:text-[28px]">
              {currentProgramme.title}
            </h3>

            {/* DURATION */}
            <p className="mt-3 text-base text-gray-900 md:text-[18px]">

              <strong>
                Duration :
              </strong>{' '}

              <span className="text-[#f04455]">
                {currentProgramme.duration}
              </span>

            </p>

            {/* ELIGIBILITY */}
            <p className="mt-3 text-base leading-7 text-gray-900 md:text-[18px]">

              <strong>
                Eligibility :
              </strong>{' '}

              {currentProgramme.eligibility}

            </p>

            {/* LINKS */}
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">

              <a
                href={currentProgramme.readMore}
                className="font-semibold text-[#1f2768] underline underline-offset-2 transition hover:text-[#e97800]"
              >
                Read More
              </a>

              <a
                href={currentProgramme.syllabus}
                className="font-semibold text-[#1f2768] underline underline-offset-2 transition hover:text-[#e97800] sm:text-center"
              >
                Syllabus
              </a>

              <a
                href={currentProgramme.fees}
                className="font-semibold text-[#1f2768] underline underline-offset-2 transition hover:text-[#e97800] sm:text-right"
              >
                Fee Structure
              </a>

            </div>

          </div>

          {/* ================= LEFT ARROW ================= */}
          <button
            type="button"
            onClick={previousProgramme}
            aria-label="Previous programme"
            className="
              absolute
              left-[-18px]
              top-1/2
              hidden
              h-[70px]
              w-[70px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#1f2768]
              text-xl
              text-white
              shadow-lg
              transition

              hover:bg-[#e97800]

              lg:flex
            "
          >
            <FaArrowLeft />
          </button>

          {/* ================= RIGHT ARROW ================= */}
          <button
            type="button"
            onClick={nextProgramme}
            aria-label="Next programme"
            className="
              absolute
              right-0
              top-1/2
              hidden
              h-[70px]
              w-[70px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#1f2768]
              text-xl
              text-white
              shadow-lg
              transition

              hover:bg-[#e97800]

              lg:flex
            "
          >
            <FaArrowRight />
          </button>

        </div>

      </div>

    </section>
  )
}

export default ProgrammesCourses