import React from 'react'

const departments = [
  {
    title: 'Swasthavritta and Yoga',
    image: '/hero/yoga.png',
  },
  {
    title: 'Kayachikitsa',
    image: '/hero/kaya.png',
  },
  {
    title: 'Rognidan evam Vikruti Vigyan',
    image: '/hero/rognidan.png',
  },
  {
    title: 'Agadtantra evam Vidhi Vaidyaka',
    image: '/departments/agadtantra.jpg',
  },
  {
    title: 'Kaumarbhritya',
    image: '/departments/kaumarbhritya.jpg',
  },
  {
    title: 'Prasuti Tantra evam Striroga',
    image: '/departments/prasuti-striroga.jpg',
  },
  {
    title: 'Shalakya Tantra',
    image: '/departments/shalakya-tantra.jpg',
  },
  {
    title: 'Shalya Tantra',
    image: '/departments/shalya-tantra.jpg',
  },
]

const DepartmentsSection = () => {
  const repeatedDepartments = [
    ...departments,
    ...departments,
  ]

  return (
    <section className="w-full overflow-hidden bg-white py-14 lg:py-16">

      <div className="mx-auto max-w-[1800px] px-4 md:px-6">

        {/* HEADING */}
        <div className="mb-10 text-center">

          <p className="mb-2 text-sm font-medium uppercase tracking-[1.5px] text-[#13a94b]">
            Departments
          </p>

          <h2 className="text-2xl font-bold text-[#1f2768] md:text-3xl lg:text-[34px]">
            General Specialities Departments
          </h2>

        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="relative overflow-hidden">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-white to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-white to-transparent" />

          {/* MOVING TRACK */}
          <div className="flex w-max animate-[departmentScroll_32s_linear_infinite] gap-6">

            {repeatedDepartments.map((department, index) => (
              <a
                key={`${department.title}-${index}`}
                href="/departments"
                className="
                  group
                  block
                  w-[250px]
                  shrink-0
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#f2a0a0]
                  bg-white
                  shadow-[0_3px_10px_rgba(0,0,0,0.10)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_8px_22px_rgba(0,0,0,0.14)]

                  sm:w-[260px]
                "
              >

                {/* IMAGE */}
                <div className="h-[150px] overflow-hidden">

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
                <div className="flex min-h-[80px] items-center px-5 py-4">

                  <h3 className="text-[16px] font-semibold leading-6 text-[#1f2768]">
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