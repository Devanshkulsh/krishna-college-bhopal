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
    <section className="w-full bg-white py-9 sm:py-12 md:py-14 lg:py-20">
      <div className="mx-auto max-w-[1750px] px-4 sm:px-6 md:px-8 lg:px-10">

        {/* HEADING */}
        <div className="mb-7 text-center sm:mb-8 md:mb-10 lg:mb-14">

          <h2 className="text-[26px] font-bold leading-tight text-[#1f2768] sm:text-3xl md:text-4xl">
            Our Campus Facilities
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-[12px] font-medium uppercase leading-6 tracking-[0.8px] text-[#11a545] sm:text-sm md:mt-4 md:text-base md:tracking-[1.5px] lg:text-lg">
            Experience learning in an environment designed to nurture holistic
            education and well-being
          </p>

        </div>

        {/* FACILITY GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
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
              <div className="flex aspect-[3/2] w-full items-center justify-center overflow-hidden bg-[#f7fbfb] sm:aspect-[3/2] lg:h-[230px] lg:aspect-auto xl:h-[170px]">

                <img
                  src={facility.image}
                  alt={facility.title}
                  className="
                    h-full
                    w-full
                    object-contain
                    transition
                    duration-500
                    group-hover:scale-105
                    lg:object-cover
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="px-4 py-4 sm:px-5">

                <h3 className="text-[16px] font-bold leading-6 text-[#1f2768] sm:text-[16px] md:text-[16px] md:leading-6">
                  {facility.title}
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-[#111827] md:text-[15px] md:leading-6">
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
