"use client";
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Users, Briefcase, TrendingUp } from 'lucide-react';

export default function SiglassAbout() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [titleVisible] = useState(true);
    const titleRef = useRef<HTMLDivElement>(null);
    
    const carouselImages = [
        "/img/003.jpg",
        "/img/006.jpg",
        "/img/007.jpg",
        "/img/003.jpg",
        "/img/006.jpg",
        "/img/007.jpg",
    ];

    // Défilement automatique
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    return (
        <div className="bg-primary px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Titre de la section avec animation */}
                <div 
                    ref={titleRef}
                    className={`text-center mb-12 transition-all duration-1000${
                        titleVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="inline-block mt-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`h-1 w-12 bg-orange-500 transition-all duration-700 delay-200 ${
                                titleVisible ? 'scale-x-100' : 'scale-x-0'
                            }`}></div>
                            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                                À propos de SIGLASS
                            </span>
                            <div className={`h-1 w-12 bg-orange-500 transition-all duration-700 delay-200 ${
                                titleVisible ? 'scale-x-100' : 'scale-x-0'
                            }`}></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-white">
                       Tous savoir en deux minutes 
                    </h2>
                </div>

                {/* Section Top - À propos de SIGLASS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Image gauche - Bâtiment SIGLASS */}
                    <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl group">
                        <img
                            src="/about-1.jpg"
                            alt="SIGLASS Showroom"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    {/* Contenu droite */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-white">
                            Qui est SIGLASS ?
                        </h2>
                        <div className="space-y-4 text-white leading-relaxed ">
                            <p>
                                SIGLASS est l'un des leaders en Côte d'Ivoire dans la conception, la fabrication et l'installation de systèmes de menuiserie aluminium et PVC. Nous intervenons dans trois domaines majeurs : les produits architecturaux en verre, les solutions résidentielles et les projets commerciaux.
                            </p>
                            <p>
                                Fondée avec une vision d'excellence, SIGLASS s'est imposée comme un partenaire de confiance pour les architectes, promoteurs immobiliers et particuliers. Aujourd'hui, nous réalisons des projets d'envergure à Abidjan et dans toute la Côte d'Ivoire, employant une équipe de professionnels qualifiés et passionnés.
                            </p>
                            <p>
                                Nous opérons dans trois secteurs principaux : l'architecture (fenêtres, portes, façades vitrées), les solutions résidentielles (baies vitrées, verrières, garde-corps) et les projets commerciaux (vitrines, cloisons, aménagements sur mesure). Notre expertise technique inclut également des produits spécialisés comme les parois de douche et les caves à vin.
                            </p>
                        </div>

                        {/* Statistiques */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="flex items-center gap-2 text-[#3193bd] mb-2">
                                    <Award size={24} />
                                    <span className="text-2xl font-bold">20+</span>
                                </div>
                                <p className="text-sm text-gray-600">Ans d'expérience</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="flex items-center gap-2 text-[#3193bd] mb-2">
                                    <Briefcase size={24} />
                                    <span className="text-2xl font-bold">500+</span>
                                </div>
                                <p className="text-sm text-gray-600">Projets réalisés</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Bottom - Notre mission & Réalisations */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contenu gauche */}
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                            Notre engagement
                        </h3>
                        <div className="space-y-6 text-gray-600 leading-relaxed">
                            <p>
                                Nous détenons des parts de marché importantes dans les secteurs du bâtiment et de la construction en Côte d'Ivoire, avec une présence géographique stratégique nous permettant de répondre aux besoins de nos clients à Abidjan et dans les principales villes du pays.
                            </p>
                            <p>
                                Géographiquement, nous concentrons nos activités principalement à Abidjan (Cocody, Plateau, Marcory, Yopougon), tout en développant notre présence dans les villes secondaires comme Yamoussoukro, Bouaké et San-Pedro.
                            </p>
                            <p>
                                La mission de SIGLASS est d'être le leader local en solutions innovantes de menuiserie aluminium et PVC haute performance, contribuant à l'amélioration du cadre de vie, à l'efficacité énergétique des bâtiments et au développement durable en Côte d'Ivoire.
                            </p>

                            {/* Points forts */}
                            <div className="bg-[#3193bd] text-white p-6 rounded-lg mt-6">
                                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <TrendingUp size={24} />
                                    Nos atouts
                                </h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-400">✓</span>
                                        <span>Équipe de professionnels expérimentés et certifiés</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-400">✓</span>
                                        <span>Matériaux de qualité supérieure, importés d'Europe</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-400">✓</span>
                                        <span>Respect des délais et suivi personnalisé</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-400">✓</span>
                                        <span>Garantie sur tous nos produits et installations</span>
                                    </li>
                                </ul>
                            </div>

                            {/* <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:gap-4 mt-4 font-semibold">
                                Découvrir nos réalisations
                                <ArrowRight size={20} />
                            </button> */}
                        </div>
                    </div>

                    {/* Carrousel droite */}
                    <div className="relative h-auto lg:h-auto rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
                        {/* Images du carrousel */}
                        <div className="relative w-full h-full">
                            {carouselImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                        index === currentSlide
                                            ? 'opacity-100 translate-x-0'
                                            : index < currentSlide
                                            ? 'opacity-0 -translate-x-full'
                                            : 'opacity-0 translate-x-full'
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Réalisation SIGLASS ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                        {/* Badge sur l'image */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                            <div className="flex items-center gap-2">
                                <Users size={20} className="text-[#3193bd]" />
                                <div>
                                    <p className="text-xs text-gray-600">Clients satisfaits</p>
                                    <p className="text-lg font-bold text-gray-900">98%</p>
                                </div>
                            </div>
                        </div>

                        {/* Indicateurs de slide */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                            {carouselImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === currentSlide
                                            ? 'w-8 h-2 bg-white'
                                            : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                                    }`}
                                    aria-label={`Slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Boutons navigation */}
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
                            aria-label="Image précédente"
                        >
                            <ArrowRight size={24} className="rotate-180" />
                        </button>
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
                            aria-label="Image suivante"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}