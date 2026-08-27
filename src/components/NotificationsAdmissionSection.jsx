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
    <div className="relative h-[270px] overflow-hidden px-5">
      <div className="vertical-scroll">
        {repeatedItems.map((item, index) => (
          <a
            key={`${item}-${index}`}
            href={href}
            className="flex items-start gap-3 border-b border-[#ddd] py-3 text-[17px] leading-[1.45] text-[#ff6b6b] transition hover:text-[#e54e4e]"
          >
            <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-black" />

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
      <section className="w-full bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1750px] px-5 md:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-3">

            {/* ========================================
                NOTIFICATIONS
            ======================================== */}
            <div className="h-[380px] overflow-hidden rounded-[17px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.10)]">

              {/* Header */}
              <div className="flex h-[68px] items-center gap-3 bg-[#11457d] px-6 text-white">

                <FaBell className="text-[20px] text-[#ffc44d]" />

                <h3 className="text-[22px] font-bold">
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
            <div className="h-[380px] overflow-hidden rounded-[17px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.10)]">

              {/* Header */}
              <div className="flex h-[68px] items-center gap-3 bg-[#11457d] px-6 text-white">

                <FaBookOpen className="text-[20px] text-[#56d4b3]" />

                <h3 className="text-[22px] font-bold">
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
            <div className="flex h-[380px] flex-col rounded-[17px] bg-[#14356b] px-8 py-8 text-white shadow-[0_8px_25px_rgba(0,0,0,0.10)]">

              {/* Heading */}
              <div className="flex items-center gap-3">

                <FaGraduationCap className="shrink-0 text-[25px] text-[#b8793c]" />

                <h3 className="text-[26px] font-bold leading-tight">
                  Admission Open 2026-27
                </h3>

              </div>

              {/* Description */}
              <p className="mt-5 max-w-[480px] text-[17px] leading-[1.8]">
                Admissions for Session 2026-27 at Krishna College Bhopal
                Ayurvedic Medical College & Hospital are now open.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-4">

                <a
                  href="/admission"
                  className="rounded-full bg-[#ff5057] px-7 py-3 text-[16px] font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#e94349]"
                >
                  Apply Today
                </a>

                <a
                  href="/contact"
                  className="rounded-full bg-[#ff7900] px-7 py-3 text-[16px] font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#df6800]"
                >
                  Enquiry Now
                </a>

              </div>

              {/* Phone */}
              <div className="mt-auto flex flex-wrap items-center gap-2 pt-6 text-[16px] font-bold">

                <FaPhoneAlt className="mr-1 text-[#ec3f8c]" />

                <a
                  href="tel:+919031081170"
                  className="transition hover:text-[#ffc44d]"
                >
                  +91-90310 81170
                </a>

                <span>|</span>

                <a
                  href="tel:+917209776617"
                  className="transition hover:text-[#ffc44d]"
                >
                  +91-72097 76617
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