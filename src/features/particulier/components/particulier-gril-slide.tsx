//import ProjectsGrid from "@/features/Contents/views/realisation";
import { useEffect, useRef, useState } from "react";
import GrildSlide from "./gril-slide";

export default function ParticulierGrildSlide (){
    const [titleVisible, setTitleVisible] = useState(false);
    const titleRef = useRef<HTMLDivElement>(null);
    
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
    },[])

    return (
        <div className="bg-white flex flex-col gap-4">
            {/* Titre de la section avec animation */}
                <div 
                    ref={titleRef}
                    className={`text-center mb-12 transition-all duration-1000 ${
                        titleVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className=" px-10 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`h-1 w-1/2 bg-orange-500 transition-all duration-700 delay-200 ${
                                titleVisible ? 'scale-x-100' : 'scale-x-0'
                            }`}></div>
                            <span className="text-orange-500 flex text-center font-semibold text-sm uppercase tracking-wider">
                                Menuiseries aluminium pour l&apos;habitat intérieur
                            </span>
                            <div className={`h-1 w-1/2 bg-orange-500 transition-all duration-700 delay-200 ${
                                titleVisible ? 'scale-x-100' : 'scale-x-0'
                            }`}></div>
                        </div>
                    </div>
                    <div className="px-10">
                        <p className="text-primary text-start text-base md:text-lg leading-relaxed">
                            Nos menuiseries aluminium SIGLASS sont conçues pour transformer et sublimer votre habitat. 
                            Que vous envisagiez une construction neuve, une rénovation ou simplement l&apos;amélioration de votre confort, 
                            nos solutions allient design contemporain, performances thermiques et acoustiques exceptionnelles, 
                            et une durabilité à toute épreuve.
                        </p>
                        <p className="text-primary text-start text-base md:text-lg leading-relaxed mt-4">
                            De la fenêtre coulissante qui baigne votre salon de lumière naturelle, à la porte d&apos;entrée qui assure 
                            votre sécurité tout en affirmant votre style, en passant par les garde-corps élégants pour vos balcons 
                            et les pergolas qui créent de nouveaux espaces de vie en extérieur, chaque réalisation SIGLASS est 
                            pensée sur mesure pour répondre à vos besoins spécifiques et s&apos;intégrer harmonieusement à votre architecture.
                        </p>
                        <p className="text-primary text-start text-base md:text-lg leading-relaxed mt-4">
                            Nos équipes vous accompagnent de la conception à l&apos;installation, en vous proposant des solutions 
                            personnalisées qui valorisent votre patrimoine et améliorent votre qualité de vie au quotidien.
                        </p>
                    </div>
                </div>
            <GrildSlide/>
        </div>
    )
}