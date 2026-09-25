import React, { useEffect, useState } from "react";

import {
  Images,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* =========================================================
   GALLERY DATA
========================================================= */

const galleryItems = [
  {
    id: 1,
    type: "image",
    category: "campus",
    src: "/hero/gallery-01.jpg",
  },

  {
    id: 2,
    type: "image",
    category: "campus",
    src: "/hero/gallery-02.jpg",
  },

  {
    id: 3,
    type: "image",
    category: "hospital",
    src: "/hero/gallery-04.jpg",
  },

  {
    id: 4,
    type: "image",
    category: "hospital",
    src: "/hero/gallery-05.jpg",
  },

  {
    id: 5,
    type: "image",
    category: "hospital",
    src: "/hero/gallery-06.jpg",
  },

  {
    id: 6,
    type: "image",
    category: "campus",
    src: "/hero/gallery-07.jpg",
  },

  {
    id: 7,
    type: "image",
    category: "campus",
    src: "/hero/gallery-08.jpg",
  },

  {
    id: 8,
    type: "image",
    category: "campus",
    src: "/hero/gallery-09.jpg",
  },

  {
    id: 9,
    type: "image",
    category: "campus",
    src: "/hero/gallery-10.jpg",
  },

  {
    id: 10,
    type: "image",
    category: "campus",
    src: "/hero/gallery-11.jpg",
  },

  {
    id: 11,
    type: "image",
    category: "campus",
    src: "/hero/gallery-12.jpg",
  },

  {
    id: 12,
    type: "image",
    category: "campus",
    src: "/hero/gallery-13.jpg",
  },

  {
    id: 13,
    type: "image",
    category: "campus",
    src: "/hero/gallery-14.jpg",
  },

  {
    id: 14,
    type: "image",
    category: "campus",
    src: "/hero/gallery-15.jpg",
  },

  {
    id: 15,
    type: "image",
    category: "campus",
    src: "/hero/gallery-16.jpg",
  },

  {
    id: 16,
    type: "image",
    category: "campus",
    src: "/hero/gallery-17.jpg",
  },

  {
    id: 17,
    type: "image",
    category: "campus",
    src: "/hero/gallery-18.jpg",
  },

  {
    id: 18,
    type: "image",
    category: "campus",
    src: "/hero/gallery-19.jpg",
  },

  

  /* =========================================================
     VIDEO 1
  ========================================================= */

  {
    id: 21,
    type: "video",
    category: "videos",
    src: "/hero/campus-video.mp4",
    poster: "/hero/gallery-01.jpg",
  },

  /* =========================================================
     VIDEO 2
  ========================================================= */

  {
    id: 22,
    type: "video",
    category: "videos",
    src: "/hero/campus1-video.mp4",
    poster: "/hero/gallery-02.jpg",
  },
];

/* =========================================================
   FILTERS
========================================================= */

const filters = [
  {
    label: "All",
    value: "all",
  },

  {
    label: "Campus",
    value: "campus",
  },

  {
    label: "Hospital",
    value: "hospital",
  },

  {
    label: "Videos",
    value: "videos",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const [selectedIndex, setSelectedIndex] = useState(null);

  const [visibleCount, setVisibleCount] = useState(9);

  /* =========================================================
     FILTERED ITEMS
  ========================================================= */

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

  const selectedItem =
    selectedIndex !== null
      ? filteredItems[selectedIndex]
      : null;

  /* =========================================================
     FILTER CHANGE
  ========================================================= */

  const handleFilter = (value) => {
    setActiveFilter(value);

    setVisibleCount(9);

    setSelectedIndex(null);
  };

  /* =========================================================
     NEXT ITEM
  ========================================================= */

  const handleNext = () => {
    setSelectedIndex((previous) => {
      if (previous === filteredItems.length - 1) {
        return 0;
      }

      return previous + 1;
    });
  };

  /* =========================================================
     PREVIOUS ITEM
  ========================================================= */

  const handlePrevious = () => {
    setSelectedIndex((previous) => {
      if (previous === 0) {
        return filteredItems.length - 1;
      }

      return previous - 1;
    });
  };

  /* =========================================================
     STOP PAGE SCROLL WHEN POPUP OPEN
  ========================================================= */

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  /* =========================================================
     KEYBOARD CONTROLS
  ========================================================= */

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (selectedIndex === null) {
        return;
      }

      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((previous) => {
          if (previous === filteredItems.length - 1) {
            return 0;
          }

          return previous + 1;
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((previous) => {
          if (previous === 0) {
            return filteredItems.length - 1;
          }

          return previous - 1;
        });
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [selectedIndex, filteredItems.length]);

  return (
    <main className="w-full bg-white">

      {/* =====================================================
          PAGE BANNER
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#168486]">

        {/* RIGHT CIRCLE */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

        {/* LEFT CIRCLE */}

        <div className="absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-[#d68a1f]/10" />


        {/* BANNER CONTENT */}

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

            {/* SMALL HEADING */}

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


            {/* MAIN HEADING */}

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
              Gallery
            </h1>

          </div>

        </div>


        {/* ORANGE LINE */}

        <div className="h-[4px] w-full bg-[#d68a1f]" />

      </section>


      {/* =====================================================
          GALLERY SECTION
      ====================================================== */}

      <section className="bg-[#f7faf9] py-14 md:py-20">

        <div
          className="
            mx-auto
            max-w-[1450px]
            px-4
            sm:px-5
            md:px-8
            lg:px-12
          "
        >

          {/* =====================================================
              HEADING
          ====================================================== */}

          <div className="mb-9 text-center">

            <div className="mb-3 flex items-center justify-center gap-3">

              <span className="h-[2px] w-8 bg-[#e98b0c]" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-[#e98b0c]
                "
              >
                Gallery
              </span>

              <span className="h-[2px] w-8 bg-[#e98b0c]" />

            </div>


            <h2
              className="
                text-3xl
                font-bold
                text-[#14245f]
                md:text-4xl
              "
            >
              Explore Our Gallery
            </h2>

          </div>


          {/* =====================================================
              FILTER BUTTONS
          ====================================================== */}

          <div
            className="
              mb-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
            "
          >

            {filters.map((filter) => (

              <button
                key={filter.value}
                type="button"
                onClick={() =>
                  handleFilter(filter.value)
                }
                className={`
                  rounded-full
                  border
                  px-6
                  py-2.5
                  text-sm
                  font-semibold
                  transition
                  duration-300

                  ${
                    activeFilter === filter.value
                      ? "border-[#0a756d] bg-[#0a756d] text-white shadow-md"
                      : "border-[#dce7e3] bg-white text-gray-600 hover:border-[#0a756d] hover:text-[#0a756d]"
                  }
                `}
              >
                {filter.label}
              </button>

            ))}

          </div>


          {/* =====================================================
              GALLERY GRID
          ====================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
              xl:gap-6
            "
          >

            {filteredItems
              .slice(0, visibleCount)
              .map((item, index) => (

                <div
                  key={item.id}
                  onClick={() =>
                    setSelectedIndex(index)
                  }
                  className="
                    group
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-gray-100
                    bg-white
                    shadow-[0_6px_25px_rgba(0,0,0,0.08)]
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]
                  "
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  {item.type === "image" && (

                    <div
                      className="
                        h-[260px]
                        overflow-hidden
                        sm:h-[280px]
                        lg:h-[300px]
                      "
                    >

                      <img
                        src={item.src}
                        alt="Gallery"
                        loading="lazy"
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                    </div>

                  )}


                  {/* =================================================
                      VIDEO - AUTOPLAY
                  ================================================= */}

                  {item.type === "video" && (

                    <div
                      className="
                        relative
                        h-[260px]
                        overflow-hidden
                        sm:h-[280px]
                        lg:h-[300px]
                      "
                    >

                      <video
                        src={item.src}
                        poster={item.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />


                      {/* VIDEO BADGE */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          right-4
                          top-4
                          rounded-full
                          bg-black/60
                          px-3
                          py-1
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[1px]
                          text-white
                          backdrop-blur-sm
                        "
                      >
                        Video
                      </div>

                    </div>

                  )}

                </div>

              ))}

          </div>


          {/* =====================================================
              NO ITEMS
          ====================================================== */}

          {filteredItems.length === 0 && (

            <div className="py-20 text-center">

              <Images
                size={50}
                className="mx-auto text-gray-300"
              />

              <p className="mt-4 text-gray-500">
                No gallery items available.
              </p>

            </div>

          )}


          {/* =====================================================
              LOAD MORE
          ====================================================== */}

          {visibleCount < filteredItems.length && (

            <div className="mt-12 text-center">

              <button
                type="button"
                onClick={() =>
                  setVisibleCount(
                    (previous) => previous + 6
                  )
                }
                className="
                  rounded-xl
                  bg-[#0a756d]
                  px-8
                  py-3.5
                  font-bold
                  text-white
                  shadow-md
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#e98b0c]
                "
              >
                Load More
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX / FULLSCREEN
      ====================================================== */}

      {selectedItem && (

        <div
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            bg-black/95
            p-4
          "
          onClick={() =>
            setSelectedIndex(null)
          }
        >

          {/* =================================================
              CLOSE BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label="Close gallery"
            onClick={(event) => {

              event.stopPropagation();

              setSelectedIndex(null);

            }}
            className="
              absolute
              right-4
              top-4
              z-30
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white
              text-black
              shadow-xl
              transition
              hover:scale-110
              md:right-8
              md:top-6
            "
          >

            <X size={24} />

          </button>


          {/* =================================================
              PREVIOUS BUTTON
          ================================================= */}

          {filteredItems.length > 1 && (

            <button
              type="button"
              aria-label="Previous gallery item"
              onClick={(event) => {

                event.stopPropagation();

                handlePrevious();

              }}
              className="
                absolute
                left-2
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                shadow-xl
                transition
                hover:scale-110
                md:left-8
                md:h-12
                md:w-12
              "
            >

              <ChevronLeft size={29} />

            </button>

          )}


          {/* =================================================
              FULLSCREEN MEDIA
          ================================================= */}

          <div
            onClick={(event) =>
              event.stopPropagation()
            }
            className="
              flex
              max-h-[90vh]
              w-full
              max-w-[1250px]
              items-center
              justify-center
            "
          >

            {/* =================================================
                FULLSCREEN IMAGE
            ================================================= */}

            {selectedItem.type === "image" && (

              <img
                src={selectedItem.src}
                alt="Gallery"
                className="
                  max-h-[85vh]
                  max-w-full
                  rounded-lg
                  object-contain
                  shadow-2xl
                "
              />

            )}


            {/* =================================================
                FULLSCREEN VIDEO - AUTOPLAY
            ================================================= */}

            {selectedItem.type === "video" && (

              <video
                key={selectedItem.src}
                src={selectedItem.src}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
                className="
                  max-h-[85vh]
                  max-w-full
                  rounded-lg
                  bg-black
                  shadow-2xl
                "
              />

            )}

          </div>


          {/* =================================================
              NEXT BUTTON
          ================================================= */}

          {filteredItems.length > 1 && (

            <button
              type="button"
              aria-label="Next gallery item"
              onClick={(event) => {

                event.stopPropagation();

                handleNext();

              }}
              className="
                absolute
                right-2
                top-1/2
                z-30
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                shadow-xl
                transition
                hover:scale-110
                md:right-8
                md:h-12
                md:w-12
              "
            >

              <ChevronRight size={29} />

            </button>

          )}

        </div>

      )}

    </main>
  );
};

export default Gallery;