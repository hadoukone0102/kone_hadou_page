import { useEffect, useRef, useState } from "react";

export default function ParticulierGrildVenranda() {
    const [titleVisible, setTitleVisible] = useState(false);
    const [cardsVisible, setCardsVisible] = useState([false, false, false]);
    const titleRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

        // Observer pour les cartes
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
            title: "CARPORT / ABRI VOITURE",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
            description: "Protégez votre véhicule avec élégance grâce à nos carports en aluminium, alliant design moderne et résistance aux intempéries."
        },
        {
            id: 2,
            number: "02",
            title: "GARDE-CORPS",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
            description: "Sécurisez vos espaces extérieurs avec nos garde-corps en aluminium, combinant sécurité, esthétique et vue dégagée."
        },
        {
            id: 3,
            number: "03",
            title: "PORTAIL & CLÔTURE",
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
            description: "Délimitez et sécurisez votre propriété avec nos portails et clôtures en aluminium sur mesure, durables et design."
        }
    ];

    return (
        <div className="bg-white md:px-10 pb-20">
            {/* Section titre */}
            <div 
                ref={titleRef}
                className={`text-center mb-12 transition-all duration-1000 ${
                    titleVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                }`}
            >
                 <div className=" w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`h-1 w-1/2 bg-orange-500 transition-all duration-700 delay-200 ${
                            titleVisible ? 'scale-x-100' : 'scale-x-0'
                        }`}></div>
                        <span className="text-orange-500 flex text-center font-semibold text-sm uppercase tracking-wider">
                            Menuiseries aluminium pour l'extérieur
                        </span>
                        <div className={`h-1 w-1/2 bg-orange-500 transition-all duration-700 delay-200 ${
                            titleVisible ? 'scale-x-100' : 'scale-x-0'
                        }`}></div>
                    </div>
                </div>

                <div className="px-10">
                    <p className="text-primary text-center text-base md:text-lg leading-relaxed">
                        L'extérieur de votre habitat a autant d'importance que votre intérieur.
                    </p>
                    <p className="text-primary text-start text-base md:text-lg leading-relaxed mt-4">
                        C'est pourquoi nos gammes de menuiseries aluminium outdoor allient résistance, 
                        durabilité et élégance. Ils viennent s'intégrer à merveille dans vos jardins et 
                        espaces extérieurs afin d'agrandir, sécuriser et valoriser votre lieu de vie.
                    </p>
                   
                </div>

            </div>

            {/* Grille de produits */}
            <div className="max-full mb-10">
                {/* Première ligne - Carport + Garde-corps */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Carport */}
                    <div 
                        ref={(el:any) => cardRefs.current[0] = el}
                        className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-700 ${
                            cardsVisible[0] 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-20'
                        }`}
                    >
                        <div className="relative h-[400px] md:h-[500px]">
                            <img 
                                src={products[0].image}
                                alt={products[0].title}
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
                        className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-700 ${
                            cardsVisible[1] 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-20'
                        }`}
                    >
                        <div className="relative h-[400px] md:h-[500px]">
                            <img 
                                src={products[1].image}
                                alt={products[1].title}
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
                    className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-700 ${
                        cardsVisible[2] 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-20'
                    }`}
                >
                    <div className="relative h-[400px] md:h-[500px]">
                        <img 
                            src={products[2].image}
                            alt={products[2].title}
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

        </div>
    );
}