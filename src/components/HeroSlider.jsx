import React from "react";
import {
  FaBookOpen,
  FaDownload,
  FaGraduationCap,
  FaHeadset,
  FaShareAlt,
} from "react-icons/fa";

const HeroSlider = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* HERO */}
      <div className="relative min-h-[720px] sm:min-h-[760px] md:min-h-[820px] lg:min-h-[670px]">

        {/* BACKGROUND IMAGE */}
        <img
          src="/hero/campus.png"
          alt="Krishna College Bhopal"
          className="
            absolute inset-0 h-full w-full
            object-cover
            object-center
            lg:object-cover
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#071d35]/95
            via-[#0b2742]/85
            to-[#071d35]/80

            lg:bg-gradient-to-r
            lg:from-[#071d35]/95
            lg:via-[#0b2742]/75
            lg:to-black/10
          "
        />

        {/* MAIN CONTENT */}
        <div
          className="
            relative z-10
            mx-auto
            grid
            max-w-[1600px]
            grid-cols-1
            gap-8

            px-4
            pb-12
            pt-8

            sm:px-5
            sm:pt-10

            md:gap-10
            md:px-8
            md:pb-16
            md:pt-12

            lg:min-h-[670px]
            lg:translate-y-12
            lg:grid-cols-[1fr_420px]
            lg:items-start
            lg:px-14
            lg:py-0

            xl:px-20
          "
        >

          {/* LEFT CONTENT */}
          <div
            className="
              max-w-[800px]
              text-center
              text-white

              lg:text-left
            "
          >

            <h1
              className="
                mx-auto
                mt-2
                max-w-[820px]
                text-[28px]
                font-bold
                leading-[1.2]

                sm:text-[34px]

                md:mt-6
                md:text-[42px]

                lg:mx-0
                lg:mt-10
                lg:text-[54px]
                lg:leading-[1.15]
              "
            >
              WELCOME TO SHRI KRISHNA AYURVEDIC HOSPITAL

              <span
                className="
                  mt-3
                  block
                  text-[15px]
                  font-semibold
                  leading-6

                  sm:text-[17px]
                  md:text-[21px]
                  lg:text-[28px]
                "
              >
                SHRI KRISHNA UNIVERSITY, CHHATARPUR (M.P.)
              </span>

              <span
                className="
                  mt-4
                  block
                  text-[21px]
                  font-bold
                  leading-snug
                  text-[#A3621D]

                  sm:text-[24px]
                  md:mt-5
                  md:text-[30px]
                  lg:text-[38px]
                "
              >
                निःशुल्क स्वर्ण प्राशन शिविर
              </span>
            </h1>

            {/* BUTTONS */}
            <div
              className="
                mt-6
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:flex-wrap
                sm:justify-center

                md:mt-8
                md:gap-4

                lg:mt-9
                lg:justify-start
                lg:gap-5
              "
            >
              <a
                href="/gallery"
                className="
                  inline-flex
                  min-h-[46px]
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border-2
                  border-[#A3621D]
                  bg-[#A3621D]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  !text-white
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#c96f00]

                  sm:w-auto
                  sm:min-w-[180px]

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
                  inline-flex
                  min-h-[46px]
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border-2
                  border-[#A3621D]
                  bg-[#A3621D]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  !text-white
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#c96f00]

                  sm:w-auto
                  sm:min-w-[180px]

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
              mx-auto
              w-full
              max-w-[520px]
              pb-4

              lg:mx-0
              lg:max-w-none
              lg:pb-0
            "
          >
            <div
              id="formsID7375"
              className="
                w-full
                overflow-hidden
                rounded-xl
                bg-white
                p-4
                shadow-[0_12px_40px_rgba(0,0,0,0.22)]

                sm:p-5
                md:p-6
                lg:p-8
              "
            />
          </div>
        </div>

        {/* RIGHT FLOATING ACTION BUTTONS - DESKTOP ONLY */}
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
      <div
        className="
          relative
          z-20
          overflow-hidden
          bg-[#07634C]
          py-2.5
          text-white

          md:py-3
        "
      >
        <div
          className="
            flex
            min-w-max
            animate-[marquee_24s_linear_infinite]
            items-center
            gap-8
            whitespace-nowrap
            px-2
            text-[11px]
            font-semibold

            sm:text-xs
            md:gap-12
            md:text-base
          "
        >
          <span>📢 BAMS Admission 2026–27 Open</span>
          <span>📢 BAMS Fee Structure Updated for 2026</span>
          <span>📢 NCISM Approved Curriculum</span>
          <span>📢 Explore Krishna College Departments</span>
          <span>📢 BAMS Admission 2026–27 Open</span>
          <span>📢 BAMS Fee Structure Updated for 2026</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;