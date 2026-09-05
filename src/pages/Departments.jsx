import React from "react";
import { ArrowRight } from "lucide-react";

const departments = [
  {
    title: "Kayachikitsa",
    subtitle: "Internal Medicine Department",
    image: "/hero/Kayachikitsa.png",
    points: [
      "Treatment of fever, diabetes, arthritis, skin disorders, indigestion and lifestyle diseases.",
      "Ayurvedic medicines combined with Panchakarma therapies.",
      "Consultation under experienced Ayurvedic physicians.",
    ],
  },
  {
    title: "Panchakarma Therapy Unit",
    subtitle: "Detoxification & Rejuvenation",
    image: "/hero/panchkarma.png",
    points: [
      "Vamana, Virechana, Basti, Nasya and Raktamokshana therapies.",
      "Supports detoxification, immunity and rejuvenation.",
      "Air-conditioned therapy rooms with trained therapists.",
    ],
  },
  {
    title: "Shalya Tantra",
    subtitle: "Ayurvedic Surgery Department",
    image: "/hero/salya.png",
    points: [
      "Ksharasutra therapy for piles, fistula and ano-rectal disorders.",
      "Minimally invasive Ayurvedic surgical techniques.",
      "Minor surgical care under Ayurvedic supervision.",
    ],
  },
  {
    title: "Shalakya Tantra",
    subtitle: "ENT & Eye Care Department",
    image: "/hero/Shalakya.png",
    points: [
      "Care for disorders of eyes, ears, nose, throat and oral cavity.",
      "Netra Tarpana, Nasya, Karnapoorana, Kavala and Gandusha.",
      "Dedicated Ayurvedic ENT and Ophthalmology services.",
    ],
  },
  {
    title: "Prasuti & Striroga",
    subtitle: "Gynecology & Women's Health",
    image: "/hero/Prasuti.png",
    points: [
      "Management of menstrual disorders, infertility and women's health concerns.",
      "Antenatal and postnatal Ayurvedic care.",
      "Holistic support for women at different stages of life.",
    ],
  },
  {
    title: "Kaumarbhritya",
    subtitle: "Pediatrics Department",
    image: "/hero/Kaumarbhritya.png",
    points: [
      "Ayurvedic care for childhood diseases and growth disorders.",
      "Swarna Prashana Sanskar for immunity support.",
      "Gentle and natural therapies for children.",
    ],
  },
  {
    title: "Rasayana & Vajikarana",
    subtitle: "Rejuvenation & Wellness",
    image: "/hero/Rasayana.png",
    points: [
      "Rejuvenation and vitality enhancement therapies.",
      "Stress management and wellness-focused Ayurvedic programs.",
      "Personalized therapies for strength, energy and healthy ageing.",
    ],
  },
  {
    title: "Out Patient Department",
    subtitle: "OPD Services",
    image: "/hero/opd.png",
    points: [
      "Consultations available across departments.",
      "Monday to Saturday, 9:00 AM to 5:00 PM.",
      "Walk-in and online appointment facilities available.",
    ],
  },
  {
    title: "In-Patient Department",
    subtitle: "IPD Services",
    image: "/departments/ipd.png",
    points: [
      "Well-furnished rooms with medical supervision.",
      "Customized Ayurvedic diet and therapy support.",
      "24×7 nursing and care assistance.",
    ],
  },
  {
    title: "Diagnostic & Pathology Unit",
    subtitle: "Laboratory & Diagnostics",
    image: "/departments/pathology.png",
    points: [
      "Blood tests and urine analysis.",
      "Nadi Pariksha, Dosha analysis and modern lab testing.",
      "Quick and reliable diagnostic support.",
    ],
  },
  {
    title: "Ayurvedic Pharmacy",
    subtitle: "Medicines & Formulations",
    image: "/departments/pharmacy.png",
    points: [
      "Certified Ayurvedic medicines and in-house formulations.",
      "GMP-certified products under expert supervision.",
      "Open daily from 9:00 AM to 7:00 PM.",
    ],
  },
  {
    title: "Yoga & Lifestyle Counseling",
    subtitle: "Wellness Center",
    image: "/departments/yoga.png",
    points: [
      "Yoga, pranayama, meditation and diet planning.",
      "Focused on stress relief, prevention and healthy living.",
      "Individual and group wellness sessions.",
    ],
  },
];

