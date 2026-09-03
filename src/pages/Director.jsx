import React from "react";

import {
  Quote,
  Stethoscope,
  HeartPulse,
  Building2,
  Users,
  BookOpenCheck,
  HandHeart,
} from "lucide-react";

const DirectorMessage = () => {
  const highlights = [
    {
      icon: Stethoscope,
      text: "A team of highly qualified and experienced Ayurvedic physicians and Panchakarma experts.",
    },
    {
      icon: Building2,
      text: "Modern infrastructure complemented with traditional therapy rooms.",
    },
    {
      icon: BookOpenCheck,
      text: "Evidence-based treatments grounded in classical Ayurvedic texts.",
    },
    {
      icon: HeartPulse,
      text: "Patient-centric approach ensuring personalised healing journeys.",
    },
    {
      icon: Users,
      text: "Community outreach through health awareness camps and wellness initiatives.",
    },
  ];

  return (
    <main className="bg-white text-[#17352c]">

      {/* ================= PAGE BANNER ================= */}

      <section className="relative overflow-hidden bg-[#0f5f43]">

        {/* Decorative Circles */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

        <div className="absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-[#d68a1f]/10" />

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

            <h1
              className="
                mt-5
                text-[34px]
                font-extrabold
                leading-tight
                text-white
                sm:text-[42px]
                lg:text-[48px]
              "
            >
              Director Message
            </h1>

          </div>

        </div>

        <div className="h-[4px] w-full bg-[#d68a1f]" />

      </section>

      {/* ================= MESSAGE INTRO ================= */}

      <section className="py-10 md:py-12">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-start
            gap-8
            px-4
            sm:px-6
            lg:grid-cols-[0.8fr_1.2fr]
            lg:px-8
          "
        >

          {/* LEFT CARD */}

          <div className="rounded-2xl bg-[#f2f8f4] p-7 shadow-sm">

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#0f5f43]
              "
            >
              <HandHeart className="h-7 w-7 text-white" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#17352c]">
              Director & Medical Superintendent
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Shri Krishna Ayurvedic Hospital, Chhatarpur (M.P.)
            </p>

            <div
              className="
                mt-6
                rounded-xl
                border-l-4
                border-[#d68a1f]
                bg-white
                p-5
              "
            >
              <Quote className="h-7 w-7 text-[#d68a1f]" />

              <p className="mt-3 leading-7 text-gray-600">
                Promoting Ayurveda as a way of life rooted in balance, nature,
                compassion and inner peace.
              </p>
            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <span
              className="
                inline-block
                rounded-full
                bg-[#eaf7ed]
                px-4
                py-2
                text-sm
                font-semibold
                text-[#0f6b49]
              "
            >
              Dear Visitors
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                leading-tight
                text-[#17352c]
                md:text-4xl
              "
            >
              Message from the Director
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-[#d68a1f]" />

            <div className="mt-7 space-y-5 text-[16px] leading-8 text-gray-600">

              <p>
                It is both an honour and a heartfelt responsibility to serve as
                the Director & Medical Superintendent of Shri Krishna Ayurvedic
                Hospital, Chhatarpur — an institution envisioned as a centre of
                excellence for Ayurvedic healing and holistic well-being.
              </p>

              <p>
                At a time when modern lifestyles are increasingly stressful and
                illness is often managed symptomatically, our hospital stands as
                a beacon of integrative healthcare, offering ancient Ayurvedic
                wisdom fused with scientific diagnostic precision.
              </p>

              <p>
                Here, we don’t just treat ailments — we treat individuals,
                respecting their unique constitution (Prakriti), and guiding
                them towards long-term balance and vitality.
              </p>

              <p>
                Founded on the principles of Dharma (duty), Seva (service), and
                Shuddhata (purity), Shri Krishna Ayurvedic Hospital is not just
                a medical institution — it is a commitment to natural healing,
                preventive care, and ethical medical service.
              </p>

              <p>
                Our aim is to make quality Ayurvedic care not just accessible
                but also affordable and sustainable, especially for the
                underprivileged and rural communities of Bundelkhand and
                beyond.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= HIGHLIGHTS ================= */}

      <section className="bg-[#f7faf8] py-10 md:py-12">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <span
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#d68a1f]
              "
            >
              Our Strength
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#17352c]">
              We Take Pride In
            </h2>

          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    rounded-2xl
                    border
                    border-[#dfece3]
                    bg-white
                    p-6
                    shadow-sm
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#eaf7ed]
                    "
                  >
                    <Icon className="h-6 w-6 text-[#0f6b49]" />
                  </div>

                  <p className="mt-5 leading-7 text-gray-600">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= CLOSING MESSAGE ================= */}

      <section className="py-10 md:py-12">

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div
            className="
              rounded-3xl
              bg-[#0f5f43]
              p-7
              text-white
              md:p-10
            "
          >

            <Quote className="h-10 w-10 text-[#f0b35a]" />

            <div className="mt-6 space-y-5 text-[16px] leading-8 text-white/85">

              <p>
                In this hospital, every patient is seen as a guest of the divine,
                and every healing journey is guided by compassion, authenticity,
                and scientific reasoning.
              </p>

              <p>
                As we move forward, our vision is to expand this institution
                into a model Ayurvedic healthcare hub for the region —
                contributing not just to clinical care, but also to education,
                research, and societal wellness.
              </p>

              <p>
                I invite you all — patients, students, collaborators, and seekers
                — to join hands with us in this sacred mission of promoting
                Ayurveda as a way of life, rooted in balance, nature, and inner
                peace.
              </p>

            </div>

            <div className="mt-8 border-t border-white/20 pt-6">

              <p className="text-lg font-bold text-white">
                Director & Medical Superintendent
              </p>

              <p className="mt-1 text-sm text-white/75">
                Shri Krishna Ayurvedic Hospital, Chhatarpur (M.P.)
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default DirectorMessage;