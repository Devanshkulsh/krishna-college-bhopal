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
      link: "/admission",
      overlay:
        "linear-gradient(90deg, rgba(7,99,76,0.96) 0%, rgba(7,99,76,0.88) 45%, rgba(7,99,76,0.20) 100%)",
    },
    {
      title:
        "Empowering Students with Quality Education and Experienced Faculty",
      description:
        "Explore our academic departments with experienced faculty, modern learning facilities and a strong focus on Ayurvedic education.",
      image: "/home/faculty.jpg",
      button: "Explore Departments",
      link: "/departments",
      overlay:
        "linear-gradient(90deg, rgba(7,99,76,0.96) 0%, rgba(7,99,76,0.88) 45%, rgba(7,99,76,0.20) 100%)",
    },
    {
      title: "Advanced Laboratories for Practical Ayurvedic Learning",
      description:
        "Our laboratories are equipped with modern instruments and facilities to provide students with practical knowledge and hands-on training.",
      image: "/home/laboratory.jpg",
      button: "Explore Now",
      link: "/facility",
      overlay:
        "linear-gradient(90deg, rgba(7,99,76,0.96) 0%, rgba(7,99,76,0.88) 45%, rgba(7,99,76,0.20) 100%)",
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        border-y
        border-[#E3E6E9]
        bg-[#EEF1F4]
        py-10
        shadow-[inset_0_8px_20px_rgba(0,0,0,0.02),inset_0_-8px_20px_rgba(0,0,0,0.02)]
        md:py-14
        lg:py-20
      "
    >
      <div className="mx-auto max-w-[1750px] px-4 sm:px-6 md:px-8 lg:px-12">

        {/* ================= TOP HEADING ================= */}

        <div className="mx-auto mb-10 max-w-[1200px] text-center md:mb-14">
          <p className="mb-2 text-sm font-medium uppercase tracking-[1px] text-[#00ad3b] md:mb-4 md:text-[17px]">
            Ayurveda & Medical
          </p>

          <h2 className="text-2xl font-bold leading-tight text-[#162364] sm:text-3xl md:text-4xl lg:text-[42px]">
            Krishna College Bhopal Ayurvedic Medical College & Hospital
          </h2>

          <p className="mx-auto mt-4 max-w-[1050px] text-sm leading-7 text-[#111111] sm:text-[15px] md:mt-5 md:text-[16px] md:leading-8 lg:text-[18px]">
            Krishna College Bhopal Ayurvedic Medical College & Hospital is
            committed to providing quality Ayurvedic education with a strong
            foundation in traditional knowledge, practical learning and
            clinical exposure. The institution focuses on developing skilled
            healthcare professionals through academic excellence and
            hospital-based training.
          </p>
        </div>

        {/* ================= TOP 3 CARDS ================= */}

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3 md:gap-7">
          {topCards.map((card, index) => (
            <div key={index} className="group">

              {/* IMAGE */}
              <div className="overflow-hidden rounded-[18px] bg-white shadow-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  className="
                    h-[220px]
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.02]

                    sm:h-[260px]
                    md:h-[280px]
                    lg:h-[310px]
                    xl:h-[330px]
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="px-4 pt-4 sm:px-5 md:px-7 md:pt-5">
                <h3 className="text-xl font-bold uppercase tracking-[0.5px] text-[#17225f] sm:text-[22px] md:text-[24px]">
                  {card.title}
                </h3>

                <a
                  href={card.link}
                  className="
                    mt-4
                    inline-flex
                    min-w-[160px]
                    items-center
                    justify-center
                    gap-3
                    rounded-[10px]
                    bg-[#A3621D]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    !text-white
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#17225f]

                    sm:min-w-[180px]
                    sm:px-6
                    sm:py-3.5
                    sm:text-[15px]

                    md:mt-6
                    md:min-w-[210px]
                    md:px-7
                    md:py-4
                    md:text-[17px]
                  "
                >
                  View More

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* ================= PROMO CARDS ================= */}

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-7">
          {promoCards.map((card, index) => (
            <div
              key={index}
              className="
                group
                relative
                min-h-[280px]
                overflow-hidden
                rounded-[10px]
                bg-cover
                bg-center
                shadow-md

                sm:min-h-[300px]
                md:min-h-[345px]
              "
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            >

              {/* GREEN OVERLAY */}
              <div
                className="absolute inset-0"
                style={{
                  background: card.overlay,
                }}
              />

              {/* CARD CONTENT */}
              <div
                className="
                  relative
                  z-10
                  flex
                  min-h-[280px]
                  max-w-[85%]
                  flex-col
                  justify-center
                  p-5
                  text-white

                  sm:min-h-[300px]
                  sm:max-w-[75%]
                  sm:p-6

                  md:min-h-[345px]
                  md:max-w-[68%]
                  md:p-7

                  lg:p-9
                "
              >
                <h3 className="text-lg font-bold leading-[1.3] sm:text-xl md:text-[22px] lg:text-[25px]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 sm:text-[14px] sm:leading-7 md:mt-4 md:text-[15px] lg:text-[17px]">
                  {card.description}
                </p>

                <a
                  href={card.link}
                  className="
                    mt-4
                    inline-flex
                    w-fit
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-[#A3621D]
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    !text-white
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#17225f]

                    sm:mt-5
                    sm:px-6
                    sm:py-2.5
                    sm:text-[14px]

                    md:mt-6
                    md:px-7
                    md:py-3
                    md:text-[15px]
                  "
                >
                  {card.button}
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