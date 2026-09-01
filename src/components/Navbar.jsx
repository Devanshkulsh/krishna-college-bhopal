import React, { useState } from "react";

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
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

/* =========================================================
   NAV ITEMS
========================================================= */

const navItems = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About Us",
    href: "/about",
    items: [
      {
        label: "About College",
        href: "/about/college",
      },
      {
        label: "Our Principal",
        href: "/about/principal",
      },
      {
        label: "Statutory Disclosures",
        href: "/about/disclosures",
      },
    ],
  },

  {
    label: "Academics",
    href: "/academics",
    items: [
      {
        label: "Academic Calendar",
        href: "/academics/calendar",
      },
      {
        label: "Syllabus",
        href: "/academics/syllabus",
      },
      {
        label: "Examination",
        href: "/academics/examination",
      },
    ],
  },

  {
    label: "Courses",
    href: "/courses",
    items: [
      {
        label: "BAMS",
        href: "/courses/bams",
      },
      {
        label: "Course Fees",
        href: "/admission/course-fees",
      },
      {
        label: "Eligibility",
        href: "/admission/eligibility",
      },
    ],
  },

  {
    label: "Departments",
    href: "/departments",
    items: [
      {
        label: "Ayurveda",
        href: "/departments/ayurveda",
      },
      {
        label: "Samhita Siddhanta",
        href: "/departments/samhita",
      },
      {
        label: "Rachana Sharir",
        href: "/departments/rachana-sharir",
      },
    ],
  },

  {
    label: "Hospital",
    href: "/hospital",
    items: [
      {
        label: "OPD Services",
        href: "/hospital/opd",
      },
      {
        label: "IPD Services",
        href: "/hospital/ipd",
      },
      {
        label: "Panchakarma",
        href: "/hospital/panchakarma",
      },
    ],
  },

  {
    label: "Facility",
    href: "/facility",
  },

  {
    label: "NCISM Mandates",
    href: "/ncism-mandates",
    items: [
      {
        label: "Permissions",
        href: "/ncism-mandates/permissions",
      },
      {
        label: "Compliance",
        href: "/ncism-mandates/compliance",
      },
      {
        label: "Reports",
        href: "/ncism-mandates/reports",
      },
    ],
  },

  {
    label: "Attendance",
    href: "/attendance",
  },

  {
    label: "Gallery",
    href: "/gallery",
    items: [
      {
        label: "Campus Photos",
        href: "/gallery/campus",
      },
      {
        label: "Events",
        href: "/gallery/events",
      },
      {
        label: "Hospital",
        href: "/gallery/hospital",
      },
    ],
  },

  {
    label: "Blog",
    href: "/blog",
  },

  {
    label: "Contact Us",
    href: "/contact",
  },
];

