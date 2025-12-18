"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

type HeaderProps = {
    className?: string;
}

export default function Header({ className }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${className} bg-white transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
            {/* Top Bar - Informations importantes */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
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

            {/* Main Header */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo avec animation */}
                        <div className="flex items-center group cursor-pointer">
                            <div className="relative p-2 border-b-4 border-[#3193bd] transition-all duration-300 group-hover:border-[#1c6f8c]">
                                <Image
                                    src="/siglas.png"
                                    alt="SIGLASS Logo"
                                    width={60}
                                    height={60}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="ml-3">
                                <h1 className="text-xl font-bold text-gray-800">SIGLASS</h1>
                                <p className="text-xs text-gray-600">Système Menuiserie Premium</p>
                            </div>
                        </div>

                        {/* Contact et CTA */}
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <p className="text-xs text-gray-600">Appelez-nous maintenant</p>
                                    <a 
                                        href="tel:+225272127 02 62" 
                                        className="text-lg font-bold text-[#3193bd] hover:text-[#1c6f8c] transition-colors flex items-center gap-2"
                                    >
                                        <Phone size={20} className="animate-pulse" />
                                        +225 27 21 27 02 62
                                    </a>
                                </div>
                            </div>
                            <button className="relative overflow-hidden group cursor-pointer bg-[#3193bd] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <span className="relative z-10">Demande de devis</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1c6f8c] to-[#3193bd] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}