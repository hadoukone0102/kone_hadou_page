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
                    className={`space-y-6 text-center border-l-4 border-secondary px-2 italic text-gray-700 text-base md:text-lg leading-relaxed transition-all duration-1000 delay-300 ${
                        textVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    >
                    <p>
                        Parce que l&apos;habitat est avant tout un espace de bien-être, de confort et de sécurité, 
                        <strong> SIGLASS</strong> conçoit et fabrique des solutions de menuiserie aluminium et de vitrerie pensées pour améliorer durablement votre cadre de vie.
                    </p>

                    <p>
                        La finesse de nos profils en aluminium permet de maximiser l&apos;apport de lumière naturelle, 
                        tout en garantissant solidité, isolation et élégance. Les lignes épurées, les finitions soignées 
                        et les nombreuses possibilités de personnalisation assurent une parfaite intégration à votre intérieur comme à votre extérieur.
                    </p>

                    <p>
                        Fenêtres aluminium, portes, baies vitrées coulissantes, façades vitrées ou verrières sur mesure : 
                        SIGLASS propose une gamme complète de solutions contemporaines, appréciées aussi bien par les particuliers 
                        que par les architectes et professionnels du bâtiment pour des réalisations esthétiques, modernes et durables.
                    </p>
                </div>
            </div>
        </div>
    );
}