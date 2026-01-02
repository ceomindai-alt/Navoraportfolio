import React, { useState } from "react";

export default function PerformancePackagesFlip() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const packages = [
    {
      title: "Starter Package",
      price: "₹5,000 / Month",
      best: "New startups, solopreneurs, local businesses",
      includes: [
        "Meta Ads (Facebook & Instagram)",
        "1 Lead Generation Campaign",
        "Instant Lead Form Setup",
        "Basic Static Ad Creatives",
        "WhatsApp Lead Integration",
        "Basic Conversion Tracking",
      ],
      outcome: [
        "Initial leads within 7–10 days",
        "Market validation with low risk",
        "Ad budget not included",
      ],
    },
    {
      title: "Growth Package",
      price: "₹10,000 / Month",
      best: "Businesses needing consistent leads",
      includes: [
        "Meta Ads + Google Ads",
        "Funnel & Campaign Planning",
        "Conversion-Focused Landing Page",
        "Basic SEO (On-page & local)",
        "WhatsApp Lead Automation",
        "Conversion Tracking",
        "Monthly Performance Report",
      ],
      outcome: [
        "Stable lead flow",
        "Optimized cost per lead",
        "Ad budget not included",
      ],
    },
    {
      title: "Business Package",
      price: "₹20,000 / Month",
      best: "Businesses ready to scale",
      includes: [
        "Meta + Google + YouTube Ads",
        "Advanced Lead Funnel",
        "SEO (5–10 Keywords)",
        "Social Media Marketing (12 posts)",
        "CRM Setup & Automation",
        "WhatsApp & Email Follow-ups",
        "CRO",
        "Dedicated Account Support",
        "Monthly ROI Report",
      ],
      outcome: [
        "High-quality leads",
        "Automated follow-ups",
        "Sales-ready system",
        "Ad budget not included",
      ],
    },
    {
      title: "Local Business Dominator",
      price: "₹15,000 / Month",
      best: "Clinics, salons, gyms, restaurants",
      includes: [
        "Google Business Profile Optimization",
        "Local SEO & Maps Ranking",
        "Call & WhatsApp Lead Generation",
        "Meta Ads (Local Targeting)",
        "Review Management",
        "Weekly GBP Posts",
        "Monthly Local Report",
      ],
      outcome: ["More calls & walk-ins", "Strong local visibility"],
    },
    {
      title: "E-commerce Growth Package",
      price: "₹25,000 / Month",
      best: "D2C brands & online stores",
      includes: [
        "Meta Product Ads",
        "Google Shopping Ads",
        "Product Listing Optimization",
        "GA & Event Tracking",
        "Abandoned Cart Automation",
        "Retargeting Campaigns",
        "Monthly ROAS Report",
      ],
      outcome: [
        "Higher conversions",
        "Improved ROAS",
        "Ad budget not included",
      ],
    },
    {
      title: "Premium Scale Package",
      price: "₹50,000 / Month",
      best: "Funded startups & aggressive brands",
      includes: [
        "Full-Funnel Performance Marketing",
        "Advanced Funnel & Automation",
        "CRO & A/B Testing",
        "AI Optimization",
        "CRM & Lead Scoring",
        "Influencer & Video Strategy",
        "Weekly Reports",
        "Priority Support",
      ],
      outcome: [
        "Predictable revenue system",
        "Controlled scaling",
        "Ad budget not included",
      ],
    },
  ];

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.12)_0%,_transparent_45%),linear-gradient(to_bottom,#111827,#0b0f14)]" />

      <div className="max-w-7xl mx-auto text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Performance Marketing Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className="perspective">
              <div
                onClick={() => toggleFlip(i)}
                className={`relative h-[400px] w-full cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
                  flippedIndex === i ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 backface-hidden flex flex-col justify-center text-center">
                  <h3 className="text-2xl font-bold mb-3">
                    {pkg.title}
                  </h3>
                  <p className="text-blue-400 font-semibold text-xl">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-gray-400 mt-4">
                    Best for
                  </p>
                  <p className="text-sm font-medium mt-1">
                    {pkg.best}
                  </p>
                  <p className="mt-6 text-xs text-gray-400">
                    Click to view details
                  </p>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md text-white rounded-2xl p-6 rotate-y-180 backface-hidden overflow-y-auto border border-white/10">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">
                    Includes
                  </h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm mb-4">
                    {pkg.includes.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold mb-2 text-blue-400">
                    Outcome
                  </h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    {pkg.outcome.map((o, k) => (
                      <li key={k}>{o}</li>
                    ))}
                  </ul>

                  <p className="mt-4 text-xs text-gray-400 text-center">
                    Click to go back
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
