import React from "react";
import {
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";

const NonTeachingStaff = () => {
  const pdfPath = "/hero/NonTeaching.pdf";

  return (
    <main className="w-full bg-white">

      {/* =========================================
          PAGE BANNER - SAME AS ABOUT PAGE
      ========================================== */}
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
              Non-Teaching Staff
            </h1>

          </div>
        </div>

        {/* Bottom Orange Line */}
        <div className="h-[4px] w-full bg-[#d68a1f]" />

      </section>


      {/* =========================================
          INTRODUCTION
      ========================================== */}
      <section className="py-14 md:py-16">

        <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">

          <div className="mx-auto max-w-[950px] text-center">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#0aa047]">
              Our Staff
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Non-Teaching Staff Details
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-gray-600">
              View the official information related to the non-teaching staff
              of Shri Krishna Ayurvedic Hospital. The complete details are
              available in the official document below.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================
          OFFICIAL PDF CARD
      ========================================== */}
      <section className="pb-14">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div
            className="
              flex
              flex-col
              items-start
              justify-between
              gap-7
              rounded-[22px]
              border
              border-[#dce9e5]
              bg-[#f3faf8]
              p-6
              shadow-[0_8px_30px_rgba(0,0,0,0.05)]
              md:flex-row
              md:items-center
              md:p-8
              lg:p-10
            "
          >

            {/* LEFT CONTENT */}
            <div className="flex items-start gap-5">

              {/* ICON */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[14px] bg-[#168486] text-white">
                <FileText size={30} />
              </div>

              {/* TEXT */}
              <div>

                <p className="text-xs font-bold uppercase tracking-[2px] text-[#e98b0c]">
                  Official Document
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#14245f] md:text-2xl">
                  Non-Teaching Staff Details
                </h3>

                <p className="mt-2 max-w-[650px] text-sm leading-6 text-gray-600 md:text-base">
                  View or download the official Non-Teaching Staff document
                  containing complete staff information.
                </p>

              </div>

            </div>


            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3">

              {/* VIEW PDF */}
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-[10px]
                  bg-[#168486]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-[#126b6d]
                "
              >
                <ExternalLink size={17} />
                View PDF
              </a>


              {/* DOWNLOAD PDF */}
              <a
                href={pdfPath}
                download="NonTeaching.pdf"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-[10px]
                  bg-[#e98b0c]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-[#c97308]
                "
              >
                <Download size={17} />
                Download PDF
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          PDF VIEWER SECTION
      ========================================== */}
      <section className="bg-[#f5faf9] py-16 md:py-20">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          {/* SECTION HEADING */}
          <div className="mb-9 text-center">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#0aa047]">
              Official Record
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              View Full Document
            </h2>

            <p className="mx-auto mt-4 max-w-[750px] text-base leading-7 text-gray-600">
              The official Non-Teaching Staff document can be viewed directly
              below. You can also open the PDF separately in a new browser tab.
            </p>

          </div>


          {/* PDF VIEWER */}
          <div
            className="
              overflow-hidden
              rounded-[20px]
              border
              border-[#dce5e2]
              bg-white
              shadow-[0_12px_40px_rgba(0,0,0,0.08)]
            "
          >

            <iframe
              src={pdfPath}
              title="Non Teaching Staff PDF"
              className="h-[500px] w-full md:h-[700px] lg:h-[850px]"
            />

          </div>


          {/* OPEN PDF BUTTON */}
          <div className="mt-8 flex justify-center">

            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-[10px]
                bg-[#e98b0c]
                px-7
                py-3.5
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-[#168486]
              "
            >
              <ExternalLink size={18} />
              Open Full PDF
            </a>

          </div>

        </div>
      </section>


      {/* =========================================
          BOTTOM CTA
      ========================================== */}
      <section className="bg-[#168486] py-14">

        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
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

            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#f5a623]">
              Campus Support
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Dedicated Staff Supporting Our Institution
            </h2>

            <p className="mt-3 max-w-[700px] leading-7 text-white/80">
              Our administrative and support teams work together to ensure
              smooth academic and institutional operations.
            </p>

          </div>


          {/* CONTACT BUTTON */}
          <a
            href="/contact"
            className="
              shrink-0
              rounded-xl
              bg-[#e98b0c]
              px-8
              py-4
              font-semibold
              text-white
              transition
              duration-300
              hover:bg-white
              hover:text-[#168486]
            "
          >
            Contact College
          </a>

        </div>

      </section>

    </main>
  );
};

export default NonTeachingStaff;