"use client";
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

export default function PersonnalContent() {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const solutions = [
        {
            id: 1,
            category: "Fabricants Installateurs",
            title: "PARTICULIERS",
            image: "/images/realese.jpg",
            description: "Solutions résidentielles sur mesure"
        },
        {
            id: 2,
            category: "Fabricants Installateurs",
            title: "CHANTIERS",
            image: "/solutions/chantier.jpg",
            description: "Projets de construction et rénovation"
        },
        {
            id: 3,
            category: "Fabricants Installateurs",
            title: "INDUSTRIELS",
            image: "/banner/firts.jpg",
            description: "Solutions pour sites industriels"
        },
        {
            id: 4,
            category: "Fabricants Internationaux et",
            title: "ULTRAMARINS",
            image: "/banner/four.jpg",
            description: "Projets d'envergure internationale"
        },
        {
            id: 5,
            category: "Prescripteurs du",
            title: "BÂTIMENT",
            image: "/banner/five.jpg",
            description: "Architectes et bureaux d'études"
        }
    ];

    useEffect(() => {
        const observers = cardsRef.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !visibleCards.includes(index)) {
                            setVisibleCards(prev => [...prev, index]);
                        }
                    });
                },
                { threshold: 0.2 }
            );

            if (ref) observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [visibleCards]);

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Effet de fond décoratif */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#3193bd] rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* PARTIE GAUCHE - Texte (4 colonnes) */}
                    <div className="lg:col-span-4 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            DES SOLUTIONS POUR LES PROFESSIONNELS DE LA MENUISERIE
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Un accompagnement de qualité et des solutions personnalisées pour contribuer ensemble à la réussite de tous vos projets.
                        </p>

                        {/* Statistiques */}
                        <div className="mt-8 grid grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                                <p className="text-4xl font-bold text-[#3193bd]">500+</p>
                                <p className="text-sm text-gray-300">Projets réalisés</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                                <p className="text-4xl font-bold text-orange-500">98%</p>
                                <p className="text-sm text-gray-300">Clients satisfaits</p>
                            </div>
                        </div>
                    </div>

                    {/* PARTIE DROITE - Cartes images (8 colonnes) */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {solutions.map((solution, index) => (
                                <div
                                    key={solution.id}
                                    ref={(el:any) => cardsRef.current[index] = el}
                                    className={`group relative h-80 rounded-lg overflow-hidden cursor-pointer transition-all duration-700 ${
                                        visibleCards.includes(index)
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-10'
                                    }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {/* Image de fond */}
                                    <Image
                                        src={solution.image}
                                        alt={solution.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-[#3193bd]/90 group-hover:via-[#3193bd]/70 transition-all duration-500"></div>

                                    {/* Contenu texte */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <p className="text-sm text-gray-300 mb-2">{solution.category}</p>
                                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                            {solution.title}
                                        </h3>
                                        
                                        {/* Description (visible au hover) */}
                                        <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                                            <p className="text-sm text-gray-200 mb-3">
                                                {solution.description}
                                            </p>
                                        </div>

                                        {/* Bouton (visible au hover) */}
                                        {/* <button className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                            <span className="text-sm font-semibold">En savoir plus</span>
                                            <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                                        </button> */}
                                    </div>

                                    {/* Badge numéro */}
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        {solution.id}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Citation en bas */}
                <div className="mt-12 max-w-5xl mx-auto">
                    <blockquote className="border-l-4 border-orange-500 pl-6 py-4 bg-white/5 backdrop-blur-sm rounded-r-lg">
                        <p className="text-gray-300 italic text-lg leading-relaxed">
                            « Artisan Créateur » pour les Fabricants Installateurs auprès des particuliers, « I-Process » pour les industriels, « Project » pour les Fabricants Chantier, ou encore « International » pour les Fabricants hors-métropoles, découvrez nos 4 Services Premium. Une offre de services et produits spécifique et adaptée selon votre activité, votre taille, votre atelier, vos typologies de clients et de chantier.
                        </p>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}