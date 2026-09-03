import React from "react";
import {
  FaEye,
  FaBullseye,
  FaCheckCircle,
  FaLeaf,
} from "react-icons/fa";

const missionPoints = [
  "To deliver holistic and authentic Ayurvedic healthcare services.",

  "To integrate the ancient wisdom of Ayurveda with modern diagnostic and therapeutic techniques.",

  "To offer affordable, safe, and personalized treatments to all sections of society.",

  "To promote natural healing processes that support long-term wellness.",

  "To encourage and educate for a balanced and healthy lifestyle based on Ayurvedic values.",

  "To contribute actively to the health and well-being of individuals and communities.",

  "To uphold values of care, compassion, and clinical excellence in all services.",
];

const VisionMission = () => {
  return (
    <main className="w-full bg-white font-poppins">

      {/* =====================================================
          PAGE BANNER
      ===================================================== */}
      <section
        className="
          relative
          overflow-hidden
          bg-[#0f5f43]
          py-12
          sm:py-14
          md:py-16
        "
      >
        {/* DECORATIVE CIRCLE LEFT */}
        <div
          className="
            absolute
            -left-[70px]
            -top-[80px]
            h-[220px]
            w-[220px]
            rounded-full
            border-[40px]
            border-white/5
          "
        />

        {/* DECORATIVE CIRCLE RIGHT */}
        <div
          className="
            absolute
            -bottom-[100px]
            -right-[70px]
            h-[240px]
            w-[240px]
            rounded-full
            border-[45px]
            border-[#A3621D]/20
          "
        />

        {/* SMALL CIRCLE */}
        <div
          className="
            absolute
            right-[12%]
            top-[22px]
            h-[45px]
            w-[45px]
            rounded-full
            bg-[#A3621D]/20
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1200px]
            px-4
            text-center
            sm:px-6
          "
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-[35px] bg-[#A3621D]" />

            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[2px]
                text-white/80
                sm:text-[12px]
              "
            >
              Shri Krishna Ayurvedic Hospital
            </p>

            <span className="h-[2px] w-[35px] bg-[#A3621D]" />
          </div>

          <h1
            className="
              text-[30px]
              font-bold
              leading-tight
              text-white
              sm:text-[36px]
              md:text-[42px]
              lg:text-[46px]
            "
          >
            Vision & Mission
          </h1>

          <p
            className="
              mx-auto
              mt-3
              max-w-[650px]
              text-[13px]
              leading-6
              text-white/75
              sm:text-[14px]
              md:text-[15px]
            "
          >
            Dedicated to authentic Ayurveda, compassionate healthcare
            and holistic well-being.
          </p>
        </div>

        {/* BOTTOM BROWN LINE */}
        <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[#A3621D]" />
      </section>

      {/* =====================================================
          VISION & MISSION CONTENT
      ===================================================== */}
      <section className="w-full bg-[#f8fbfa] py-10 sm:py-12 md:py-14 lg:py-16">
        <div
          className="
            mx-auto
            grid
            max-w-[1350px]
            gap-7
            px-4
            sm:px-6
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-9
            lg:px-10
          "
        >

          {/* =================================================
              VISION CARD
          ================================================= */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[18px]
              bg-[#168486]
              p-7
              text-white
              shadow-[0_15px_40px_rgba(22,132,134,0.18)]

              sm:p-8
              md:p-9
              lg:p-10
            "
          >
            {/* DECORATION */}
            <div
              className="
                absolute
                -right-[60px]
                -top-[60px]
                h-[180px]
                w-[180px]
                rounded-full
                border-[35px]
                border-white/5
              "
            />

            <div
              className="
                absolute
                -bottom-[70px]
                -left-[60px]
                h-[170px]
                w-[170px]
                rounded-full
                border-[35px]
                border-[#A3621D]/20
              "
            />

            <div className="relative z-10">

              {/* ICON */}
              <div
                className="
                  flex
                  h-[58px]
                  w-[58px]
                  items-center
                  justify-center
                  rounded-[12px]
                  bg-white/10
                  text-[25px]
                  text-white
                "
              >
                <FaEye />
              </div>

              {/* LABEL */}
              <p
                className="
                  mt-7
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-white/65
                "
              >
                Our Future Direction
              </p>

              {/* TITLE */}
              <h2
                className="
                  mt-2
                  text-[28px]
                  font-bold
                  text-white
                  sm:text-[32px]
                  md:text-[35px]
                "
              >
                Our Vision
              </h2>

              <div className="mt-4 h-[3px] w-[70px] rounded-full bg-[#A3621D]" />

              {/* VISION TEXT */}
              <p
                className="
                  mt-6
                  text-[15px]
                  leading-[1.9]
                  text-white/90
                  sm:text-[16px]
                "
              >
                “To deliver holistic and authentic Ayurvedic healthcare by
                blending the ancient wisdom of Ayurveda with modern diagnostic
                and therapeutic techniques, ensuring affordable, safe, and
                personalized treatment for all. We are committed to promoting
                natural healing and a balanced lifestyle for the well-being of
                individuals and communities.”
              </p>

              {/* BOTTOM TAG */}
              <div
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/10
                  px-4
                  py-2
                  text-[12px]
                  font-medium
                  text-white
                "
              >
                <FaLeaf className="text-[#e7b06b]" />
                Authentic Ayurveda • Holistic Wellness
              </div>
            </div>
          </div>

          {/* =================================================
              MISSION CARD
          ================================================= */}
          <div
            className="
              rounded-[18px]
              border
              border-[#168486]/10
              bg-white
              p-7
              shadow-[0_12px_35px_rgba(0,0,0,0.06)]

              sm:p-8
              md:p-9
              lg:p-10
            "
          >
            {/* MISSION HEADER */}
            <div className="flex items-start gap-4">

              <div
                className="
                  flex
                  h-[58px]
                  w-[58px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[12px]
                  bg-[#168486]/10
                  text-[24px]
                  text-[#168486]
                "
              >
                <FaBullseye />
              </div>

              <div>
                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-[#A3621D]
                  "
                >
                  Our Commitment
                </p>

                <h2
                  className="
                    mt-1
                    text-[28px]
                    font-bold
                    text-[#168486]
                    sm:text-[32px]
                    md:text-[35px]
                  "
                >
                  Our Mission
                </h2>
              </div>
            </div>

            <div className="mt-5 h-[3px] w-[70px] rounded-full bg-[#A3621D]" />

            {/* MISSION POINTS */}
            <div className="mt-6 space-y-4">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    rounded-[10px]
                    border
                    border-transparent
                    px-2
                    py-2
                    transition-all
                    duration-300

                    hover:border-[#168486]/10
                    hover:bg-[#168486]/5
                  "
                >
                  <FaCheckCircle
                    className="
                      mt-[5px]
                      shrink-0
                      text-[16px]
                      text-[#A3621D]
                    "
                  />

                  <p
                    className="
                      text-[14px]
                      leading-7
                      text-[#3d5151]
                      sm:text-[15px]
                    "
                  >
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM COMMITMENT STRIP
      ===================================================== */}
      <section className="w-full bg-white pb-12 md:pb-16">
        <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-10">

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-5
              rounded-[16px]
              border
              border-[#168486]/10
              bg-white
              px-6
              py-6
              shadow-[0_8px_28px_rgba(0,0,0,0.05)]

              md:flex-row
              md:px-8
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-[50px]
                  w-[50px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#168486]
                  text-white
                "
              >
                <FaLeaf />
              </div>

              <div>
                <h3 className="text-[17px] font-bold text-[#168486] sm:text-[18px]">
                  Healing Through Ayurveda
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-[#526565] sm:text-[14px]">
                  Care, compassion and clinical excellence for healthier
                  individuals and communities.
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                rounded-[8px]
                bg-[#A3621D]
                px-6
                py-3
                text-[14px]
                font-semibold
                !text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#8d5217]
                hover:!text-white
              "
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default VisionMission;