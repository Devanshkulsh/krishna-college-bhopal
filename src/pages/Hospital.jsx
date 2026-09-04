import React from "react";
import {
  Activity,
  HeartPulse,
  Stethoscope,
  BedDouble,
  Clock3,
  FileText,
  ExternalLink,
  Download,
  ArrowRight,
} from "lucide-react";

const facilities = [
  {
    title: "General & Laparoscopic Surgery",
    image: "/hero/Laparoscopic.png",
    description:
      "Modern surgical facilities for general and minimally invasive laparoscopic procedures.",
  },
  {
    title: "ICU / Critical Care",
    image: "/hero/ICU.png",
    description:
      "Well-equipped intensive care facilities with continuous medical monitoring.",
  },
  {
    title: "ECG Services",
    image: "/hero/ECG.png",
    description:
      "Advanced ECG diagnostic services for cardiac monitoring and evaluation.",
  },
  {
    title: "ENT Department",
    image: "/hero/ENT.png",
    description:
      "Comprehensive consultation and treatment support for ear, nose and throat conditions.",
  },
  {
    title: "Infertility Counseling",
    image: "/hero/Infertility.png",
    description:
      "Dedicated counseling and healthcare support for fertility-related concerns.",
  },
  {
    title: "Ayurvedic Clinical Care",
    image: "/hero/hospital.png",
    description:
      "Patient-centered Ayurvedic consultation, treatment and clinical care services.",
  },
];

