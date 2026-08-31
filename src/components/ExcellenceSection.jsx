import React from 'react'
import {
  FaArrowRight,
  FaHeadset,
} from 'react-icons/fa'

const ExcellenceSection = () => {
  return (
    <section className="w-full bg-white py-6 md:py-10 lg:py-14">

      <div className="mx-auto max-w-[1900px] px-3 sm:px-4">

        <div className="relative overflow-hidden rounded-lg">

          {/* BACKGROUND IMAGE */}
          <img
            src="/home/excellence-bg.jpg"
            alt="Krishna College Bhopal"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-[#168486]/85" />

          {/* OPTIONAL GREEN TINT */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2544]/45 via-[#0a5547]/20 to-[#10194f]/55" />

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[400px]
              max-w-[1450px]
              flex-col
              items-center
              justify-center
              px-4
              py-10
              text-center
              text-white
              sm:px-5
              sm:py-12
              md:min-h-[480px]
              md:px-8
              md:py-14
              lg:min-h-[540px]
              lg:px-10
              lg:py-16
            "
          >

            {/* SMALL HEADING */}
            <p
              className="
                mb-3
                text-xs
                font-medium
                uppercase
                tracking-[1px]
                sm:text-sm
                md:mb-5
                md:text-base
                lg:text-xl
              "
            >
              Empowering Students, Nurturing Wellness
            </p>

            {/* MAIN HEADING */}
            <h2
              className="
                max-w-[1100px]
                text-2xl
                font-bold
                leading-tight
                sm:text-3xl
                md:text-4xl
                lg:text-[42px]
              "
            >
              We Provide Excellence in Ayurvedic Education & Healthcare
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-4
                max-w-[1250px]
                text-sm
                leading-7
                text-white/95
                sm:text-base
                sm:leading-8
                md:mt-6
                md:text-lg
                lg:text-[20px]
                lg:leading-9
              "
            >
              At Krishna College Bhopal Ayurvedic Medical College & Hospital,
              we are committed to blending ancient Ayurvedic wisdom with
              modern medical practices. With well-equipped laboratories,
              herbal learning, clinical exposure, and experienced faculty,
              we aim to provide quality education while promoting holistic
              health and wellness.
            </p>

            {/* PHONE */}
            <a
              href="tel:+919031081170"
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-3
                text-white
                transition
                hover:text-[#e99a20]
                sm:gap-4
                md:mt-9
              "
            >

              <FaHeadset className="text-3xl text-[#ff6565] sm:text-[34px] md:text-[38px] lg:text-[46px]" />

              <span
                className="
                  text-2xl
                  font-medium
                  tracking-[1px]
                  sm:text-3xl
                  md:text-4xl
                  lg:text-[48px]
                "
              >
                +91-6262180303 
              </span>

            </a>

            {/* BUTTON */}
            <a
              href="/about"
              className="
                mt-6
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-[#A3621D]
                px-5
                py-3
                text-sm
                font-bold
                text-white
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#c96f00]
                sm:mt-7
                sm:px-6
                sm:py-3.5
                sm:text-base
                md:gap-4
                md:px-7
                md:py-4
              "
            >
              Explore Our College & Hospital

              <FaArrowRight className="text-sm sm:text-base" />
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ExcellenceSection