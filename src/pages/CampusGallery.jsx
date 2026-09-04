import React, { useState } from "react";
import {
  Images,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Building2,
} from "lucide-react";

/* =========================================================
   CAMPUS IMAGES
   Add/remove your campus images here
========================================================= */

const campusImages = [
  {
    id: 1,
    src: "/hero/campus.png",
    title: "College Campus",
    category: "Campus",
  },
  {
    id: 2,
    src: "/hero/college.png",
    title: "College Building",
    category: "Campus",
  },
  {
    id: 3,
    src: "/hero/clg.png",
    title: "Campus View",
    category: "Campus",
  },
  {
    id: 4,
    src: "/hero/classroom.png",
    title: "Classroom",
    category: "Academic",
  },
  {
    id: 5,
    src: "/hero/learning.png",
    title: "Learning Environment",
    category: "Academic",
  },
  {
    id: 6,
    src: "/hero/PHARMACY.png",
    title: "Pharmacy Facility",
    category: "Facilities",
  },
  {
    id: 7,
    src: "/hero/panchkarma.png",
    title: "Panchakarma Facility",
    category: "Facilities",
  },
  {
    id: 8,
    src: "/hero/hospital.png",
    title: "Hospital Building",
    category: "Hospital",
  },
  {
    id: 9,
    src: "/hero/Pathology.png",
    title: "Pathology Facility",
    category: "Facilities",
  },
];

const CampusGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  /* =========================================================
     OPEN IMAGE
  ========================================================= */

  const openImage = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  /* =========================================================
     CLOSE IMAGE
  ========================================================= */

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  /* =========================================================
     NEXT IMAGE
  ========================================================= */

  const nextImage = () => {
    setSelectedImage((current) =>
      current === campusImages.length - 1 ? 0 : current + 1
    );
  };

  /* =========================================================
     PREVIOUS IMAGE
  ========================================================= */

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? campusImages.length - 1 : current - 1
    );
  };

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
              Campus Photos
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
              <Camera size={31} />
            </div>

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Campus Gallery
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Explore Our Campus
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-gray-600">
              Take a visual tour of our institution and explore the campus,
              classrooms, academic facilities, hospital infrastructure and
              student learning environment.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PHOTO GALLERY
      ====================================================== */}

      <section className="bg-[#f6faf9] py-16 md:py-20">

        <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">

          {/* SECTION HEADING */}

          <div className="mb-12 text-center">

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Photo Collection
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Campus Life in Pictures
            </h2>

            <p className="mx-auto mt-4 max-w-[720px] text-base leading-7 text-gray-600">
              Click on any photograph to view it in a larger size.
            </p>

          </div>


          {/* =================================================
              IMAGE GRID
          ================================================= */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {campusImages.map((image, index) => (
              <button
                type="button"
                key={image.id}
                onClick={() => openImage(index)}
                className="group relative block h-[280px] w-full overflow-hidden rounded-[20px] bg-gray-200 text-left shadow-[0_8px_25px_rgba(0,0,0,0.08)] md:h-[320px]"
              >

                {/* IMAGE */}

                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />


                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-100" />


                {/* CAMERA ICON */}

                <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-[-10px] items-center justify-center rounded-full bg-white/90 text-[#0a756d] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                  <Images size={20} />

                </div>


                {/* IMAGE DETAILS */}

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
          CAMPUS HIGHLIGHT
      ====================================================== */}

      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div className="grid overflow-hidden rounded-[28px] bg-[#edf8f5] lg:grid-cols-2">

            {/* IMAGE */}

            <div className="relative min-h-[400px]">

              <img
                src="/hero/campus.png"
                alt="Shri Krishna Campus"
                className="absolute inset-0 h-full w-full object-cover"
              />

            </div>


            {/* CONTENT */}

            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[15px] bg-[#0a756d] text-white">

                <Building2 size={27} />

              </div>

              <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
                Our Infrastructure
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14245f] md:text-4xl">
                A Campus Designed for Learning & Care
              </h2>

              <p className="mt-5 text-[16px] leading-8 text-gray-600">
                Our campus provides an academic and healthcare environment
                designed to support Ayurvedic education, practical training,
                clinical exposure and professional development.
              </p>


              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {[
                  "Academic Infrastructure",
                  "Clinical Facilities",
                  "Learning Environment",
                  "Student Facilities",
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

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="bg-[#0a756d] py-14">

        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-7 px-5 text-center md:px-8 lg:flex-row lg:px-12 lg:text-left">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#f5a623]">
              Visit Our Campus
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Experience Our Campus in Person
            </h2>

            <p className="mt-3 max-w-[700px] leading-7 text-white/80">
              Visit Shri Krishna Ayurvedic Hospital and explore our academic,
              clinical and healthcare infrastructure.
            </p>

          </div>


          <a
            href="/contact"
            className="shrink-0 rounded-xl bg-[#e98b0c] px-8 py-4 font-bold !text-white transition duration-300 hover:bg-white hover:!text-[#0a756d]"
          >
            Contact Us
          </a>

        </div>

      </section>


      {/* =====================================================
          IMAGE LIGHTBOX
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
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-[#e98b0c]"
            aria-label="Close image"
          >
            <X size={25} />
          </button>


          {/* PREVIOUS */}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-[#0a756d] md:left-8 md:h-14 md:w-14"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>


          {/* IMAGE */}

          <div
            className="flex max-h-[90vh] max-w-[1200px] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={campusImages[selectedImage].src}
              alt={campusImages[selectedImage].title}
              className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            <div className="mt-5 text-center">

              <p className="text-xs font-bold uppercase tracking-[3px] text-[#f5a623]">
                {campusImages[selectedImage].category}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                {campusImages[selectedImage].title}
              </h3>

              <p className="mt-2 text-sm text-white/60">
                {selectedImage + 1} / {campusImages.length}
              </p>

            </div>

          </div>


          {/* NEXT */}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-[#0a756d] md:right-8 md:h-14 md:w-14"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

        </div>

      )}

    </main>
  );
};

export default CampusGallery;