import React, { useLayoutEffect, useRef, useState } from 'react'
import {
  FaBars,
  FaBookOpen,
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
  { label: 'Facebook', href: 'https://facebook.com', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
  { label: 'Twitter', href: 'https://twitter.com', icon: FaTwitter },
  { label: 'YouTube', href: 'https://youtube.com', icon: FaYoutube },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedinIn },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState('')
  const headerRef = useRef(null)

  useLayoutEffect(() => {
    const updateHeaderOffset = () => {
      if (!headerRef.current) return
      document.documentElement.style.setProperty(
        '--site-header-offset',
        `${headerRef.current.offsetHeight}px`,
      )
    }

    updateHeaderOffset()
    window.addEventListener('resize', updateHeaderOffset)

    return () => window.removeEventListener('resize', updateHeaderOffset)
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenSubmenu('')
  }

  return (
    <header ref={headerRef} className="site-header w-full flex flex-col relative z-50">
      <div className="top-strip hidden lg:flex flex-wrap justify-between items-center w-full px-4 py-2">
        <div className="top-strip__contacts flex flex-wrap items-center gap-4">
          <a href="tel:+919031081170" className="flex items-center gap-2">
            <FaPhoneAlt aria-hidden="true" />
            +91-90310 81170
          </a>
          <a href="tel:+917209776617" className="flex items-center gap-2">
            <FaPhoneAlt aria-hidden="true" />
            +91-72097 76617
          </a>
          <a href="mailto:info@krishnacollegebhopal.com" className="flex items-center gap-2">
            <FaEnvelope aria-hidden="true" />
            info@krishnacollegebhopal.com
          </a>
        </div>

        <div className="top-strip__badges flex flex-wrap items-center gap-4" aria-label="Important links">
          <a href="/admission">BAMS(UG) Admission 2026</a>
          <a href="/approvals">Govt. Approval</a>
          <a href="/career">Career</a>
          <a href="/notification">Notification</a>
        </div>
      </div>

      {/* Changed to flex-row for both mobile & desktop so hamburger and logo stay side-by-side */}
      <div className="brand-band flex flex-row justify-between items-center w-full p-4 gap-2 lg:gap-4">
        <a className="brand-lockup flex flex-row items-center text-left gap-2 lg:gap-3" href="/" aria-label="Krishna College Bhopal home">
          <img src="/logoayu.png" alt="" className="max-w-[50px] lg:max-w-[80px] h-auto object-contain" />
          <span className="flex flex-col">
            <strong className="text-sm sm:text-base lg:text-lg leading-tight">Krishna College Bhopal</strong>
            <small className="text-[10px] sm:text-xs lg:text-sm leading-tight text-gray-600 lg:text-inherit">Ayurvedic Medical College and Hospital</small>
          </span>
        </a>

        {/* Hamburger Menu button moved up into the branding row */}
        <button
          className="mobile-menu-button flex-shrink-0 flex lg:hidden items-center justify-center gap-2 p-2 cursor-pointer"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <FaTimes aria-hidden="true" className="text-xl" /> : <FaBars aria-hidden="true" className="text-xl" />}
          <span className="hidden sm:inline">Menu</span>
        </button>

        <div className="approval-row hidden xl:flex flex-wrap items-center gap-4" aria-label="Affiliations and approvals">
          <span>NCISM</span>
          <span>University Affiliated</span>
          <span>Health Department</span>
          <span>Ministry of Ayush</span>
        </div>

        <div className="quick-actions hidden lg:flex items-center gap-6">
          <a className="quick-card flex items-center gap-2" href="tel:+919031081170">
            <span className="quick-card__icon text-xl">
              <FaBookOpen aria-hidden="true" />
            </span>
            <span className="flex flex-col">
              <small>For Admissions</small>
              <strong>+91-9031081170</strong>
            </span>
          </a>

          <a className="quick-card flex items-center gap-2" href="tel:+917209776617">
            <span className="quick-card__icon text-xl">
              <FaHospital aria-hidden="true" />
            </span>
            <span className="flex flex-col">
              <small>Hospital Helpline</small>
              <strong>+91-7209776617</strong>
            </span>
          </a>

          <div className="social-links flex items-center gap-3" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer" className="flex items-center justify-center p-1">
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="nav-shell w-full relative">
        <nav
          id="primary-navigation"
          className={`primary-nav w-full flex-col lg:flex lg:flex-row lg:items-center lg:justify-center ${isMenuOpen ? 'flex primary-nav--open' : 'hidden'}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <div
              className={`nav-item relative group w-full lg:w-auto ${openSubmenu === item.label ? 'nav-item--open' : ''}`}
              key={item.label}
            >
              <div className="nav-link-row flex justify-between items-center w-full px-4 py-2 lg:p-0">
                <a href={item.href} onClick={closeMenu} className="w-full lg:w-auto block py-2 lg:px-4">
                  {item.label}
                </a>

                {item.items ? (
                  <button
                    type="button"
                    className="submenu-toggle flex lg:hidden items-center justify-center p-2 cursor-pointer"
                    aria-label={`Toggle ${item.label} menu`}
                    aria-expanded={openSubmenu === item.label}
                    onClick={() =>
                      setOpenSubmenu((current) => (current === item.label ? '' : item.label))
                    }
                  >
                    v
                  </button>
                ) : null}
              </div>

              {item.items ? (
                <div className={`dropdown-menu w-full lg:absolute lg:top-full lg:left-0 flex-col z-50 ${openSubmenu === item.label ? 'flex' : 'hidden lg:group-hover:flex'}`}>
                  {item.items.map((child) => (
                    <a key={child.label} href={child.href} onClick={closeMenu} className="block px-8 py-3 lg:px-4 lg:py-2 whitespace-nowrap">
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}

          <a className="admission-button flex items-center justify-center gap-2 w-full lg:w-auto px-6 py-4 lg:py-2 mt-2 lg:mt-0" href="/admission" onClick={closeMenu}>
            Admission
            <span aria-hidden="true">v</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
