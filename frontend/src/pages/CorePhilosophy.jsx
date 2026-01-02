import React from "react";
import digital from "../assets/img/digital.png";
import buget from "../assets/img/buget.png";
import funnel from "../assets/img/funnel.png";
import long from "../assets/img/long.png";

export default function CorePhilosophy() {
  const items = [
    { title: "Clear business goals", img: digital },
    { title: "Budget efficiency", img: buget },
    { title: "Funnel clarity", img: funnel },
    { title: "Long-term scalability", img: long },
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.12)_0%,_transparent_45%),linear-gradient(to_bottom,#111827,#0b0f14)]" />

      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Our Core Philosophy
        </h2>

        <p className="font-semibold text-center mb-12 text-gray-300">
          We don’t sell isolated services. We build lead and revenue systems.
        </p>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl p-6 text-center bg-white/5"
            >
              <p className="text-xl md:text-2xl font-medium mb-4">{item.title}</p>

              {/* IMAGE SIZE FIXED */}
              <img
                src={item.img}
                alt={item.title}
                className="
                  mx-auto 
                  w-full 
                  h-40 
                  md:h-44 
                  lg:h-56 
                  object-cover 
                  rounded-lg
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
