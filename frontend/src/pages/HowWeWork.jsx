import React from "react";

export default function HowWeWork() {
  return (
    <section className="py-20 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.12)_0%,_transparent_45%),linear-gradient(to_bottom,#111827,#0b0f14)]" />

      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          How We Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* STEP 01 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <span className="text-sm font-semibold text-blue-400">
              Step 01
            </span>
            <h3 className="text-xl font-semibold mt-2">
              Understanding & Strategy
            </h3>
            <p className="mt-2 text-gray-300">
              Business analysis, competitor review, funnel planning
            </p>
          </div>

          {/* STEP 02 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <span className="text-sm font-semibold text-blue-400">
              Step 02
            </span>
            <h3 className="text-xl font-semibold mt-2">
              Setup & Integration
            </h3>
            <p className="mt-2 text-gray-300">
              Ads, tracking, landing pages, CRM & WhatsApp
            </p>
          </div>

          {/* STEP 03 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <span className="text-sm font-semibold text-blue-400">
              Step 03
            </span>
            <h3 className="text-xl font-semibold mt-2">
              Launch & Testing
            </h3>
            <p className="mt-2 text-gray-300">
              Creative testing, audience testing, optimization
            </p>
          </div>

          {/* STEP 04 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:col-span-2">
            <span className="text-sm font-semibold text-blue-400">
              Step 04
            </span>
            <h3 className="text-xl font-semibold mt-2">
              Optimization & Scaling
            </h3>
            <p className="mt-2 text-gray-300">
              Cost control and lead quality improvement
            </p>
          </div>

          {/* STEP 05 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <span className="text-sm font-semibold text-blue-400">
              Step 05
            </span>
            <h3 className="text-xl font-semibold mt-2">
              Reporting & Review
            </h3>
            <p className="mt-2 text-gray-300">
              Transparent performance reports and insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
