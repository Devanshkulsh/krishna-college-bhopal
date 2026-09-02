import React from "react";

const AboutSection = () => {
  return (
    <section className="font-poppins w-full bg-[#FFFFFF] py-10 md:py-14 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* =========================
              LEFT IMAGE AREA
          ========================== */}
          <div className="relative flex min-h-[420px] items-center justify-center md:min-h-[520px] lg:min-h-[600px]">

            {/* BIG LIGHT CIRCLE */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border-[34px]
                border-[#edf2ff]

                sm:h-[380px]
                sm:w-[380px]

                md:h-[440px]
                md:w-[440px]

                lg:h-[500px]
                lg:w-[500px]
              "
            />

            {/* GREEN SHAPE */}
            <div
              className="
                absolute
                left-[3%]
                top-[31%]
                h-[230px]
                w-[150px]
                rotate-[8deg]
                rounded-tl-[120px]
                rounded-br-[120px]
                bg-[#168486]

                sm:h-[280px]
                sm:w-[180px]

                md:left-[5%]
                md:h-[330px]
                md:w-[210px]

                lg:h-[360px]
                lg:w-[230px]
              "
            />

            {/* BROWN HALF CIRCLE */}
            <div
              className="
                absolute
                bottom-[6%]
                left-[4%]
                h-[68px]
                w-[135px]
                rounded-t-full
                bg-[#A3621D]

                sm:h-[80px]
                sm:w-[160px]

                md:left-[6%]
                md:h-[92px]
                md:w-[185px]
              "
            />

            {/* GIRL IMAGE */}
            <img
              src="/hero/banner1.png"
              alt="Shri Krishna Ayurvedic Hospital"
              className="
                relative
                z-10
                h-[390px]
                w-auto
                object-contain

                sm:h-[470px]
                md:h-[560px]
                lg:h-[610px]
              "
            />
          </div>

          {/* =========================
              RIGHT CONTENT
          ========================== */}
          <div className="lg:pr-4">

            {/* MAIN HEADING */}
            <h2
              className="
                text-[32px]
                font-bold
                leading-[1.2]
                tracking-[-0.5px]
                text-[#162364]

                sm:text-[38px]
                md:text-[44px]
                lg:text-[48px]
              "
            >
              Welcome To Shri Krishna
            </h2>

            {/* BROWN LINE */}
            <div className="mt-6 h-[2px] w-[155px] bg-[#A3621D]" />

            {/* DESCRIPTION */}
            <div
              className="
                mt-8
                max-w-[760px]
                space-y-7
                text-[15px]
                font-normal
                leading-[1.85]
                tracking-[-0.1px]
                text-[#111111]

                sm:text-[16px]
                md:text-[17px]
                lg:text-[17px]
              "
            >
              <p>
                Welcome to Shri Krishna Ayurvedic Hospital and College,
                Chhatarpur — an institution committed to excellence in
                Ayurvedic education, healthcare and holistic wellness.
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;