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
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1750px] px-5 md:px-8 lg:px-10">

        {/* TOP */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          
          <h2 className="text-3xl font-bold text-[#1f2768] md:text-4xl">
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
              bg-[#df7500]
              px-7
              py-3.5
              font-bold
              text-white
              transition
              hover:-translate-y-1
              hover:bg-[#bf6200]
            "
          >
            View All Feedback
            <FaArrowRight />
          </a>

        </div>

        {/* FEEDBACK GRID */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">

          {feedbacks.map((item, index) => {

            if (item.type === 'video') {
              return (
                <div
                  key={index}
                  className="
                    overflow-hidden
                    rounded-[26px]
                    bg-white
                    p-3
                    shadow-[0_8px_28px_rgba(255,120,120,0.18)]
                  "
                >
                  <div className="overflow-hidden rounded-[18px] bg-black">
                    <video
                      controls
                      preload="metadata"
                      className="h-[325px] w-full object-cover"
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
                  min-h-[350px]
                  flex-col
                  rounded-[26px]
                  bg-white
                  p-8
                  shadow-[0_8px_28px_rgba(255,120,120,0.18)]
                "
              >

                <h3 className="text-2xl font-bold text-[#1f2768]">
                  {item.name}
                </h3>

                <p className="mt-1 text-base text-gray-500">
                  {item.course}
                </p>

                {/* STARS */}
                <div className="mt-6 flex gap-1 text-[#ffba00]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-[22px]"
                    />
                  ))}
                </div>

                {/* REVIEW */}
                <p className="mt-8 text-[17px] leading-8 text-gray-800">
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