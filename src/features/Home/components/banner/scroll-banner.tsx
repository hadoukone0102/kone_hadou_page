"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { banner } from ".";

type BannerProps = {
  className?: string;
};

export default function ScrollingBanner({ className }: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Navigation vers la slide suivante
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % banner.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  // Navigation vers la slide précédente
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + banner.length) % banner.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  // Navigation directe vers une slide
  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className={`relative w-full h-[550px] bg-primary overflow-hidden ${className}`}>
      {/* Images du banner */}
      {banner.map((slide, index) => (
        <div
          key={slide.id + index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image de fond */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Contenu textuel centré */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-xs px-8 py-6 md:px-12 md:py-8 lg:px-16 lg:py-10 lg:w-5xl lg:h-100 flex flex-col items-center justify-center max-w-4xl mx-4">
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-light leading-tight mb-4 uppercase text-center">
                {slide.title.split(",").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h1>
              <p className="text-white italic text-lg leading-relaxed text-base md:text-lg lg:text-xl font-light text-center">
                <small className="text-sm px-2">{"<<"}</small>
                {slide.desc}
                <small className="text-sm px-2">{">>"}</small>
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
        aria-label="Slide précédente"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
        aria-label="Slide suivante"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicateurs de pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {banner.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 w-3 hover:bg-white/70"
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}