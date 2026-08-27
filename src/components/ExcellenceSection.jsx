import React from 'react'
import {
  FaArrowRight,
  FaHeadset,
} from 'react-icons/fa'

const ExcellenceSection = () => {
  return (
    <section className="w-full bg-white py-10 lg:py-14">

      <div className="mx-auto max-w-[1900px] px-4">

        <div className="relative overflow-hidden">

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
              min-h-[540px]
              max-w-[1450px]
              flex-col
              items-center
              justify-center
              px-5
              py-16
              text-center
              text-white
              md:px-10
              lg:min-h-[560px]
            "
          >

            {/* SMALL HEADING */}
            <p
              className="
                mb-5
                text-base
                font-medium
                uppercase
                tracking-[1px]
                md:text-xl
              "
            >
              Empowering Students, Nurturing Wellness
            </p>

            {/* MAIN HEADING */}
            <h2
              className="
                max-w-[1100px]
                text-3xl
                font-bold
                leading-tight
                md:text-4xl
                lg:text-[42px]
              "
            >
              We Provide Excellence in Ayurvedic Education & Healthcare
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-[1250px]
                text-base
                leading-8
                text-white/95
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
                mt-9
                flex
                items-center
                justify-center
                gap-4
                text-white
                transition
                hover:text-[#e99a20]
              "
            >

              <FaHeadset className="text-[38px] text-[#ff6565] md:text-[46px]" />

              <span
                className="
                  text-3xl
                  font-medium
                  tracking-[1px]
                  md:text-4xl
                  lg:text-[48px]
                "
              >
                +91-
              </span>

            </a>

            {/* BUTTON */}
            <a
              href="/about"
              className="
                mt-7
                inline-flex
                items-center
                gap-4
                rounded-xl
                bg-[#e98608]
                px-7
                py-4
                text-base
                font-bold
                text-white
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#c96f00]
              "
            >
              Explore Our College & Hospital

              <FaArrowRight />
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ExcellenceSection