import React from "react";
import {
  Bell,
  BookOpen,
  FileText,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const updates = [
  {
    icon: GraduationCap,
    text: "BAMS Admission 2026-27 Open",
    href: "/admission",
  },
  {
    icon: FileText,
    text: "Latest Notification",
    href: "/notifications",
  },
  {
    icon: ShieldCheck,
    text: "NCISM Mandates",
    href: "/ncism",
  },
];

const LatestUpdates = () => {
  return (
    <section className="border-b border-gray-100 bg-white py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 md:grid-cols-[190px_1fr_1fr_1fr]">

          {/* Latest Update Box */}
          <div className="flex items-center gap-3 rounded-md bg-[#087b61] px-4 py-3 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2ac19]">
              <Bell size={17} />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-white/70">
                Important
              </p>

              <p className="text-sm font-semibold">
                Latest Updates
              </p>
            </div>
          </div>

          {/* Update Items */}
          {updates.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.href}
                className="group flex items-center justify-between rounded-md border border-gray-100 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#087b61]/20 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf8f4] text-[#087b61]">
                    <Icon size={15} />
                  </div>

                  <span className="text-xs font-medium text-gray-600 group-hover:text-[#087b61]">
                    {item.text}
                  </span>
                </div>

                <span className="text-[#e5a317]">
                  →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;