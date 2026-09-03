import React from "react";

const facilities = [
  {
    title: "General & Laparoscopic Surgery",
    description: "Precision-driven minimally invasive surgical care.",
    image: "/hero/Laparoscopic.png",
  },
  {
    title: "Obstetrics & Gynecology",
    description: "Women's Health & Maternity.",
    image: "/hero/Obstetrics.png",
  },
  {
    title: "24×7 Normal Delivery",
    description: "Safe Normal Delivery Services.",
    image: "/hero/24.png",
  },
  {
    title: "Infertility Counseling",
    description: "Fertility Evaluation and Counseling.",
    image: "/hero/Infertility.png",
  },
  {
    title: "Panchakarma Therapy",
    description: "Classical Panchakarma Therapy Care.",
    image: "/hero/panchkarma.png",
  },
  {
    title: "ICU / NICE",
    description: "Critical & Neonatal Care.",
    image: "/hero/ICU.png",
  },
  {
    title: "Ultrasound",
    description: "Advanced Ultrasound Diagnostic Services.",
    image: "/hero/Ultrasound.png",
  },
  {
    title: "X-Ray",
    description: "Digital X-Ray Imaging Services.",
    image: "/hero/X-Ray.png",
  },
  {
    title: "Pathology Laboratory",
    description: "Advanced Diagnostic Pathology Services.",
    image: "/hero/Pathology.png",
  },
  {
    title: "Ophthalmology (Eye)",
    description: "Comprehensive Eye Care Services.",
    image: "/hero/Ophthalmology.png",
  },
  {
    title: "ENT Department",
    description: "Comprehensive ENT Care Services.",
    image: "/hero/ENT.png",
  },
  {
    title: "ECG",
    description: "Advanced ECG Diagnostic Services.",
    image: "/hero/ECG.png",
  },
];

const CampusFacilities = () => {
  const topFacilities = facilities.slice(0, 6);
  const bottomFacilities = facilities.slice(6, 12);

  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto max-w-[1900px]">

        {/* HEADING */}
        <div className="mb-8 px-4 text-center sm:px-6 md:mb-10">
          <h2 className="text-[26px] font-bold leading-tight text-[#1f2768] sm:text-3xl md:text-4xl">
            Our Campus Facilities
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-[12px] font-medium uppercase leading-6 tracking-[0.8px] text-[#11a545] sm:text-sm md:mt-4 md:text-base md:tracking-[1.5px] lg:text-lg">
            Experience learning in an environment designed to nurture holistic
            education and well-being
          </p>
        </div>

        {/* =================================================
            TOP ROW - MOVE LEFT
        ================================================= */}

        <div className="relative w-full overflow-hidden">
          <div className="facility-track-left flex w-max gap-5 px-3 sm:gap-6">
            {[...topFacilities, ...topFacilities].map((facility, index) => (
              <FacilityCard
                key={`${facility.title}-${index}`}
                facility={facility}
              />
            ))}
          </div>
        </div>

        {/* =================================================
            BOTTOM ROW - MOVE RIGHT
        ================================================= */}

        <div className="relative mt-6 w-full overflow-hidden">
          <div className="facility-track-right flex w-max gap-5 px-3 sm:gap-6">
            {[...bottomFacilities, ...bottomFacilities].map(
              (facility, index) => (
                <FacilityCard
                  key={`${facility.title}-${index}`}
                  facility={facility}
                />
              )
            )}
          </div>
        </div>

      </div>

      {/* =================================================
          MARQUEE CSS
      ================================================= */}

      <style>
        {`
          @keyframes facilityLeft {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @keyframes facilityRight {
            from {
              transform: translateX(-50%);
            }

            to {
              transform: translateX(0);
            }
          }

          .facility-track-left {
            animation: facilityLeft 32s linear infinite;
          }

          .facility-track-right {
            animation: facilityRight 32s linear infinite;
          }

          .facility-track-left:hover,
          .facility-track-right:hover {
            animation-play-state: paused;
          }

          @media (max-width: 768px) {
            .facility-track-left,
            .facility-track-right {
              animation-duration: 24s;
            }
          }
        `}
      </style>
    </section>
  );
};

/* =========================================================
   FACILITY CARD
========================================================= */

const FacilityCard = ({ facility }) => {
  return (
    <div
      className="
        group
        w-[250px]
        shrink-0
        overflow-hidden
        rounded-[12px]
        border
        border-[#f2a0a0]
        bg-white
        shadow-[0_3px_12px_rgba(0,0,0,0.10)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_10px_24px_rgba(0,0,0,0.16)]

        sm:w-[270px]
        md:w-[285px]
        lg:w-[300px]
      "
    >
      {/* IMAGE */}
      <div
        className="
          h-[170px]
          w-full
          overflow-hidden
          bg-[#f7fbfb]

          sm:h-[185px]
          md:h-[195px]
        "
      >
        <img
          src={facility.image}
          alt={facility.title}
          className="
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-500
            group-hover:scale-[1.04]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="min-h-[135px] px-4 py-4 sm:px-5">
        <h3 className="text-[16px] font-bold leading-6 text-[#1f2768]">
          {facility.title}
        </h3>

        <p className="mt-2 text-[14px] leading-6 text-[#111827] md:text-[15px]">
          {facility.description}
        </p>
      </div>
    </div>
  );
};

export default CampusFacilities;