const Departments = () => {
  return (
    <main className="w-full bg-white">

      {/* =====================================================
          PAGE BANNER
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#168486]">

        {/* Decorative Circles */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

        <div className="absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-[#d68a1f]/10" />

        {/* Center Content */}
        <div
          className="
            relative
            mx-auto
            flex
            min-h-[220px]
            max-w-[1720px]
            items-center
            justify-center
            px-4
            text-center
            sm:px-6
            lg:min-h-[250px]
            lg:px-8
          "
        >
          <div className="flex flex-col items-center">

            {/* Small Heading */}
            <div className="flex items-center justify-center gap-3">

              <span className="h-[2px] w-10 bg-[#d68a1f]" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#f2b45d]
                  sm:text-[13px]
                "
              >
                Shri Krishna Ayurvedic Hospital
              </span>

              <span className="h-[2px] w-10 bg-[#d68a1f]" />

            </div>

            {/* Main Heading */}
            <h1
              className="
                mt-5
                text-[36px]
                font-extrabold
                leading-none
                text-white
                sm:text-[44px]
                lg:text-[50px]
              "
            >
              Our Departments
            </h1>

          </div>
        </div>

        {/* Bottom Orange Line */}
        <div className="h-[4px] w-full bg-[#d68a1f]" />

      </section>


      {/* =====================================================
          DEPARTMENT GRID
      ====================================================== */}

      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-12">

          {/* Section Heading */}
          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#0b9f4b]">
              Departments & Information
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Specialized Ayurvedic Departments
            </h2>

          </div>


          {/* Grid */}
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

            {departments.map((department, index) => (

              <article
                key={index}
                className="
                  group
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#e6e6e6]
                  bg-white
                  shadow-[0_10px_35px_rgba(0,0,0,0.07)]
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_16px_45px_rgba(0,0,0,0.12)]
                "
              >

                {/* IMAGE */}
                <div className="relative h-[235px] overflow-hidden">

                  <img
                    src={department.image}
                    alt={department.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      rounded-full
                      bg-[#e98608]
                      px-4
                      py-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-wide
                      text-white
                    "
                  >
                    Department {String(index + 1).padStart(2, "0")}
                  </div>

                </div>


                {/* CONTENT */}
                <div className="p-6 lg:p-7">

                  <h3 className="text-[24px] font-bold leading-tight text-[#14245f]">
                    {department.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#0b8b68]">
                    {department.subtitle}
                  </p>

                  <div className="my-5 h-[2px] w-14 bg-[#e98608]" />


                  {/* POINTS */}
                  <ul className="space-y-3">

                    {department.points.map((point, pointIndex) => (

                      <li
                        key={pointIndex}
                        className="flex gap-3 text-[15px] leading-7 text-[#4c5566]"
                      >
                        <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#e98608]" />

                        <span>
                          {point}
                        </span>
                      </li>

                    ))}

                  </ul>


                  {/* BUTTON */}
                  <a
                    href={`/departments/${department.title
                      .toLowerCase()
                      .replaceAll("&", "and")
                      .replaceAll(" ", "-")}`}
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-[#e98608]
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#086b64]
                    "
                  >
                    Know More
                    <ArrowRight size={17} />
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="bg-[#f4faf8] py-14">

        <div
          className="
            mx-auto
            flex
            max-w-[1450px]
            flex-col
            items-center
            justify-between
            gap-7
            px-5
            text-center
            md:px-8
            lg:flex-row
            lg:px-12
            lg:text-left
          "
        >

          {/* LEFT */}
          <div>

            <p className="text-sm font-bold uppercase tracking-[2px] text-[#0b9f4b]">
              Need Medical Assistance?
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#14245f]">
              Consult Our Ayurvedic Specialists
            </h2>

            <p className="mt-3 max-w-[700px] text-base leading-7 text-gray-600">
              Get consultation and treatment guidance from our experienced
              Ayurvedic physicians and healthcare team.
            </p>

          </div>


          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="tel:+917209776617"
              className="
                rounded-lg
                bg-[#168486]
                px-7
                py-4
                font-semibold
                text-white
                transition
                hover:bg-[#126b6d]
              "
            >
              Call Hospital
            </a>

            <a
              href="/contact"
              className="
                rounded-lg
                bg-[#e98608]
                px-7
                py-4
                font-semibold
                text-white
                transition
                hover:bg-[#c96f00]
              "
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Departments;