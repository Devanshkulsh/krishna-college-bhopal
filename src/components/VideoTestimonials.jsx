import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    video: "https://res.cloudinary.com/rvc9cqi7/video/upload/v1791529727/testimonial1.mp4",
  },
  {
    id: 2,
    video: "https://res.cloudinary.com/rvc9cqi7/video/upload/v1791530747/testimonial2-compressed.mp4",
  },
];

const VideoCard = ({ item, index }) => {
  const videoRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const startPlayback = async () => {
      try {
        await video.play();
      } catch (err) {
        // Autoplay can be restricted by browser settings.
        // The visitor can still use the native play button.
        console.warn("Autoplay unavailable:", err);
      }
    };

    startPlayback();

    return () => {
      video.pause();
    };
  }, []);

  const handleError = (event) => {
    const mediaError = event.currentTarget.error;

    const messages = {
      1: "Video loading was interrupted.",
      2: "Unable to download this video.",
      3: "The video could not be decoded.",
      4: "Video file not found or format unsupported.",
    };

    setError(
      messages[mediaError?.code] ||
        "Unable to load this video."
    );
  };

  return (
    <div
      className="
        relative w-full overflow-hidden
        rounded-[14px]
        border border-[#168486]/15
        bg-black
        shadow-[0_10px_35px_rgba(0,0,0,0.09)]
      "
    >
      <video
        ref={videoRef}
        src={item.video}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="auto"
        onError={handleError}
        onLoadedData={() => setError("")}
        aria-label={`Student testimonial video ${index + 1}`}
        className="
          block aspect-video
          w-full bg-black object-contain
        "
      >
        Your browser does not support HTML5 video.
      </video>

      {error && (
        <div
          className="
            absolute inset-0 flex flex-col
            items-center justify-center
            gap-3 bg-[#102F32] px-4 text-center
            text-white
          "
        >
          <p className="text-sm font-semibold">
            {error}
          </p>

          <p className="text-xs text-white/70">
            Check the video file path and MP4 format.
          </p>

          <a
            href={item.video}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-md bg-[#168486]
              px-4 py-2 text-xs font-semibold
              text-white hover:bg-[#A3621D]
            "
          >
            Open Video
          </a>
        </div>
      )}
    </div>
  );
};

const VideoTestimonials = () => {
  return (
    <section
      className="
        w-full overflow-hidden bg-white
        py-12 md:py-16 lg:py-20
      "
    >
      <div
        className="
          mx-auto max-w-[1550px]
          px-4 sm:px-6 lg:px-10 xl:px-14
        "
      >
        {/* HEADING */}
        <div
          className="
            mx-auto mb-8 max-w-[900px]
            text-center md:mb-12
          "
        >
          <p
            className="
              mb-2 text-[11px] font-semibold
              uppercase tracking-[2px]
              text-[#168486] sm:text-[12px]
            "
          >
            Our Students Say
          </p>

          <h2
            className="
              text-[28px] font-bold leading-tight
              text-[#168486]
              sm:text-[34px]
              md:text-[38px]
              lg:text-[42px]
            "
          >
            Student Feedback
            <span className="text-[#A3621D]">
              {" "}& Experiences
            </span>
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-[700px]
              text-[13px] leading-6
              text-[#4f6666]
              sm:text-[14px] md:text-[15px]
            "
          >
            Hear what our students say about their academic
            journey, clinical exposure and campus experience.
          </p>
        </div>

        {/* STATIC VIDEO GRID */}
        <div
          className="
            mx-auto grid w-full max-w-[1400px]
            grid-cols-1 gap-6
            md:grid-cols-2
            md:gap-7 lg:gap-9
          "
        >
          {testimonials.map((item, index) => (
            <VideoCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;