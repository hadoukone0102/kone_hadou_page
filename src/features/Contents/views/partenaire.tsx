"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";

export default function PartnersCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    const partners = [
        {
            id: 1,
            name: "SEPALUMIC",
            logo: "/partenaire/sep.jpg",
            description: "Leader en systèmes de menuiserie aluminium haute performance"
        },
        {
            id: 2,
            name: "SOMFY",
            logo: "/partenaire/som.png",
            description: "Solutions de motorisation et automatisation pour la maison"
        },
        {
            id: 3,
            name: "SAINT-GOBAIN",
            logo: "/partenaire/ubn.png",
            description: "Fabricant mondial de matériaux de construction et verres"
        },
        {
            id: 4,
            name: "AGC Glass",
            logo: "/partenaire/agc.png",
            description: "Producteur mondial de verre plat, de verre automobile et d'applications"
        },
        {
            id: 5,
            name: "Groupe ABCD",
            logo: "/partenaire/abcd.png",
            description: "Spécialiste en quincaillerie et accessoires pour menuiserie"
        }
    ];

    // Gestion responsive
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, partners.length - itemsPerView);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < maxIndex;

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Ils Nous Font Confiance
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        SIGLASS collabore avec les plus grandes marques internationales pour vous garantir des produits de qualité supérieure
                    </p>
                </div>

                {/* Carrousel Container */}
                <div className="relative">
                    {/* Bouton Précédent */}
                    <button
                        onClick={handlePrev}
                        disabled={!canGoPrev}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-300 ${
                            canGoPrev
                                ? 'text-secondary hover:bg-[#3193bd] hover:text-white hover:scale-110'
                                : 'text-gray-300 cursor-not-allowed'
                        }`}
                        aria-label="Partenaire précédent"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Carrousel */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                            }}
                        >
                            {partners.map((partner) => (
                                <div
                                    key={partner.id}
                                    className="flex-shrink-0 px-4"
                                    style={{ width: `${100 / itemsPerView}%` }}
                                >
                                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col items-center group hover:-translate-y-2">
                                        {/* Logo Circle */}
                                        <div className="relative mb-6">
                                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                                                <Image
                                                    src={partner.logo}
                                                    alt={`Logo ${partner.name}`}
                                                    width={96}
                                                    height={96}
                                                    className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                                                />
                                            </div>
                                            {/* Badge décoratif */}
                                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-md">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Nom du partenaire */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                            {partner.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm text-center leading-relaxed flex-grow">
                                            {partner.description}
                                        </p>

                                        {/* Barre décorative */}
                                        <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#3193bd] to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bouton Suivant */}
                    <button
                        onClick={handleNext}
                        disabled={!canGoNext}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-300 ${
                            canGoNext
                                ? 'text-secondary hover:bg-[#3193bd] hover:text-white hover:scale-110'
                                : 'text-gray-300 cursor-not-allowed'
                        }`}
                        aria-label="Partenaire suivant"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Indicateurs de position */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === currentIndex
                                    ? 'w-8 h-2 bg-[#3193bd]'
                                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Aller à la page ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Statistiques partenaires (optionnel) */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-secondary mb-2">6+</div>
                        <div className="text-gray-600">Partenaires Premium</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                        <div className="text-gray-600">Années de collaboration</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                        <div className="text-gray-600">Produits certifiés</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                        <div className="text-gray-600">Satisfaction client</div>
                    </div>
                </div>
            </div>
        </div>
    );
}