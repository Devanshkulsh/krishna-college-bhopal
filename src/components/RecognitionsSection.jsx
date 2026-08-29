import React from 'react'

const recognitions = [
  {
    name: 'NCISM',
    image: '/hero/ncism.png',
  },
  {
    name: 'Health Department',
    image: '/hero/health.png',
  },
  {
    name: 'University Affiliation',
    image: '/hero/university.png',
  },
  {
    name: 'Ministry of AYUSH',
    image: '/hero/ministry.png',
  },
]

const RecognitionsSection = () => {
  return (
    <section className="w-full bg-[#f7f9fb] py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8 lg:px-12">

        {/* HEADING */}
        <div className="mb-8 text-center md:mb-14">
          <h2 className="text-2xl font-extrabold uppercase text-[#13233d] md:text-3xl lg:text-4xl">
            Our Recognitions
          </h2>
        </div>

        {/* LOGOS */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:gap-12">

          {recognitions.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-center"
            >
              <div
                className="
                  flex
                  h-[120px]
                  w-[120px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  p-3
                  shadow-[0_0_28px_rgba(229,185,48,0.55)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_35px_rgba(229,185,48,0.75)]

                  sm:h-[150px]
                  sm:w-[150px]
                  sm:p-4

                  md:h-[190px]
                  md:w-[190px]

                  lg:h-[210px]
                  lg:w-[210px]
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default RecognitionsSection