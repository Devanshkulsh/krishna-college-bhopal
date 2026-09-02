import React, { useEffect, useState } from "react";
import {
  FaBookOpen,
  FaDownload,
  FaGraduationCap,
  FaHeadset,
  FaShareAlt,
  FaTimes,
} from "react-icons/fa";

const HeroSlider = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(true);

  const [activeContent, setActiveContent] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);

  /* =====================================================
     HERO CONTENT
  ===================================================== */

  const heroContents = [
    {
      title: "Welcome To Shri Krishna Ayurvedic Hospital",
      subtitle: "SHRI KRISHNA UNIVERSITY, CHHATARPUR (M.P.)",
      highlight: "निःशुल्क स्वर्ण प्राशन शिविर",
    },
    {
      title: "Experience Authentic Ayurvedic Healthcare",
      subtitle: "TRADITIONAL AYURVEDA • MODERN CARE",
      highlight: "स्वस्थ जीवन की ओर एक कदम",
    },
    {
      title: "Ayurveda For A Healthier Tomorrow",
      subtitle: "SHRI KRISHNA AYURVEDIC HOSPITAL",
      highlight: "प्राकृतिक उपचार • सम्पूर्ण स्वास्थ्य",
    },
  ];

  /* =====================================================
     HERO CONTENT AUTO CHANGE
  ===================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setContentVisible(false);

      setTimeout(() => {
        setActiveContent((prev) => (prev + 1) % heroContents.length);
        setContentVisible(true);
      }, 450);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* =====================================================
     LOAD LMS FORM
  ===================================================== */

  useEffect(() => {
    let timer;

    const loadLmsForm = () => {
      const container = document.getElementById("formsID7375");

      if (!container) return;

      if (container.children.length > 0) {
        setFormLoading(false);
        return;
      }

      const oldScript = document.getElementById("krishna-lms-script");

      if (oldScript) {
        oldScript.remove();
      }

      const script = document.createElement("script");

      script.id = "krishna-lms-script";
      script.type = "module";

      script.src =
        "https://ntechzy.in/api/v1/student-form/form.js?v=" + Date.now();

      script.setAttribute("path", '["/"]');
      script.setAttribute("divid", "formsID7375");

      script.setAttribute(
        "courses",
        '["Select Course","BAMS","BHMS"]'
      );

      script.setAttribute("styles", "basic");
      script.setAttribute("logo", "/logoayu.png");
      script.setAttribute("contact", "+91-xxxxxxxxxx");

      script.onload = () => {
        setTimeout(() => {
          setFormLoading(false);
        }, 700);
      };

      script.onerror = () => {
        console.error("LMS admission form failed to load");
        setFormLoading(false);
      };

      document.body.appendChild(script);
    };

    timer = setTimeout(loadLmsForm, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  /* =====================================================
     MOBILE BODY SCROLL LOCK
  ===================================================== */

  useEffect(() => {
    if (isFormOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFormOpen]);

  /* =====================================================
     MANUAL CONTENT CHANGE
  ===================================================== */

  const changeContent = (index) => {
    if (index === activeContent) return;

    setContentVisible(false);

    setTimeout(() => {
      setActiveContent(index);
      setContentVisible(true);
    }, 300);
  };

  return (
    <section
      className={`relative w-full overflow-hidden ${
        isFormOpen ? "z-[999999]" : "z-30"
      }`}
    >
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <div
        className="
          relative
          min-h-[540px]
          sm:min-h-[580px]
          md:min-h-[620px]
          lg:min-h-[700px]
        "
      >
        {/* BACKGROUND */}

        <img
          src="/hero/campus.png"
          alt="Shri Krishna Ayurvedic Hospital"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-[#071d35]/95
            via-[#0b2742]/82
            to-[#071d35]/58

            lg:bg-gradient-to-r
            lg:from-[#071d35]/96
            lg:via-[#0b2742]/80
            lg:to-[#071d35]/20
          "
        />

        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-10

            mx-auto
            flex

            min-h-[540px]
            w-full
            max-w-[1800px]

            items-start

            px-5
            pb-5
            pt-[85px]

            sm:min-h-[580px]
            sm:px-7
            sm:pt-[85px]

            md:min-h-[620px]
            md:px-10
            md:pt-[80px]

            lg:min-h-[700px]
            lg:items-center
            lg:gap-12
            lg:px-12
            lg:py-8

            xl:gap-14
            xl:px-16

            2xl:px-20
          "
        >
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div
            className="
              mx-auto

              flex
              w-full
              flex-col

              items-center

              text-center
              text-white

              lg:mx-0
              lg:min-w-0
              lg:flex-1
              lg:items-start
              lg:text-left
            "
          >
            {/* ================================================= */}
            {/* ANIMATED CONTENT */}
            {/* ================================================= */}

            <div
              className={`
                w-full

                transition-all
                duration-500
                ease-out

                ${
                  contentVisible
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-4 opacity-0 blur-[2px]"
                }
              `}
            >
              {/* SMALL ACCENT */}

              <div
                className="
                  mx-auto
                  mb-4

                  h-[3px]
                  w-[56px]

                  rounded-full

                  bg-[#C8751B]

                  lg:mx-0
                "
              />

              {/* MAIN HEADING */}

              <h1
                className="
                  mx-auto
                  max-w-[920px]

                  text-[27px]

                  font-extrabold
                  uppercase

                  leading-[1.18]

                  tracking-[-0.02em]

                  text-white

                  sm:text-[34px]

                  md:text-[42px]

                  lg:mx-0
                  lg:text-[48px]
                  lg:leading-[1.1]

                  xl:text-[54px]

                  2xl:text-[58px]
                "
              >
                {heroContents[activeContent].title}
              </h1>

              {/* SUBTITLE */}

              <p
                className="
                  mt-5

                  text-[14px]

                  font-semibold

                  leading-6

                  tracking-[0.04em]

                  text-white/90

                  sm:text-[16px]

                  md:text-[19px]

                  lg:text-[20px]

                  xl:text-[21px]
                "
              >
                {heroContents[activeContent].subtitle}
              </p>

              {/* HIGHLIGHT */}

              <div
                className="
                  mt-5

                  flex
                  justify-center

                  lg:justify-start
                "
              >
                <h2
                  className="
                    inline-flex

                    rounded-full

                    border
                    border-[#C8751B]/40

                    bg-[#C8751B]/10

                    px-5
                    py-2

                    text-[22px]

                    font-bold

                    leading-snug

                    text-[#E89A3D]

                    backdrop-blur-sm

                    sm:text-[27px]

                    md:text-[31px]

                    lg:text-[34px]

                    xl:text-[37px]
                  "
                >
                  {heroContents[activeContent].highlight}
                </h2>
              </div>
            </div>

            {/* ================================================= */}
            {/* INDICATORS */}
            {/* ================================================= */}

            <div
              className="
                mt-6

                flex
                items-center
                justify-center

                gap-2

                lg:justify-start
              "
            >
              {heroContents.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => changeContent(index)}
                  className={`
                    h-[4px]

                    rounded-full

                    transition-all
                    duration-500

                    ${
                      activeContent === index
                        ? "w-10 bg-[#C8751B]"
                        : "w-4 bg-white/40 hover:bg-white/70"
                    }
                  `}
                  aria-label={`Show slide ${index + 1}`}
                />
              ))}
            </div>

            {/* ================================================= */}
            {/* BUTTONS */}
            {/* ================================================= */}

            <div
              className="
                mt-10

                flex
                w-full
                max-w-[430px]

                flex-col

                gap-3

                sm:mt-10
                sm:max-w-[500px]
                sm:flex-row
                sm:justify-center

                lg:mt-10
                lg:max-w-none
                lg:justify-start
              "
            >
              {/* MOBILE APPLY */}

              <button
                type="button"
                onClick={() => setIsFormOpen(true)}
                className="
                  flex

                  h-[52px]
                  w-full

                  items-center
                  justify-center

                  rounded-xl

                  bg-[#C8751B]

                  px-6

                  text-[16px]

                  font-semibold
                  text-white

                  shadow-lg

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#AD6414]

                  sm:w-[210px]

                  lg:hidden
                "
              >
                Apply Now
              </button>

              {/* DESKTOP TOUR */}

              <a
                href="/gallery"
                className="
                  hidden

                  h-[54px]
                  min-w-[230px]

                  items-center
                  justify-center

                  rounded-xl

                  bg-[#C8751B]

                  px-7

                  text-[16px]

                  font-semibold

                  !text-white

                  shadow-lg

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#AD6414]

                  lg:flex
                "
              >
                Take A College Tour
              </a>

              {/* DEPARTMENTS */}

              <a
                href="/departments"
                className="
                  flex

                  h-[52px]
                  w-full

                  items-center
                  justify-center

                  rounded-xl

                  bg-[#C8751B]

                  px-6

                  text-[16px]

                  font-semibold

                  !text-white

                  shadow-lg

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#AD6414]

                  sm:w-[210px]

                  lg:h-[54px]
                  lg:w-[230px]
                "
              >
                Our Departments
              </a>
            </div>
          </div>

          {/* ================================================= */}
          {/* LMS FORM */}
          {/* ================================================= */}

          <div
            className={`
              fixed

              left-0
              right-0
              bottom-0
              top-[104px]

              z-[999999]

              flex
              items-start
              justify-center

              bg-black/75

              px-3
              pb-3
              pt-3

              transition-all
              duration-200

              ${
                isFormOpen
                  ? "visible pointer-events-auto opacity-100"
                  : "invisible pointer-events-none opacity-0"
              }

              lg:visible
              lg:relative
              lg:inset-auto

              lg:z-20

              lg:block

              lg:w-[500px]
              xl:w-[520px]
              2xl:w-[540px]

              lg:flex-none

              lg:bg-transparent
              lg:p-0

              lg:opacity-100
              lg:pointer-events-auto
            `}
            onClick={(event) => {
              if (
                window.innerWidth < 1024 &&
                event.target === event.currentTarget
              ) {
                setIsFormOpen(false);
              }
            }}
          >
            {/* FORM CARD */}

            <div
              className="
                flex

                h-full
                w-full

                max-w-[440px]

                flex-col

                overflow-hidden

                rounded-[18px]

                bg-white

                shadow-[0_20px_60px_rgba(0,0,0,0.4)]

                lg:h-auto

                lg:max-h-[650px]
                lg:max-w-none

                lg:rounded-[15px]

                lg:shadow-[0_15px_45px_rgba(0,0,0,0.28)]
              "
            >
              {/* MOBILE HEADER */}

              <div
                className="
                  flex

                  h-[64px]
                  min-h-[64px]

                  shrink-0

                  items-center
                  justify-between

                  border-b
                  border-gray-200

                  bg-white

                  px-5

                  lg:hidden
                "
              >
                <span
                  className="
                    text-[18px]
                    font-medium
                    text-[#07634C]
                  "
                >
                  Apply For Admission
                </span>

                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="
                    flex

                    h-[46px]
                    w-[46px]

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-[#C8751B]

                    text-[19px]
                    text-white

                    shadow-lg

                    transition
                    duration-200

                    hover:bg-[#AD6414]
                  "
                  aria-label="Close Admission Form"
                >
                  <FaTimes />
                </button>
              </div>

              {/* FORM SCROLL AREA */}

              <div
                className="
                  min-h-0
                  flex-1

                  overflow-x-hidden
                  overflow-y-auto

                  bg-white

                  px-3
                  pb-5
                  pt-3

                  sm:px-4

                  lg:flex-none
                  lg:overflow-y-auto

                  lg:px-4
                  lg:pb-4
                  lg:pt-3

                  xl:px-5
                "
                style={{
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {formLoading && (
                  <div
                    className="
                      flex

                      min-h-[80px]

                      items-center
                      justify-center

                      px-4

                      text-center

                      text-sm

                      text-gray-500
                    "
                  >
                    Loading admission form...
                  </div>
                )}

                <div
                  id="formsID7375"
                  className="
                    w-full
                    max-w-full
                    bg-white
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* FLOATING RIGHT BUTTONS */}
        {/* ================================================= */}

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
          <button
            type="button"
            className="
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              bg-[#e7bb37]
              text-xl
              text-white
            "
          >
            <FaGraduationCap />
          </button>

          <a
            href="/courses"
            className="
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              bg-[#3988f0]
              text-xl
              !text-white
            "
          >
            <FaBookOpen />
          </a>

          <a
            href="/brochure"
            className="
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              bg-[#ff1238]
              text-xl
              !text-white
            "
          >
            <FaDownload />
          </a>

          <a
            href="tel:+919031081170"
            className="
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              bg-[#ec3f51]
              text-xl
              !text-white
            "
          >
            <FaHeadset />
          </a>

          <button
            type="button"
            className="
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              bg-[#ef3d91]
              text-xl
              text-white
            "
          >
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* ================================================= */}
      {/* NOTICE BAR */}
      {/* ================================================= */}

      <div
        className={`
          relative

          overflow-hidden

          bg-[#07634C]

          py-2.5

          text-white

          md:py-3
          md:z-20

          ${
            isFormOpen
              ? "hidden lg:block"
              : "block"
          }
        `}
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
          <span>📢 NCISM Approved Curriculum</span>
          <span>📢 Explore Krishna College Departments</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;