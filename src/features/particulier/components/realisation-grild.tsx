import Image from 'next/image';

// export default function RealisationGrildSlide ({
//     produits,
//     className
// }:{
//     produits:any[],
//     className?:string
// }){
//     return (
//         <div className={`${className} grid grid-cols-1 lg:grid-cols-3 gap-10 p-10`}>
//             {produits.map((project) => (
//                 <div
//                     key={project.id}
//                     className="bg-white h-full transition-all overflow-hidden duration-700 cursor-pointer"
//                 >
//                     <Image
//                         src={project.image}
//                         alt={project.title}
//                         height={300}
//                         width={300}
//                         className="w-[100%] object-cover transition-transform duration-700"
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// }

// 'use client';

// import Image from 'next/image';
import { useState } from 'react';

interface Group {
    id: number;
    image: string;
    title: string;
    category: string;
    description: string;
    color: string;
}

interface Realisation {
    id: string;
    projet: string;
    couverture: string;
    groups: Group[];
}

export default function RealisationGrildSlide({
    produits,
    className
}: {
    produits: Realisation[];
    className?: string;
}) {
    const [selectedProject, setSelectedProject] = useState<Realisation | null>(null);
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const openModal = (project: Realisation) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <div className={`${className} grid grid-cols-1 lg:grid-cols-3 gap-10 p-10`}>
                {produits.map((project) => (
                    <div
                        key={project.id}
                        className="relative bg-white h-[400px] rounded-lg overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500"
                        onClick={() => openModal(project)}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <Image
                            src={project.couverture}
                            alt={project.projet}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Overlay avec effet hover */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${
                            hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                        }`}>
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500"
                                style={{
                                    transform: hoveredId === project.id ? 'translateY(0)' : 'translateY(20px)'
                                }}
                            >
                                <h3 className="text-white text-2xl font-bold mb-2">
                                    {project.projet}
                                </h3>
                                <p className="text-white/80 text-sm">
                                    Cliquez pour voir les {project.groups.length} images
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header du modal */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    {selectedProject.projet}
                                </h2>
                                <p className="text-gray-600 mt-1">
                                    {selectedProject.groups.length} réalisations
                                </p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                                aria-label="Fermer"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-600"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Grille d'images dans le modal */}
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {selectedProject.groups.map((group, index) => (
                                <div
                                    key={group.id}
                                    className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <div className="relative aspect-square">
                                        <Image
                                            src={group.image}
                                            alt={group.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    
                                    {/* Info overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h4 className="text-white font-semibold text-sm mb-1">
                                                {group.title}
                                            </h4>
                                            <p className="text-white/80 text-xs mb-1">
                                                {group.category}
                                            </p>
                                            <p className="text-white/70 text-xs">
                                                {group.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
}