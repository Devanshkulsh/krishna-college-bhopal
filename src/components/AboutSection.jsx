import React from "react";

const AboutSection = () => {
  return (
    <section className="font-poppins w-full bg-white py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">

          {/* LEFT - COLLEGE IMAGE */}

          <div className="relative w-full">

            {/* Decorative background */}
            <div
              className="
                absolute
                -bottom-4
                -left-4
                h-[90%]
                w-[90%]
                rounded-[24px]
                bg-[#168486]/10

                sm:-bottom-5
                sm:-left-5

                lg:-bottom-6
                lg:-left-6
              "
            />

            {/* Main Image Card */}

            <div
              className="
                relative
                z-10
                overflow-hidden
                rounded-[20px]
                border
                border-gray-100
                bg-white
                p-2
                shadow-[0_15px_45px_rgba(0,0,0,0.12)]

                sm:p-3
                lg:rounded-[24px]
              "
            >
              <div
                className="
                  relative
                  h-[300px]
                  w-full
                  overflow-hidden
                  rounded-[15px]

                  sm:h-[380px]
                  md:h-[430px]
                  lg:h-[440px]
                  xl:h-[470px]
                "
              >
                <img
                  src="/hero/clg.png"
                  alt="Shri Krishna University Chhatarpur"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />

                {/* Subtle Image Gradient */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                  "
                />
              </div>
            </div>
          </div>

          {/* RIGHT - ABOUT CONTENT */}

          <div className="lg:pl-3 xl:pl-5">

            {/* SMALL LABEL */}

            <div className="mb-3 flex items-center gap-3">
              <div className="h-[2px] w-[38px] bg-[#A3621D]" />

              <span
                className="
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-[#168486]
                  sm:text-[14px]
                "
              >
                About Our Institution
              </span>
            </div>

            {/* MAIN HEADING */}

            <h2
              className="
                text-[30px]
                font-bold
                leading-[1.2]
                tracking-[-0.5px]
                text-[#162364]

                sm:text-[36px]
                md:text-[40px]
                lg:text-[42px]
                xl:text-[46px]
              "
            >
              Welcome To SHRI KRISHNA UNIVERSITY, CHHATARPUR (M.P.)

            </h2>

            {/* BROWN LINE */}

            <div className="mt-5 h-[3px] w-[120px] rounded-full bg-[#A3621D]" />

            {/* DESCRIPTION */}

            <div
              className="
                mt-6
                max-w-[760px]
                space-y-5
                text-[15px]
                font-normal
                leading-[1.8]
                tracking-[-0.1px]
                text-[#333333]

                sm:text-[16px]
                lg:text-[16px]
                xl:text-[17px]
              "
            >
              <p>
                Welcome to{" "}
                <strong className="font-semibold text-[#162364]">
                  SHRI KRISHNA UNIVERSITY, CHHATARPUR (M.P.)
                </strong>{" "}
                — an institution committed to excellence in Ayurvedic
                education, healthcare and holistic wellness.
              </p>

              <p>
                Our institution focuses on combining the traditional wisdom of
                Ayurveda with modern academic learning and clinical exposure.
                Students receive quality education, practical training and
                guidance from experienced faculty members in a supportive
                learning environment.
              </p>

              <p>
                With well-equipped laboratories, clinical facilities and a
                strong academic foundation, we aim to prepare skilled and
                responsible Ayurvedic healthcare professionals for the future.
              </p>
            </div>

            {/* BUTTON */}

            <div className="mt-7">
              <a
                href="/about"
                className="
                  inline-flex
                  h-[48px]
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#168486]
                  px-7
                  text-[15px]
                  font-semibold
                  !text-white

                  shadow-[0_8px_20px_rgba(22,132,134,0.22)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#116d6f]
                  hover:shadow-[0_12px_25px_rgba(22,132,134,0.28)]
                "
              >
                Read More
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;