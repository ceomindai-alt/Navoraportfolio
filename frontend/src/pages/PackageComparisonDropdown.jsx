import React from "react";

export default function PackageComparisonOverview() {
  return (
    <section className="py-20 px-6 relative overflow-x-auto">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.12)_0%,_transparent_45%),linear-gradient(to_bottom,#111827,#0b0f14)]" />

      <div className="max-w-7xl mx-auto text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Package Comparison Overview
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <table className="min-w-full text-sm text-center">
            <thead className="bg-white/10">
              <tr>
                <th className="border border-white/10 p-3 text-left">
                  Feature / Package
                </th>
                <th className="border border-white/10 p-3">Starter</th>
                <th className="border border-white/10 p-3">Growth</th>
                <th className="border border-white/10 p-3">Business</th>
                <th className="border border-white/10 p-3">
                  Local Business
                </th>
                <th className="border border-white/10 p-3">
                  E-commerce
                </th>
                <th className="border border-white/10 p-3">Premium</th>
              </tr>
            </thead>

            <tbody>
              {[
                [
                  "Monthly Price",
                  "₹5,000",
                  "₹10,000",
                  "₹20,000",
                  "₹15,000",
                  "₹25,000",
                  "₹50,000",
                ],
                ["Paid Ads Management", "✔", "✔", "✔", "✔", "✔", "✔"],
                ["Meta Ads", "✔", "✔", "✔", "✔", "✔", "✔"],
                ["Google Ads", "✖", "✔", "✔", "✖", "✔", "✔"],
                ["YouTube Ads", "✖", "✖", "✔", "✖", "✖", "✔"],
                ["Landing Page / Funnel", "✖", "✔", "✔", "✖", "✖", "✔"],
                ["SEO", "✖", "Basic", "Advanced", "Local", "✖", "Advanced"],
                [
                  "Google Business Profile",
                  "✖",
                  "✖",
                  "✖",
                  "✔",
                  "✖",
                  "Optional",
                ],
                [
                  "Social Media Marketing",
                  "✖",
                  "✖",
                  "✔",
                  "✖",
                  "✖",
                  "Optional",
                ],
                [
                  "CRM & Automation",
                  "✖",
                  "Basic",
                  "Advanced",
                  "✖",
                  "✔",
                  "Advanced",
                ],
                ["CRO", "✖", "✖", "✔", "✖", "✔", "✔"],
                [
                  "Reporting",
                  "Basic",
                  "Monthly",
                  "ROI-based",
                  "Local",
                  "ROAS-based",
                  "Weekly",
                ],
                ["AI Optimization", "✖", "✖", "✖", "✖", "✖", "✔"],
                [
                  "Dedicated Support",
                  "✖",
                  "✖",
                  "✔",
                  "✔",
                  "✔",
                  "Priority",
                ],
              ].map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-white/5 transition"
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="border border-white/10 p-3"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
