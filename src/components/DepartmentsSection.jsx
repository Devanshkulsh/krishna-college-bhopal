import React from 'react'

const departments = [
  {
    title: 'Swasthavritta and Yoga',
    image: '/hero/Swasthavritta and Yoga.png',
  },
  {
    title: 'Kayachikitsa',
    image: '/hero/Kayachikitsa.png',
  },
  {
    title: 'Rognidan evam Vikruti Vigyan',
    image: '/hero/Vikruti.png',
  },
  {
    title: 'Agadtantra evam Vidhi Vaidyaka',
    image: '/hero/vidhi.png',
  },
  {
    title: 'Kaumarbhritya',
    image: '/hero/Kaumarbhritya.png',
  },
  {
    title: 'Prasuti Tantra evam Striroga',
    image: '/hero/Prasuti.png',
  },
  {
    title: 'Shalakya Tantra',
    image: '/hero/Shalakya.png',
  },
  {
    title: 'Shalya Tantra',
    image: '/hero/salya.png',
  },
]

const DepartmentsSection = () => {
  const repeatedDepartments = [
    ...departments,
    ...departments,
  ]

  return (
    <section className="w-full overflow-hidden bg-white py-10 md:py-14 lg:py-16">

      <div className="mx-auto max-w-[1800px] px-4 md:px-6">

        {/* HEADING */}
        <div className="mb-8 text-center md:mb-10">

          <p className="mb-2 text-xs font-medium uppercase tracking-[1.5px] text-[#13a94b] md:text-sm">
            Departments
          </p>

          <h2 className="text-xl font-bold text-[#1f2768] sm:text-2xl md:text-3xl lg:text-[34px]">
            General Specialities Departments
          </h2>

        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="relative overflow-hidden">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-8 bg-gradient-to-r from-white to-transparent md:w-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-8 bg-gradient-to-l from-white to-transparent md:w-10" />

          {/* MOVING TRACK */}
          <div className="flex w-max animate-[departmentScroll_32s_linear_infinite] gap-4 md:gap-6">

            {repeatedDepartments.map((department, index) => (
              <a
                key={`${department.title}-${index}`}
                href="/departments"
                className="
                  group
                  block
                  w-[200px]
                  shrink-0
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#f2a0a0]
                  bg-white
                  shadow-[0_3px_10px_rgba(0,0,0,0.10)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_8px_22px_rgba(0,0,0,0.14)]
                  sm:w-[220px]
                  md:w-[250px]
                  lg:w-[260px]
                "
              >

                {/* IMAGE */}
                <div className="h-[120px] overflow-hidden sm:h-[140px] md:h-[150px]">

                  <img
                    src={department.image}
                    alt={department.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                  />

                </div>

                {/* TITLE */}
                <div className="flex min-h-[70px] items-center px-4 py-3 md:px-5 md:py-4">

                  <h3 className="text-sm font-semibold leading-5 text-[#1f2768] sm:text-[15px] md:text-[16px] md:leading-6">
                    {department.title}
                  </h3>

                </div>

              </a>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default DepartmentsSection