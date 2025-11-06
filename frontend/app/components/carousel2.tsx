"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const ArrowLeftIcon = (props: React.ComponentProps<'svg'>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14.71 18.29l-1.42 1.42L5.59 12l7.7-7.71 1.42 1.42L8.41 12l6.3 6.29z" /></svg>
);
const ArrowRightIcon = (props: React.ComponentProps<'svg'>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M9.29 18.29l1.42 1.42L18.41 12l-7.7-7.71-1.42 1.42L15.59 12l-6.3 6.29z" /></svg>
);


const images = [
  { src: "/hitam-copy.png", alt: "IW-101" },
  { src: "/biru-copy.png", alt: "IW-202" },
  { src: "/orange-copy.png", alt: "IW-303" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) nextSlide(); 
    if (touchStartX.current - touchEndX.current < -50) prevSlide(); 
  };

  return (
    <div
      className="relative w-full max-w-3xl lg:h-108 mx-auto overflow-hidden rounded-2xl bg-gray-200"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full shrink-0 relative h-64 sm:h-80 md:h-96">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain"
              priority={i === 0}
            />
            <div className="absolute bottom-6 w-full text-center text-cyan-400 font-bold text-lg">
              {img.alt}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-zinc-900/40 to-transparent pointer-events-none"></div>

      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-all"
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-all"
      >
        <ArrowRightIcon className="w-6 h-6" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full border border-white transition-all duration-300 ${
              currentIndex === i ? "bg-white scale-125" : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
