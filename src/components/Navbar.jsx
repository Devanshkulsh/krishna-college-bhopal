import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaBookOpen,
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaHospital,
  FaInstagram,
  FaPhoneAlt,
  FaTimes,
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
        label: "Director Message",
        href: "/about/director-message",
      },
      {
        label: "Vision/Mission",
        href: "/about/vision-mission",
      },
    ],
  },

  {
    label: "Departments",
    href: "/departments",
  },

  /* ================= HOSPITAL ================= */

  {
    label: "Hospital",
    href: "/hospital",
  },

  {
    label: "Faculty",
    href: "/faculty",
    items: [
      {
        label: "Teaching Staff",
        href: "/faculty/teaching-staff",
      },
      {
        label: "Non Teaching Staff",
        href: "/faculty/non-teaching-staff",
      },
      {
        label: "Hospital Staff",
        href: "/faculty/hospital-staff",
      },
    ],
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
    label: "Facilities",
    href: "/facilities",
  },

  {
    label: "Committee",
    href: "/committee",
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
        label: "Hospital Gallery",
        href: "/gallery/hospital",
      },
    ],
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
    label: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
    bg: "bg-[#ff1111]",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState("");
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu("");
  };

  /* =========================================================
     MOBILE SUBMENU
  ========================================================= */

  const toggleSubmenu = (label) => {
    setOpenSubmenu((current) =>
      current === label ? "" : label
    );
  };

  /* =========================================================
     OPEN APPLY FORM
  ========================================================= */

  const openApplyForm = () => {
    closeMenu();
    setIsApplyOpen(true);
  };

  const closeApplyForm = () => {
    setIsApplyOpen(false);
  };

  /* =========================================================
     LMS FORM LOAD
  ========================================================= */

  useEffect(() => {
    if (!isApplyOpen) return;

    setFormLoading(true);

    const timer = setTimeout(() => {
      const container = document.getElementById(
        "navbarFormsID7375"
      );

      if (!container) {
        setFormLoading(false);
        return;
      }

      if (container.children.length > 0) {
        setFormLoading(false);
        return;
      }

      const oldScript = document.getElementById(
        "navbar-lms-form-script"
      );

      if (oldScript) {
        oldScript.remove();
      }

      const script = document.createElement("script");

      script.id = "navbar-lms-form-script";
      script.type = "module";

      script.src =
        "https://ntechzy.in/api/v1/student-form/form.js?v=" +
        Date.now();

      script.setAttribute("path", '["/"]');

      script.setAttribute(
        "divid",
        "navbarFormsID7375"
      );

      script.setAttribute(
        "courses",
        '["Select Course","BAMS","BHMS"]'
      );

      script.setAttribute(
        "styles",
        "basic"
      );

      script.setAttribute(
        "logo",
        "/logoayu.png"
      );

      script.setAttribute(
        "contact",
        "+91-7611150888"
      );

      script.onload = () => {
        setTimeout(() => {
          setFormLoading(false);
        }, 600);
      };

      script.onerror = () => {
        console.error(
          "Navbar LMS admission form failed to load"
        );

        setFormLoading(false);
      };

      document.body.appendChild(script);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [isApplyOpen]);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (isApplyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isApplyOpen]);

  /* =========================================================
     ESC KEY CLOSE
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsApplyOpen(false);
      }
    };

    if (isApplyOpen) {
      window.addEventListener(
        "keydown",
        handleKeyDown
      );
    }

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isApplyOpen]);

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="relative z-50 w-full bg-white">

        {/* =================================================
            TOP BAR
        ================================================= */}

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

                <Link
                  key={label}
                  to={href}
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
                </Link>

              ))}

            </div>

          </div>

        </div>


        {/* =================================================
            MIDDLE HEADER
        ================================================= */}

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

            {/* LOGO + NAME */}

            <Link
              to="/"
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
                  SHRI KRISHNA UNIVERSITY,
                  CHHATARPUR (M.P.)
                </p>

              </div>

            </Link>


            {/* =================================================
                DESKTOP RIGHT
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


              {/* HOSPITAL HELPLINE */}

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


              {/* SOCIAL MEDIA */}

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
                setIsMenuOpen(
                  (current) => !current
                )
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


        {/* =================================================
            MAIN NAVIGATION
        ================================================= */}

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

            {/* NAV ITEMS */}

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

                    {/* MAIN LINK */}

                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className="
                        flex-1
                        whitespace-nowrap
                        px-[12px]
                        py-[15px]
                        text-[14px]
                        font-bold
                        !text-white
                        transition
                        hover:bg-black/10
                        lg:flex-none
                        lg:py-[19px]
                        xl:px-[14px]
                      "
                    >
                      {item.label}
                    </Link>


                    {/* DROPDOWN ICON */}

                    {item.items && (
                      <>

                        {/* DESKTOP ARROW */}

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


                        {/* MOBILE DROPDOWN BUTTON */}

                        <button
                          type="button"
                          onClick={() =>
                            toggleSubmenu(
                              item.label
                            )
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
                                openSubmenu ===
                                item.label
                                  ? "rotate-180"
                                  : ""
                              }
                            `}
                          />

                        </button>

                      </>
                    )}

                  </div>


                  {/* =================================================
                      DROPDOWN
                  ================================================= */}

                  {item.items && (

                    <div
                      className={`
                        bg-white
                        shadow-xl

                        lg:absolute
                        lg:left-0
                        lg:top-full
                        lg:z-50
                        lg:min-w-[240px]

                        ${
                          openSubmenu ===
                          item.label
                            ? "block"
                            : "hidden lg:group-hover:block"
                        }
                      `}
                    >

                      {item.items.map(
                        (child) => (

                          <Link
                            key={child.label}
                            to={child.href}
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
                          </Link>

                        )
                      )}

                    </div>

                  )}

                </div>

              ))}

            </div>


            {/* =================================================
                APPLY NOW BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={openApplyForm}
              className="
                my-3
                flex
                shrink-0
                items-center
                justify-center
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
              Apply Now
            </button>

          </nav>

        </div>

      </header>


      {/* =========================================================
          APPLY NOW LMS FORM POPUP
      ========================================================= */}

      {isApplyOpen && (

        <div
          className="
            fixed
            inset-0
            z-[999999]
            flex
            items-center
            justify-center
            bg-black/70
            p-3
            backdrop-blur-[2px]
            sm:p-5
          "
          onClick={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeApplyForm();
            }
          }}
        >

          <div
            className="
              relative
              max-h-[94vh]
              w-full
              max-w-[680px]
              overflow-y-auto
              overflow-x-hidden
              rounded-[18px]
              bg-white
              shadow-[0_25px_80px_rgba(0,0,0,0.45)]
              sm:rounded-[22px]
            "
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={closeApplyForm}
              aria-label="Close Admission Form"
              className="
                absolute
                right-3
                top-3
                z-[100]
                flex
                h-[42px]
                w-[42px]
                items-center
                justify-center
                rounded-full
                bg-[#A3621D]
                text-[18px]
                !text-white
                shadow-lg
                transition-all
                duration-300
                hover:rotate-90
                hover:bg-[#8d5116]
                sm:right-4
                sm:top-4
              "
            >
              <FaTimes />
            </button>


            {/* FORM AREA */}

            <div
              className="
                min-h-[220px]
                bg-white
                px-3
                pb-4
                pt-4
                sm:px-5
                sm:pb-5
                sm:pt-5
              "
            >

              {formLoading && (

                <div
                  className="
                    flex
                    min-h-[180px]
                    items-center
                    justify-center
                    text-center
                    text-[14px]
                    font-medium
                    text-gray-500
                  "
                >
                  Loading admission form...
                </div>

              )}


              <div
                id="navbarFormsID7375"
                className="
                  w-full
                  max-w-full
                  bg-white
                "
              />

            </div>

          </div>

        </div>

      )}


      {/* =========================================================
          WHATSAPP FLOATING BUTTON
      ========================================================= */}

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