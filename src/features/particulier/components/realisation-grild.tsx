'use client';

import { Star, Eye, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';

// ─── Types ──────────────────────────────────────────────────────────────────
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
    description: string;
    star: number;
}

// ─── Carte individuelle ─────────────────────────────────────────────────────
function ProjectCard({ project, onOpen }: { project: Realisation; onOpen: (p: Realisation) => void }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onOpen(project)}
            className="flex flex-col rounded-2xl overflow-hidden cursor-pointer"
            style={{
                background: 'linear-gradient(145deg, #1e2330 0%, #161a24 100%)',
                border: hovered ? '1px solid rgba(255,140,0,0.35)' : '1px solid rgba(255,255,255,0.06)',
                boxShadow: hovered
                    ? '0 25px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,140,0,0.25)'
                    : '0 8px 24px rgba(0,0,0,0.3)',
                transition: 'box-shadow 0.4s ease, transform 0.4s ease, border 0.3s ease',
                transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
            }}
        >
            {/* ── Image ── */}
            <div className="relative w-full overflow-hidden" style={{ height: '220px' }}>
                <Image
                    src={project.couverture}
                    alt={project.projet}
                    width={600}
                    height={440}
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 30vw"
                    className="w-full h-full object-cover"
                    style={{
                        transform: hovered ? 'scale(1.08)' : 'scale(1)',
                        transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                />

                {/* Gradient bas permanent */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)',
                    }}
                />

                {/* Badge Siglass */}
                <div
                    className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{
                        background: 'rgba(0,0,0,0.45)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.12)',
                    }}
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-white text-xs font-bold tracking-widest uppercase">Siglass</span>
                </div>

                {/* Pill "X photos" au hover */}
                <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.35s ease' }}
                >
                    <div
                        className="flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{
                            background: 'rgba(255,140,0,0.92)',
                            boxShadow: '0 4px 20px rgba(255,140,0,0.4)',
                        }}
                    >
                        <Eye size={15} color="#fff" />
                        <span className="text-white text-sm font-semibold">
                            {project.groups.length} photos
                        </span>
                    </div>
                </div>
            </div>

            {/* ── Contenu ── */}
            <div className="flex flex-col gap-2.5 p-5" style={{ flex: 1 }}>
                {/* Titre + flèche */}
                <div className="flex items-start justify-between">
                    <h3 className="text-white text-lg font-bold" style={{ letterSpacing: '-0.02em' }}>
                        {project.projet}
                    </h3>
                    <div
                        className="flex items-center justify-center w-8 h-8 rounded-full"
                        style={{
                            background: hovered ? 'rgba(255,140,0,0.15)' : 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,140,0,0.3)',
                            transition: 'background 0.3s ease',
                        }}
                    >
                        <ArrowUpRight
                            size={14}
                            color="#fb923c"
                            style={{
                                transform: hovered ? 'translate(2px,-2px)' : 'translate(0,0)',
                                transition: 'transform 0.3s ease',
                            }}
                        />
                    </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <Star
                            key={i}
                            size={13}
                            color={i < project.star ? '#facc15' : '#4b5563'}
                            fill={i < project.star ? '#facc15' : 'transparent'}
                        />
                    ))}
                    <span className="text-gray-500 text-xs ml-1.5">{project.star}/5</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed" style={{ flex: 1 }}>
                    {project.description}
                </p>

                {/* Bouton CTA */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onOpen(project);
                    }}
                    className="w-full text-white text-sm font-semibold py-2.5 rounded-xl mt-1"
                    style={{
                        background: 'linear-gradient(135deg, #ff8c00 0%, #ff6a00 100%)',
                        border: 'none',
                        letterSpacing: '0.03em',
                        boxShadow: hovered
                            ? '0 4px 20px rgba(255,140,0,0.45)'
                            : '0 2px 8px rgba(255,140,0,0.25)',
                        transition: 'box-shadow 0.3s ease',
                    }}
                >
                    Voir les réalisations
                </button>
            </div>
        </div>
    );
}

