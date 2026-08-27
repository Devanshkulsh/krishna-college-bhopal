import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 xl:px-14">

        <div
          className="
            grid gap-5
            lg:grid-cols-[1.05fr_0.78fr_1.35fr]
            xl:gap-7
            items-stretch
          "
        >

          {/* =====================================================
              LEFT - LARGE CAMPUS IMAGE
          ====================================================== */}
          <div className="h-full">
            <div className="h-full min-h-[500px] overflow-hidden border border-gray-200 bg-gray-100 lg:min-h-[650px] xl:min-h-[700px]">

              <img
                src="/hero/campus.png"
                alt="Krishna College Bhopal Campus"
                className="h-full w-full object-cover"
              />

            </div>
          </div>


          {/* =====================================================
              CENTER - TWO STACKED IMAGES
          ====================================================== */}
          <div className="flex h-full flex-col gap-4">

            {/* TOP IMAGE */}
            <div className="min-h-[245px] flex-1 overflow-hidden bg-gray-100 lg:min-h-0">
              <img
                src="/hero/krishnaclg.png"
                alt="Krishna College"
                className="h-full w-full object-cover"
              />
            </div>


            {/* BOTTOM IMAGE */}
            <div className="min-h-[245px] flex-1 overflow-hidden bg-gray-100 lg:min-h-0">
              <img
                src="/hero/BAMS.png"
                alt="BAMS Admission"
                className="h-full w-full object-cover"
              />
            </div>

          </div>


          {/* =====================================================
              RIGHT - CONTENT
          ====================================================== */}
          <div className="flex flex-col justify-center py-3 lg:pl-3 xl:pl-4">

            {/* SMALL TITLE */}
            <p className="mb-4 text-[16px] font-medium uppercase tracking-[0.5px] text-[#00a936] md:text-[18px]">
              Krishna College Group of Institutions
            </p>


            {/* MAIN HEADING */}
            <h2
  className="
    mb-6
    whitespace-nowrap
    text-[30px]
    font-bold
    leading-[1.22]
    text-[#101f62]
    md:text-[36px]
    lg:text-[38px]
    xl:text-[43px]
  "
>
  Welcome To Krishna College Bhopal
</h2>


            {/* DESCRIPTION */}
            <p
              className="
                mb-8
                max-w-[760px]
                text-[15px]
                leading-[1.9]
                text-black
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


            {/* =================================================
                MISSION + OBJECTIVES
            ================================================== */}
            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">

              {/* MISSION */}
              <div>
                <h3 className="mb-3 text-[20px] font-bold text-[#101f62]">
                  Our Mission
                </h3>

                <p className="text-[15px] leading-[1.8] text-black md:text-[16px]">
                  Our mission is to provide an academic environment that
                  promotes and develops the ancient science of Ayurveda,
                  combined with modern clinical learning.
                </p>


                {/* BUTTON */}
                <a
                  href="/about"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-5
                    rounded-full
                    bg-[#ed7500]
                    px-7
                    py-3.5
                    text-[15px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#101f62]
                    md:text-[16px]
                  "
                >
                  College Overview

                  <FaArrowRight className="text-sm" />
                </a>
              </div>


              {/* OBJECTIVES */}
              <div>
                <h3 className="mb-3 text-[20px] font-bold text-[#101f62]">
                  Our Objectives
                </h3>

                <p className="text-[15px] leading-[1.8] text-black md:text-[16px]">
                  We have developed an academic programme that is
                  well-researched, practical and focused on preparing students
                  for successful careers in Ayurvedic healthcare.
                </p>


                {/* BUTTON */}
                <a
                  href="/courses"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-5
                    rounded-full
                    bg-[#ed7500]
                    px-7
                    py-3.5
                    text-[15px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#101f62]
                    md:text-[16px]
                  "
                >
                  Explore Program

                  <FaArrowRight className="text-sm" />
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