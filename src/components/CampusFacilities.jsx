import React from 'react'

const facilities = [
  {
    title: 'General & Laparoscopic Surgery',
    description: 'Precision-driven minimally invasive surgical care.',
    image: '/hero/Laparoscopic.png',
  },
  {
    title: 'Obstetrics & Gynecology',
    description: "Women's Health & Maternity.",
    image: '/hero/Obstetrics.png',
  },
  {
    title: '24×7 Normal Delivery',
    description: 'Safe Normal Delivery Services.',
    image: '/hero/24.png',
  },
  {
    title: 'Infertility Counseling',
    description: 'Fertility Evaluation and Counseling.',
    image: '/hero/Infertility.png',
  },
  {
    title: 'Panchakarma Therapy',
    description: 'Classical Panchakarma Therapy Care.',
    image: '/hero/Panchakarma.png',
  },
  {
    title: 'ICU / NICE',
    description: 'Critical & Neonatal Care.',
    image: '/hero/ICU.png',
  },
  {
    title: 'Ultrasound',
    description: 'Advanced Ultrasound Diagnostic Services.',
    image: '/hero/Ultrasound.png',
  },
  {
    title: 'X-Ray',
    description: 'Digital X-Ray Imaging Services.',
    image: '/hero/X-Ray.png',
  },
  {
    title: 'Pathology Laboratory',
    description: 'Advanced Diagnostic Pathology Services.',
    image: '/hero/Pathology.png',
  },
  {
    title: 'Ophthalmology (Eye)',
    description: 'Comprehensive Eye Care Services.',
    image: '/hero/Ophthalmology.png',
  },
  {
    title: 'ENT Department',
    description: 'Comprehensive ENT Care Services.',
    image: '/hero/ENT.png',
  },
  {
    title: 'ECG',
    description: 'Advanced ECG Diagnostic Services.',
    image: '/hero/ECG.png',
  },
]

const CampusFacilities = () => {
  return (
    <section className="w-full bg-white py-10 md:py-14 lg:py-20">
      <div className="mx-auto max-w-[1750px] px-4 sm:px-6 md:px-8 lg:px-10">

        {/* HEADING */}
        <div className="mb-8 text-center md:mb-10 lg:mb-14">

          <h2 className="text-2xl font-bold text-[#1f2768] sm:text-3xl md:text-4xl">
            Our Campus Facilities
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-xs font-medium uppercase tracking-[1px] text-[#11a545] sm:text-sm md:mt-4 md:text-base md:tracking-[1.5px] lg:text-lg">
            Experience learning in an environment designed to nurture holistic
            education and well-being
          </p>

        </div>

        {/* FACILITY GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
            lg:gap-6
            xl:grid-cols-6
            xl:gap-7
          "
        >

          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="
                group
                overflow-hidden
                rounded-[20px]
                border
                border-[#f2a0a0]
                bg-white
                shadow-[0_3px_12px_rgba(0,0,0,0.10)]
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_24px_rgba(0,0,0,0.16)]
                sm:rounded-[24px]
              "
            >

              {/* IMAGE */}
              <div className="h-[120px] overflow-hidden sm:h-[135px] md:h-[145px]">

                <img
                  src={facility.image}
                  alt={facility.title}
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

              {/* CONTENT */}
              <div className="px-4 py-3 sm:px-5 sm:py-4">

                <h3 className="text-sm font-bold leading-5 text-[#1f2768] sm:text-[15px] md:text-[16px] md:leading-6">
                  {facility.title}
                </h3>

                <p className="mt-1 text-[13px] leading-5 text-[#111827] sm:mt-2 sm:text-[14px] md:text-[15px] md:leading-6">
                  {facility.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default CampusFacilities