// ─── Composant principal ────────────────────────────────────────────────────
export default function RealisationGrildSlide({
    produits,
    className,
}: {
    produits: Realisation[];
    className?: string;
}) {
    // ── Modal state ──
    const [selectedProject, setSelectedProject] = useState<Realisation | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // ── Responsive: combien de cartes visibles dans le carousel modal ──
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 640) setVisibleCount(1);
            else if (w < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // ── Overflow body lock ──
    useEffect(() => {
        if (selectedProject) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [selectedProject]);

    // ── Carousel helpers ──
    const maxIndex = selectedProject
        ? Math.max(0, selectedProject.groups.length - visibleCount)
        : 0;

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    // Touch swipe
    const touchStart = useState(0);
    const touchEnd = useState(0);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStart[1](e.touches[0].clientX);
        touchEnd[1](e.touches[0].clientX);
    };
    const onTouchMove = (e: React.TouchEvent) => {
        touchEnd[1](e.touches[0].clientX);
    };
    const onTouchEnd = () => {
        const diff = touchStart[0] - touchEnd[0];
        if (Math.abs(diff) > 50) {
            diff > 0 ? goNext() : goPrev();
        }
    };

    // ── Open / close ──
    const openModal = (project: Realisation) => {
        setSelectedProject(project);
        setCurrentIndex(0);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const cardWidth = 100 / visibleCount;

    // ── Keyboard nav ──
    useEffect(() => {
        if (!selectedProject) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [selectedProject, goNext, goPrev]);

    return (
        <>
            {/* ========== GRID DE CARTES ========== */}
            <div className={`${className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:p-10`}>
                {produits.map((project) => (
                    <ProjectCard key={project.id} project={project} onOpen={openModal} />
                ))}
            </div>

            {/* ========== MODAL CAROUSEL ========== */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex flex-col sm:items-center sm:justify-center"
                    style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(6px)' }}
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full sm:max-w-5xl overflow-hidden flex flex-col"
                        style={{
                            background: '#1a1f2e',
                            height: '70%',
                            maxHeight: '100vh',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* ── Header modal ── */}
                        <div
                            className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 flex-shrink-0"
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                        >
                            <div>
                                <h2 className="text-white text-lg sm:text-2xl font-bold" style={{ letterSpacing: '-0.02em' }}>
                                    {selectedProject.projet}
                                </h2>
                                <p className="text-gray-500 text-sm mt-0.5">
                                    {currentIndex + 1} / {selectedProject.groups.length} images
                                </p>
                            </div>

                            {/* Close */}
                            <button
                                onClick={closeModal}
                                className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')
                                }
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* ── Carousel ── */}
                        <div className="relative flex-1 flex flex-col overflow-hidden">
                            {/* Flèche gauche */}
                            <button
                                onClick={goPrev}
                                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200"
                                style={{
                                    background: 'rgba(255,255,255,0.9)',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = '#fff')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.9)')}
                            >
                                <svg className="w-5 h-5 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Flèche droite */}
                            <button
                                onClick={goNext}
                                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200"
                                style={{
                                    background: 'rgba(255,255,255,0.9)',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = '#fff')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.9)')}
                            >
                                <svg className="w-5 h-5 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Track glissant */}
                            <div
                                className="flex-1 overflow-hidden"
                                onTouchStart={onTouchStart}
                                onTouchMove={onTouchMove}
                                onTouchEnd={onTouchEnd}
                            >
                                <div
                                    className="flex h-full"
                                    style={{
                                        transform: `translateX(-${currentIndex * cardWidth}%)`,
                                        transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                        
                                    }}
                                >
                                    {selectedProject.groups.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex-shrink-0 px-1.5 sm:px-2 h-full flex items-center"
                                            style={{ width: 500 }}
                                        >
                                            <div className="relative  overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title || selectedProject.projet}
                                                    width={100}
                                                    height={100}
                                                    // fill
                                                    // sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 30vw object-cover"
                                                    className=" w-full h-1/2"
                                                />
                                                {/* Overlay bas avec titre si présent */}
                                                {item.title && (
                                                    <div
                                                        className="absolute bottom-0 left-0 right-0 p-3 sm:p-4"
                                                        style={{
                                                            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                                                        }}
                                                    >
                                                        <h3 className="text-white text-sm sm:text-base font-semibold">{item.title}</h3>
                                                        {item.description && (
                                                            <p className="text-white/50 text-xs mt-0.5">{item.description}</p>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── Dots ── */}
                        <div className="flex justify-center gap-1.5 py-4 flex-shrink-0">
                            {selectedProject.groups.map((_, index) => {
                                const isActive = index === currentIndex;
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(Math.min(index, maxIndex))}
                                        className="rounded-full transition-all duration-300"
                                        style={{
                                            width: isActive ? '24px' : '8px',
                                            height: '8px',
                                            background: isActive ? '#ff8c00' : 'rgba(255,255,255,0.2)',
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}