import React, { useState } from "react";
import { ArrowDown } from "lucide-react";

export default function IndustriesWeServe() {
  const [openAll, setOpenAll] = useState(false);

  const row1 = [
    {
      title: "Real Estate",
      items: [
        "Project launches",
        "Site-visit lead generation",
        "WhatsApp & CRM follow-ups",
        "Google & local ads",
      ],
    },
    {
      title:
        "Local Businesses (Clinics, salons, gyms, restaurants, service providers)",
      items: [
        "Google Business Profile optimization",
        "Call & WhatsApp lead generation",
        "Local SEO & paid ads",
      ],
    },
    {
      title: "Startups & Small Businesses",
      items: [
        "Budget-friendly growth strategies",
        "Funnel testing & validation",
        "Performance-based scaling",
      ],
    },
  ];

  const row2 = [
    {
      title: "E-commerce & D2C",
      items: [
        "Product & shopping ads",
        "Conversion optimization",
        "Abandoned cart recovery",
      ],
    },
    {
      title: "Education & Training Institutes",
      items: [
        "Lead forms & webinar funnels",
        "Course promotion campaigns",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
        Industries We Serve
      </h2>

      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {row1.map((industry, index) => (
          <IndustryBox
            key={index}
            industry={industry}
            openAll={openAll}
            toggle={() => setOpenAll(!openAll)}
          />
        ))}
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-4xl mx-auto">
        {row2.map((industry, index) => (
          <IndustryBox
            key={index}
            industry={industry}
            openAll={openAll}
            toggle={() => setOpenAll(!openAll)}
          />
        ))}
      </div>
    </section>
  );
}

/* ================= BOX ================= */
function IndustryBox({ industry, openAll, toggle }) {
  return (
    <div className="border border-white/80 rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={toggle}
        className="w-full p-6 flex flex-col items-center justify-center text-center gap-3"
      >
        {/* TITLE */}
        <h3 className="text-lg font-semibold text-white leading-snug">
          {industry.title}
        </h3>

        {/* ARROW */}
        <ArrowDown
          className={`
            h-6 w-6 text-white
            transition-transform duration-300
            ${openAll ? "rotate-180" : ""}
            animate-bounce
          `}
        />

        {/* LEARN MORE (ONLY WHEN CLOSED) */}
        {!openAll && (
          <span className="text-sm text-white/70">
            Learn more...
          </span>
        )}
      </button>

      {/* EXPAND CONTENT */}
      <div
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${openAll ? "max-h-96 px-6 pb-6" : "max-h-0"}
        `}
      >
        <ul className="list-disc ml-6 space-y-2 text-white/90">
          {industry.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
