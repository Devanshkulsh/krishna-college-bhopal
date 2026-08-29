import React from 'react'
import {
  FaArrowRight,
  FaAward,
  FaGraduationCap,
  FaHandshake,
  FaStethoscope,
} from 'react-icons/fa'

const features = [
  {
    title: 'Quality Education',
    description: 'NCISM recognized curriculum',
    icon: FaAward,
  },
  {
    title: 'Herbal Garden',
    description: 'Collaborations with leading Ayurvedic institutions',
    icon: FaHandshake,
  },
  {
    title: 'Clinical Exposure',
    description: 'Hands-on training in hospital environment',
    icon: FaStethoscope,
  },
  {
    title: 'Expert Faculty',
    description: 'Experienced and dedicated teaching professionals',
    icon: FaGraduationCap,
  },
]

const RecognitionAffiliations = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1750px] px-4 md:px-8 lg:px-10">

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">

          {/* LEFT CONTENT */}
          <div className="py-2 lg:py-8">

            <h2 className="text-3xl font-bold leading-tight text-[#1f2768] md:text-4xl lg:text-5xl">
              Our Recognition & Affiliations
            </h2>

            <p className="mt-5 max-w-[860px] text-sm leading-7 text-gray-800 md:mt-7 md:text-base md:leading-8 lg:text-lg">
              Krishna College Bhopal Ayurvedic Medical College & Hospital is
              committed to providing quality Ayurvedic education through
              recognized academic standards, practical learning, and modern
              healthcare exposure.
            </p>

            {/* BULLETS */}
            <ul className="mt-5 space-y-2 text-sm leading-7 text-gray-900 md:mt-7 md:text-[17px]">

              <li className="list-disc">
                Approved by the{' '}
                <span className="font-bold text-[#ff6464]">
                  National Commission for Indian System of Medicine (NCISM)
                </span>
              </li>

              <li className="list-disc">
                Recognized under the{' '}
                <span className="font-bold text-[#ff6464]">
                  Ministry of AYUSH, Government of India
                </span>
              </li>

              <li className="list-disc">
                Recognized by the{' '}
                <span className="font-bold text-[#ff6464]">
                  Health Department
                </span>
              </li>

              <li className="list-disc">
                Affiliated with a recognized university for Ayurvedic education
              </li>

              <li className="list-disc">
                Equipped with modern laboratories, herbal learning facilities,
                and classrooms for practical education
              </li>

              <li className="list-disc">
                Experienced faculty focused on holistic education and
                professional excellence
              </li>

            </ul>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-5">

              <a
                href="/admission"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#e98608]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:-translate-y-1
                  hover:bg-[#c96f00]
                  md:px-7
                  md:py-3.5
                  md:text-base
                "
              >
                Admission Now
                <FaArrowRight className="text-sm md:text-base" />
              </a>

              <a
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#e98608]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:-translate-y-1
                  hover:bg-[#c96f00]
                  md:px-7
                  md:py-3.5
                  md:text-base
                "
              >
                Contact Us
                <FaArrowRight className="text-sm md:text-base" />
              </a>

            </div>

          </div>

          {/* RIGHT VISUAL AREA */}
          <div className="relative overflow-hidden rounded-lg lg:rounded-none">

            {/* BACKGROUND IMAGE */}
            <img
              src="/hero/campus.png"
              alt="Krishna College Campus"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* SOFT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#8eb4f0]/55 via-white/40 to-white/80" />

            {/* CARDS */}
            <div className="relative z-10 grid min-h-[500px] grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:min-h-[600px] md:gap-6 md:p-5 lg:min-h-[650px] lg:p-7">

              {features.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="
                    flex
                    min-h-[200px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[20px]
                    border
                    border-[#cfd5e3]
                    bg-white/95
                    px-4
                    py-6
                    text-center
                    shadow-[0_3px_12px_rgba(31,39,104,0.18)]
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_10px_25px_rgba(31,39,104,0.22)]
                    sm:min-h-[220px]
                    md:px-6
                    md:py-8
                  "
                >

                  {/* ICON CIRCLE */}
                  <div className="mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#fff0f0] md:mb-6 md:h-[92px] md:w-[92px]">
                    <Icon className="text-2xl text-[#ff6464] md:text-[34px]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1f2768] md:text-2xl">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-800 md:mt-3 md:text-base md:leading-7">
                    {description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default RecognitionAffiliations