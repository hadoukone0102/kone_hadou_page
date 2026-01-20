"use client";
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

export default function EspacesDeVie() {
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
            title: "",
            subtitle: "PERSONNELLE",
            // image: "/banner/first.jpg",
            image: "/siglass/h-12.jpg",
            size: "large" // Occupe 2 colonnes en haut à gauche
        },
        {
            id: 2,
            number: "02",
            title: "PLEIN AIR",
            subtitle: "",
            // image: "/banner/second.jpg",
            image: "/siglass/h-13.jpg",
            size: "large-right" // Occupe 1 colonne mais grande hauteur à droite
        },
        {
            id: 3,
            number: "03",
            title: "COLLECTIF",
            subtitle: "VERTICAL",
            // image: "/banner/firts.jpg",
            image: "/siglass/h-15.jpg",
            size: "large"
        },
        {
            id: 4,
            number: "04",
            title: "VILLA",
            subtitle: "ARCHITECTURALE",
            // image: "/banner/four.jpg",
            image: "/siglass/h-06.jpg",
            size: "large"
        },
        {
            id: 5,
            number: "05",
            title: "TERTIAIRE",
            subtitle: "",
            // image: "/banner/five.jpg",
            image: "/siglass/h-02.jpg",
            size: "small-bottom"
        }
    ];

    return (
        <div className="bg-primary px-4 sm:px-6 ">
            <div className="w-full">
                {/* Titre avec barres */}
                <div 
                    ref={titleRef}
                    className="flex items-center justify-center gap-4 mb-12"
                >
                    <div className={`h-[1px] bg-secondary transition-all duration-700 ${
                        titleVisible ? 'w-1/2 md:w-1/3' : 'w-0'
                    }`}></div>
                    <h2 className={`text-white flex items-center justify-center font-bold text-lg md:text-lg uppercase  transition-all duration-700 ${
                        titleVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                        VOS ESPACES DE VIE
                    </h2>
                    <div className={`h-[1px] bg-secondary transition-all duration-700 ${
                        titleVisible ? 'w-1/2 md:w-1/3' : 'w-0'
                    }`}></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 auto-rows-[400px]">
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
                        <Image
                            src={spaces[0].image}
                            alt={spaces[0].title}
                            fill
                            className=" transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        <div className="absolute top-6 left-6 bg-white/20 px-6 py-3 rounded-sm">
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
                    
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
                        <Image
                            src={spaces[1].image}
                            alt={spaces[1].title}
                            fill
                           className=" transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        <div className="absolute top-6 left-6 bg-white/20 px-6 py-3">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-bold text-orange-500">{spaces[1].number}</span>
                                <h3 className="text-lg font-bold text-gray-900 leading-tight">{spaces[1].title}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
                        <Image
                            src={spaces[2].image}
                            alt={spaces[2].title}
                            fill
                            className=" transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        <div className="absolute top-6 left-6 bg-white/20 px-6 py-3 rounded-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-bold text-orange-500">{spaces[2].number}</span>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{spaces[2].title}</h3>
                                    <p className="text-lg font-bold text-gray-900 leading-tight">{spaces[2].subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
                        <Image
                            src={spaces[3].image}
                            alt={spaces[3].title}
                            fill
                            className=" transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        <div className="absolute top-6 left-6 bg-white/20 px-6 py-3 rounded-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-bold text-orange-500">{spaces[3].number}</span>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{spaces[3].title}</h3>
                                    <p className="text-lg font-bold text-gray-900 leading-tight">{spaces[3].subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grille asymétrique */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden">
                        <Image
                            src={spaces[0].image}
                            alt={spaces[0].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
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

                    <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden">
                        <Image
                            src={spaces[1].image}
                            alt={spaces[1].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        <div className="absolute top-6 left-6 bg-white px-6 py-3">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-bold text-orange-500">{spaces[1].number}</span>
                                <h3 className="text-lg font-bold text-gray-900 leading-tight">{spaces[1].title}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden">
                        <Image
                            src={spaces[2].image}
                            alt={spaces[2].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
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

                    <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden">
                        <Image
                            src={spaces[3].image}
                            alt={spaces[3].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
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

                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
                        <Image
                            src={spaces[4].image}
                            alt={spaces[4].title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        <div className="absolute top-6 left-6 bg-white px-6 py-3 rounded-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-bold text-orange-500">{spaces[4].number}</span>
                                <h3 className="text-lg font-bold text-gray-900 leading-tight">{spaces[4].title}</h3>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}