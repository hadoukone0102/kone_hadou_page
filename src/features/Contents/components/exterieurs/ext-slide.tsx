"use client";
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

export default function ExterieuSlide() {
    const [titleVisible, setTitleVisible] = useState(false);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTitleVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const spaces = [
        {
            id: 1,
            number: "01",
            title: "MAISON",
            subtitle: "INDIVIDUELLE",
            image: "/banner/first.jpg",
            size: "large" // Occupe 2 colonnes en haut à gauche
        },
        {
            id: 2,
            number: "02",
            title: "OUTDOOR",
            subtitle: "",
            image: "/banner/second.jpg",
            size: "large-right" // Occupe 1 colonne mais grande hauteur à droite
        },
        {
            id: 3,
            number: "03",
            title: "COLLECTIF",
            subtitle: "VERTICAL",
            image: "/banner/firts.jpg",
            size: "large"
        },
        {
            id: 4,
            number: "04",
            title: "VILLA",
            subtitle: "ARCHITECTURALE",
            image: "/banner/four.jpg",
            size: "large"
        },
        {
            id: 5,
            number: "05",
            title: "TERTIAIRE",
            subtitle: "",
            image: "/banner/five.jpg",
            size: "small-bottom"
        }
    ];

    return (
        <div className="bg-primary px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Titre avec barres */}
                <div 
                    ref={titleRef}
                    className="flex items-center justify-center gap-4 mb-12"
                >
                    <div className={`h-[1px] bg-gray-600 transition-all duration-700 ${
                        titleVisible ? 'w-32 md:w-64' : 'w-0'
                    }`}></div>
                    <h2 className={`text-secondary font-semibold text-xl md:text-xl uppercase tracking-[0.3em] transition-all duration-700 ${
                        titleVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                        Découvrez toutes les familles de produits
                    </h2>
                    <div className={`h-[1px] bg-gray-600 transition-all duration-700 ${
                        titleVisible ? 'w-32 md:w-64' : 'w-0'
                    }`}></div>
                </div>

                {/* Grille asymétrique */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {/* 01 - MAISON INDIVIDUELLE (Grande - 2 colonnes, 1 rangée) */}
                    <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden">
                        <Image
                            src={spaces[0].image}
                            alt={spaces[0].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        {/* Label */}
                        <div className="absolute top-6 left-6 bg-white px-6 py-3 rounded-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-bold text-orange-500">{spaces[0].number}</span>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{spaces[0].title}</h3>
                                    {spaces[0].subtitle && (
                                        <p className="text-lg font-bold text-gray-900 leading-tight">{spaces[0].subtitle}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 02 - OUTDOOR (Grande hauteur - 1 colonne, 2 rangées) */}
                    <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden">
                        <Image
                            src={spaces[1].image}
                            alt={spaces[1].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        {/* Label */}
                        <div className="absolute top-6 left-6 bg-white px-6 py-3">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-bold text-orange-500">{spaces[1].number}</span>
                                <h3 className="text-lg font-bold text-gray-900 leading-tight">{spaces[1].title}</h3>
                            </div>
                        </div>
                    </div>

                    {/* 03 - COLLECTIF VERTICAL */}
                    <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden">
                        <Image
                            src={spaces[2].image}
                            alt={spaces[2].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        {/* Label */}
                        <div className="absolute top-6 left-6 bg-white px-6 py-3 rounded-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-bold text-orange-500">{spaces[2].number}</span>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{spaces[2].title}</h3>
                                    <p className="text-lg font-bold text-gray-900 leading-tight">{spaces[2].subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 04 - VILLA ARCHITECTURALE */}
                    <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden">
                        <Image
                            src={spaces[3].image}
                            alt={spaces[3].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        {/* Label */}
                        <div className="absolute top-6 left-6 bg-white px-6 py-3 rounded-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-bold text-orange-500">{spaces[3].number}</span>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{spaces[3].title}</h3>
                                    <p className="text-lg font-bold text-gray-900 leading-tight">{spaces[3].subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 05 - TERTIAIRE */}
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
                        <Image
                            src={spaces[4].image}
                            alt={spaces[4].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        {/* Label */}
                        <div className="absolute top-6 left-6 bg-white px-6 py-3 rounded-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-bold text-orange-500">{spaces[4].number}</span>
                                <h3 className="text-lg font-bold text-gray-900 leading-tight">{spaces[4].title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}