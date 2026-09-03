import React from "react";
import {
  FaArrowRight,
  FaHeadset,
} from "react-icons/fa";

const ExcellenceSection = () => {
  return (
    <section className="w-full bg-white py-8 md:py-10 lg:py-12">
      
      {/* WIDER CONTAINER */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1900px]
          px-3
          sm:px-4
          md:px-5
          lg:px-6
          xl:px-8
        "
      >
        {/* MAIN BANNER */}
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-[24px]
            border
            border-white/10
            bg-[#168486]
            shadow-[0_18px_50px_rgba(0,0,0,0.16)]
          "
        >
          {/* BACKGROUND IMAGE */}
          <img
            src="/hero/excellence.png"
            alt="Shri Krishna Ayurvedic Hospital"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              opacity-[0.14]
            "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-[#07130f]/85" />

          {/* RIGHT TEAL GLOW */}
          <div
            className="
              absolute
              -bottom-[220px]
              -right-[120px]
              h-[600px]
              w-[760px]
              rounded-full
              bg-[#168486]
              blur-[110px]
            "
          />

          {/* LEFT TEAL GLOW */}
          <div
            className="
              absolute
              -left-[180px]
              top-[20px]
              h-[440px]
              w-[440px]
              rounded-full
              bg-[#168486]/20
              blur-[90px]
            "
          />

          {/* ================================================
              MAIN CONTENT
          ================================================ */}

          <div
            className="
              relative
              z-10
              grid
              min-h-[400px]
              items-center

              sm:min-h-[430px]

              md:min-h-[460px]
              md:grid-cols-[40%_60%]

              lg:min-h-[500px]
              lg:grid-cols-[42%_58%]

              xl:min-h-[520px]
            "
          >
            {/* ================================================
                LEFT DECORATIVE CIRCLES
            ================================================ */}

            <div
              className="
                relative
                hidden
                h-full
                min-h-[500px]
                overflow-hidden
                md:block
              "
            >
              {/* BIG OUTER CIRCLE */}
              <div
                className="
                  absolute
                  -left-[145px]
                  -top-[175px]
                  h-[650px]
                  w-[650px]
                  rounded-full
                  bg-[#d9e2df]/15
                "
              />

              {/* SECOND CIRCLE */}
              <div
                className="
                  absolute
                  -left-[100px]
                  -top-[130px]
                  h-[530px]
                  w-[530px]
                  rounded-full
                  bg-[#d9e2df]/20
                "
              />

              {/* THIRD CIRCLE */}
              <div
                className="
                  absolute
                  -left-[55px]
                  -top-[85px]
                  h-[410px]
                  w-[410px]
                  rounded-full
                  bg-[#d9e2df]/28
                "
              />

              {/* FOURTH CIRCLE */}
              <div
                className="
                  absolute
                  -left-[10px]
                  -top-[40px]
                  h-[290px]
                  w-[290px]
                  rounded-full
                  bg-[#e8eeec]/38
                "
              />

              {/* CENTER CIRCLE */}
              <div
                className="
                  absolute
                  left-[35px]
                  top-[5px]
                  h-[170px]
                  w-[170px]
                  rounded-full
                  bg-white/70
                  shadow-[0_10px_35px_rgba(255,255,255,0.08)]
                "
              />

              {/* BOTTOM DECORATIVE CIRCLE */}
              <div
                className="
                  absolute
                  -bottom-[145px]
                  left-[190px]
                  h-[280px]
                  w-[280px]
                  rounded-full
                  border-[42px]
                  border-[#168486]/15
                "
              />
            </div>

            {/* ================================================
                RIGHT CONTENT
            ================================================ */}

            <div
              className="
                flex
                h-full
                flex-col
                justify-center

                px-6
                py-12

                text-center

                sm:px-8

                md:px-10
                md:py-10
                md:text-left

                lg:px-12
                lg:py-12

                xl:px-16

                2xl:px-20
              "
            >
              {/* SMALL LABEL */}
              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-center
                  gap-3
                  md:justify-start
                "
              >
                <div className="h-[2px] w-[44px] bg-[#C8751B]" />

                <span
                  className="
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[2.2px]
                    text-[#df9b4d]

                    sm:text-[13px]
                    lg:text-[14px]
                  "
                >
                  Excellence in Ayurveda
                </span>
              </div>

              {/* MAIN HEADING */}
              <h2
                className="
                  max-w-[900px]
                  text-[30px]
                  font-bold
                  leading-[1.15]
                  text-white

                  sm:text-[36px]

                  md:text-[40px]

                  lg:text-[46px]

                  xl:text-[50px]

                  2xl:text-[52px]
                "
              >
                Excellence in Ayurvedic
                <span className="block">
                  Education & Healthcare
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mx-auto
                  mt-5
                  max-w-[850px]

                  text-[14px]
                  leading-7
                  text-white/75

                  sm:text-[15px]

                  md:mx-0

                  lg:text-[17px]
                  lg:leading-8

                  xl:text-[18px]
                "
              >
                Combining the timeless wisdom of Ayurveda with quality
                education, clinical training and modern healthcare facilities
                to nurture skilled and responsible healthcare professionals.
              </p>

              {/* ================================================
                  CONTACT NUMBER
              ================================================ */}

              <a
                href="tel:+916262180303"
                className="
                  mx-auto
                  mt-7

                  flex
                  w-fit
                  items-center
                  gap-4

                  !text-white

                  transition-all
                  duration-300

                  hover:!text-[#df9b4d]

                  md:mx-0
                "
              >
                <FaHeadset
                  className="
                    text-[34px]
                    text-[#df9b4d]

                    sm:text-[38px]

                    lg:text-[44px]

                    xl:text-[46px]
                  "
                />

                <div className="text-left">
                  <span
                    className="
                      block

                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[1.7px]

                      text-white/55

                      sm:text-[11px]

                      lg:text-[12px]
                    "
                  >
                    Hospital Helpline
                  </span>

                  <span
                    className="
                      block

                      text-[22px]
                      font-bold
                      tracking-[0.5px]

                      text-white

                      sm:text-[25px]

                      lg:text-[29px]

                      xl:text-[31px]
                    "
                  >
                    +91-6262180303
                  </span>
                </div>
              </a>

              {/* ================================================
                  BUTTON
              ================================================ */}

              <div className="mt-7">
                <a
                  href="/about"
                  className="
                    inline-flex
                    h-[50px]
                    items-center
                    justify-center
                    gap-3

                    rounded-full

                    bg-[#A3621D]

                    px-7

                    text-[14px]
                    font-semibold

                    !text-white

                    shadow-[0_8px_25px_rgba(163,98,29,0.30)]

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-[#c27824]
                    hover:shadow-[0_12px_30px_rgba(163,98,29,0.38)]

                    sm:h-[52px]
                    sm:px-8
                    sm:text-[15px]

                    lg:h-[54px]
                    lg:px-9
                  "
                >
                  Explore Our Institution

                  <FaArrowRight className="text-[13px] sm:text-[14px]" />
                </a>
              </div>
            </div>
          </div>

          {/* ================================================
              TOP RIGHT DECORATIVE RING
          ================================================ */}

          <div
            className="
              absolute
              -right-[30px]
              -top-[35px]

              h-[125px]
              w-[125px]

              rounded-full

              border-[20px]
              border-[#A3621D]/20
            "
          />
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;