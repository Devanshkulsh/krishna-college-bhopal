import React from "react";
import { ArrowRight } from "lucide-react";

const BAMSSection = () => {
  const topCards = [
    {
      title: "HOSPITAL DETAILS",
      image: "/home/hospital.jpg",
      link: "/hospital",
    },
    {
      title: "PHARMACY DETAILS",
      image: "/home/pharmacy.jpg",
      link: "/pharmacy",
    },
    {
      title: "COLLEGE DETAILS",
      image: "/home/college.jpg",
      link: "/about",
    },
  ];

  const promoCards = [
    {
      title: "Join Krishna College for a Successful Ayurvedic Career",
      description:
        "Krishna College Bhopal offers quality BAMS education with experienced faculty, modern facilities and strong clinical exposure.",
      image: "/home/ayurveda-career.jpg",
      button: "Apply For Admission",
      overlay:
        "linear-gradient(90deg, rgba(218,74,43,0.96) 0%, rgba(218,74,43,0.88) 45%, rgba(218,74,43,0.20) 100%)",
    },
    {
      title:
        "Empowering Students with Quality Education and Experienced Faculty",
      description:
        "Explore our academic departments with experienced faculty, modern learning facilities and a strong focus on Ayurvedic education.",
      image: "/home/faculty.jpg",
      button: "Explore Departments",
      overlay:
        "linear-gradient(90deg, rgba(98,199,31,0.96) 0%, rgba(98,199,31,0.82) 48%, rgba(98,199,31,0.14) 100%)",
    },
    {
      title: "Advanced Laboratories for Practical Ayurvedic Learning",
      description:
        "Our laboratories are equipped with modern instruments and facilities to provide students with practical knowledge and hands-on training.",
      image: "/home/laboratory.jpg",
      button: "Explore Now",
      overlay:
        "linear-gradient(90deg, rgba(222,182,18,0.95) 0%, rgba(222,182,18,0.78) 48%, rgba(222,182,18,0.12) 100%)",
    },
  ];

  const infoCards = [
    {
      title: "Admissions",
      description:
        "Start your Ayurvedic education journey at Krishna College Bhopal through our simple admission process.",
      tags: [
        "Admission Details",
        "Course Details",
        "Syllabus",
        "Apply Now",
      ],
      bg: "#fff5f7",
    },
    {
      title: "Hospital & Therapies",
      description:
        "Explore our hospital facilities, clinical training and Ayurvedic treatment services.",
      tags: [
        "Hospital Info",
        "Therapies",
        "OPD/IPD Stats",
        "Request Call Back",
      ],
      bg: "#f2f9e8",
    },
    {
      title: "Well-Equipped Infrastructure",
      description:
        "Krishna College Bhopal provides modern classrooms, laboratories and facilities for effective Ayurvedic education.",
      tags: [],
      bg: "#fff7df",
    },
    {
      title: "Ayurvedic Medical Education",
      description:
        "Focused on quality Ayurvedic education, practical learning and clinical exposure for future healthcare professionals.",
      tags: [],
      bg: "#fff4f7",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1750px] px-5 md:px-8 lg:px-12">

        {/* TOP HEADING */}
        <div className="mx-auto mb-14 max-w-[1200px] text-center">
          <p className="mb-4 text-[17px] font-medium uppercase tracking-[1px] text-[#00ad3b]">
            Ayurveda & Medical
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#162364] md:text-4xl lg:text-[42px]">
            Krishna College Bhopal Ayurvedic Medical College & Hospital
          </h2>

          <p className="mx-auto mt-5 max-w-[1050px] text-[16px] leading-8 text-black md:text-[18px]">
            Krishna College Bhopal Ayurvedic Medical College & Hospital is
            committed to providing quality Ayurvedic education with a strong
            foundation in traditional knowledge, practical learning and
            clinical exposure. The institution focuses on developing skilled
            healthcare professionals through academic excellence and
            hospital-based training.
          </p>
        </div>

        {/* TOP 3 CARDS */}
        <div className="grid gap-7 md:grid-cols-3">
          {topCards.map((card, index) => (
            <div key={index}>
              <div className="overflow-hidden rounded-[18px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-[310px] w-full object-cover transition duration-500 hover:scale-[1.02] lg:h-[330px]"
                />
              </div>

              <div className="px-7 pt-5">
                <h3 className="text-[24px] font-bold uppercase tracking-[0.5px] text-[#17225f]">
                  {card.title}
                </h3>

                <a
                  href={card.link}
                  className="mt-6 inline-flex min-w-[210px] items-center justify-center gap-3 rounded-[10px] bg-[#ec7600] px-7 py-4 text-[17px] font-semibold text-white transition hover:bg-[#17225f]"
                >
                  View More
                  <ArrowRight size={19} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PROMO CARDS */}
        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {promoCards.map((card, index) => (
            <div
              key={index}
              className="relative min-h-[345px] overflow-hidden rounded-[8px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: card.overlay,
                }}
              />

              <div className="relative z-10 flex h-full max-w-[68%] flex-col justify-center p-7 text-white lg:p-9">
                <h3 className="text-[22px] font-bold leading-[1.35] lg:text-[25px]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 lg:text-[17px]">
                  {card.description}
                </p>

                <a
                  href="/admission"
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-full border border-white bg-[#e87500] px-7 py-3 text-[15px] font-semibold text-white transition hover:bg-[#17225f]"
                >
                  {card.button}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM INFO CARDS */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="flex min-h-[300px] flex-col rounded-[18px] border border-[#7f85ac] p-8"
              style={{
                backgroundColor: card.bg,
              }}
            >
              <h3 className="text-[24px] font-bold leading-tight text-[#17225f]">
                {card.title}
              </h3>

              <p className="mt-4 text-[16px] leading-8 text-[#24305f]">
                {card.description}
              </p>

              {card.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {card.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#e87500] px-3 py-2 text-[12px] font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-7">
                <a
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-[9px] bg-[#e87500] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#17225f]"
                >
                  {index === 2 ? "Explore Now" : "Know More"}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BAMSSection;