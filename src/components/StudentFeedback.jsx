import React from "react";

import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";

import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "BAMS Student",
    course: "Ayurveda Programme",
    rating: 5,
    review:
      "The college environment and hospital facilities strengthened my confidence in Ayurvedic diagnosis, patient care and practical treatment methods.",
  },
  {
    name: "BAMS Student",
    course: "Clinical Training",
    rating: 5,
    review:
      "Regular academic mentoring, supportive faculty and hands-on hospital exposure have made my learning experience focused and meaningful.",
  },
  {
    name: "BAMS Student",
    course: "Campus Experience",
    rating: 5,
    review:
      "The balance of classroom teaching and practical sessions helps me understand Ayurveda deeply while preparing for real clinical situations.",
  },
  {
    name: "BAMS Student",
    course: "Academic Journey",
    rating: 5,
    review:
      "Faculty guidance, disciplined learning and access to clinical practice create a positive environment for professional growth.",
  },
  {
    name: "BAMS Student",
    course: "Hospital Training",
    rating: 5,
    review:
      "Clinical exposure and interaction with experienced doctors have helped me develop confidence in patient examination and Ayurvedic treatment.",
  },
];

const StudentFeedback = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1550px] px-4 sm:px-6 lg:px-10 xl:px-14">

        {/* HEADING */}
        <div className="mx-auto mb-8 max-w-[900px] text-center md:mb-12">
          <p
            className="
              mb-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[2px]
              text-[#168486]
              sm:text-[12px]
            "
          >
            Our Students Say
          </p>

          <h2
            className="
              text-[28px]
              font-bold
              leading-tight
              text-[#168486]

              sm:text-[34px]
              md:text-[38px]
              lg:text-[42px]
            "
          >
            Student Feedback
            <span className="text-[#A3621D]">
              {" "}
              & Experiences
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[700px]
              text-[13px]
              leading-6
              text-[#4f6666]

              sm:text-[14px]
              md:text-[15px]
            "
          >
            Hear what our students say about their academic journey,
            clinical exposure and campus experience.
          </p>
        </div>

        {/* SLIDER AREA */}
        <div
          className="
            relative
            mx-auto
            max-w-[1450px]
            overflow-hidden
            px-3
            sm:px-5
            lg:px-16
          "
        >
          {/* LEFT ARROW */}
          <button
            type="button"
            aria-label="Previous Testimonial"
            className="
              testimonial-prev
              absolute
              left-[42px]
              top-1/2
              z-40
              hidden
              h-[48px]
              w-[48px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#168486]/20
              bg-white
              text-[#168486]
              shadow-[0_8px_24px_rgba(0,0,0,0.10)]
              transition-all
              duration-300
              hover:bg-[#168486]
              hover:!text-white
              lg:flex
            "
          >
            <FaChevronLeft />
          </button>

          {/* RIGHT ARROW */}
          <button
            type="button"
            aria-label="Next Testimonial"
            className="
              testimonial-next
              absolute
              right-[42px]
              top-1/2
              z-40
              hidden
              h-[48px]
              w-[48px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#168486]/20
              bg-white
              text-[#168486]
              shadow-[0_8px_24px_rgba(0,0,0,0.10)]
              transition-all
              duration-300
              hover:bg-[#168486]
              hover:!text-white
              lg:flex
            "
          >
            <FaChevronRight />
          </button>

          {/* SWIPER */}
          <Swiper
            modules={[
              Autoplay,
              Navigation,
              Pagination,
            ]}
            loop
            centeredSlides
            grabCursor
            speed={700}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 18,
              },

              640: {
                slidesPerView: 1.3,
                spaceBetween: 22,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="
              reference-testimonial-slider
              !overflow-hidden
              !pb-20
              !pt-16
            "
          >
            {testimonials.map((item, index) => (
              <SwiperSlide
                key={`${item.course}-${index}`}
                className="testimonial-slide !h-auto"
              >
                <div className="flex h-full items-center justify-center py-4">
                  <article
                    className="
                      testimonial-card
                      relative
                      mx-auto
                      flex
                      min-h-[310px]
                      w-full
                      max-w-[420px]
                      flex-col
                      items-center
                      justify-center
                      overflow-visible
                      rounded-[14px]
                      border
                      border-[#168486]/15
                      bg-white
                      px-8
                      pb-14
                      pt-10
                      text-center
                      shadow-[0_10px_35px_rgba(0,0,0,0.09)]
                      transition-all
                      duration-500

                      sm:min-h-[325px]
                      sm:px-9

                      lg:min-h-[330px]
                    "
                  >
                    {/* TOP QUOTE */}
                    <div className="mb-5 flex items-center justify-center gap-3">
                      <span className="h-[2px] w-[42px] rounded-full bg-[#168486]/30" />

                      <FaQuoteLeft
                        className="
                          testimonial-top-quote
                          text-[24px]
                          text-[#168486]
                        "
                      />

                      <span className="h-[2px] w-[42px] rounded-full bg-[#168486]/30" />
                    </div>

                    {/* REVIEW */}
                    <p
                      className="
                        testimonial-review
                        max-w-[355px]
                        text-[14px]
                        font-normal
                        leading-[1.95]
                        text-[#3f5555]
                        transition-colors
                        duration-500

                        sm:text-[15px]
                      "
                    >
                      {item.review}
                    </p>

                    {/* STARS */}
                    <div
                      className="
                        testimonial-stars
                        mt-5
                        flex
                        justify-center
                        gap-1
                        text-[#A3621D]
                        transition-colors
                        duration-500
                      "
                    >
                      {Array.from({
                        length: item.rating,
                      }).map((_, starIndex) => (
                        <FaStar
                          key={starIndex}
                          className="text-[13px]"
                        />
                      ))}
                    </div>

                    {/* NAME */}
                    <h3
                      className="
                        testimonial-name
                        mt-5
                        text-[18px]
                        font-bold
                        text-[#168486]
                        transition-colors
                        duration-500

                        sm:text-[19px]
                      "
                    >
                      {item.name}
                    </h3>

                    {/* COURSE */}
                    <p
                      className="
                        testimonial-course
                        mt-1.5
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[1.2px]
                        text-[#A3621D]
                        transition-colors
                        duration-500
                      "
                    >
                      {item.course}
                    </p>

                    {/* BOTTOM STUDENT ICON */}
                    <div
                      className="
                        testimonial-avatar
                        absolute
                        -bottom-[35px]
                        left-1/2
                        z-20
                        flex
                        h-[72px]
                        w-[72px]
                        -translate-x-1/2
                        items-center
                        justify-center
                        rounded-full
                        border-[5px]
                        border-white
                        bg-[#168486]
                        text-white
                        shadow-[0_8px_22px_rgba(0,0,0,0.16)]
                        transition-all
                        duration-500

                        sm:h-[76px]
                        sm:w-[76px]
                      "
                    >
                      <FaUserGraduate className="text-[28px]" />
                    </div>

                    {/* BOTTOM QUOTE */}
                    <FaQuoteRight
                      className="
                        testimonial-bottom-quote
                        absolute
                        bottom-[14px]
                        right-[22px]
                        text-[31px]
                        text-[#168486]/10
                        transition-colors
                        duration-500
                      "
                    />
                  </article>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CUSTOM CSS */}
      <style>
        {`
          /* =========================================
             SWIPER
          ========================================= */

          .reference-testimonial-slider {
            overflow: hidden !important;
          }

          .reference-testimonial-slider .swiper-wrapper {
            align-items: center;
          }

          /* =========================================
             SIDE CARDS
          ========================================= */

          .reference-testimonial-slider .testimonial-slide {
            opacity: 1;
            transform: scale(0.94);
            transition:
              transform 0.5s ease,
              opacity 0.5s ease;
            z-index: 1;
          }

          /* =========================================
             ACTIVE CENTER CARD
          ========================================= */

          .reference-testimonial-slider
          .swiper-slide-active {
            opacity: 1;
            transform: scale(1.045) translateY(-18px);
            z-index: 10;
          }

          .reference-testimonial-slider
          .swiper-slide-active
          .testimonial-card {
            min-height: 355px;

            background: #168486;

            border-color: #168486;

            box-shadow:
              0 24px 60px rgba(22, 132, 134, 0.24);
          }

          /* =========================================
             NORMAL WHITE CARDS
          ========================================= */

          .reference-testimonial-slider
          .testimonial-review {
            color: #3f5555;
          }

          .reference-testimonial-slider
          .testimonial-name {
            color: #168486;
          }

          .reference-testimonial-slider
          .testimonial-course {
            color: #A3621D;
          }

          /* =========================================
             ACTIVE CARD TEXT
          ========================================= */

          .reference-testimonial-slider
          .swiper-slide-active
          .testimonial-review {
            color: rgba(255,255,255,0.94);
          }

          .reference-testimonial-slider
          .swiper-slide-active
          .testimonial-name {
            color: #ffffff;
          }

          .reference-testimonial-slider
          .swiper-slide-active
          .testimonial-course {
            color: #ffffff;
            opacity: 0.85;
          }

          .reference-testimonial-slider
          .swiper-slide-active
          .testimonial-stars {
            color: #ffffff;
          }

          /* =========================================
             TOP QUOTE ACTIVE
          ========================================= */

          .reference-testimonial-slider
          .swiper-slide-active
          .testimonial-top-quote {
            color: #ffffff;
          }

          .reference-testimonial-slider
          .swiper-slide-active
          .testimonial-card
          > div:first-child
          > span {
            background: rgba(255,255,255,0.35);
          }

          /* =========================================
             AVATAR
          ========================================= */

          .reference-testimonial-slider
          .testimonial-avatar {
            background: #168486;
          }

          .reference-testimonial-slider
          .swiper-slide-active
          .testimonial-avatar {
            background: #A3621D;

            transform:
              translateX(-50%)
              scale(1.1);
          }

          /* =========================================
             BOTTOM QUOTE ACTIVE
          ========================================= */

          .reference-testimonial-slider
          .swiper-slide-active
          .testimonial-bottom-quote {
            color: rgba(255,255,255,0.14);
          }

          /* =========================================
             PAGINATION
          ========================================= */

          .reference-testimonial-slider
          .swiper-pagination {
            bottom: 3px !important;
          }

          .reference-testimonial-slider
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;

            margin: 0 5px !important;

            background: #168486;

            opacity: 0.25;

            transition: all 0.3s ease;
          }

          .reference-testimonial-slider
          .swiper-pagination-bullet-active {
            width: 30px;

            border-radius: 20px;

            background: #A3621D;

            opacity: 1;
          }

          /* =========================================
             TABLET
          ========================================= */

          @media (max-width: 1023px) {
            .reference-testimonial-slider
            .testimonial-slide {
              transform: scale(0.96);
            }

            .reference-testimonial-slider
            .swiper-slide-active {
              transform: scale(1.02) translateY(-8px);
            }
          }

          /* =========================================
             MOBILE
          ========================================= */

          @media (max-width: 767px) {
            .reference-testimonial-slider {
              padding-top: 25px !important;
            }

            .reference-testimonial-slider
            .testimonial-slide {
              transform: scale(1);
              opacity: 1;
            }

            .reference-testimonial-slider
            .swiper-slide-active {
              transform: scale(1);
            }

            .reference-testimonial-slider
            .swiper-slide-active
            .testimonial-card {
              min-height: 320px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default StudentFeedback;