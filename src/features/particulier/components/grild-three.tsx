import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

export default function GrildthreeSlide  (){
    const [cardsVisible, setCardsVisible] = useState([false, false, false]);
     const [, setTitleVisible] = useState(false);
    const titleRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                }
            });
        }, observerOptions);

        const cardsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
                    if (index !== -1) {
                        setTimeout(() => {
                            setCardsVisible(prev => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                            });
                        }, index * 200);
                    }
                }
            });
        }, observerOptions);

        if (titleRef.current) {
            titleObserver.observe(titleRef.current);
        }

        cardRefs.current.forEach(ref => {
            if (ref) cardsObserver.observe(ref);
        });

        return () => {
            titleObserver.disconnect();
            cardsObserver.disconnect();
        };
    }, []);

    const products = [
        {
            id: 1,
            number: "01",
            title: "BAIE VITRÉE ALUMINIUM",
            image: "/images/coulissant.jpg",
            description: "Offrez à vos espaces une luminosité maximale grâce à nos baies vitrées en aluminium, alliant finesse des profils, isolation performante et design contemporain pour un confort optimal."
        },
        {
            id: 2,
            number: "02",
            title: "GARDE-CORPS",
             image: "/images/gard_corps.jpg",
            description: "Sécurisez vos escaliers, balcons et terrasses avec nos garde-corps en aluminium et verre, alliant sécurité maximale, design contemporain et transparence pour une vue dégagée"
        },
        {
            id: 3,
            number: "03",
            title: "MUR-RIDEAU / FAÇADE VITRÉE",
             image: "/images/rideaux.jpg",
            description: "Donnez une identité moderne et élégante à vos bâtiments grâce à nos murs-rideaux en aluminium et verre, conçus pour maximiser la luminosité naturelle, assurer une excellente performance thermique et offrir une finition architecturale haut de gamme."
        }
    ];

    return (
            <div className="max-full mb-10">
                {/* Première ligne - Carport + Garde-corps */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Carport */}
                    <div 
                        ref={(el:any) => cardRefs.current[0] = el}
                        className={`relative overflow-hidden shadow-lg group cursor-pointer transition-all duration-700 ${
                            cardsVisible[0] 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-20'
                        }`}
                    >
                        <div className="relative h-[400px] md:h-[500px]">
                            <Image 
                                src={products[0].image}
                                alt={products[0].title}
                                width={100}
                                height={100}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            
                            {/* Badge numéro */}
                            <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-md shadow-lg">
                                <span className="text-orange-500 font-bold text-2xl">{products[0].number}</span>
                            </div>

                            {/* Contenu */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl md:text-3xl font-bold mb-3">{products[0].title}</h3>
                                <p className="text-white/90 text-sm md:text-base">{products[0].description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Garde-corps */}
                    <div 
                        ref={(el:any) => cardRefs.current[1] = el}
                        className={`relative overflow-hidden shadow-lg group cursor-pointer transition-all duration-700 ${
                            cardsVisible[1] 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-20'
                        }`}
                    >
                        <div className="relative h-[400px] md:h-[500px]">
                            <Image 
                                src={products[1].image}
                                alt={products[1].title}
                                 width={100}
                                height={100}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            
                            {/* Badge numéro */}
                            <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-md shadow-lg">
                                <span className="text-orange-500 font-bold text-2xl">{products[1].number}</span>
                            </div>

                            {/* Contenu */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl md:text-3xl font-bold mb-3">{products[1].title}</h3>
                                <p className="text-white/90 text-sm md:text-base">{products[1].description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Deuxième ligne - Portail & Clôture (pleine largeur) */}
                <div 
                    ref={(el:any) => cardRefs.current[2] = el}
                    className={`relative overflow-hidden shadow-lg group cursor-pointer transition-all duration-700 ${
                        cardsVisible[2] 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-20'
                    }`}
                >
                    <div className="relative h-[400px] md:h-[500px]">
                        <Image 
                            src={products[2].image}
                            alt={products[2].title}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        {/* Badge numéro */}
                        <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-md shadow-lg">
                            <span className="text-orange-500 font-bold text-2xl">{products[2].number}</span>
                        </div>

                        {/* Contenu */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3">{products[2].title}</h3>
                            <p className="text-white/90 text-sm md:text-base max-w-3xl">{products[2].description}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}