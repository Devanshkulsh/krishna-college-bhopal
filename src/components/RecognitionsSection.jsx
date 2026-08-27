import React from 'react'

const recognitions = [
  {
    name: 'NCISM',
    image: '/recognitions/ncism.png',
  },
  {
    name: 'Health Department',
    image: '/recognitions/health-department.png',
  },
  {
    name: 'University Affiliation',
    image: '/recognitions/university.png',
  },
  {
    name: 'Ministry of AYUSH',
    image: '/recognitions/ayush.png',
  },
]

const RecognitionsSection = () => {
  return (
    <section className="w-full bg-[#f7f9fb] py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">

        {/* HEADING */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold uppercase text-[#13233d] md:text-4xl">
            Our Recognitions
          </h2>
        </div>

        {/* LOGOS */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">

          {recognitions.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-center"
            >
              <div
                className="
                  flex
                  h-[190px]
                  w-[190px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  p-4
                  shadow-[0_0_28px_rgba(229,185,48,0.55)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_35px_rgba(229,185,48,0.75)]

                  md:h-[210px]
                  md:w-[210px]
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