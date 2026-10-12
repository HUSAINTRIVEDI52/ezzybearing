"use client";

import React, { useState } from "react";
import { BookOpen } from "lucide-react";

export function TechnicalStandards() {
  const [activeTab, setActiveTab] = useState<"clearance" | "suffixes">("clearance");

  const clearances = [
    {
      code: "C2",
      name: "Radial Clearance Smaller than Normal",
      application: "High-precision machine tool spindles, gear reducers with strict run-out tolerances, electric steering columns.",
      behavior: "Zero backlash, low vibration, restricted thermal expansion margin."
    },
    {
      code: "CN / Normal",
      name: "Standard Normal Radial Clearance",
      application: "Standard industrial electric motors, water pumps, fans, automotive alternators, general industrial equipment.",
      behavior: "Balanced clearance suitable for normal operating shaft temperatures up to 80°C."
    },
    {
      code: "C3",
      name: "Radial Clearance Greater than Normal",
      application: "High-temperature electric motors, heavy vibrating screens, sugar mill conveyors, commercial vehicle hubs.",
      behavior: "Accommodates inner ring thermal expansion without pinching rolling elements. Prevents premature seizure."
    },
    {
      code: "C4",
      name: "Radial Clearance Greater than C3",
      application: "Continuous casting plants, cement rotary kilns, heavy crusher shafts subject to extreme frictional heat.",
      behavior: "Maximum thermal safety margin under continuous severe shock and thermal gradient."
    }
  ];

  const suffixes = [
    { suffix: "2RS / 2RSR", title: "Rubber Contact Seals", desc: "Nitrile rubber lip seals on both sides for dusty/wet environments; pre-greased for life." },
    { suffix: "2Z / ZZ", title: "Steel Metal Shields", desc: "Non-contact sheet steel shields on both sides; ideal for clean, high-speed applications." },
    { suffix: "NR", title: "Snap Ring & Groove", desc: "Groove with snap ring in outer ring for positive axial location inside transmission cases." },
    { suffix: "K", title: "Tapered Bore (1:12)", desc: "1:12 tapered inner ring designed for mounting with adapter sleeves (H-series) on plain shafts." },
    { suffix: "W33", title: "Lubrication Features", desc: "Peripheral oil groove and three lubrication holes in the outer ring of spherical rollers." },
    { suffix: "M / MA / MB", title: "Machined Brass Cage", desc: "Solid brass roller-guided or ring-guided cage for high-vibration screens and heavy shock." },
    { suffix: "C3", title: "Internal Clearance", desc: "Specifies elevated internal radial clearance for operating temperatures exceeding normal range." },
    { suffix: "P6 / P5", title: "Precision Tolerances", desc: "ISO tolerance class higher than normal (ABEC-3 / ABEC-5 equivalent) for reduced run-out." }
  ];

  return (
    <section id="tech-guide" className="py-16 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Diamond Motif */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9962B]/10 border border-[#C9962B]/30 text-[#C9962B] font-mono text-xs font-bold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ENGINEERING SPECIFICATION GUIDE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-[#0B1B3D] uppercase tracking-tight">
            Technical Standards &amp; Bearing Designation Guide
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
            <span className="text-[#C9962B] text-xs">◆</span>
            <span className="h-px w-12 bg-[#C9962B]/50"></span>
          </div>

          <p className="text-sm text-slate-600 font-sans">
            Ensure you order the exact bearing tolerance, clearance code, and seal suffix for your operating parameters.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-xl bg-[#F4F6FA] border border-slate-200 mt-6 shadow-sm">
            <button
              onClick={() => setActiveTab("clearance")}
              className={`px-5 py-2 rounded-lg font-heading font-extrabold text-xs uppercase tracking-wider transition-all ${
                activeTab === "clearance"
                  ? "bg-[#0B1B3D] text-[#E4B94F] shadow-sm"
                  : "text-slate-600 hover:text-black"
              }`}
            >
              Radial Internal Clearance (C2/CN/C3/C4)
            </button>
            <button
              onClick={() => setActiveTab("suffixes")}
              className={`px-5 py-2 rounded-lg font-heading font-extrabold text-xs uppercase tracking-wider transition-all ${
                activeTab === "suffixes"
                  ? "bg-[#0B1B3D] text-[#E4B94F] shadow-sm"
                  : "text-slate-600 hover:text-black"
              }`}
            >
              Suffix Glossary (2RS, ZZ, NR, K, W33)
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "clearance" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {clearances.map((c) => (
              <div
                key={c.code}
                className="p-5 rounded-xl bg-[#F4F6FA] border border-slate-200/90 hover:border-[#C9962B] transition-all shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-heading font-black text-[#0B1B3D]">
                      {c.code}
                    </span>
                    <span className="text-xs text-[#C9962B] font-mono font-bold">ISO</span>
                  </div>
                  <h3 className="text-sm font-heading font-bold text-[#0B1B3D] uppercase mb-2">
                    {c.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {c.application}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-[#0B1B3D] font-semibold">
                  {c.behavior}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {suffixes.map((s) => (
              <div
                key={s.suffix}
                className="p-5 rounded-xl bg-[#F4F6FA] border border-slate-200/90 hover:border-[#C9962B] transition-all shadow-soft"
              >
                <div className="inline-block px-2.5 py-1 rounded bg-[#0B1B3D] text-[#E4B94F] text-xs font-mono font-bold mb-2">
                  {s.suffix}
                </div>
                <h4 className="text-sm font-heading font-bold text-[#0B1B3D] uppercase mb-1.5">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TechnicalStandards;
