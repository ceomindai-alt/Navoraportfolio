import React, { useEffect, useRef, useState } from "react";
import st from "../assets/img/st.png";
import seo from "../assets/img/seo.png";
import ad from "../assets/img/ad.png";
import web from "../assets/img/web.png";

export default function IndividualServicesCards() {
  const services = [
    {
      title: "Strategy & Planning",
      image: st,
      items: [
        "Digital marketing roadmap: ₹5,000 – ₹10,000",
        "Competitor & market analysis: ₹3,000 – ₹6,000",
      ],
    },
    {
      title: "SEO Services",
      image: seo,
      items: [
        "Basic SEO: ₹5,000 / month",
        "Standard SEO: ₹8,000 – ₹12,000 / month",
        "Local SEO + GBP: ₹3,000 – ₹5,000 / month",
        "SEO audit: ₹3,000 – ₹6,000",
      ],
    },
    {
      title: "Paid Ads Management",
      image: ad,
      items: [
        "Meta Ads: ₹5,000 – ₹10,000 / month",
        "Google Ads: ₹7,000 – ₹12,000 / month",
        "YouTube Ads: ₹6,000 – ₹10,000 / month",
      ],
    },
    {
      title: "Website, Content & Automation",
      image: web,
      items: [
        "Landing page: ₹3,000 – ₹6,000",
        "One-page website: ₹5,000",
        "5-page website: ₹12,000 – ₹15,000",
        "Reels editing: ₹500 – ₹1,500",
        "CRM setup: ₹3,000 – ₹5,000",
        "WhatsApp integration: ₹1,000 – ₹2,000",
      ],
    },
  ];

  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" && window.innerWidth >= 1024
  );

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScroll = section.offsetHeight - window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / totalScroll, 0),
        1
      );

      setActiveIndex(Math.round(progress * (services.length - 1)));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop, services.length]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        height: isDesktop ? `${services.length * 100}vh` : "auto",
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15)_0%,_transparent_45%),linear-gradient(to_bottom,#0b1220,#020617)]" />

      {/* FIXED HEADER (NO OVERLAP) */}
{/* HEADER – SCROLLS AWAY NATURALLY */}
<div className="pt-24 pb-20 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-white">
    Individual Services
  </h2>
  <p className="text-gray-400 mt-2">
    (For testing or one-time requirements)
  </p>
</div>



      {/* DESKTOP CONTENT */}
      <div className="hidden lg:flex sticky top-[220px] h-[calc(100vh-220px)] items-center px-16 gap-16">
        {/* IMAGE */}
        <div className="w-1/2">
          <img
            src={services[activeIndex].image}
            alt={services[activeIndex].title}
            className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* CONTENT CARD */}
        <div className="w-1/2">
          <div className="max-w-[520px] rounded-2xl p-8 bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              {services[activeIndex].title}
            </h3>

            <ul className="list-disc ml-6 space-y-3 text-gray-300">
              {services[activeIndex].items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* MOBILE STACK */}
      <div className="lg:hidden px-6 pb-24 space-y-12">
        {services.map((service, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 shadow-2xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-300">
                {service.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
