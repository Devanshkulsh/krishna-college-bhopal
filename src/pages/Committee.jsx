import React from "react";
import {
  FileText,
  ExternalLink,
  Users,
  ShieldCheck,
  GraduationCap,
  Scale,
  HeartHandshake,
  BriefcaseBusiness,
  BadgeCheck,
  BookOpenCheck,
  FlaskConical,
  UserRoundCheck,
  LifeBuoy,
} from "lucide-react";

const committees = [
  {
    title: "Academic Council",
    url: "https://skuayurvedic.com/c1.pdf",
    icon: GraduationCap,
  },
  {
    title: "Anti Ragging Committee",
    url: "https://skuayurvedic.com/AntiReggingCommittee.pdf",
    icon: ShieldCheck,
  },
  {
    title: "College Council Committee",
    url: "https://skuayurvedic.com/CollegeCouncilCommittee.pdf",
    icon: Users,
  },
  {
    title: "Committee Against Sexual Harassment Cell",
    url: "https://skuayurvedic.com/CommitteeAgainstsexualharassment%20cell.pdf",
    icon: Scale,
  },
  {
    title: "Co-Curricular & Extra-Curricular Activity Cell",
    url: "https://skuayurvedic.com/Cu-Corricuter.pdf",
    icon: HeartHandshake,
  },
  {
    title: "Grievance Redressal Cell",
    url: "https://skuayurvedic.com/GrivienceRedursal.pdf",
    icon: LifeBuoy,
  },
  {
    title: "Human Resource Cell",
    url: "https://skuayurvedic.com/HumanRecoucecell.pdf",
    icon: BriefcaseBusiness,
  },
  {
    title: "Internal Quality Assurance Cell",
    url: "https://skuayurvedic.com/Internal.pdf",
    icon: BadgeCheck,
  },
  {
    title: "Research Cell",
    url: "https://skuayurvedic.com/Reasearchcell.pdf",
    icon: FlaskConical,
  },
  {
    title: "Student Council Committee",
    url: "https://skuayurvedic.com/StudentCouncilCommettee.pdf",
    icon: UserRoundCheck,
  },
  {
    title: "Student Support & Career Guidance Placement Cell",
    url: "https://skuayurvedic.com/StudentSupport.pdf",
    icon: BookOpenCheck,
  },
];

const Committee = () => {
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
              Committees & Cells
            </h1>

          </div>
        </div>

        {/* Bottom Orange Line */}
        <div className="h-[4px] w-full bg-[#d68a1f]" />

      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div className="mx-auto max-w-[900px] text-center">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf8f5] text-[#0a756d]">
              <Users size={31} />
            </div>

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Institutional Committees
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Governance, Quality & Student Support
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-gray-600">
              The institution has constituted various committees and cells to
              support academic governance, student welfare, grievance
              redressal, quality assurance, research, career guidance and
              institutional development.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          COMMITTEE GRID
      ====================================================== */}
      <section className="bg-[#f6faf9] py-16 md:py-20">

        <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">

          <div className="mb-12 text-center">

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Official Documents
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Committee Documents
            </h2>

            <p className="mx-auto mt-4 max-w-[760px] text-base leading-7 text-gray-600">
              Click on any committee below to view its official PDF document.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {committees.map((committee, index) => {
              const Icon = committee.icon;

              return (
                <article
                  key={index}
                  className="
                    group
                    relative
                    flex
                    min-h-[270px]
                    flex-col
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-[#e0e9e6]
                    bg-white
                    p-7
                    shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                    transition
                    duration-300
                    hover:-translate-y-1.5
                    hover:shadow-[0_18px_45px_rgba(0,0,0,0.11)]
                  "
                >

                  {/* TOP BAR */}
                  <div className="absolute left-0 top-0 h-[5px] w-full bg-[#0a756d] transition duration-300 group-hover:bg-[#e98b0c]" />

                  {/* ICON */}
                  <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[16px] bg-[#edf8f5] text-[#0a756d] transition duration-300 group-hover:bg-[#0a756d] group-hover:text-white">
                    <Icon size={29} strokeWidth={1.8} />
                  </div>

                  {/* CONTENT */}
                  <div className="mt-6 flex-1">

                    <p className="text-xs font-bold uppercase tracking-[2px] text-[#e98b0c]">
                      Committee {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-[21px] font-bold leading-snug text-[#14245f]">
                      {committee.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      View the official document and details related to this
                      committee.
                    </p>

                  </div>

                  {/* BUTTON */}
                  <a
                    href={committee.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-6
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      rounded-[10px]
                      bg-[#0a756d]
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      !text-white
                      transition
                      hover:bg-[#e98b0c]
                    "
                  >
                    <FileText size={17} />
                    View PDF
                    <ExternalLink size={15} />
                  </a>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          INFO SECTION
      ====================================================== */}
      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">

          <div className="rounded-[28px] bg-[#edf8f5] p-7 md:p-10 lg:p-12">

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

              <div>

                <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
                  Institutional Framework
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14245f] md:text-4xl">
                  Supporting Transparency & Institutional Development
                </h2>

                <p className="mt-5 text-[16px] leading-8 text-gray-600">
                  These committees help maintain academic standards, student
                  welfare, institutional quality, research development,
                  administrative coordination and a supportive educational
                  environment.
                </p>

              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  "Academic Governance",
                  "Student Welfare",
                  "Quality Assurance",
                  "Research Support",
                  "Grievance Redressal",
                  "Career Guidance",
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
              Official Information
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Need More Information?
            </h2>

            <p className="mt-3 max-w-[700px] leading-7 text-white/80">
              For additional information regarding institutional committees,
              official documents or administrative matters, please contact the
              institution.
            </p>

          </div>


          <a
            href="/contact"
            className="
              shrink-0
              rounded-xl
              bg-[#e98b0c]
              px-8
              py-4
              font-semibold
              !text-white
              transition
              hover:bg-white
              hover:!text-[#0a756d]
            "
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
};

export default Committee;