import { FaArrowRight, FaQuoteLeft, FaStar } from 'react-icons/fa'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'BAMS Student',
    course: 'Ayurveda Programme',
    rating: 5,
    review:
      'The college environment and hospital facilities strengthened my confidence in Ayurvedic diagnosis, patient care, and practical treatment methods.',
  },
  {
    name: 'BAMS Student',
    course: 'Clinical Training',
    rating: 5,
    review:
      'Regular academic mentoring, supportive faculty, and hands-on hospital exposure have made my learning experience focused and meaningful.',
  },
  {
    name: 'BAMS Student',
    course: 'Campus Experience',
    rating: 5,
    review:
      'The balance of classroom teaching and practical sessions helps me understand Ayurveda deeply while preparing for real clinical situations.',
  },
  {
    name: 'BAMS Student',
    course: 'Academic Journey',
    rating: 5,
    review:
      'Faculty guidance, disciplined learning, and access to clinical practice create a positive environment for professional growth.',
  },
]

const loopingTestimonials = [...testimonials, ...testimonials, ...testimonials]

const StudentFeedback = () => {
  return (
    <section className="w-full overflow-hidden bg-[#f7fbfb] py-9 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10">

        {/* TOP */}
        <div className="mx-auto mb-7 flex max-w-[900px] flex-col items-center text-center sm:mb-10 md:mb-12">
          <h2 className="max-w-[340px] text-[26px] font-bold leading-tight text-[#1f2768] sm:max-w-none sm:text-3xl lg:text-4xl">
            Student Feedback & Experiences
          </h2>
        </div>

        {/* TESTIMONIAL SLIDER */}
        <div className="student-feedback-slider mx-auto w-full max-w-[980px]">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            centeredSlides
            grabCursor
            loop
            loopAdditionalSlides={testimonials.length}
            speed={700}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 34,
              },
            }}
            className="pb-14 sm:pb-16"
          >
            {loopingTestimonials.map((item, index) => (
              <SwiperSlide key={`${item.course}-${index}`}>
                <article
                  className="
                    mx-auto
                    flex
                    min-h-[260px]
                    max-w-[760px]
                    flex-col
                    justify-between
                    rounded-xl
                    border
                    border-[#168486]/10
                    bg-white
                    px-4
                    py-5
                    text-center
                    shadow-[0_18px_50px_rgba(22,132,134,0.16)]
                    sm:min-h-[320px]
                    sm:rounded-2xl
                    sm:px-7
                    sm:p-7
                    md:p-9
                  "
                >
                  <div>
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#168486]/10 text-[#168486] sm:h-14 sm:w-14">
                      <FaQuoteLeft className="text-lg sm:text-2xl" />
                    </div>

                    <div className="mt-4 flex justify-center gap-1 text-[#ffba00] sm:mt-6">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <FaStar key={index} className="text-sm sm:text-lg" />
                      ))}
                    </div>

                    <p className="mx-auto mt-4 max-w-[640px] text-[14px] leading-7 text-gray-700 sm:mt-5 sm:text-[17px] sm:leading-8 md:text-lg md:leading-9">
                      {item.review}
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-7">
                    <h3 className="text-base font-bold text-[#1f2768] sm:text-xl">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-[13px] font-medium text-[#168486] sm:text-base">
                      {item.course}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-6 flex justify-center sm:mt-8">
          <a
            href="/student-feedback"
            className="
              inline-flex
              items-center
              gap-2.5
              rounded-lg
              bg-[#A3621D]
              px-4
              py-2.5
              text-[13px]
              font-bold
              !text-white
              transition
              hover:-translate-y-1
              hover:bg-[#bf6200]
              sm:px-6
              sm:py-3
              sm:text-base
            "
          >
            View All Feedback
            <FaArrowRight className="text-sm sm:text-base" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default StudentFeedback
