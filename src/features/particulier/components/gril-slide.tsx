import { useState } from "react";
import Image from 'next/image';

export default function GrildSlide ({
    produits,
    className
}:{
    produits:any[],
    className?:string
}){
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <div className={`${className} grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 p-10`}>
            {produits.map((project) => (
                <div
                    key={project.id}
                    className="bg-white transition-all duration-700 cursor-pointer"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                >
                    {/* Image Container */}
                    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                            quality={95}
                            priority={project.id <= 2}
                            className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                        
                        {/* Label catégorie - Toujours visible */}
                        <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-md shadow-lg transform transition-all duration-500 hover:scale-110 z-10">
                            <span className="text-sm font-semibold text-gray-800">
                                {project.category}
                            </span>
                        </div>

                        {/* Badge hover sur l'image */}
                        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-10 ${
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
                    </div>
                </div>
            ))}
        </div>
    );
}