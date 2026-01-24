"use client";

import { useRef, useState } from "react";
import GrildthreeSlide from "./grild-three";

export default function ParticulierGrildVenranda({className}:{className?:string}) {
    const [titleVisible] = useState(false);
    const titleRef = useRef<HTMLDivElement>(null);
    
    return (
        <div className={`bg-white md:px-10 ${className}`}>
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
                            Menuiseries aluminium pour l&apos;extérieur
                        </span>
                        <div className={`h-1 w-1/2 bg-orange-500 transition-all duration-700 delay-200 ${
                            titleVisible ? 'scale-x-100' : 'scale-x-0'
                        }`}></div>
                    </div>
                </div>

                <div className="px-10">
                    <p className="text-primary text-center text-base md:text-lg leading-relaxed">
                        L&apos;extérieur de votre habitat a autant d&apos;importance que votre intérieur.
                    </p>
                    <p className="text-primary text-start text-base md:text-lg leading-relaxed mt-4">
                        C&apos;est pourquoi nos gammes de menuiseries aluminium outdoor allient résistance, 
                        durabilité et élégance. Ils viennent s&apos;intégrer à merveille dans vos jardins et 
                        espaces extérieurs afin d&apos;agrandir, sécuriser et valoriser votre lieu de vie.
                    </p>
                   
                </div>

            </div>

          <GrildthreeSlide/>

        </div>
    );
}