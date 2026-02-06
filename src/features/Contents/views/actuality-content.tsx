"use client";
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { Calendar, ArrowRight } from 'lucide-react';

export default function ActualityContent() {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const actualites = [
        {
            id: 1,
            image: "/images/archibat.jpg",
            title: "ARCHIBAT 2023",
            date: "12 au 16 décembre 2023",
            description:
              "Retrouvez SIGLASS à ARCHIBAT 2023 : présentation de nos solutions de menuiserie aluminium/PVC et vitrages sur mesure, démonstrations produits et échanges avec nos experts.",
            category: "Événements",
          },
        {
            id: 2,
            image: "/images/angle.jpg",
            title: "CATALOGUE SIGLASS 2025 : DÉCOUVREZ NOS NOUVELLES GAMMES",
            date: "15 janvier 2025",
            description: "Explorez notre nouveau catalogue avec des innovations en menuiserie aluminium et PVC pour vos projets résidentiels et commerciaux.",
            category: "Produits"
        },
        {
            id: 3,
            image: "/images/pergola.jpg",
            title: "SIGLASS AU SALON BATIMAT ABIDJAN 2025",
            date: "5 mars 2025",
            description: "Venez nous rencontrer au salon du bâtiment à Abidjan. Découvrez nos dernières innovations et solutions sur mesure.",
            category: "Événements"
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
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background "ACTU" en grand */}
            <div className="absolute top-0 right-0 text-[300px] font-bold text-gray-300 leading-none select-none pointer-events-none opacity-50">
                ACTU
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        LES ACTUALITÉS DE SIGLASS
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        Produits, innovations, salons et conseils : suivez l&apos;actualité de SIGLASS et du secteur de la menuiserie aluminium en Côte d&apos;Ivoire.
                    </p>
                </div>

                {/* Grille d'actualités */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {actualites.map((actu, index) => (
                        <div
                            key={actu.id}
                            ref={(el: any) => cardsRef.current[index] = el}
                            className={`group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ${
                                visibleCards.includes(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={actu.image}
                                    alt={actu.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Badge catégorie */}
                                <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {actu.category}
                                </div>

                                {/* Barre orange en bas */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </div>

                            {/* Contenu */}
                            <div className="p-6">
                                {/* Date */}
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                                    <Calendar size={16} />
                                    <span>{actu.date}</span>
                                </div>

                                {/* Titre */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#3193bd] transition-colors">
                                    {actu.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {actu.description}
                                </p>

                                {/* Lien "Lire la suite" */}
                                <button className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all duration-300 group/btn">
                                    <span className="border-b-2 border-orange-500">LIRE LA SUITE</span>
                                    <ArrowRight size={20} className="transform group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bouton "Toutes les actualités" */}
                <div className="flex justify-center">
                    <button className="group px-10 py-4 border-2 border-orange-500 text-orange-500 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-3">
                        TOUTES LES ACTUALITÉS
                        <ArrowRight className="transform group-hover:translate-x-2 transition-transform" size={24} />
                    </button>
                </div>
            </div>

            {/* Section engagement (comme sur Sepalumic) */}
           <div className="max-w-7xl mx-auto mt-16 pt-16 border-t border-gray-200">
                <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Notre engagement ivoirien en vitrerie et menuiserie
                    </h3>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
                    Spécialisée dans la vitrerie et la menuiserie aluminium/PVC, SIGLASS met son savoir-faire au service de projets durables et performants.
                    De la conception à l&apos;installation, nous maîtrisons chaque étape pour garantir des solutions sur mesure répondant aux exigences techniques et architecturales actuelles.
                    <br /><br />
                    Acteur engagé du secteur du bâtiment en Côte d&apos;Ivoire, SIGLASS accompagne professionnels et particuliers dans la réalisation de façades, murs-rideaux,
                    fenêtres, portes, baies vitrées, vérandas et brise-soleil, en privilégiant la qualité, la fiabilité et la satisfaction client.
                </p>
            </div>

        </div>
    );
}