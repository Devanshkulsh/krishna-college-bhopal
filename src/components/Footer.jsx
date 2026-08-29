import React from 'react'
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'

const quickLinks = [
  { label: 'About Collage', href: '/about' },
  { label: 'Mission & Vision', href: '/about/mission-vision' },
  { label: 'Our Objectives', href: '/about/objectives' },
  { label: "Chairman's Message", href: '/about/chairman' },
  { label: 'Director Message', href: '/about/director' },
  { label: "Principal's Message", href: '/about/principal' },
  { label: "Suprintendent's", href: '/about/superintendent' },
]

const academics = [
  { label: 'Message of Chairman', href: '/academics/chairman' },
  { label: 'Message of Director', href: '/academics/director' },
  { label: 'Teaching Staff-List', href: '/academics/teaching-staff' },
  { label: 'Non Teaching Staff', href: '/academics/non-teaching-staff' },
  { label: 'Infrastructure', href: '/facility' },
  { label: 'Medical Camp', href: '/medical-camp' },
  { label: 'Equipment Details', href: '/equipment' },
]

const ncismLinks = [
  { label: 'College Council', href: '/ncism-mandates/college-council' },
  { label: 'Clinical materials', href: '/ncism-mandates/clinical-materials' },
  {
    label: 'College Teaching Staff Details',
    href: '/ncism-mandates/teaching-staff',
  },
  {
    label: 'Research & Publication',
    href: '/ncism-mandates/research-publication',
  },
  {
    label: 'Principal Information',
    href: '/ncism-mandates/principal-information',
  },
  { label: 'Attendance', href: '/attendance' },
  { label: 'OPD IPD Summary', href: '/hospital/opd-ipd-summary' },
]

