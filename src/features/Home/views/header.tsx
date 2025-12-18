"use client";
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Twitter, Facebook, Youtube, ChevronDown, ArrowUp } from 'lucide-react';

import Image from "next/image";

type HeaderProps = {
    className?: string;
    onMenuHover?: (menu: string | null) => void;
}

export default function Header({ className, onMenuHover }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const menuItems = [
        { label: 'Accueil', href: '#', hasDropdown: false },
        { label: 'Entreprise', href: '#', hasDropdown: true, key: 'entreprise' },
        { label: 'Produits', href: '#', hasDropdown: true, key: 'produits' },
        { label: 'Réalisations', href: '#', hasDropdown: true, key: 'realisations' },
        { label: 'Contacts', href: '#', hasDropdown: false }
    ];

    return (
        <>
            <header className={`${className} bg-white transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
                <div className={`bg-gradient-to-r from-gray-800 to-gray-900 text-white transition-all duration-300 overflow-hidden ${
                    scrolled ? 'max-h-0' : 'max-h-20'
                }`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-2 text-sm">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 hover:text-[#3193bd] transition-colors cursor-pointer">
                                    <Clock size={16} />
                                    <span>Lun - Ven: 8h - 18h | Sam: 9h - 13h</span>
                                </div>
                                <div className="flex items-center gap-2 hover:text-[#3193bd] transition-colors cursor-pointer">
                                    <MapPin size={16} />
                                    <span>Abidjan, Côte d'Ivoire</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <a href="mailto:infos@siglass-ci.com" className="flex items-center gap-2 hover:text-[#3193bd] transition-colors">
                                    <Mail size={16} />
                                    <span>infos@siglass-ci.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`flex justify-between items-center transition-all duration-300 ${
                            scrolled ? 'py-3' : 'py-4'
                        }`}>
                            {/* Logo */}
                            <div className="flex items-center group cursor-pointer">
                                <div className={`relative p-2 border-b-4 border-[#3193bd] transition-all duration-300 group-hover:border-[#1c6f8c] ${
                                    scrolled ? 'p-1' : 'p-2'
                                }`}>
                                    <Image
                                        src="/siglas.png"
                                        alt="Logo"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className={`ml-3 transition-all duration-300 ${scrolled ? 'hidden sm:block' : ''}`}>
                                    <h1 className={`font-bold text-gray-800 transition-all ${scrolled ? 'text-lg' : 'text-xl'}`}>
                                        SIGLASS
                                    </h1>
                                    <p className={`text-xs text-gray-600 ${scrolled ? 'hidden' : 'block'}`}>
                                        Système Menuiserie Premium
                                    </p>
                                </div>
                            </div>

                            {scrolled && (
                                <nav className="hidden md:block">
                                    <ul className="flex space-x-6">
                                        {menuItems.map((item, idx) => (
                                            <li 
                                                key={idx}
                                                onMouseEnter={() => item.hasDropdown && onMenuHover?.(item.key || null)}
                                                onMouseLeave={() => onMenuHover?.(null)}
                                            >
                                                <a 
                                                    href={item.href}
                                                    className="text-gray-700 hover:text-[#3193bd] transition-colors font-medium flex items-center gap-1 text-sm"
                                                >
                                                    {item.label}
                                                    {item.hasDropdown && (
                                                        <ChevronDown size={14} className="transition-transform duration-300" />
                                                    )}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}

                            <div className="flex items-center gap-4">
                                <div className={`flex items-center gap-2 transition-all duration-300 ${
                                    scrolled ? '' : 'flex-col items-end'
                                }`}>
                                    {!scrolled && (
                                        <p className="text-xs text-gray-600">Appelez-nous maintenant</p>
                                    )}
                                    <a 
                                        href="tel:+22527212702 62" 
                                        className={`font-bold text-[#3193bd] hover:text-[#1c6f8c] transition-colors flex items-center gap-2 ${
                                            scrolled ? 'text-sm' : 'text-lg'
                                        }`}
                                    >
                                        <Phone size={scrolled ? 16 : 20} className={!scrolled ? 'animate-pulse' : ''} />
                                        <span className={scrolled ? 'hidden lg:inline' : ''}>+225 27 21 27 02 62</span>
                                    </a>
                                </div>

                                <button className={`relative overflow-hidden group cursor-pointer bg-[#3193bd] text-white font-bold rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                                    scrolled ? 'px-4 py-2 text-sm' : 'px-8 py-4'
                                }`}>
                                    <span className="relative z-10">
                                        {scrolled ? 'Devis' : 'Demande de devis'}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1c6f8c] to-[#3193bd] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                </button>

                                {scrolled && (
                                    <div className="hidden xl:flex gap-2 ml-2">
                                        <a href="#" className="w-8 h-8 border-2 border-[#3193bd] rounded flex items-center justify-center text-[#3193bd] hover:bg-[#3193bd] hover:text-white transition-all duration-300">
                                            <Twitter size={14} />
                                        </a>
                                        <a href="#" className="w-8 h-8 border-2 border-[#3193bd] rounded flex items-center justify-center text-[#3193bd] hover:bg-[#3193bd] hover:text-white transition-all duration-300">
                                            <Facebook size={14} />
                                        </a>
                                        <a href="#" className="w-8 h-8 border-2 border-[#3193bd] rounded flex items-center justify-center text-[#3193bd] hover:bg-[#3193bd] hover:text-white transition-all duration-300">
                                            <Youtube size={14} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bouton Scroll to Top */}
            <button
                onClick={scrollToTop}
                className={`fixed right-6 bottom-6 z-50 bg-[#3193bd] text-white p-3 rounded-full shadow-lg hover:bg-[#1c6f8c] transition-all duration-300 hover:scale-110 ${
                    showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
                aria-label="Retour en haut"
            >
                <ArrowUp size={24} />
            </button>
        </>
    );
}