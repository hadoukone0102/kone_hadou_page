"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, ArrowRight } from 'lucide-react';

export default function LandingPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Données des slides avec images, messages, boutons et liens
    type ButtonStyle = "primary" | "secondary" | "outline";
    type Slide = {
        id: number;
        image: string;
        title: string;
        subtitle: string;
        description: string;
        buttonText: string;
        buttonLink: string;
        buttonStyle: ButtonStyle;
    };
    const slides: Slide[] = [
        {
            id: 1,
            image: "/about-1.jpg",
            title: "Excellence en Menuiserie Aluminium",
            subtitle: "Des solutions sur mesure pour vos projets résidentiels et commerciaux",
            description: "Découvrez notre gamme complète de fenêtres, portes et systèmes de vitrage conçus avec le plus grand soin.",
            buttonText: "Voir nos produits",
            buttonLink: "#produits",
            buttonStyle: "primary" // primary, secondary, outline
        },
        {
            id: 2,
            image: "/about-2.jpg",
            title: "Parois de Douche Design",
            subtitle: "Élégance et durabilité pour votre salle de bain",
            description: "Des parois de douche en verre et aluminium qui transforment votre espace en un havre de paix moderne.",
            buttonText: "Découvrir nos parois",
            buttonLink: "#parois",
            buttonStyle: "secondary"
        },
        {
            id: 3,
            image: "/about-3.jpg",
            title: "Caves à Vin sur Mesure",
            subtitle: "Préservez vos collections précieuses avec style",
            description: "Des caves à vin personnalisées alliant esthétique contemporaine et conservation optimale.",
            buttonText: "Nos caves à vin",
            buttonLink: "#caves",
            buttonStyle: "primary"
        },
        {
            id: 4,
            image: "about-1.jpg",
            title: "Qualité & Savoir-faire",
            subtitle: "Plus de 20 ans d'expertise en Côte d'Ivoire",
            description: "Une équipe de professionnels dédiés à réaliser vos projets les plus ambitieux avec précision.",
            buttonText: "Qui sommes-nous ?",
            buttonLink: "#apropos",
            buttonStyle: "outline"
        },
        {
            id: 5,
            image: "about-2.jpg",
            title: "Devis Gratuit & Personnalisé",
            subtitle: "Votre projet mérite une attention particulière",
            description: "Contactez-nous dès aujourd'hui pour un devis gratuit et des conseils d'experts adaptés à vos besoins.",
            buttonText: "Demander un devis",
            buttonLink: "#contact",
            buttonStyle: "primary"
        }
    ];

    // Défilement automatique toutes les 5 secondes
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const goToSlide = (index:any) => {
        setIsAutoPlaying(false);
        setCurrentSlide(index);
    };

    const getButtonStyles = (style: 'primary' | 'secondary' | 'outline') => {
        const styles = {
            primary: "bg-[#3193bd] text-white hover:bg-[#2778a0] border-2 border-[#3193bd]",
            secondary: "bg-orange-500 text-white hover:bg-orange-600 border-2 border-orange-500",
            outline: "bg-transparent text-[#3193bd] border-2 border-[#3193bd] hover:bg-[#3193bd] hover:text-white"
        };
        return styles[style] || styles.primary;
    };

    return (
        <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex overflow-hidden">
            {/* PARTIE GAUCHE - Slider d'images */}
            <div className="w-1/2 relative overflow-hidden">
                {/* Images avec transitions */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ${
                            index === currentSlide 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-0 scale-105'
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
                    </div>
                ))}

                {/* Boutons de navigation gauche/droite */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
                    aria-label="Slide précédent"
                >
                    <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={28} />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
                    aria-label="Slide suivant"
                >
                    <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={28} />
                </button>

                {/* Pagination (points en bas) */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === currentSlide
                                    ? 'bg-white w-12 h-3'
                                    : 'bg-white/50 hover:bg-white/75 w-3 h-3'
                            }`}
                            aria-label={`Aller au slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Logo SIGLASS en haut à gauche */}
                <div className="absolute top-6 left-6 z-10">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg">
                        <div className="w-12 h-12 bg-[#3193bd] flex items-center justify-center rounded">
                            <span className="text-white font-bold text-lg">SG</span>
                        </div>
                        <span className="text-white font-bold text-2xl drop-shadow-lg">SIGLASS</span>
                    </div>
                </div>
            </div>

            {/* PARTIE DROITE - Messages et contenu */}
            <div className="w-1/2 flex flex-col justify-center px-16 relative">
                {/* Contenu qui change avec chaque slide */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`transition-all duration-700 ${
                            index === currentSlide
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-8 absolute'
                        }`}
                    >
                        {/* Badge numéro de slide */}
                        <div className="inline-flex items-center gap-2 bg-[#3193bd]/10 text-[#3193bd] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <span className="w-6 h-6 bg-[#3193bd] text-white rounded-full flex items-center justify-center text-xs">
                                {index + 1}
                            </span>
                            Slide {index + 1} / {slides.length}
                        </div>

                        {/* Titre principal */}
                        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            {slide.title}
                        </h1>

                        {/* Sous-titre */}
                        <h2 className="text-2xl text-[#3193bd] font-medium mb-6">
                            {slide.subtitle}
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                            {slide.description}
                        </p>

                        {/* Bouton avec style différent selon le slide */}
                        <a
                            href={slide.buttonLink}
                            className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${getButtonStyles(slide.buttonStyle || 'primary') || getButtonStyles('primary')}`}
                        >
                            {slide.buttonText}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Informations de contact en bas */}
                        <div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-200">
                            <a 
                                href="tel:+22527212702 62" 
                                className="flex items-center gap-3 text-gray-700 hover:text-[#3193bd] transition-colors group"
                            >
                                <div className="w-12 h-12 bg-[#3193bd]/10 rounded-full flex items-center justify-center group-hover:bg-[#3193bd] transition-colors">
                                    <Phone size={20} className="text-[#3193bd] group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Appelez-nous</p>
                                    <p className="font-semibold">+225 27 21 27 02 62</p>
                                </div>
                            </a>

                            <a 
                                href="mailto:infos@siglass-ci.com" 
                                className="flex items-center gap-3 text-gray-700 hover:text-[#3193bd] transition-colors group"
                            >
                                <div className="w-12 h-12 bg-[#3193bd]/10 rounded-full flex items-center justify-center group-hover:bg-[#3193bd] transition-colors">
                                    <Mail size={20} className="text-[#3193bd] group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Écrivez-nous</p>
                                    <p className="font-semibold">infos@siglass-ci.com</p>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}

                {/* Indicateur de progression circulaire */}
                <div className="absolute top-8 right-8">
                    <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90">
                            <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="#e5e7eb"
                                strokeWidth="4"
                                fill="none"
                            />
                            <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="#3193bd"
                                strokeWidth="4"
                                fill="none"
                                strokeDasharray={`${(currentSlide + 1) * (175 / slides.length)} 175`}
                                className="transition-all duration-500"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-gray-700">
                                {currentSlide + 1}/{slides.length}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}