/* =========================================================
   SOCIAL MEDIA
========================================================= */

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
    bg: "bg-[#3b5fa3]",
  },

  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
    bg: "bg-[#e83f61]",
  },

  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
    bg: "bg-[#25a7e8]",
  },

  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
    bg: "bg-[#ff1111]",
  },

  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
    bg: "bg-[#0b83b5]",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState("");

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu("");
  };

  const toggleSubmenu = (label) => {
    setOpenSubmenu((current) =>
      current === label ? "" : label
    );
  };

  return (
    <>
      <header className="relative z-50 w-full bg-white">

        {/* =====================================================
            TOP BAR
        ===================================================== */}

        <div className="hidden h-[44px] bg-[#168486] lg:block">

          <div className="mx-auto flex h-full max-w-[1720px] items-center justify-between px-8">

            {/* LEFT CONTACT */}

            <div className="flex items-center gap-7 text-[14px] font-bold text-white">

              <a
                href="tel:+917611150888"
                className="flex items-center gap-2 !text-white"
              >
                <FaPhoneAlt className="text-[#f1a028]" />

                <span>
                  +91-7611150888
                </span>
              </a>

              <a
                href="tel:+916262180303"
                className="flex items-center gap-2 !text-white"
              >
                <FaPhoneAlt className="text-[#f1a028]" />

                <span>
                  +91-6262 180 303
                </span>
              </a>

              <a
                href="mailto:shrikrishnayurvedic@.com"
                className="flex items-center gap-2 !text-white"
              >
                <FaEnvelope className="text-[#f1a028]" />

                <span>
                  shrikrishnayurvedic@.com
                </span>
              </a>

            </div>

            {/* TOP RIGHT BUTTONS */}

            <div className="flex items-center gap-3">

              {[
                [
                  "BAMS(UG) Admission 2026",
                  "/admission",
                ],
                [
                  "Govt. Approval",
                  "/approvals",
                ],
                [
                  "Career",
                  "/career",
                ],
                [
                  "Notification",
                  "/notification",
                ],
              ].map(([label, href]) => (

                <a
                  key={label}
                  href={href}
                  className="
                    rounded-full
                    bg-[#A3621D]
                    px-4
                    py-[5px]
                    text-[13px]
                    font-bold
                    !text-white
                    transition
                    duration-300
                    hover:bg-[#8d5116]
                  "
                >
                  {label}
                </a>

              ))}

            </div>

          </div>

        </div>

        {/* =====================================================
            MIDDLE HEADER
        ===================================================== */}

        <div className="bg-white">

          <div
            className="
              mx-auto
              flex
              h-[90px]
              max-w-[1720px]
              items-center
              justify-between
              gap-2
              px-3

              min-[375px]:px-4

              sm:h-[100px]
              sm:gap-4
              sm:px-6

              lg:h-[112px]
              lg:px-8
            "
          >

            {/* =================================================
                LOGO + COLLEGE NAME
            ================================================= */}

            <a
              href="/"
              onClick={closeMenu}
              className="
                flex
                min-w-0
                flex-1
                items-center
                gap-2
                sm:gap-3
                lg:flex-none
              "
            >

              {/* LOGO */}

              <img
                src="/logoayu.png"
                alt="Shri Krishna Ayurvedic Hospital"
                className="
                  h-[56px]
                  w-[56px]
                  shrink-0
                  object-contain

                  min-[375px]:h-[60px]
                  min-[375px]:w-[60px]

                  sm:h-[70px]
                  sm:w-[80px]

                  lg:h-[76px]
                  lg:w-[92px]
                "
              />

              {/* COLLEGE NAME */}

              <div className="min-w-0 flex-1">

                <div
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    leading-[1.15]
                    text-[#09676b]

                    min-[360px]:text-[11px]
                    min-[400px]:text-[12px]

                    sm:text-[17px]
                    md:text-[20px]

                    lg:whitespace-nowrap
                    lg:text-[22px]

                    xl:text-[25px]
                  "
                >
                  SHRI KRISHNA AYURVEDIC HOSPITAL
                </div>

                <p
                  className="
                    mt-[4px]
                    text-[6.5px]
                    font-extrabold
                    uppercase
                    leading-[1.3]
                    text-[#af680d]

                    min-[360px]:text-[7px]
                    min-[400px]:text-[8px]

                    sm:text-[9px]

                    lg:whitespace-nowrap
                    lg:text-[10px]
                  "
                >
                  SHRI KRISHNA UNIVERSITY, CHHATARPUR (M.P.)
                </p>

              </div>

            </a>

            {/* =================================================
                DESKTOP RIGHT CONTENT
            ================================================= */}

            <div className="hidden items-center lg:flex">

              {/* ADMISSION */}

              <a
                href="tel:+917611150888"
                className="flex items-center gap-3 border-r border-gray-200 px-6"
              >

                <span
                  className="
                    flex
                    h-[52px]
                    w-[52px]
                    items-center
                    justify-center
                    rounded-md
                    bg-[#A3621D]
                    text-xl
                    !text-white
                  "
                >
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
                href="tel:+916262180303"
                className="flex items-center gap-3 border-r border-gray-200 px-6"
              >

                <span
                  className="
                    flex
                    h-[52px]
                    w-[52px]
                    items-center
                    justify-center
                    rounded-md
                    bg-[#A3621D]
                    text-xl
                    !text-white
                  "
                >
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
                  ({
                    label,
                    href,
                    icon: Icon,
                    bg,
                  }) => (

                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className={`
                        flex
                        h-[52px]
                        w-[52px]
                        items-center
                        justify-center
                        rounded-lg
                        ${bg}
                        transition
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-lg
                      `}
                    >

                      <Icon
                        size={20}
                        color="#ffffff"
                        style={{
                          color: "#ffffff",
                          fill: "#ffffff",
                        }}
                      />

                    </a>

                  )
                )}

              </div>

            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                setIsMenuOpen((current) => !current)
              }
              aria-label="Toggle Menu"
              className="
                ml-1
                flex
                h-[42px]
                w-[42px]
                shrink-0
                items-center
                justify-center
                rounded-[7px]
                bg-[#08666b]
                text-[18px]
                !text-white
                shadow-sm

                min-[375px]:h-[44px]
                min-[375px]:w-[44px]

                sm:h-[48px]
                sm:w-[48px]

                lg:hidden
              "
            >
              {isMenuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </button>

          </div>

        </div>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <div className="bg-[#07634c]">

          <nav
            className={`
              mx-auto
              max-w-[1720px]
              px-4

              sm:px-6

              lg:flex
              lg:h-[58px]
              lg:items-center
              lg:justify-between

              ${
                isMenuOpen
                  ? "block"
                  : "hidden lg:flex"
              }
            `}
          >

            <div className="flex flex-col lg:flex-row lg:items-center">

              {navItems.map((item) => (

                <div
                  key={item.label}
                  className="
                    group
                    relative
                    border-b
                    border-white/10
                    lg:border-0
                  "
                >

                  <div className="flex items-center">

                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="
                        flex-1
                        whitespace-nowrap
                        px-[14px]
                        py-[15px]
                        text-[14px]
                        font-bold
                        !text-white
                        transition
                        hover:bg-black/10

                        lg:flex-none
                        lg:py-[19px]

                        xl:px-[17px]
                      "
                    >
                      {item.label}
                    </a>

                    {/* SUB MENU */}

                    {item.items && (
                      <>

                        <FaChevronDown
                          className="
                            -ml-1
                            mr-1
                            hidden
                            text-[9px]
                            !text-white
                            lg:block
                          "
                        />

                        <button
                          type="button"
                          onClick={() =>
                            toggleSubmenu(item.label)
                          }
                          className="
                            ml-auto
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            !text-white
                            lg:hidden
                          "
                        >

                          <FaChevronDown
                            className={`
                              text-xs
                              transition-transform
                              duration-300

                              ${
                                openSubmenu === item.label
                                  ? "rotate-180"
                                  : ""
                              }
                            `}
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
                            ? "block"
                            : "hidden lg:group-hover:block"
                        }
                      `}
                    >

                      {item.items.map((child) => (

                        <a
                          key={child.label}
                          href={child.href}
                          onClick={closeMenu}
                          className="
                            block
                            border-b
                            border-gray-100
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            !text-[#08666b]
                            transition
                            hover:bg-[#eef8f6]
                            hover:!text-[#A3621D]
                          "
                        >
                          {child.label}
                        </a>

                      ))}

                    </div>

                  )}

                </div>

              ))}

            </div>

            {/* ADMISSION BUTTON */}

            <a
              href="/admission"
              onClick={closeMenu}
              className="
                my-3
                flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#A3621D]
                px-8
                py-[11px]
                text-[15px]
                font-bold
                !text-white
                transition
                duration-300
                hover:bg-[#8d5116]

                lg:my-2
              "
            >
              Admission

              <FaChevronDown className="text-[10px]" />
            </a>

          </nav>

        </div>

      </header>

      {/* =====================================================
          ONLY ONE GLOBAL WHATSAPP BUTTON
      ===================================================== */}

      <a
        href="https://wa.me/917611150888"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          fixed
          bottom-5
          left-4
          z-[99999]

          flex
          h-[46px]
          w-[46px]
          items-center
          justify-center

          rounded-full
          border-[3px]
          border-[#08735d]

          bg-[#25D366]

          text-[23px]
          !text-white

          shadow-[0_4px_16px_rgba(0,0,0,0.25)]

          transition-all
          duration-300

          hover:scale-110
          hover:shadow-[0_6px_22px_rgba(0,0,0,0.30)]

          sm:bottom-6
          sm:left-6
          sm:h-[52px]
          sm:w-[52px]
          sm:text-[27px]
        "
      >
        <FaWhatsapp
          style={{
            color: "#ffffff",
            fill: "#ffffff",
          }}
        />
      </a>

    </>
  );
};

export default Navbar;