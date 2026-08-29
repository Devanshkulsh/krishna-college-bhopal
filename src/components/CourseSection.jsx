import React from "react";
import { ArrowRight } from "lucide-react";

const BAMSSection = () => {
  const topCards = [
    {
      title: "HOSPITAL DETAILS",
      image: "/hero/HOSPITAL1.png",
      link: "/hospital",
    },
    {
      title: "PHARMACY DETAILS",
      image: "/hero/PHARMACY.png",
      link: "/pharmacy",
    },
    {
      title: "COLLEGE DETAILS",
      image: "/hero/campus.png",
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
    <section className="w-full bg-white py-10 md:py-14 lg:py-20">
      <div className="mx-auto max-w-[1750px] px-4 sm:px-6 md:px-8 lg:px-12">

        {/* TOP HEADING */}
        <div className="mx-auto mb-10 max-w-[1200px] text-center md:mb-14">
          <p className="mb-2 text-sm font-medium uppercase tracking-[1px] text-[#00ad3b] md:mb-4 md:text-[17px]">
            Ayurveda & Medical
          </p>

          <h2 className="text-2xl font-bold leading-tight text-[#162364] sm:text-3xl md:text-4xl lg:text-[42px]">
            Krishna College Bhopal Ayurvedic Medical College & Hospital
          </h2>

          <p className="mx-auto mt-4 max-w-[1050px] text-sm leading-7 text-black sm:text-[15px] md:mt-5 md:text-[16px] md:leading-8 lg:text-[18px]">
            Krishna College Bhopal Ayurvedic Medical College & Hospital is
            committed to providing quality Ayurvedic education with a strong
            foundation in traditional knowledge, practical learning and
            clinical exposure. The institution focuses on developing skilled
            healthcare professionals through academic excellence and
            hospital-based training.
          </p>
        </div>

        {/* TOP 3 CARDS */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3 md:gap-7">
          {topCards.map((card, index) => (
            <div key={index}>
              <div className="overflow-hidden rounded-[18px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-[220px] w-full object-cover transition duration-500 hover:scale-[1.02] sm:h-[260px] md:h-[280px] lg:h-[310px] xl:h-[330px]"
                />
              </div>

              <div className="px-4 pt-4 sm:px-5 md:px-7 md:pt-5">
                <h3 className="text-xl font-bold uppercase tracking-[0.5px] text-[#17225f] sm:text-[22px] md:text-[24px]">
                  {card.title}
                </h3>

                <a
                  href={card.link}
                  className="mt-4 inline-flex min-w-[160px] items-center justify-center gap-3 rounded-[10px] bg-[#ec7600] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#17225f] sm:min-w-[180px] sm:px-6 sm:py-3.5 sm:text-[15px] md:mt-6 md:min-w-[210px] md:px-7 md:py-4 md:text-[17px]"
                >
                  View More
                  <ArrowRight size={16} className="md:size-[19px]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PROMO CARDS */}
        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-7">
          {promoCards.map((card, index) => (
            <div
              key={index}
              className="relative min-h-[280px] overflow-hidden rounded-[8px] bg-cover bg-center sm:min-h-[300px] md:min-h-[345px]"
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

              <div className="relative z-10 flex h-full max-w-[85%] flex-col justify-center p-5 text-white sm:max-w-[75%] sm:p-6 md:max-w-[68%] md:p-7 lg:p-9">
                <h3 className="text-lg font-bold leading-[1.3] sm:text-xl md:text-[22px] lg:text-[25px]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 sm:text-[14px] sm:leading-7 md:mt-4 md:text-[15px] lg:text-[17px]">
                  {card.description}
                </p>

                <a
                  href="/admission"
                  className="mt-4 inline-flex w-fit items-center justify-center rounded-full border border-white bg-[#e87500] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#17225f] sm:mt-5 sm:px-6 sm:py-2.5 sm:text-[14px] md:mt-6 md:px-7 md:py-3 md:text-[15px]"
                >
                  {card.button}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM INFO CARDS */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 md:mt-14 md:gap-6 xl:grid-cols-4">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="flex min-h-[260px] flex-col rounded-[18px] border border-[#7f85ac] p-5 sm:p-6 md:p-7 lg:p-8"
              style={{
                backgroundColor: card.bg,
              }}
            >
              <h3 className="text-xl font-bold leading-tight text-[#17225f] sm:text-[22px] md:text-[24px]">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#24305f] sm:text-[15px] md:mt-4 md:text-[16px] md:leading-8">
                {card.description}
              </p>

              {card.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
                  {card.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#e87500] px-3 py-1.5 text-[11px] font-semibold text-white sm:text-[12px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-4 md:pt-7">
                <a
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-[9px] bg-[#e87500] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#17225f] sm:px-6 sm:py-3 sm:text-[14px] md:px-7 md:py-3.5 md:text-[15px]"
                >
                  {index === 2 ? "Explore Now" : "Know More"}
                  <ArrowRight size={14} className="sm:size-[16px]" />
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