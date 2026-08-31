import React, { useState } from 'react'
import {
  FaBars,
  FaBookOpen,
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaHospital,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTimes,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

const navItems = [
  { label: 'Home', href: '/' },

  {
    label: 'About Us',
    href: '/about',
    items: [
      { label: 'About College', href: '/about/college' },
      { label: 'Our Principal', href: '/about/principal' },
      { label: 'Statutory Disclosures', href: '/about/disclosures' },
    ],
  },

  {
    label: 'Academics',
    href: '/academics',
    items: [
      { label: 'Academic Calendar', href: '/academics/calendar' },
      { label: 'Syllabus', href: '/academics/syllabus' },
      { label: 'Examination', href: '/academics/examination' },
    ],
  },

  {
    label: 'Courses',
    href: '/courses',
    items: [
      { label: 'BAMS', href: '/courses/bams' },
      { label: 'Course Fees', href: '/admission/course-fees' },
      { label: 'Eligibility', href: '/admission/eligibility' },
    ],
  },

  {
    label: 'Departments',
    href: '/departments',
    items: [
      { label: 'Ayurveda', href: '/departments/ayurveda' },
      { label: 'Samhita Siddhanta', href: '/departments/samhita' },
      { label: 'Rachana Sharir', href: '/departments/rachana-sharir' },
    ],
  },

  {
    label: 'Hospital',
    href: '/hospital',
    items: [
      { label: 'OPD Services', href: '/hospital/opd' },
      { label: 'IPD Services', href: '/hospital/ipd' },
      { label: 'Panchakarma', href: '/hospital/panchakarma' },
    ],
  },

  { label: 'Facility', href: '/facility' },

  {
    label: 'NCISM Mandates',
    href: '/ncism-mandates',
    items: [
      { label: 'Permissions', href: '/ncism-mandates/permissions' },
      { label: 'Compliance', href: '/ncism-mandates/compliance' },
      { label: 'Reports', href: '/ncism-mandates/reports' },
    ],
  },

  { label: 'Attendance', href: '/attendance' },

  {
    label: 'Gallery',
    href: '/gallery',
    items: [
      { label: 'Campus Photos', href: '/gallery/campus' },
      { label: 'Events', href: '/gallery/events' },
      { label: 'Hospital', href: '/gallery/hospital' },
    ],
  },

  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: FaFacebookF,
    bg: 'bg-[#3b5fa3]',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: FaInstagram,
    bg: 'bg-[#e83f61]',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: FaTwitter,
    bg: 'bg-[#25a7e8]',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: FaYoutube,
    bg: 'bg-[#ff1111]',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: FaLinkedinIn,
    bg: 'bg-[#0b83b5]',
  },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState('')

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenSubmenu('')
  }

  const toggleSubmenu = (label) => {
    setOpenSubmenu((current) =>
      current === label ? '' : label
    )
  }

  return (
    <header className="relative z-50 w-full bg-white">

      {/* TOP BAR */}
      <div className="hidden h-[44px] bg-[#168486] lg:block">
        <div className="mx-auto flex h-full max-w-[1720px] items-center justify-between px-8">

          {/* LEFT */}
          <div className="flex items-center gap-7 text-[14px] font-bold text-white">

            <a
              href="tel:+91 7611150888"
              className="flex items-center gap-2"
            >
              <FaPhoneAlt className="text-[#f1a028]" />
              +91-7611150888
            </a>

            <a
              href="tel:+91 6262 180 303"
              className="flex items-center gap-2"
            >
              <FaPhoneAlt className="text-[#f1a028]" />
              +91-6262 180 303
            </a>

            <a
              href="mailto:shrikrishnayurvedic@.com"
              className="flex items-center gap-2"
            >
              <FaEnvelope className="text-[#f1a028]" />
              shrikrishnayurvedic@.com
            </a>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
  {[
    ['BAMS(UG) Admission 2026', '/admission'],
    ['Govt. Approval', '/approvals'],
    ['Career', '/career'],
    ['Notification', '/notification'],
  ].map(([label, href]) => (
    <a
      key={label}
      href={href}
      style={{ color: '#ffffff' }}
      className="
        rounded-full
        bg-[#A3621D]
        px-4
        py-[5px]
        text-[13px]
        font-bold
        transition
        text-white
        hover:bg-[#8d5116]
      "
    >
      {label}
    </a>
  ))}
</div>
        </div>
      </div>

      {/* MIDDLE HEADER */}
      <div className="bg-white">
        <div className="mx-auto flex h-[112px] max-w-[1720px] items-center justify-between gap-8 px-8">

          {/* LOGO */}
          <a
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-3"
          >
            <img
              src="/logoayu.png"
              alt="Krishna College Bhopal"
              className="h-[76px] w-[92px] object-contain"
            />

            <div className="hidden sm:block">
              <div className="whitespace-nowrap text-[25px] font-extrabold uppercase leading-none text-[#09676b]">
  SHRI KRISHNA AYURVEDIC HOSPITAL
</div>

              <p className="mt-1.5 text-[10px] font-extrabold uppercase leading-[1.2] text-[#af680d]">
                SHRI KRISHNA UNIVERSITY, CHHATARPUR (M.P.)
              </p>
            </div>
          </a>

          {/* RIGHT CONTENT */}
          <div className="hidden items-center lg:flex">

            {/* ADMISSION */}
            <a
              href="tel:+91-7611150888"
              className="flex items-center gap-3 border-r border-gray-200 px-6"
            >
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#A3621D] text-xl text-white">
                <FaBookOpen />
              </span>

              <span>
                <small className="block text-[14px] text-gray-500">
                  For Admissions
                </small>

                <strong className="block whitespace-nowrap text-[15px] font-semibold text-[#173d6b]">
                  +91-7611150888
                  

                </strong>
              </span>
            </a>

            {/* HOSPITAL */}
            <a
              href="tel:+91 6262 180 303"
              className="flex items-center gap-3 border-r border-gray-200 px-6"
            >
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#A3621D] text-xl text-white">
                <FaHospital />
              </span>

              <span>
                <small className="block text-[14px] text-gray-500">
                  For Hospital Helpline:
                </small>

                <strong className="block whitespace-nowrap text-[15px] font-semibold text-[#173d6b]">
                  +91-6262 180 303
                </strong>
              </span>
            </a>

            {/* SOCIAL */}
            <div className="ml-5 flex items-center gap-2.5">

              {socialLinks.map(
                ({ label, href, icon: Icon, bg }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`flex h-[52px] w-[52px] items-center justify-center rounded-lg text-white transition hover:-translate-y-1 ${bg}`}
                  >
                    <Icon />
                  </a>
                ),
              )}

            </div>
          </div>

          {/* MOBILE */}
          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
            className="flex h-11 w-11 items-center justify-center rounded-md bg-[#08666b] text-white lg:hidden"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* NAV */}
      <div className="bg-[#07634c]">

        <nav
          className={`
            mx-auto
            max-w-[1720px]
            px-6
            lg:flex
            lg:h-[58px]
            lg:items-center
            lg:justify-between
            ${isMenuOpen ? 'block' : 'hidden lg:flex'}
          `}
        >

          <div className="flex flex-col lg:flex-row lg:items-center">

            {navItems.map((item) => (
              <div
                key={item.label}
                className="group relative border-b border-white/10 lg:border-0"
              >

                <div className="flex items-center">

                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="whitespace-nowrap px-[14px] py-[19px] text-[14px] font-bold !text-white transition hover:bg-black/10 xl:px-[17px]"
                  >
                    {item.label}
                  </a>

                  {item.items && (
                    <>
                      <FaChevronDown className="-ml-1 mr-1 hidden text-[9px] !text-white lg:block" />

                      <button
                        onClick={() =>
                          toggleSubmenu(item.label)
                        }
                        className="ml-auto flex h-11 w-11 items-center justify-center !text-white lg:hidden"
                      >
                        <FaChevronDown
                          className={`text-xs ${
                            openSubmenu === item.label
                              ? 'rotate-180'
                              : ''
                          }`}
                        />
                      </button>
                    </>
                  )}

                </div>

                {/* DROPDOWN */}
                {item.items && (
                  <div
                    className={`
                      bg-white
                      shadow-xl
                      lg:absolute
                      lg:left-0
                      lg:top-full
                      lg:z-50
                      lg:min-w-[230px]
                      ${
                        openSubmenu === item.label
                          ? 'block'
                          : 'hidden lg:group-hover:block'
                      }
                    `}
                  >

                    {item.items.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={closeMenu}
                        className="block border-b border-gray-100 px-5 py-3 text-sm font-semibold !text-[#08666b] hover:bg-[#eef8f6] hover:!text-[#A3621D]"
                      >
                        {child.label}
                      </a>
                    ))}

                  </div>
                )}

              </div>
            ))}

          </div>

          {/* ADMISSION */}
          <a
            href="/admission"
            className="my-2 flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#A3621D] px-8 py-[11px] text-[15px] font-bold !text-white"
          >
            Admission
            <FaChevronDown className="text-[10px]" />
          </a>

        </nav>
      </div>

    </header>
  )
}

export default Navbar;