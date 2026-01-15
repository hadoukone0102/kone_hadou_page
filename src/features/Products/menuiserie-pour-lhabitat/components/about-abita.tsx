import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

export default function AboutHabitat() {
    const [titleVisible, setTitleVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
    const [imagesVisible, setImagesVisible] = useState([false, false, false, false]);
    const titleRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        // Observer pour le titre
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                }
            });
        }, observerOptions);

        // Observer pour le texte
        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTextVisible(true);
                }
            });
        }, observerOptions);

        // Observer pour les images
        const imagesObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = imageRefs.current.indexOf(entry.target as HTMLDivElement);
                    if (index !== -1) {
                        setTimeout(() => {
                            setImagesVisible(prev => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                            });
                        }, index * 150);
                    }
                }
            });
        }, observerOptions);

        if (titleRef.current) titleObserver.observe(titleRef.current);
        if (textRef.current) textObserver.observe(textRef.current);
        
        imageRefs.current.forEach(ref => {
            if (ref) imagesObserver.observe(ref);
        });

        return () => {
            titleObserver.disconnect();
            textObserver.disconnect();
            imagesObserver.disconnect();
        };
    }, []);

    const images = [
        {
            id: 1,
            url: "/img/A-01.jpg",
            alt: "Intérieur moderne avec fenêtres aluminium"
        },
        {
            id: 2,
            url: "/img/A-02.jpg",
            alt: "Baie vitrée donnant sur jardin"
        },
        {
            id: 3,
            url: "/img/A-03.jpg",
            alt: "Maison moderne avec piscine"
        },
        {
            id: 4,
            url: "/img/A-04.jpg",
            alt: "Porte d'entrée design"
        }
    ];

    return (
        <div className="bg-gray-50 py-16 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Section Titre et Images */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Titre */}
                    <div 
                        ref={titleRef}
                        className={`flex items-center transition-all duration-1000 ${
                            titleVisible 
                                ? 'opacity-100 translate-x-0' 
                                : 'opacity-0 -translate-x-10'
                        }`}
                    >
                        <h2 className="text-xl text-center md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            UNE GAMME DE MENUISERIES ALUMINIUM POUR ÉQUIPER L&apos;HABITAT
                        </h2>
                    </div>

                    {/* Grille d'images */}
                    <div className="grid grid-cols-2 gap-4">
                        {images.map((image, index) => (
                            <div
                                key={image.id}
                                ref={(el:any) => imageRefs.current[index] = el}
                                className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 ${
                                    imagesVisible[index] 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-10'
                                } ${index === 0 || index === 1 ? 'h-48 md:h-56' : 'h-48 md:h-56'}`}
                            >
                                <Image 
                                    src={image.url}
                                    alt={image.alt}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Texte */}
                <div 
                    ref={textRef}
                    className={`space-y-6 text-gray-700 text-base md:text-lg leading-relaxed transition-all duration-1000 delay-300 ${
                        textVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <p>
                        Parce que la maison représente l&apos;espace de vie le plus cher à nos yeux, on aime y passer du temps, 
                        s&apos;y sentir bien et en sécurité. <strong>Siglass</strong> fabricant de menuiseries en alu propose 
                        les meilleures solutions de menuiseries aluminium pour correspondre à vos exigences de vie.
                    </p>

                    <p>
                        La finesse des profils aluminium Sepalumic vous permet de profiter d&apos;un apport de lumière naturelle 
                        important pour éclairer et réchauffer les pièces de vie de la maison. Grâce à leurs lignes planes, 
                        les finitions soignées et leurs couleurs personnalisables à souhait, elles s&apos;intègrent harmonieusement 
                        dans votre habitat.
                    </p>

                    <p>
                        Nous disposons d&apos;une gamme complète de fenêtres alu, baies coulissantes, portes harmonieuses et 
                        contemporaines qui apporteront du style à votre intérieur. Quant à nos offres de façade vitrée et 
                        verrière d&apos;intérieur, elles feront le bonheur des architectes pour une intégration remarquable dans 
                        les villas les plus somptueuses.
                    </p>
                </div>
            </div>
        </div>
    );
}