const supportLinks = [
  { label: 'Help Center', href: '/help-center' },
  { label: "FAQ's", href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Anti Ragging', href: '/anti-ragging' },
  { label: 'Blog', href: '/blog' },
  { label: 'Grievance', href: '/grievance' },
]

const importantLinks = [
  { label: 'Our Departments', href: '/departments' },
  { label: 'NCISM Mandates', href: '/ncism-mandates' },
  { label: 'Attendence', href: '/attendance' },
  { label: 'Grievance', href: '/grievance' },
  { label: 'UG Admission 2026', href: '/admission' },
  { label: 'Career', href: '/career' },
  { label: 'How To Apply', href: '/admission/how-to-apply' },
  { label: 'Fees & Stipend', href: '/admission/course-fees' },
  { label: 'Document Checklist', href: '/admission/documents' },
  { label: 'OPD Services', href: '/hospital/opd' },
  { label: 'News & Notice', href: '/notification' },
  { label: 'Ministry Of Ayush', href: '/approvals' },
  { label: 'Courses Enquiry', href: '/contact' },
  { label: 'Request Call Back', href: '/contact' },
]

const FooterLinkColumn = ({ title, links }) => {
  return (
    <div>
      <h3 className="mb-6 text-[25px] font-bold leading-none text-white">
        {title}
      </h3>

      <div className="space-y-3">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="
              block
              text-[16px]
              leading-[1.25]
              text-white
              transition
              hover:text-[#e7a51d]
            "
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="w-full bg-[#168486] text-white">

      <div className="mx-auto max-w-[1750px] px-6 py-12 lg:px-10 xl:px-14">

        {/* =====================================
            TOP AREA
        ====================================== */}
        <div
          className="
            grid
            items-start
            gap-10
            md:grid-cols-2
            xl:grid-cols-[1.55fr_0.75fr_0.75fr_0.95fr_0.55fr]
            xl:gap-12
          "
        >

          {/* LEFT */}
          <div>

            {/* LOGO */}
            <div
              className="
                inline-flex
                items-center
                rounded-[16px]
                bg-white
                px-4
                py-3
              "
            >
              <img
                src="/logoayu.png"
                alt="Krishna College Bhopal"
                className="h-[74px] w-auto object-contain"
              />
            </div>

            {/* FIND US */}
            <h3 className="mt-6 text-[24px] font-bold">
              Find Us Here
            </h3>

            <div className="mt-5 space-y-4">

              {/* PHONE */}
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-[50px]
                    w-[50px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    text-[19px]
                  "
                >
                  <FaPhoneAlt />
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[16px]">
                  <a
                    href="tel:+91"
                    className="hover:text-[#e7a51d]"
                  >
                    +91-
                  </a>

                  <span>|</span>

                  <a
                    href="tel:+91"
                    className="hover:text-[#e7a51d]"
                  >
                    +91-
                  </a>
                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-[50px]
                    w-[50px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    text-[19px]
                  "
                >
                  <FaEnvelope />
                </div>

                <a
                  href="mailto:info@krishnacollegebhopal.com"
                  className="text-[16px] hover:text-[#e7a51d]"
                >
                  info@krishnacollegebhopal.com
                </a>

              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-3">

                <div
                  className="
                    mt-1
                    flex
                    h-[50px]
                    w-[50px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    text-[19px]
                  "
                >
                  <FaMapMarkerAlt />
                </div>

                <div className="pt-1 text-[16px] leading-8">
                  <p>
                    <strong>Main Campus:</strong>{' '}
                    Krishna College Bhopal
                  </p>

                  <p>
                    <strong>City Address:</strong>{' '}
                    Bhopal, Madhya Pradesh
                  </p>
                </div>

              </div>

            </div>

            {/* SOCIAL */}
            <div className="mt-10">

              <h4 className="mb-5 text-[22px] font-bold">
                Follow Us:
              </h4>

              <div className="flex items-center gap-3">

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#247bf1] text-[20px] transition hover:-translate-y-1"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#e33872] text-[20px] transition hover:-translate-y-1"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#ff0808] text-[20px] transition hover:-translate-y-1"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#096fab] text-[20px] transition hover:-translate-y-1"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://wa.me/91"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#21b56d] text-[20px] transition hover:-translate-y-1"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>

          {/* COLUMNS */}
          <FooterLinkColumn
            title="Quick Links"
            links={quickLinks}
          />

          <FooterLinkColumn
            title="Academics"
            links={academics}
          />

          <FooterLinkColumn
            title="NCISM Mandates"
            links={ncismLinks}
          />

          <FooterLinkColumn
            title="Support"
            links={supportLinks}
          />

        </div>

        {/* =====================================
            IMPORTANT LINKS
        ====================================== */}
        <div
          className="
            mt-0
            grid
            gap-0
            xl:-mt-42
            xl:grid-cols-[1.55fr_3.0fr]
          "
        >

          {/* empty left area for alignment */}
          <div className="hidden xl:block" />

          <div>

            <h3 className="mb-6 text-[34px] font-bold leading-none">
              Important Links
            </h3>

            <div className="flex flex-wrap gap-3">

              {importantLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    rounded-full
                    bg-[#b77a0e]
                    px-4
                    py-[9px]
                    text-[15px]
                    font-medium
                    leading-none
                    text-white
                    shadow-[0_0_14px_rgba(227,160,32,0.55)]
                    transition
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#df930e]
                  "
                >
                  {item.label}
                </a>
              ))}

            </div>

          </div>

        </div>

        {/* =====================================
            BOTTOM BAR
        ====================================== */}
        <div
          className="
            mt-7
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-5
            text-[15px]
            text-white/80
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          <p>
            © 2026 Krishna College Bhopal. All Rights Reserved.
            <span className="mx-2">|</span>
            Designed by
            <strong className="text-white">
              Ntechzy
            </strong>
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">

            <a href="/terms" className="hover:text-white">
              Terms of service
            </a>

            <span className="text-[#ff6464]">•</span>

            <a href="/refund-policy" className="hover:text-white">
              Refund Policy
            </a>

            <span className="text-[#ff6464]">•</span>

            <a href="/privacy-policy" className="hover:text-white">
              Privacy policy
            </a>

            <span className="text-[#ff6464]">•</span>

            <a href="/shipping-policy" className="hover:text-white">
              Shipping Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer