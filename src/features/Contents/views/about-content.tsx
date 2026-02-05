"use client";
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

export default function AboutContent() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Bandeau vertical "EXCELLENCE" à droite */}
            <div className="hidden lg:block absolute right-0 top-0 z-100 bottom-0 w-24 bg-gradient-to-b from-orange-500 to-orange-600">
                <div className="h-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl tracking-[0.3em] transform -rotate-90 whitespace-nowrap">
                        EXCELLENCE
                    </span>
                </div>
                {/* Flèche en bas */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ArrowRight size={32} className="text-white transform rotate-90" />
                </div>
            </div>

            <div 
                ref={sectionRef}
                className="max-w-7xl mx-auto"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* PARTIE GAUCHE - Texte */}
                    <div className={`transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}>
                        {/* Titre principal */}
                        <h2 className="text-4xl text-center md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            SIGLASS
                        </h2>
                        <h3 className="text-2xl md:text-xl text-center font-bold text-gray-800 mb-6 uppercase">
                            {/* GAMMISTE ALUMINIUM ET PVC */}
                            VITRERIES & MENUISERIES SIGLASS-CI S&apos;ENGAGE À VOUS FOURNIR DES PRODUITS DE QUALITÉ SUR TOUS LES PLANS
                        </h3>
                       

                        {/* Description */}
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p className="text-lg">
                                SIGLASS conçoit, fabrique et installe en Côte d&apos;Ivoire des solutions sur mesure en vitrerie et menuiserie aluminium/PVC pour les professionnels du bâtiment et les particuliers.
                            </p>

                            <p className="text-lg">
                                En s&apos;appuyant sur une écoute attentive de vos besoins, de vos contraintes techniques et de vos ambitions architecturales, SIGLASS propose des façades et murs-rideaux, fenêtres et portes, baies coulissantes, pergolas, vérandas, brise-soleil, garde-corps et cloisonnements de bureaux.
                            </p>

                            <p className="text-lg">
                                Nos solutions s&apos;adaptent à tous vos projets, résidentiels ou commerciaux, en assurant une luminosité optimale, une durabilité à toute épreuve et une finition irréprochable, conformes aux exigences contemporaines en matière de qualité et de design.
                            </p>

                            <blockquote className="border-l-4 border-orange-500 pl-6 py-4 my-6 bg-gray-50 italic text-gray-600">
                                Grâce à une gamme complète et évolutive, SIGLASS offre également à ses partenaires fabricants et installateurs les solutions de menuiserie les plus adaptées à leurs marchés et à leurs clients.
                            </blockquote>

                            {/* Bouton "En savoir plus" */}
                            <div className="pt-4">
                                <button className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                    <span className="text-lg">en savoir</span>
                                    <span className="w-6 h-6 bg-white text-orange-500 rounded-full flex items-center justify-center font-bold text-xl">
                                        +
                                    </span>
                                    <ArrowRight className="transform group-hover:translate-x-2 transition-transform" size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PARTIE DROITE - Image */}
                    <div className={`relative transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}>
                        {/* Image principale */}
                        <div className="relative h-[600px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/images/angle.jpg"
                                alt="Profil aluminium SIGLASS"
                                fill
                                className="object-cover"
                            />
                            
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        </div>

                        {/* Badge "Qualité Premium" */}
                        <div className="absolute z-20 -top-6 -right-6 bg-orange-500 text-white px-6 py-4 rounded-full shadow-xl transform rotate-12">
                            <p className="text-sm font-bold uppercase">Qualité<br/>Premium</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}