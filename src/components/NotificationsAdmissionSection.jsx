import React from 'react'
import {
  FaBell,
  FaBookOpen,
  FaGraduationCap,
  FaPhoneAlt,
} from 'react-icons/fa'

const notifications = [
  'Eid Holiday Notice',
  'Documents Required for BAMS Admission',
  'BAMS Admission Open for Session 2026-27',
  'BAMS Fee Structure Updated for 2026',
  'Documents Required for BAMS Admission',
  'Admission Help Desk Notice',
]

const admissionInfo = [
  'Merit List for Admission Released',
  'Admission Help Desk for Students',
  'Admission Open for Academic Session 2026-27',
  'BAMS Admission Guidelines 2026-27',
  'Important Information for New Students',
]

const ScrollingList = ({ items, href }) => {
  // Duplicate list for continuous vertical scrolling
  const repeatedItems = [...items, ...items]

  return (
    <div className="relative h-[220px] overflow-hidden px-4 md:h-[270px] md:px-5">
      <div className="vertical-scroll">
        {repeatedItems.map((item, index) => (
          <a
            key={`${item}-${index}`}
            href={href}
            className="flex items-start gap-3 border-b border-[#ddd] py-2.5 text-[15px] leading-[1.45] text-[#ff6b6b] transition hover:text-[#e54e4e] md:py-3 md:text-[17px]"
          >
            <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-black md:mt-[9px] md:h-[6px] md:w-[6px]" />

            <span>{item}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

const NotificationsAdmissionSection = () => {
  return (
    <>
      <section className="w-full bg-white py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-[1750px] px-4 md:px-6 lg:px-10">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">

            {/* ========================================
                NOTIFICATIONS
            ======================================== */}
            <div className="flex h-auto flex-col overflow-hidden rounded-[17px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.10)] md:min-h-[380px]">

              {/* Header */}
              <div className="flex h-[60px] items-center gap-3 bg-[#168486] px-4 text-white md:h-[68px] md:px-6">

                <FaBell className="text-[18px] text-[#ffc44d] md:text-[20px]" />

                <h3 className="text-[20px] font-bold md:text-[22px]">
                  Notifications
                </h3>

              </div>

              {/* Scrolling Content */}
              <ScrollingList
                items={notifications}
                href="/notification"
              />

            </div>

            {/* ========================================
                ADMISSION INFORMATION
            ======================================== */}
            <div className="flex h-auto flex-col overflow-hidden rounded-[17px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.10)] md:min-h-[380px]">

              {/* Header */}
              <div className="flex h-[60px] items-center gap-3 bg-[#168486] px-4 text-white md:h-[68px] md:px-6">

                <FaBookOpen className="text-[18px] text-[#56d4b3] md:text-[20px]" />

                <h3 className="text-[20px] font-bold md:text-[22px]">
                  Admission Information
                </h3>

              </div>

              {/* Scrolling Content */}
              <ScrollingList
                items={admissionInfo}
                href="/admission"
              />

            </div>

            {/* ========================================
                ADMISSION OPEN
            ======================================== */}
            <div className="flex h-auto min-h-[320px] flex-col rounded-[17px] bg-[#168486] px-5 py-6 text-white shadow-[0_8px_25px_rgba(0,0,0,0.10)] md:min-h-[380px] md:px-8 md:py-8">

              {/* Heading */}
              <div className="flex items-center gap-3">

                <FaGraduationCap className="shrink-0 text-[22px] text-[#b8793c] md:text-[25px]" />

                <h3 className="text-[22px] font-bold leading-tight md:text-[26px]">
                  Admission Open 2026-27
                </h3>

              </div>

              {/* Description */}
              <p className="mt-4 max-w-[480px] text-[15px] leading-[1.8] md:mt-5 md:text-[17px]">
                Admissions for Session 2026-27 at Krishna College Bhopal
                Ayurvedic Medical College & Hospital are now open.
              </p>

              {/* Buttons */}
              <div className="mt-5 flex flex-wrap gap-3 md:mt-7 md:gap-4">

                <a
                  href="/admission"
                  className="rounded-full bg-[#ff5057] px-5 py-2.5 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#e94349] md:px-7 md:py-3 md:text-[16px]"
                >
                  Apply Today
                </a>

                <a
                  href="/contact"
                  className="rounded-full bg-[#ff7900] px-5 py-2.5 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#df6800] md:px-7 md:py-3 md:text-[16px]"
                >
                  Enquiry Now
                </a>

              </div>

              {/* Phone */}
              <div className="mt-auto flex flex-wrap items-center gap-2 pt-4 text-[15px] font-bold md:pt-6 md:text-[16px]">

                <FaPhoneAlt className="mr-1 text-[#ec3f8c]" />

                <a
                  href="tel:+91 7611150888"
                  className="transition hover:text-[#ffc44d]"
                >
                  +91-7611150888
                </a>

                <span>|</span>

                <a
                  href="tel:+91 6262 180 303"
                  className="transition hover:text-[#ffc44d]"
                >
                  +91-6262 180 303
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================
          VERTICAL SCROLL ANIMATION
      ======================================== */}

      <style>{`

        @keyframes verticalNoticeScroll {

          0% {
            transform: translateY(0);
          }

          45% {
            transform: translateY(-50%);
          }

          50% {
            transform: translateY(-50%);
          }

          95% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(0);
          }

        }

        .vertical-scroll {
          animation: verticalNoticeScroll 14s ease-in-out infinite;
        }

        .vertical-scroll:hover {
          animation-play-state: paused;
        }

      `}</style>
    </>
  )
}

export default NotificationsAdmissionSection