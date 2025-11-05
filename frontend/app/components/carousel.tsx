"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ArrowLeftIcon = (props: React.ComponentProps<'svg'>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14.71 18.29l-1.42 1.42L5.59 12l7.7-7.71 1.42 1.42L8.41 12l6.3 6.29z" /></svg>
);
const ArrowRightIcon = (props: React.ComponentProps<'svg'>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M9.29 18.29l1.42 1.42L18.41 12l-7.7-7.71-1.42 1.42L15.59 12l-6.3 6.29z" /></svg>
);

const slides = [
    { src: "/mobil1.png", alt: "Iswarayana Racing car model 1" },
    { src: "/mobil2.png", alt: "Iswarayana Racing car model 2" },
    { src: "/mobil3.png", alt: "Iswarayana Racing car model 3" },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);


    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(nextSlide, 2000);
        return () => clearTimeout(timeoutRef.current!);
    }, [current]);


    const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) nextSlide();
        if (touchStart - touchEnd < -50) prevSlide();
    };

    return (
        <div
            className="relative w-full h-screen overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >

            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <div key={i} className="relative min-w-full h-full">
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            className="object-cover object-center"
                            priority={i === 0}
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-zinc-800 to-transparent"></div>
                    </div>
                ))}
            </div>


            <button onClick={prevSlide} className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-all">
                <ArrowLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-all">
                <ArrowRightIcon className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`cursor-pointer transition-all ${i === current
                                ? "w-3 h-3 bg-white rounded-full"
                                : "w-3 h-3 border border-white rounded-full bg-transparent opacity-60"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
