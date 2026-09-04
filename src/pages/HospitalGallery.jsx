import React, { useEffect, useState } from "react";
import {
  Hospital,
  HeartPulse,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
} from "lucide-react";

/* =========================================================
   HOSPITAL IMAGES
========================================================= */

const hospitalImages = [
  {
    id: 1,
    src: "/hero/hospital.png",
    title: "Hospital Building",
    category: "Hospital",
  },
  {
    id: 2,
    src: "/hero/Laparoscopic.png",
    title: "Laparoscopic Surgery",
    category: "Clinical Facility",
  },
  {
    id: 3,
    src: "/hero/ICU.png",
    title: "ICU / Critical Care",
    category: "Critical Care",
  },
  {
    id: 4,
    src: "/hero/ECG.png",
    title: "ECG Services",
    category: "Diagnostic",
  },
  {
    id: 5,
    src: "/hero/ENT.png",
    title: "ENT Department",
    category: "Department",
  },
  {
    id: 6,
    src: "/hero/Infertility.png",
    title: "Infertility Counseling",
    category: "Clinical Service",
  },
  {
    id: 7,
    src: "/hero/Pathology.png",
    title: "Pathology Facility",
    category: "Diagnostic",
  },
  {
    id: 8,
    src: "/hero/Ultrasound.png",
    title: "Ultrasound Facility",
    category: "Diagnostic",
  },
  {
    id: 9,
    src: "/hero/X-Ray.png",
    title: "X-Ray Facility",
    category: "Diagnostic",
  },
  {
    id: 10,
    src: "/hero/Panchakarma.png",
    title: "Panchakarma Therapy",
    category: "Ayurvedic Therapy",
  },
  {
    id: 11,
    src: "/hero/PHARMACY.png",
    title: "Hospital Pharmacy",
    category: "Pharmacy",
  },
  {
    id: 12,
    src: "/hero/Obstetrics.png",
    title: "Obstetrics Facility",
    category: "Department",
  },
];

const HospitalGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((current) =>
      current === hospitalImages.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? hospitalImages.length - 1 : current - 1
    );
  };

  /* BODY SCROLL LOCK */
  useEffect(() => {
    document.body.style.overflow =
      selectedImage !== null ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  /* KEYBOARD CONTROLS */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage === null) return;

      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <main className="w-full bg-white">

      {/* =====================================================
          PAGE BANNER - SAME AS ABOUT PAGE
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
              Hospital Gallery
            </h1>

          </div>
        </div>

        {/* Bottom Orange Line */}
        <div className="h-[4px] w-full bg-[#d68a1f]" />

      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div className="mx-auto max-w-[900px] text-center">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf8f5] text-[#0a756d]">
              <Hospital size={31} />
            </div>

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Healthcare Infrastructure
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Explore Our Hospital
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-gray-600">
              Our hospital provides Ayurvedic treatment, clinical care,
              diagnostics and patient-support facilities in a structured and
              patient-friendly healthcare environment.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PHOTO GALLERY
      ====================================================== */}
      <section className="bg-[#f6faf9] py-16 md:py-20">

        <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">

          <div className="mb-12 text-center">

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Photo Collection
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Hospital Facilities in Pictures
            </h2>

            <p className="mx-auto mt-4 max-w-[720px] text-base leading-7 text-gray-600">
              Click on any photograph to view the image in full-screen mode.
            </p>

          </div>


          {/* IMAGES */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {hospitalImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => openImage(index)}
                className="group relative block h-[280px] w-full overflow-hidden rounded-[20px] bg-gray-200 text-left shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] md:h-[320px]"
              >

                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />


                {/* VIEW ICON */}
                <div className="absolute right-5 top-5 flex h-11 w-11 -translate-y-2 items-center justify-center rounded-full bg-white/90 text-[#0a756d] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Images size={20} />
                </div>


                {/* TEXT */}
                <div className="absolute bottom-0 left-0 w-full p-6">

                  <p className="text-xs font-bold uppercase tracking-[2px] text-[#f5a623]">
                    {image.category}
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    {image.title}
                  </h3>

                </div>

              </button>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHT
      ====================================================== */}
      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div className="grid overflow-hidden rounded-[28px] bg-[#edf8f5] lg:grid-cols-2">

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[15px] bg-[#0a756d] text-white">
                <HeartPulse size={27} />
              </div>

              <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
                Patient Care
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14245f] md:text-4xl">
                Ayurvedic Care Supported by Clinical Facilities
              </h2>

              <p className="mt-5 text-[16px] leading-8 text-gray-600">
                Our healthcare infrastructure supports consultation,
                diagnosis, treatment and clinical training while maintaining
                the traditional principles of Ayurvedic medicine.
              </p>


              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {[
                  "OPD & IPD Services",
                  "Diagnostic Support",
                  "Panchakarma Therapy",
                  "Critical Care",
                  "Clinical Departments",
                  "In-House Pharmacy",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >

                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#e98b0c]" />

                    <span className="font-semibold text-[#14245f]">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>


            {/* IMAGE */}
            <div className="relative min-h-[420px]">

              <img
                src="/hero/hospital.png"
                alt="Shri Krishna Ayurvedic Hospital"
                className="absolute inset-0 h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#0a756d] py-14">

        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-7 px-5 text-center md:px-8 lg:flex-row lg:px-12 lg:text-left">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#f5a623]">
              Hospital Services
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Need Hospital Assistance?
            </h2>

            <p className="mt-3 max-w-[700px] leading-7 text-white/80">
              Contact our hospital team for appointments, treatment
              information and patient-related enquiries.
            </p>

          </div>


          <a
            href="tel:+916262180303"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#e98b0c] px-8 py-4 font-bold !text-white transition duration-300 hover:bg-white hover:!text-[#0a756d]"
          >
            <Stethoscope size={19} />
            Call Hospital
          </a>

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX
      ====================================================== */}
      {selectedImage !== null && (

        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 p-4"
          onClick={closeImage}
        >

          {/* CLOSE */}
          <button
            type="button"
            onClick={closeImage}
            aria-label="Close image"
            className="absolute right-4 top-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 !text-white backdrop-blur-md transition hover:bg-[#e98b0c] md:right-7 md:top-7"
          >
            <X size={25} />
          </button>


          {/* PREVIOUS */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 !text-white backdrop-blur-md transition hover:bg-[#0a756d] md:left-8 md:h-14 md:w-14"
          >
            <ChevronLeft size={28} />
          </button>


          {/* IMAGE */}
          <div
            className="flex max-h-[90vh] max-w-[1200px] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={hospitalImages[selectedImage].src}
              alt={hospitalImages[selectedImage].title}
              className="max-h-[76vh] max-w-full rounded-xl object-contain shadow-2xl"
            />


            <div className="mt-5 text-center">

              <p className="text-xs font-bold uppercase tracking-[3px] text-[#f5a623]">
                {hospitalImages[selectedImage].category}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                {hospitalImages[selectedImage].title}
              </h3>

              <p className="mt-2 text-sm text-white/60">
                {selectedImage + 1} / {hospitalImages.length}
              </p>

            </div>

          </div>


          {/* NEXT */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 !text-white backdrop-blur-md transition hover:bg-[#0a756d] md:right-8 md:h-14 md:w-14"
          >
            <ChevronRight size={28} />
          </button>

        </div>

      )}

    </main>
  );
};

export default HospitalGallery;