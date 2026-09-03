import { ArrowRight } from 'lucide-react'

const overviewCards = [
  {
    title: 'Hospital Details',
    image: '/hero/hospital.png',
    link: '/hospital',
  },
  {
    title: 'Pharmacy Details',
    image: '/hero/PHARMACY.png',
    link: '/pharmacy',
  },
  {
    title: 'College Details',
    image: '/hero/college.png',
    link: '/about',
  },
]

const featureCards = [
  {
    title: 'Build a Successful Ayurvedic Career',
    description:
      'Study BAMS with experienced faculty, structured academics, practical learning and strong clinical exposure.',
    button: 'Apply For Admission',
    link: '/admission',
  },
  {
    title: 'Learn with Experienced Faculty',
    description:
      'Explore focused departmental teaching, guided practical sessions and an academic environment built for Ayurveda education.',
    button: 'Explore Departments',
    link: '/departments',
  },
  {
    title: 'Practice in Modern Learning Facilities',
    description:
      'Develop hands-on understanding through hospital training, laboratories and facilities that support professional growth.',
    button: 'Explore Facilities',
    link: '/facility',
  },
]

const CollegeOverview = () => {
  return (
    <section className="w-full overflow-hidden border-y border-[#E3E6E9] bg-[#EEF1F4] py-10 shadow-[inset_0_8px_20px_rgba(0,0,0,0.02),inset_0_-8px_20px_rgba(0,0,0,0.02)] sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1550px] px-4 sm:px-6 md:px-8 lg:px-12">

        {/* TOP HEADING */}
        <div className="mx-auto mb-8 max-w-[1060px] text-center sm:mb-10 md:mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[1.2px] text-[#168486] md:mb-3 md:text-base">
            Ayurveda & Medical
          </p>

          <h2 className="text-[26px] font-bold leading-tight text-[#162364] sm:text-3xl md:text-4xl lg:text-[42px]">
            Krishna College Bhopal Ayurvedic Medical College & Hospital
          </h2>

          <p className="mx-auto mt-4 max-w-[960px] text-sm leading-7 text-[#334155] sm:text-base sm:leading-8 lg:text-[18px]">
            Krishna College Bhopal Ayurvedic Medical College & Hospital is
            committed to quality Ayurvedic education with traditional
            knowledge, practical learning, clinical exposure and
            hospital-based training.
          </p>
        </div>

        {/* OVERVIEW CARDS */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3 lg:gap-7">
          {overviewCards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_28px_rgba(15,35,60,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,35,60,0.16)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#dce9e9] sm:aspect-[16/11] md:aspect-[4/3] xl:aspect-[16/10]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-[#17225f] sm:text-xl lg:text-[22px]">
                  {card.title}
                </h3>

                <a
                  href={card.link}
                  className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#A3621D] px-5 py-3 text-sm font-semibold !text-white transition duration-300 hover:-translate-y-1 hover:bg-[#17225f] sm:w-auto sm:px-6 sm:text-[15px]"
                >
                  View More
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* SOLID GREEN FEATURE CARDS */}
        <div className="mt-8 grid gap-5 sm:mt-10 md:mt-12 md:grid-cols-3 lg:gap-7">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[260px] flex-col justify-between rounded-2xl bg-[#168486] p-5 text-white shadow-[0_12px_30px_rgba(22,132,134,0.22)] sm:min-h-[250px] sm:p-6 lg:min-h-[285px] lg:p-8"
            >
              <div>
                <h3 className="text-xl font-bold leading-tight sm:text-[22px] lg:text-[25px]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/90 sm:text-[15px] lg:text-[16px]">
                  {card.description}
                </p>
              </div>

              <a
                href={card.link}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#A3621D] px-5 py-3 text-sm font-bold !text-white transition duration-300 hover:-translate-y-1 hover:bg-[#bf6200] sm:w-fit sm:px-6"
              >
                {card.button}
                <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CollegeOverview
