import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  Hospital,
  Navigation,
  ArrowRight,
} from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Our Address",
    content:
      "N-H 86, Village Chauka, Sagar Road, Chhatarpur, Madhya Pradesh",
    action: "Get Directions",
    href: "https://www.google.com/maps/search/?api=1&query=N-H+86+Village+Chauka+Sagar+Road+Chhatarpur+Madhya+Pradesh",
  },
  {
    icon: Phone,
    title: "Contact Number",
    content: "+91 6262180303",
    action: "Call Now",
    href: "tel:+916262180303",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "skahospitel2022@gmail.com",
    action: "Send Email",
    href: "mailto:skahospitel2022@gmail.com",
  },
  {
    icon: Clock3,
    title: "Hospital Support",
    content:
      "Contact our hospital team for appointments and patient enquiries.",
    action: "Contact Hospital",
    href: "tel:+916262180303",
  },
];

const Contact = () => {
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
              Contact Us
            </h1>

          </div>
        </div>

        {/* Bottom Orange Line */}
        <div className="h-[4px] w-full bg-[#d68a1f]" />

      </section>


      {/* =====================================================
          CONTACT CARDS
      ====================================================== */}
      <section className="relative z-10 -mt-8 pb-16">

        <div className="mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {contactCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex min-h-[260px] flex-col rounded-[22px] border border-[#e0e9e6] bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.13)]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#edf8f5] text-[#0a756d] transition duration-300 group-hover:bg-[#0a756d] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-[21px] font-bold text-[#14245f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                    {item.content}
                  </p>

                  <a
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0a756d] transition hover:text-[#e98b0c]"
                  >
                    {item.action}
                    <ArrowRight size={16} />
                  </a>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN CONTACT SECTION
      ====================================================== */}
      <section className="bg-[#f6faf9] py-16 md:py-20">

        <div className="mx-auto grid max-w-[1450px] gap-10 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">

          {/* LEFT INFO */}
          <div>

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#14245f] md:text-4xl">
              We’re Here to Assist You
            </h2>

            <p className="mt-5 max-w-[650px] text-[16px] leading-8 text-gray-600">
              Whether you need information about hospital treatment,
              appointments, academic services or general queries, our team is
              ready to assist you.
            </p>


            <div className="mt-8 space-y-5">

              {/* ADDRESS */}
              <div className="flex items-start gap-4 rounded-[18px] border border-[#e0e9e6] bg-white p-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf8f5] text-[#0a756d]">
                  <MapPin size={23} />
                </div>

                <div>

                  <p className="text-sm font-semibold text-gray-500">
                    Visit Us
                  </p>

                  <p className="mt-1 font-bold leading-7 text-[#14245f]">
                    N-H 86, Village Chauka, Sagar Road, Chhatarpur,
                    Madhya Pradesh
                  </p>

                </div>

              </div>


              {/* PHONE */}
              <div className="flex items-start gap-4 rounded-[18px] border border-[#e0e9e6] bg-white p-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf8f5] text-[#0a756d]">
                  <Phone size={23} />
                </div>

                <div>

                  <p className="text-sm font-semibold text-gray-500">
                    Call Us
                  </p>

                  <a
                    href="tel:+916262180303"
                    className="mt-1 block font-bold text-[#14245f] transition hover:text-[#e98b0c]"
                  >
                    +91 6262 180 303 / 707
                  </a>

                </div>

              </div>


              {/* EMAIL */}
              <div className="flex items-start gap-4 rounded-[18px] border border-[#e0e9e6] bg-white p-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf8f5] text-[#0a756d]">
                  <Mail size={23} />
                </div>

                <div>

                  <p className="text-sm font-semibold text-gray-500">
                    Email Us
                  </p>

                  <a
                    href="mailto:skahospitel2022@gmail.com"
                    className="mt-1 block break-all font-bold text-[#14245f] transition hover:text-[#e98b0c]"
                  >
                    skahospitel2022@gmail.com
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* RIGHT FORM */}
          <div className="rounded-[24px] border border-[#e0e9e6] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.07)] md:p-8 lg:p-10">

            <div className="mb-7">

              <p className="text-sm font-bold uppercase tracking-[2px] text-[#e98b0c]">
                Send a Message
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#14245f] md:text-3xl">
                How Can We Help You?
              </h3>

            </div>


            <form className="space-y-5">

              <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-semibold text-[#14245f]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 bg-[#f9fbfa] px-4 py-3.5 outline-none transition focus:border-[#0a756d]"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-sm font-semibold text-[#14245f]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-gray-200 bg-[#f9fbfa] px-4 py-3.5 outline-none transition focus:border-[#0a756d]"
                  />

                </div>

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-[#14245f]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-gray-200 bg-[#f9fbfa] px-4 py-3.5 outline-none transition focus:border-[#0a756d]"
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-[#14245f]">
                  Subject
                </label>

                <select className="w-full rounded-xl border border-gray-200 bg-[#f9fbfa] px-4 py-3.5 outline-none transition focus:border-[#0a756d]">
                  <option>Select enquiry type</option>
                  <option>Hospital Enquiry</option>
                  <option>Appointment</option>
                  <option>Admission Enquiry</option>
                  <option>General Enquiry</option>
                </select>

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-[#14245f]">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-[#f9fbfa] px-4 py-3.5 outline-none transition focus:border-[#0a756d]"
                />

              </div>


              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0a756d] px-7 py-4 font-bold !text-white transition duration-300 hover:bg-[#e98b0c] md:w-auto"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>


      {/* =====================================================
          MAP
      ====================================================== */}
      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">

          <div className="mb-9 text-center">

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf8f5] text-[#0a756d]">
              <Navigation size={26} />
            </div>

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#0aa047]">
              Our Location
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#14245f] md:text-4xl">
              Visit Shri Krishna Ayurvedic Hospital
            </h2>

          </div>


          <div className="overflow-hidden rounded-[24px] border border-[#e0e9e6] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">

            <iframe
              title="Shri Krishna Ayurvedic Hospital Location"
              src="https://www.google.com/maps?q=N-H%2086%20Village%20Chauka%20Sagar%20Road%20Chhatarpur%20Madhya%20Pradesh&output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="bg-[#0a756d] py-14">

        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-7 px-5 text-center md:px-8 lg:flex-row lg:px-12 lg:text-left">

          <div className="flex items-start gap-4">

            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white sm:flex">
              <Hospital size={27} />
            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-[2px] text-[#f5a623]">
                Hospital Assistance
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Need Immediate Assistance?
              </h2>

              <p className="mt-3 max-w-[700px] leading-7 text-white/80">
                Call our hospital team for patient support, appointment
                information and general enquiries.
              </p>

            </div>

          </div>


          <a
            href="tel:+916262180303"
            className="shrink-0 rounded-xl bg-[#e98b0c] px-8 py-4 font-bold !text-white transition hover:bg-white hover:!text-[#0a756d]"
          >
            Call +91 6262 180 303
          </a>

        </div>

      </section>

    </main>
  );
};

export default Contact;