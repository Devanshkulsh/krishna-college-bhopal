import React from 'react'
import {
  FaArrowRight,
  FaBookOpen,
  FaDownload,
  FaEnvelope,
  FaGraduationCap,
  FaHeadset,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShareAlt,
  FaTrophy,
  FaUser,
  FaWhatsapp,
} from 'react-icons/fa'

const HeroSlider = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="relative w-full overflow-hidden">

      {/* HERO */}
      <div className="relative min-h-[620px] lg:min-h-[670px]">

        {/* SINGLE BACKGROUND IMAGE */}
        <img
          src="/hero/campus.png"
          alt="Krishna College Bhopal"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK LEFT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d35]/95 via-[#0b2742]/75 to-black/10" />

        {/* MAIN CONTENT */}
        <div className="relative z-10 mx-auto grid min-h-[620px] max-w-[1600px] items-center gap-10 px-5 py-12 md:px-8 lg:min-h-[670px] lg:grid-cols-[1fr_420px] lg:px-14 xl:px-20">

          {/* LEFT CONTENT */}
          <div className="max-w-[800px] text-white">

            <p className="mb-7 text-base font-medium uppercase tracking-wide md:text-xl">
              KRISHNA COLLEGE GROUP OF INSTITUTIONS
            </p>

            <h1 className="max-w-[820px] text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[54px]">
              Welcome To Krishna College Bhopal

              <span className="mt-1 block">
                Ayurvedic Medical College & Hospital
              </span>
            </h1>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap gap-5">

              <a
                href="/gallery"
                className="rounded-xl bg-[#e98608] px-7 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#c96f00]"
              >
                Take A College Tour
              </a>

              <a
                href="/departments"
                className="rounded-xl border-2 border-white bg-[#e98608]/90 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#086b64]"
              >
                Our Departments
              </a>

            </div>
          </div>

          {/* ADMISSION FORM */}
          <div className="w-full rounded-[24px] bg-white p-6 shadow-2xl lg:p-7">

            <div className="mb-7 flex items-center gap-3">
              <FaGraduationCap className="text-2xl text-[#086b64]" />

              <h2 className="text-xl font-bold text-[#086b64] md:text-2xl">
                Apply For Admission 2026
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-3"
            >

              {/* STUDENT NAME */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Student Name"
                  className="h-[55px] w-full rounded-md border border-gray-400 bg-white px-5 pr-12 text-base text-gray-700 outline-none transition focus:border-[#e98608] focus:ring-1 focus:ring-[#e98608]"
                />

                <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>

              {/* MOBILE NUMBER */}
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="h-[55px] w-full rounded-md border border-gray-400 bg-white px-5 pr-12 text-base text-gray-700 outline-none transition focus:border-[#e98608] focus:ring-1 focus:ring-[#e98608]"
                />

                <FaPhoneAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Valid Email ID"
                  className="h-[55px] w-full rounded-md border border-gray-400 bg-white px-5 pr-12 text-base text-gray-700 outline-none transition focus:border-[#e98608] focus:ring-1 focus:ring-[#e98608]"
                />

                <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>

              {/* NEET SCORE */}
              <div className="relative">
                <input
                  type="number"
                  placeholder="NEET Score"
                  className="h-[55px] w-full rounded-md border border-gray-400 bg-white px-5 pr-12 text-base text-gray-700 outline-none transition focus:border-[#e98608] focus:ring-1 focus:ring-[#e98608]"
                />

                <FaTrophy className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>

              {/* CITY */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your City"
                  className="h-[55px] w-full rounded-md border border-gray-400 bg-white px-5 pr-12 text-base text-gray-700 outline-none transition focus:border-[#e98608] focus:ring-1 focus:ring-[#e98608]"
                />

                <FaMapMarkerAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="mt-4 flex h-[54px] w-full items-center justify-center gap-5 rounded-lg bg-[#e98608] text-lg font-bold text-white transition hover:bg-[#c96f00]"
              >
                Send Message
                <FaArrowRight />
              </button>

            </form>
          </div>

        </div>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/919031081170"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="absolute bottom-8 left-5 z-30 flex h-[82px] w-[82px] items-center justify-center rounded-full border-[7px] border-[#096b50] bg-[#24d366] text-[34px] text-white shadow-xl transition hover:scale-105"
        >
          <FaWhatsapp />
        </a>

        {/* RIGHT FLOATING ACTION BUTTONS */}
        <div className="absolute right-0 top-1/2 z-30 hidden -translate-y-1/2 flex-col overflow-hidden rounded-l-xl shadow-xl lg:flex">

          <a
            href="/admission"
            className="flex h-[58px] w-[58px] items-center justify-center bg-[#e7bb37] text-xl text-white hover:opacity-90"
            aria-label="Admission"
          >
            <FaGraduationCap />
          </a>

          <a
            href="/courses"
            className="flex h-[58px] w-[58px] items-center justify-center bg-[#3988f0] text-xl text-white hover:opacity-90"
            aria-label="Courses"
          >
            <FaBookOpen />
          </a>

          <a
            href="/brochure"
            className="flex h-[58px] w-[58px] items-center justify-center bg-[#ff1238] text-xl text-white hover:opacity-90"
            aria-label="Download Brochure"
          >
            <FaDownload />
          </a>

          <a
            href="tel:+919031081170"
            className="flex h-[58px] w-[58px] items-center justify-center bg-[#ec3f51] text-xl text-white hover:opacity-90"
            aria-label="Call"
          >
            <FaHeadset />
          </a>

          <button
            type="button"
            className="flex h-[58px] w-[58px] items-center justify-center bg-[#ef3d91] text-xl text-white hover:opacity-90"
            aria-label="Share"
          >
            <FaShareAlt />
          </button>

        </div>

      </div>

      {/* BOTTOM NOTICE BAR */}
      <div className="overflow-hidden bg-[#1e2f69] py-3 text-white">

        <div className="flex min-w-max animate-[marquee_24s_linear_infinite] items-center gap-12 whitespace-nowrap text-base font-semibold">

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