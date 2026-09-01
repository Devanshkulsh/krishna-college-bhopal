import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-6 md:py-8 lg:py-12">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 xl:px-14">

        <div
          className="
            grid
            items-stretch
            gap-4
            lg:grid-cols-[1.05fr_0.78fr_1.35fr]
            xl:gap-7
          "
        >

          {/* ==========================================
              LEFT - LARGE CAMPUS IMAGE
          ========================================== */}
          <div className="h-full">
            <div
              className="
                h-full
                min-h-[280px]
                overflow-hidden
                border
                border-gray-200
                bg-gray-100
                sm:min-h-[350px]
                md:min-h-[400px]
                lg:min-h-[650px]
                xl:min-h-[700px]
              "
            >
              <img
                src="/hero/campus.png"
                alt="Krishna College Bhopal Campus"
                className="h-full w-full object-cover"
              />
            </div>
          </div>


          {/* ==========================================
              CENTER - TWO STACKED IMAGES
          ========================================== */}
          <div className="flex h-full flex-col gap-3 sm:gap-4">

            {/* TOP IMAGE */}
            <div
              className="
                min-h-[160px]
                flex-1
                overflow-hidden
                bg-gray-100
                sm:min-h-[200px]
                md:min-h-[240px]
                lg:min-h-0
              "
            >
              <img
                src="/hero/krishnaclg.png"
                alt="Krishna College"
                className="h-full w-full object-cover"
              />
            </div>

            {/* BOTTOM IMAGE */}
            <div
              className="
                min-h-[160px]
                flex-1
                overflow-hidden
                bg-gray-100
                sm:min-h-[200px]
                md:min-h-[240px]
                lg:min-h-0
              "
            >
              <img
                src="/hero/BAMS.png"
                alt="BAMS Admission"
                className="h-full w-full object-cover"
              />
            </div>

          </div>


          {/* ==========================================
              RIGHT - CONTENT
          ========================================== */}
          <div className="flex flex-col justify-center py-4 lg:pl-3 xl:pl-4">

            {/* SMALL TITLE */}
            <p
              className="
                mb-3
                text-[13px]
                font-medium
                uppercase
                tracking-[0.5px]
                text-[#00a936]
                sm:text-[14px]
                md:mb-4
                md:text-[16px]
                lg:text-[18px]
              "
            >
              Krishna College Group of Institutions
            </p>


            {/* MAIN HEADING */}
            <h2
              className="
                mb-4
                break-words
                text-[24px]
                font-bold
                leading-[1.25]
                text-[#101f62]
                sm:text-[28px]
                md:mb-6
                md:text-[32px]
                lg:text-[38px]
                xl:text-[43px]
              "
            >
              Welcome To SHRI KRISHNA AYURVEDIC HOSPITAL
            </h2>


            {/* DESCRIPTION */}
            <p
              className="
                mb-6
                max-w-[760px]
                text-[14px]
                leading-[1.8]
                text-black
                sm:text-[15px]
                md:mb-8
                md:text-[16px]
                lg:text-[17px]
                xl:text-[18px]
              "
            >
              Krishna College Bhopal is committed to providing quality
              Ayurvedic education with a strong foundation in traditional
              knowledge, practical learning and clinical exposure. Our
              institution focuses on developing skilled healthcare
              professionals through academic excellence, clinical experience
              and a student-centred learning environment.
            </p>


            {/* ==========================================
                MISSION + OBJECTIVES
            ========================================== */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">

              {/* ========================================
                  MISSION
              ======================================== */}
              <div>

                <h3
                  className="
                    mb-2
                    text-[18px]
                    font-bold
                    text-[#101f62]
                    sm:text-[19px]
                    md:mb-3
                    md:text-[20px]
                  "
                >
                  Our Mission
                </h3>

                <p
                  className="
                    text-[14px]
                    leading-[1.7]
                    text-black
                    sm:text-[15px]
                    md:text-[16px]
                    md:leading-[1.8]
                  "
                >
                  Our mission is to provide an academic environment that
                  promotes and develops the ancient science of Ayurveda,
                  combined with modern clinical learning.
                </p>


                {/* MISSION BUTTON */}
                <a
                  href="/about"
                  style={{ color: "#ffffff" }}
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-4
                    rounded-full
                    bg-[#A3621D]
                    px-5
                    py-3
                    text-[14px]
                    font-semibold
                    !text-white
                    transition-all
                    duration-300

                    hover:bg-[#101f62]
                    hover:!text-white
                    hover:shadow-lg

                    sm:px-6
                    sm:py-3.5
                    sm:text-[15px]

                    md:mt-7
                    md:gap-5
                    md:px-7
                    md:text-[16px]
                  "
                >
                  <span className="!text-white">
                    College Overview
                  </span>

                  <FaArrowRight className="text-xs !text-white sm:text-sm" />
                </a>

              </div>


              {/* ========================================
                  OBJECTIVES
              ======================================== */}
              <div>

                <h3
                  className="
                    mb-2
                    text-[18px]
                    font-bold
                    text-[#101f62]
                    sm:text-[19px]
                    md:mb-3
                    md:text-[20px]
                  "
                >
                  Our Objectives
                </h3>

                <p
                  className="
                    text-[14px]
                    leading-[1.7]
                    text-black
                    sm:text-[15px]
                    md:text-[16px]
                    md:leading-[1.8]
                  "
                >
                  We have developed an academic programme that is
                  well-researched, practical and focused on preparing students
                  for successful careers in Ayurvedic healthcare.
                </p>


                {/* OBJECTIVES BUTTON */}
                <a
                  href="/courses"
                  style={{ color: "#ffffff" }}
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-4
                    rounded-full
                    bg-[#A3621D]
                    px-5
                    py-3
                    text-[14px]
                    font-semibold
                    !text-white
                    transition-all
                    duration-300

                    hover:bg-[#101f62]
                    hover:!text-white
                    hover:shadow-lg

                    sm:px-6
                    sm:py-3.5
                    sm:text-[15px]

                    md:mt-7
                    md:gap-5
                    md:px-7
                    md:text-[16px]
                  "
                >
                  <span className="!text-white">
                    Explore Program
                  </span>

                  <FaArrowRight className="text-xs !text-white sm:text-sm" />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;