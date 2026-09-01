import React from 'react'
import {
  FaBookOpen,
  FaDownload,
  FaGraduationCap,
  FaHeadset,
  FaShareAlt,
} from 'react-icons/fa'

const HeroSlider = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* HERO */}
      <div className="relative min-h-[480px] md:min-h-[560px] lg:min-h-[670px]">

        {/* SINGLE BACKGROUND IMAGE */}
        <img
          src="/hero/campus.png"
          alt="Krishna College Bhopal"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK LEFT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d35]/95 via-[#0b2742]/75 to-black/10" />

        {/* MAIN CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1600px]
            items-start
            gap-8

            px-4
            pb-12
            pt-8

            md:gap-10
            md:px-8
            md:pb-14
            md:pt-12

            lg:min-h-[670px]
            lg:translate-y-12
            lg:grid-cols-[1fr_420px]
            lg:px-14
            lg:py-0

            xl:px-20
          "
        >

          {/* LEFT CONTENT */}
          <div className="max-w-[800px] text-white">

            <h1
              className="
                mt-4
                max-w-[820px]
                text-2xl
                font-bold
                leading-[1.15]

                sm:text-3xl

                md:mt-8
                md:text-4xl

                lg:mt-10
                lg:text-[54px]
              "
            >
              WELCOME TO SHRI KRISHNA AYURVEDIC HOSPITAL

              <span className="mt-3 block text-base sm:text-lg md:text-xl lg:text-[28px]">
                SHRI KRISHNA UNIVERSITY, CHHATARPUR (M.P.)
              </span>

              <span className="mt-5 block text-xl font-bold text-[#A3621D] sm:text-2xl md:text-3xl lg:text-[38px]">
                निःशुल्क स्वर्ण प्राशन शिविर
              </span>
            </h1>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3 md:mt-9 md:gap-5">

              <a
                href="/gallery"
                className="
                  rounded-xl
                  border-2
                  bg-[#A3621D]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  !text-white
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#c96f00]

                  md:px-7
                  md:py-4
                  md:text-base
                "
              >
                Take A College Tour
              </a>

              <a
                href="/departments"
                className="
                  rounded-xl
                  border-2
                  bg-[#A3621D]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  !text-white
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#086b64]

                  md:px-7
                  md:py-4
                  md:text-base
                "
              >
                Our Departments
              </a>

            </div>

          </div>

          {/* ADMISSION FORM */}
          <div
            className="
              relative
              z-20
              w-full
              pb-2

              lg:pb-0
            "
          >
            <div
              id="formsID7375"
              className="
                w-full
                rounded-xl
                bg-white
                p-6
                shadow-lg

                md:p-8

                lg:mt-0
              "
            />
          </div>

        </div>

        {/* RIGHT FLOATING ACTION BUTTONS */}
        <div
          className="
            absolute
            right-0
            top-1/2
            z-30
            hidden
            -translate-y-1/2
            flex-col
            overflow-hidden
            rounded-l-xl
            shadow-xl

            lg:flex
          "
        >

          <a
            href="/admission"
            className="flex h-[58px] w-[58px] items-center justify-center bg-[#e7bb37] text-xl !text-white hover:opacity-90"
            aria-label="Admission"
          >
            <FaGraduationCap />
          </a>

          <a
            href="/courses"
            className="flex h-[58px] w-[58px] items-center justify-center bg-[#3988f0] text-xl !text-white hover:opacity-90"
            aria-label="Courses"
          >
            <FaBookOpen />
          </a>

          <a
            href="/brochure"
            className="flex h-[58px] w-[58px] items-center justify-center bg-[#ff1238] text-xl !text-white hover:opacity-90"
            aria-label="Download Brochure"
          >
            <FaDownload />
          </a>

          <a
            href="tel:+919031081170"
            className="flex h-[58px] w-[58px] items-center justify-center bg-[#ec3f51] text-xl !text-white hover:opacity-90"
            aria-label="Call"
          >
            <FaHeadset />
          </a>

          <button
            type="button"
            className="flex h-[58px] w-[58px] items-center justify-center bg-[#ef3d91] text-xl !text-white"
            aria-label="Share"
          >
            <FaShareAlt />
          </button>

        </div>

      </div>

      {/* BOTTOM NOTICE BAR */}
      <div className="relative z-20 overflow-hidden bg-[#07634C] py-2 text-white md:py-3">

        <div className="flex min-w-max animate-[marquee_24s_linear_infinite] items-center gap-8 whitespace-nowrap text-xs font-semibold md:gap-12 md:text-base">

          <span>
            📢 BAMS Admission 2026–27 Open
          </span>

          <span>
            📢 BAMS Fee Structure Updated for 2026
          </span>

          <span>
            📢 NCISM Approved Curriculum
          </span>

          <span>
            📢 Explore Krishna College Departments
          </span>

          <span>
            📢 BAMS Admission 2026–27 Open
          </span>

          <span>
            📢 BAMS Fee Structure Updated for 2026
          </span>

        </div>

      </div>

    </section>
  )
}

export default HeroSlider