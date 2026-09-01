import React from 'react'

const recognitions = [
  {
    name: 'NCISM',
    image: '/hero/ncism.png',
    scale: 1,
  },
  {
    name: 'Health Department',
    image: '/hero/health.png',
    scale: 2.15, // second logo zoom
  },
  {
    name: 'University Affiliation',
    image: '/hero/university.png',
    scale: 1,
  },
  {
    name: 'Ministry of AYUSH',
    image: '/hero/ministry.png',
    scale: 1,
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
              {/* SAME OUTER DESIGN FOR ALL */}
              <div
                className="
                  relative
                  flex
                  h-[120px]
                  w-[120px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-white
                  shadow-[0_0_28px_rgba(229,185,48,0.55)]
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_0_35px_rgba(229,185,48,0.75)]

                  sm:h-[150px]
                  sm:w-[150px]

                  md:h-[190px]
                  md:w-[190px]

                  lg:h-[210px]
                  lg:w-[210px]
                "
              >

                {/* LOGO */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-[88%]
                    w-[88%]
                    object-contain
                    transition-transform
                    duration-300
                  "
                  style={{
                    transform: `scale(${item.scale})`,
                  }}
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