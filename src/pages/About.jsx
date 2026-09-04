import React from "react";
import {
  HeartPulse,
  Leaf,
  Stethoscope,
  Users,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Brain,
  Salad,
  Flower2,
  Sparkles,
} from "lucide-react";

const About = () => {
  const philosophyPoints = [
    "Understanding the root cause of diseases rather than merely treating symptoms.",
    "Offering natural, side-effect-free treatments that align with the body's own healing abilities.",
    "Providing preventive care, curative therapies, and lifestyle guidance for long-term well-being.",
  ];

  const services = [
    {
      icon: Flower2,
      title: "Panchakarma Therapy",
      description: "Detoxification and rejuvenation through authentic Ayurvedic procedures.",
    },
    {
      icon: Activity,
      title: "Chronic Disorder Management",
      description:
        "Ayurvedic management of arthritis, diabetes, hypertension, skin diseases and other chronic conditions.",
    },
    {
      icon: Salad,
      title: "Lifestyle & Diet Consultation",
      description:
        "Personalised diet and lifestyle guidance based on individual Prakriti (constitution).",
    },
    {
      icon: Leaf,
      title: "Herbal Medicines",
      description:
        "Herbal medicines prepared and prescribed according to classical Ayurvedic texts.",
    },
    {
      icon: Brain,
      title: "Mental Wellness Therapies",
      description:
        "Stress management, meditation and Rasayana Chikitsa for physical and mental well-being.",
    },
  ];

  const teamPoints = [
    "Qualified BAMS and MD Ayurveda doctors.",
    "Skilled Panchakarma therapists.",
    "Supportive paramedical staff experienced in Ayurvedic procedures.",
  ];

  const locationPoints = [
    "A naturally calm environment conducive to healing.",
    "Pollution-free fresh air and proximity to nature.",
    "Space for Yoga, meditation and nature-based therapies.",
  ];

  const commitmentPoints = [
    "Offering ethical, evidence-based Ayurvedic treatment.",
    "Creating awareness about preventive health and wellness.",
    "Serving both urban and rural populations with equal dedication and care.",
    "Promoting Ayurveda as a scientific, effective and sustainable healthcare system.",
  ];

  return (
    <main className="bg-white text-[#17352c]">
      {/* ================= PAGE BANNER ================= */}
      {/* ================= PAGE BANNER ================= */}
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
        About Us
      </h1>

    </div>
  </div>

  {/* Bottom Orange Line */}
  <div className="h-[4px] w-full bg-[#d68a1f]" />
</section>
      {/* ================= ABOUT INTRO ================= */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://skuayurvedic.com/bliding1.jpeg"
                alt="Shri Krishna Ayurvedic Hospital"
                className="h-[320px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[420px] lg:h-[520px]"
              />
            </div>

            <div className="absolute -bottom-5 left-5 right-5 rounded-xl bg-white p-4 shadow-lg sm:left-auto sm:right-5 sm:w-[270px]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7f5eb]">
                  <HeartPulse className="h-6 w-6 text-[#247a3d]" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Our Purpose</p>
                  <p className="font-semibold text-[#17352c]">
                    Healing Through Ayurveda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-[#eaf7ed] px-4 py-2 text-sm font-semibold text-[#247a3d]">
              About Our Hospital
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#183b2b] md:text-4xl">
              Authentic Ayurvedic Care With a Modern Approach
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-[#e98608]" />

            <div className="mt-7 space-y-5 text-[16px] leading-8 text-gray-600">
              <p>
                <strong className="font-semibold text-[#1f6335]">
                  Shri Krishna Ayurvedic Hospital,
                </strong>{" "}
                located at Village Chowka, Sagar Road, Chhatarpur (Madhya
                Pradesh), is a dedicated centre of Ayurvedic healthcare
                committed to reviving and integrating the ancient healing
                wisdom of Ayurveda with evidence-based modern diagnostic
                techniques.
              </p>

              <p>
                Established with the vision to provide affordable, authentic,
                and holistic Ayurvedic care, the hospital aims to serve both
                rural and urban populations with compassion and scientific
                precision.
              </p>

              <p>
                Registered under the Madhya Pradesh Upcharyagriha Tatha
                Rajopchar Sambandhi Sthapanaye (Ragistrikaran Tatha Anugyapan)
                Adhiniyam, 1973, with{" "}
                <strong className="text-[#17352c]">
                  Registration No. NH/6717/JUN-2022
                </strong>
                , Shri Krishna Ayurvedic Hospital ensures that all treatments
                comply with the regulatory norms of healthcare in India.
              </p>

              <p className="font-medium text-[#27583a]">
                At Shri Krishna Ayurvedic Hospital, we are not only treating
                diseases—we are nurturing lives, restoring harmony, and
                guiding individuals toward a healthier and more meaningful
                life through Ayurveda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDATION ================= */}
      <section className="bg-[#f7fbf7] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#e98608]">
              What We Believe
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#183b2b] md:text-4xl">
              Our Foundation & Philosophy
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Shri Krishna Ayurvedic Hospital was established with the vision
              of reviving the ancient Indian system of medicine and providing
              it in a structured, legal, and professional environment.
              Ayurveda is not just a treatment method for us — it is a way of
              life.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {philosophyPoints.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[#dcebdd] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf7ed] transition group-hover:bg-[#247a3d]">
                  <Leaf className="h-6 w-6 text-[#247a3d] group-hover:text-white" />
                </div>

                <p className="leading-7 text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#e98608]">
              Ayurvedic Healthcare
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#183b2b] md:text-4xl">
              Our Services Include
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#247a3d]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_8px_35px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#b8dabf]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#e9f7ec] transition group-hover:bg-[#247a3d]">
                    <Icon className="h-7 w-7 text-[#247a3d] transition group-hover:text-white" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#183b2b]">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="bg-[#A3621D] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5b544]">
              Professional Care
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Our Team</h2>

            <p className="mt-6 max-w-xl leading-8 text-white">
              Our hospital is managed and served by a dedicated team of
              qualified and skilled healthcare professionals committed to
              providing authentic Ayurvedic treatment.
            </p>

            <div className="mt-8 space-y-4">
              {teamPoints.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f5b544]" />
                  <span className="leading-7 text-white">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-7 border-l-4 border-[#f5b544] pl-5 leading-7 text-white">
              We maintain patient-centric ethics with utmost professionalism
              and compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 p-7 backdrop-blur-sm">
              <Stethoscope className="h-9 w-9 text-[#f5b544]" />
              <h3 className="mt-5 text-lg font-bold">Qualified Doctors</h3>
              <p className="mt-2 text-sm leading-6 text-white">
                BAMS & MD Ayurveda professionals
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 p-7 backdrop-blur-sm">
              <Sparkles className="h-9 w-9 text-[#f5b544]" />
              <h3 className="mt-5 text-lg font-bold">
                Panchakarma Therapists
              </h3>
              <p className="mt-2 text-sm leading-6 text-white">
                Skilled in traditional therapies
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-7 backdrop-blur-sm">
              <Users className="h-9 w-9 text-[#f5b544]" />
              <h3 className="mt-5 text-lg font-bold">Support Staff</h3>
              <p className="mt-2 text-sm leading-6 text-white">
                Experienced paramedical professionals
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 p-7 backdrop-blur-sm">
              <HeartPulse className="h-9 w-9 text-[#f5b544]" />
              <h3 className="mt-5 text-lg font-bold">Patient Centric</h3>
              <p className="mt-2 text-sm leading-6 text-white">
                Professional and compassionate care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-[#eff8f1] p-8 md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#247a3d]">
              <MapPin className="h-7 w-7 text-white" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-[#183b2b]">
              Our Location Advantage
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Situated away from the noise and pollution of urban centres, the
              hospital’s rural setting in Village Chowka provides an
              environment ideally suited for healing and rejuvenation.
            </p>
          </div>

          <div className="space-y-5">
            {locationPoints.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf7ed]">
                  <CheckCircle2 className="h-5 w-5 text-[#247a3d]" />
                </div>

                <p className="pt-1 leading-7 text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="bg-[#f8faf8] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex flex-col justify-center bg-[#168486] p-8 text-white md:p-12">
                <ShieldCheck className="h-12 w-12 text-[#ffd166]" />

                <h2 className="mt-6 text-3xl font-bold">Our Commitment</h2>

                <p className="mt-5 leading-8 text-white/80">
                  Delivering authentic Ayurveda with ethics, compassion,
                  scientific approach and a strong commitment to community
                  wellness.
                </p>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid gap-5 sm:grid-cols-2">
                  {commitmentPoints.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#e98608]" />
                      <p className="leading-7 text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;