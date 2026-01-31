'use client';

import Image from 'next/image';
import { useState, useRef, useCallback, useEffect } from 'react';

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
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Realisation | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [gridIndex, setGridIndex] = useState(0);
    const gridRef = useRef<HTMLDivElement>(null);
    const gridTouchStart = useRef<number>(0);
    const gridTouchEnd = useRef<number>(0);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const updateVisible = () => {
            const w = window.innerWidth;
            if (w < 640) setVisibleCount(1);
            else if (w < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };
        updateVisible();
        window.addEventListener('resize', updateVisible);
        return () => window.removeEventListener('resize', updateVisible);
    }, []);

    const maxGridIndex = Math.max(0, produits.length - visibleCount);

    const gridNext = useCallback(() => {
        setGridIndex((prev) => (prev >= maxGridIndex ? 0 : prev + 1));
    }, [maxGridIndex]);

    const gridPrev = useCallback(() => {
        setGridIndex((prev) => (prev <= 0 ? maxGridIndex : prev - 1));
    }, [maxGridIndex]);

    const onGridTouchStart = (e: React.TouchEvent) => {
        gridTouchStart.current = e.touches[0].clientX;
        gridTouchEnd.current = e.touches[0].clientX;
    };
    const onGridTouchMove = (e: React.TouchEvent) => {
        gridTouchEnd.current = e.touches[0].clientX;
    };
    const onGridTouchEnd = () => {
        const diff = gridTouchStart.current - gridTouchEnd.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) gridNext();
            else gridPrev();
        }
    };

    const openModal = (project: Realisation) => {
        setSelectedProject(project);
        setCurrentIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        if (selectedProject) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
        }
        return () => { document.documentElement.style.overflow = ''; };
    }, [selectedProject]);


    const cardWidth = 100 / visibleCount;

    return (
        <>
            {/* ========== GRID ========== */}
            <div className={`${className} grid grid-cols-1 lg:grid-cols-3 gap-10 p-10`}>
                {produits.map((project) => (
                    <div
                        key={project.id}
                        className="relative bg-white h-full w-full rounded-lg overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500"
                        onClick={() => openModal(project)}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <Image
                            src={project.couverture}
                            alt={project.projet}
                            height={300}
                            width={300}
                            // fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 w-[100%]"
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

            {/* ========== MODAL CAROUSEL ========== */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex flex-col sm:items-center sm:justify-center bg-black/80 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white sm:rounded-2xl w-full sm:max-w-5xl overflow-hidden flex flex-col h-full sm:h-auto sm:max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center px-4 py-3 sm:p-6 border-b border-gray-200 flex-shrink-0">
                            <div>
                                <h2 className="text-xl sm:text-3xl font-bold text-gray-900">{selectedProject.projet}</h2>
                                <p className="text-gray-500 text-sm mt-0.5">
                                    {currentIndex + 1} / {selectedProject.groups.length}
                                </p>
                            </div>
                            {/* Flèche gauche */}
                            <button
                                onClick={gridPrev}
                                className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Flèche droite */}
                            <button
                                onClick={gridNext}
                                className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                         {/* Sliding track */}
                        <div
                            className="overflow-hidden"
                            ref={gridRef}
                            onTouchStart={onGridTouchStart}
                            onTouchMove={onGridTouchMove}
                            onTouchEnd={onGridTouchEnd}
                        >
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${gridIndex * cardWidth}%)` }}
                            >
                                {selectedProject.groups.map((project) => (
                                    <div
                                        key={project.id}
                                        className="flex-shrink-0 px-2 sm:px-3"
                                        style={{ width: `${cardWidth}%` }}
                                    >
                                        <div
                                            className="relative bg-white rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 h-full"
                                            onMouseLeave={() => setHoveredId(null)}
                                        >
                                            {/* Image */}
                                            <div className="relative w-full" style={{ paddingBottom: '70%' }}>
                                                <div className="absolute inset-0">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        sizes="(max-width: 740px) 95vw, (max-width: 1024px) 45vw, 30vw"
                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                            </div>

                                            {/* Overlay mobile: toujours visible */}
                                            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100 opacity-100`}>
                                                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                                                    <h3 className="text-white text-base sm:text-xl font-bold">{project.title}</h3>
                                                    {/* <p className="text-white/60 text-xs sm:text-sm mt-0.5">
                                                        {project.groups.length} images →
                                                    </p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {selectedProject.groups.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setGridIndex(Math.min(index, maxGridIndex))}
                                    className={`rounded-full transition-all duration-300 ${
                                        index === gridIndex
                                            ? 'w-6 h-2.5 bg-orange-500'
                                            : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}