const Hospital = () => {
  const hospitalPdf = "/hero/hospital.pdf";

  return (
    <main className="w-full bg-white">
      {/* =========================================
          HERO
      ========================================== */}
      <section className="relative min-h-[520px] overflow-hidden">
        <img
          src="/hero/hospital.png"
          alt="Krishna College Hospital"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#052f38]/95 via-[#075d5a]/80 to-black/20" />

        <div className="relative mx-auto flex min-h-[520px] max-w-[1500px] items-center px-5 py-16 md:px-8 lg:px-12">
          <div className="max-w-[850px] text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-[#f5a623] md:text-base">
              Shri Krishna Ayurvedic Hospital
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-[60px]">
              Comprehensive Ayurvedic & Clinical Healthcare
            </h1>

            <p className="mt-6 max-w-[760px] text-base leading-8 text-white/90 md:text-lg">
              Providing Ayurvedic consultation, hospital-based treatment,
              diagnostic support and patient care with a focus on quality,
              safety and holistic well-being.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+917209776617"
                className="inline-flex items-center gap-2 rounded-xl bg-[#e98b0c] px-7 py-4 font-semibold text-white transition hover:bg-[#c97407]"
              >
                <Stethoscope size={19} />
                Hospital Helpline
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-white bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#075d5a]"
              >
                Explore Services
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          QUICK STATS
      ========================================== */}
      <section className="-mt-8 relative z-20">
        <div className="mx-auto grid max-w-[1400px] gap-5 px-5 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12">
          <div className="rounded-[18px] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.10)]">
            <Activity className="text-[#0a756d]" size={30} />

            <h3 className="mt-4 text-xl font-bold text-[#14245f]">
              Multi-Specialty Care
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Ayurvedic and clinical services across multiple departments.
            </p>
          </div>

          <div className="rounded-[18px] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.10)]">
            <Clock3 className="text-[#0a756d]" size={30} />

            <h3 className="mt-4 text-xl font-bold text-[#14245f]">
              24×7 Support
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Medical support and patient-care services when required.
            </p>
          </div>

          <div className="rounded-[18px] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.10)]">
            <BedDouble className="text-[#0a756d]" size={30} />

            <h3 className="mt-4 text-xl font-bold text-[#14245f]">
              IPD Facilities
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Comfortable inpatient facilities with clinical supervision.
            </p>
          </div>

          <div className="rounded-[18px] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.10)]">
            <HeartPulse className="text-[#0a756d]" size={30} />

            <h3 className="mt-4 text-xl font-bold text-[#14245f]">
              Diagnostic Support
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              ECG, laboratory, imaging and other diagnostic services.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          ABOUT HOSPITAL
      ========================================== */}
      <section className="py-20">
        <div className="mx-auto grid max-w-[1450px] gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div className="overflow-hidden rounded-[24px]">
            <img
              src="/hero/hospital.png"
              alt="Shri Krishna Ayurvedic Hospital"
              className="h-[460px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              About Our Hospital
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14245f] md:text-4xl lg:text-[46px]">
              Shri Krishna Ayurvedic Hospital
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-gray-600">
              Shri Krishna Ayurvedic Hospital focuses on providing holistic
              patient care through traditional Ayurvedic principles supported
              by clinical consultation, diagnostics and hospital facilities.
            </p>

            <p className="mt-4 text-[16px] leading-8 text-gray-600">
              The hospital supports clinical learning for students while
              offering consultation and treatment services to patients through
              dedicated departments and trained healthcare professionals.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Experienced Ayurvedic Physicians",
                "Clinical Training Facilities",
                "Panchakarma & Wellness Care",
                "Diagnostic Support Services",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#f3faf8] p-4"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e98b0c]" />
                  <span className="font-semibold text-[#14245f]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          HOSPITAL SERVICES
      ========================================== */}
      <section id="services" className="bg-[#f7faf9] py-20">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Hospital Facilities
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Our Clinical Services
            </h2>

            <p className="mx-auto mt-4 max-w-[800px] text-base leading-7 text-gray-600">
              Explore the hospital facilities and clinical services available
              for consultation, diagnosis and treatment.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {facilities.map((facility, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-[20px] border border-[#e4e8e7] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.11)]"
              >
                <div className="h-[240px] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-[22px] font-bold text-[#14245f]">
                    {facility.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-gray-600">
                    {facility.description}
                  </p>

                  <div className="mt-5 h-[2px] w-12 bg-[#e98b0c]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          HOSPITAL PDF
      ========================================== */}
      <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-7 rounded-[22px] border border-[#dce9e5] bg-[#f3faf8] p-6 shadow-sm md:flex-row md:items-center md:p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[14px] bg-[#0a756d] text-white">
                <FileText size={30} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[2px] text-[#e98b0c]">
                  Hospital Document
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#14245f] md:text-2xl">
                  Hospital Information
                </h3>

                <p className="mt-2 max-w-[650px] text-sm leading-6 text-gray-600 md:text-base">
                  View or download the official hospital information document.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={hospitalPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[10px] bg-[#0a756d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#075b55]"
              >
                <ExternalLink size={17} />
                View PDF
              </a>

              <a
                href={hospitalPdf}
                download="hospital.pdf"
                className="inline-flex items-center gap-2 rounded-[10px] bg-[#e98b0c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c97308]"
              >
                <Download size={17} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          EMBEDDED PDF
      ========================================== */}
      <section className="bg-[#f5faf9] py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#0aa047]">
              Official Information
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Hospital Document
            </h2>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-[#dce5e2] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <iframe
              src={hospitalPdf}
              title="Hospital PDF"
              className="h-[500px] w-full md:h-[700px] lg:h-[850px]"
            />
          </div>

          <div className="mt-7 flex justify-center">
            <a
              href={hospitalPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#e98b0c] px-7 py-3.5 font-semibold text-white transition hover:bg-[#0a756d]"
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
      <section className="bg-[#0a756d] py-14">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-7 px-5 text-center md:px-8 lg:flex-row lg:px-12 lg:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[2px] text-[#f5a623]">
              Patient Care
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Consult Our Hospital Team
            </h2>

            <p className="mt-3 max-w-[700px] leading-7 text-white/80">
              Contact our hospital team for consultation, appointments and
              healthcare-related enquiries.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917209776617"
              className="rounded-xl bg-[#e98b0c] px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0a756d]"
            >
              Call Hospital
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0a756d]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hospital;