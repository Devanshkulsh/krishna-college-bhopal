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
    <section className="border-b border-gray-100 bg-white py-3 md:py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile: stacked, Desktop: grid layout */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[190px_1fr_1fr_1fr] md:gap-3">

          {/* Latest Update Box */}
          <div className="flex items-center gap-3 rounded-md bg-[#087b61] px-3 py-2 text-white md:px-4 md:py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2ac19] md:h-9 md:w-9">
              <Bell size={15} className="md:size-[17px]" />
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.15em] text-white/70 md:text-[10px]">
                Important
              </p>

              <p className="text-xs font-semibold md:text-sm">
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
                className="group flex items-center justify-between rounded-md border border-gray-100 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#087b61]/20 hover:shadow-md md:px-4 md:py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eaf8f4] text-[#087b61] md:h-8 md:w-8">
                    <Icon size={13} className="md:size-[15px]" />
                  </div>

                  <span className="text-[11px] font-medium text-gray-600 group-hover:text-[#087b61] md:text-xs">
                    {item.text}
                  </span>
                </div>

                <span className="text-[#e5a317] text-sm md:text-base">
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