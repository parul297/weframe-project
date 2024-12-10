"use client";
import Image from "next/image";
import { useRef } from "react";
import Card from "./Card";

const Slider = () => {
  const div = useRef();

  const handleClick = (e) => {
    if (e.currentTarget.id === "left") {
      div.current.scrollBy({ left: -600, behavior: "smooth" });
    } else {
      div.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <section className="my-container py-8 relative">
      <div className="flex items-center justify-between pb-6">
        <h1 className="font-cabinet font-medium text-gray-800 text-3xl">
          Articles similaires
        </h1>
        <h2 className="font-cabinet font-medium text-gray-800 underline text-sm cursor-pointer">
          Voir toute la collection
        </h2>
      </div>

      <div className="relative">
        <button
          id="left"
          onClick={(e) => handleClick(e)}
          className="absolute cursor-pointer bg-[#5CD2DD] p-3 z-10 left-0 top-1/2 -translate-y-1/2 rounded-full shadow-md"
        >
          <Image
            src="/left_arrow.png"
            alt="left arrow"
            width={24}
            height={24}
          />
        </button>
        <button
          id="right"
          onClick={(e) => handleClick(e)}
          className="absolute cursor-pointer bg-[#5CD2DD] p-3 z-10 right-0 top-1/2 -translate-y-1/2 rotate-180 rounded-full shadow-md"
        >
          <Image
            src="/left_arrow.png"
            alt="right arrow"
            width={24}
            height={24}
          />
        </button>

        <div
          ref={div}
          className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {Array.from({ length: 15 }).map((e, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
