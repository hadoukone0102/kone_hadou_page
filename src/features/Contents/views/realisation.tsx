"use client";
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Projects } from '..';

export default function ProjectsGrid() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
    const [titleVisible, setTitleVisible] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);
    
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const titleRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        // Observer pour le titre
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                }
            });
        }, observerOptions);

        if (titleRef.current) {
            titleObserver.observe(titleRef.current);
        }

        // Observer pour les projets
        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute('data-index'));
                    setVisibleProjects(prev => {
                        if (!prev.includes(index)) {
                            return [...prev, index];
                        }
                        return prev;
                    });
                }
            });
        }, observerOptions);

        projectRefs.current.forEach(ref => {
            if (ref) projectObserver.observe(ref);
        });

        // Observer pour le bouton
        const buttonObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setButtonVisible(true);
                }
            });
        }, observerOptions);

        if (buttonRef.current) {
            buttonObserver.observe(buttonRef.current);
        }

        return () => {
            titleObserver.disconnect();
            projectObserver.disconnect();
            buttonObserver.disconnect();
        };
    }, []);

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[90%] mx-auto">
                {/* Titre de la section avec animation */}
                <div 
                    ref={titleRef}
                    className={`text-center mb-12 transition-all duration-1000 ${
                        titleVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="inline-block">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`h-1 w-12 bg-orange-500 transition-all duration-700 delay-200 ${
                                titleVisible ? 'scale-x-100' : 'scale-x-0'
                            }`}></div>
                            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                                Nos Réalisations
                            </span>
                            <div className={`h-1 w-12 bg-orange-500 transition-all duration-700 delay-200 ${
                                titleVisible ? 'scale-x-100' : 'scale-x-0'
                            }`}></div>
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Améliorer et Valoriser Vos
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Projets de Construction
                    </h2>
                </div>

                {/* Grille de projets - 2 colonnes avec scroll reveal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {Projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={(el:any) => projectRefs.current[index] = el}
                            data-index={index}
                            className={`group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer ${
                                visibleProjects.includes(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-20'
                            }`}
                            style={{ 
                                transitionDelay: `${(index % 2) * 200}ms` 
                            }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Image Container */}
                            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={50}
                                    height={50}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                {/* Label catégorie - Toujours visible */}
                                <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-md shadow-lg transform transition-all duration-500 group-hover:scale-110">
                                    <span className="text-sm font-semibold text-gray-800">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Badge hover sur l'image */}
                                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                                    hoveredProject === project.id 
                                        ? 'opacity-100 scale-100 rotate-0' 
                                        : 'opacity-0 scale-75 rotate-12'
                                }`}>
                                    <div className="bg-white/10 backdrop-blur-md border-2 border-white px-6 py-3 rounded-lg">
                                        <span className="text-white font-semibold text-lg">
                                            Voir le projet
                                        </span>
                                    </div>
                                </div>

                                {/* Contenu en bas */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-0">
                                    <div className="space-y-2">
                                        <h3 className={`text-2xl md:text-3xl font-bold ${project.color} transition-all duration-300`}>
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm md:text-base">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Barre inférieure avec effet */}
                            <div className="h-2 bg-gradient-to-r from-[#3193bd] to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>

                {/* Bouton Explorer tous les projets avec scroll reveal et effet comme le bouton devis */}
                <div className="flex justify-center mt-12">
                    <button 
                        ref={buttonRef}
                        className={`relative overflow-hidden group cursor-pointer bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold px-10 py-4 rounded-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${
                            buttonVisible 
                                ? 'opacity-100 translate-y-0 scale-100' 
                                : 'opacity-0 translate-y-10 scale-95'
                        }`}
                    >
                        {/* Effet de gradient animé (comme le bouton devis) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                        
                        {/* Contenu du bouton */}
                        <span className="relative flex items-center gap-3 text-lg">
                            EXPLORER TOUS LES PROJETS
                            <ArrowRight 
                                size={24} 
                                className="transform group-hover:translate-x-2 transition-transform duration-300" 
                            />
                        </span>

                        {/* Coin orange en haut à gauche */}
                        <div className="absolute top-0 left-0 w-0 h-0 border-t-[30px] border-t-orange-500 border-r-[30px] border-r-transparent transition-all duration-300 group-hover:border-t-[40px] group-hover:border-r-[40px]"></div>
                    </button>
                </div>
            </div>
        </div>
    );
}