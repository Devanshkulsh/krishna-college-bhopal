import React from 'react'
import { FaArrowRight, FaStar } from 'react-icons/fa'

const feedbacks = [
  {
    type: 'video',
    video: '/feedback/student-1.mp4',
  },
  {
    type: 'review',
    name: '',
    course: 'BAMS Student',
    rating: 5,
    review:
      'The college environment and hospital facilities strengthened my skills in Ayurvedic diagnosis and treatment.',
  },
  {
    type: 'video',
    video: '/feedback/student-2.mp4',
  },
  {
    type: 'review',
    name: '',
    course: 'BAMS Student',
    rating: 5,
    review:
      'Studying BAMS here, I gain consistent academic mentoring, hands-on hospital training, and supportive faculty.',
  },
]

const StudentFeedback = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1750px] px-4 md:px-8 lg:px-10">

        {/* TOP */}
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
          
          <h2 className="text-2xl font-bold text-[#1f2768] md:text-3xl lg:text-4xl">
            Student Feedback & Experiences
          </h2>

          <a
            href="/student-feedback"
            className="
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-xl
              bg-[#A3621D]
              px-5
              py-2.5
              text-sm
              font-bold
              !text-white
              transition
              hover:-translate-y-1
              hover:bg-[#bf6200]
              md:px-7
              md:py-3.5
              md:text-base
            "
          >
            View All Feedback
            <FaArrowRight className="text-sm md:text-base" />
          </a>

        </div>

        {/* FEEDBACK GRID */}
        <div className="grid gap-5 md:gap-7 md:grid-cols-2 xl:grid-cols-4">

          {feedbacks.map((item, index) => {

            if (item.type === 'video') {
              return (
                <div
                  key={index}
                  className="
                    overflow-hidden
                    rounded-[26px]
                    bg-white
                    p-2
                    shadow-[0_8px_28px_rgba(255,120,120,0.18)]
                    md:p-3
                  "
                >
                  <div className="overflow-hidden rounded-[18px] bg-black">
                    <video
                      controls
                      preload="metadata"
                      className="h-[200px] w-full object-cover md:h-[280px] lg:h-[325px]"
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )
            }

            return (
              <div
                key={index}
                className="
                  flex
                  min-h-[280px]
                  flex-col
                  rounded-[26px]
                  bg-white
                  p-5
                  shadow-[0_8px_28px_rgba(255,120,120,0.18)]
                  md:min-h-[350px]
                  md:p-8
                "
              >

                <h3 className="text-xl font-bold text-[#1f2768] md:text-2xl">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500 md:text-base">
                  {item.course}
                </p>

                {/* STARS */}
                <div className="mt-4 flex gap-1 text-[#ffba00] md:mt-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-lg md:text-[22px]"
                    />
                  ))}
                </div>

                {/* REVIEW */}
                <p className="mt-4 text-sm leading-7 text-gray-800 md:mt-8 md:text-[17px] md:leading-8">
                  {item.review}
                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default StudentFeedback