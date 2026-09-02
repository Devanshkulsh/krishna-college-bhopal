import { FaArrowRight, FaBookOpen, FaClock, FaGraduationCap, FaUserMd } from 'react-icons/fa'

const courseDetails = [
  {
    label: 'Course',
    value: 'Bachelor of Ayurvedic Medicine and Surgery',
    icon: <FaGraduationCap />,
  },
  {
    label: 'Duration',
    value: '4.5 Years + 1 Year Internship',
    icon: <FaClock />,
  },
  {
    label: 'Eligibility',
    value: '10+2 with Physics, Chemistry and Biology',
    icon: <FaBookOpen />,
  },
  {
    label: 'Training',
    value: 'Classroom Learning + Clinical Exposure',
    icon: <FaUserMd />,
  },
]

const courseHighlights = [
  'Ayurvedic medical education with practical hospital-based training',
  'Experienced faculty guidance across core BAMS subjects',
  'Clinical exposure through OPD, IPD and departmental learning',
  'Structured academic support for professional growth',
]

const CoursesOffered = () => {
  return (
    <section className="w-full overflow-hidden border-y border-[#E3E6E9] bg-[#EEF1F4] py-10 shadow-[inset_0_8px_20px_rgba(0,0,0,0.02),inset_0_-8px_20px_rgba(0,0,0,0.02)] sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8 lg:px-12">

        {/* TOP HEADING */}
        <div className="mx-auto mb-8 max-w-[920px] text-center sm:mb-10 md:mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[1.5px] text-[#168486] md:mb-3 md:text-base">
            Courses Offered
          </p>

          <h2 className="text-2xl font-bold leading-tight text-[#1f2768] sm:text-3xl md:text-4xl lg:text-[42px]">
            Bachelor of Ayurvedic Medicine and Surgery
          </h2>

          <p className="mx-auto mt-4 max-w-[780px] text-sm leading-7 text-[#44515f] sm:text-base md:text-[17px] md:leading-8">
            Krishna College Bhopal currently offers one undergraduate programme,
            BAMS, designed to build a strong foundation in Ayurveda, modern
            medical understanding, and practical clinical learning.
          </p>
        </div>

        {/* COURSE CARD */}
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_rgba(22,132,134,0.14)] lg:grid-cols-[0.95fr_1.05fr]">

          {/* IMAGE */}
          <div className="relative min-h-[240px] overflow-hidden sm:min-h-[320px] lg:min-h-full">
            <img
              src="/bams.png"
              alt="BAMS course at Krishna College Bhopal"
              className="h-full min-h-[240px] w-full object-cover sm:min-h-[320px] lg:absolute lg:inset-0"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123536]/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#123536]/35 lg:via-transparent lg:to-transparent" />

            <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-4 py-3 shadow-md sm:bottom-6 sm:left-6">
              <p className="text-xs font-semibold uppercase tracking-[1px] text-[#168486]">
                Undergraduate Course
              </p>

              <p className="mt-1 text-xl font-bold text-[#1f2768] sm:text-2xl">
                BAMS
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-5 sm:p-7 md:p-9 lg:p-10">
            <h3 className="text-xl font-bold leading-tight text-[#1f2768] sm:text-2xl md:text-[30px]">
              BAMS Course Details
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#44515f] sm:text-base sm:leading-8">
              The BAMS programme prepares students for a career in Ayurvedic
              healthcare through academic study, practical sessions, hospital
              training, and a compulsory internship.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {courseDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex gap-3 rounded-xl border border-[#168486]/10 bg-[#f7fbfb] p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#168486] text-white">
                    {detail.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.8px] text-[#168486]">
                      {detail.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-6 text-[#1f2768] sm:text-[15px]">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-base font-bold text-[#1f2768] sm:text-lg">
                Course Highlights
              </h4>

              <div className="mt-3 grid gap-2.5">
                {courseHighlights.map((highlight) => (
                  <p
                    key={highlight}
                    className="flex gap-2 text-sm leading-6 text-[#44515f] sm:text-base"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#A3621D]" />
                    <span>{highlight}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/courses/bams"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#A3621D] px-5 py-3 text-sm font-bold !text-white transition hover:-translate-y-1 hover:bg-[#bf6200] sm:w-auto sm:px-6 sm:text-base"
              >
                Read More
                <FaArrowRight className="text-sm" />
              </a>

              <a
                href="/admission/course-fees"
                className="inline-flex items-center justify-center rounded-lg border border-[#168486] px-5 py-3 text-sm font-bold text-[#168486] transition hover:-translate-y-1 hover:bg-[#168486] hover:text-white sm:w-auto sm:px-6 sm:text-base"
              >
                Fee Structure
              </a>

              <a
                href="/academics/syllabus"
                className="inline-flex items-center justify-center rounded-lg border border-[#1f2768] px-5 py-3 text-sm font-bold text-[#1f2768] transition hover:-translate-y-1 hover:bg-[#1f2768] hover:text-white sm:w-auto sm:px-6 sm:text-base"
              >
                Syllabus
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default CoursesOffered
