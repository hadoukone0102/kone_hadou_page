"use client";
import { useState } from 'react';
import { Search, X, Menu } from 'lucide-react';
import TopBar from '../components/headers/top-bar';
import Image from "next/image";
import { menuItems } from '../constants';
import { useRouter } from 'next/navigation';
import { Routes } from '@/lib/utils/route';

type HeaderProps = {
    onDevisClick?: () => void;
}

export default function Header({ onDevisClick }: HeaderProps) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();
    
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Recherche:', searchQuery);
    };

    return (
        <>
            <div className='sticky top-0 z-50'>
                <TopBar onDevisClick={onDevisClick} />
                <header className="bg-white shadow-md">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-3 lg:py-4">
                            <div className="flex items-center flex-shrink-0 cursor-pointer" 
                                onClick={() =>router.push(Routes.home.home)}
                            >
                                <Image
                                    src="/siglas.png"
                                    alt="SIGLASS Logo"
                                    width={120}
                                    height={40}
                                    className="h-10 lg:h-12 w-auto"
                                />
                            </div>
                            
                            <nav className="hidden xl:flex items-center gap-1">
                                {menuItems.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className={`px-3 py-2 text-xs font-medium transition-colors ${
                                            item.highlight ? 'bg-orange-500 text-white hover:bg-orange-600' :
                                            item.btn ? "bg-primary text-white hover:bg-primary/90" :
                                            item.login ? "underline text-primary hover:text-primary/80" :
                                            'text-gray-700 hover:text-primary'
                                        }`}
                                    >
                                        {item.label.split(",").map((word, i) => (
                                            <span key={i} className="block text-center leading-tight">
                                                {word}
                                            </span>
                                        ))}
                                    </a>
                                ))}
                                
                                <button
                                    onClick={() => setSearchOpen(true)}
                                    className="ml-2 w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors border-l pl-2"
                                    aria-label="Rechercher"
                                >
                                    <Search size={20} />
                                </button>
                            </nav>

                            <div className="flex xl:hidden items-center gap-2">
                                <button
                                    onClick={() => setSearchOpen(true)}
                                    className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
                                    aria-label="Rechercher"
                                >
                                    <Search size={22} />
                                </button>

                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors"
                                    aria-label="Menu"
                                >
                                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>

                        {mobileMenuOpen && (
                            <nav className="xl:hidden py-4 border-t border-gray-200 max-h-[70vh] overflow-y-auto">
                                {menuItems.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block px-4 py-3 text-sm font-medium transition-colors border-b border-gray-100 ${
                                            item.highlight ? 'bg-orange-500 text-white hover:bg-orange-600' :
                                            item.btn ? "bg-primary text-white hover:bg-primary/90" :
                                            item.login ? "text-primary font-semibold" :
                                            'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        {item.label.replace(/,/g, ' ')}
                                    </a>
                                ))}
                            </nav>
                        )}
                    </div>
                </header>
            </div>

            <div className={`fixed inset-0 bg-white z-[100] transition-all duration-500 ${searchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="h-full flex flex-col">
                    <div className="flex justify-end p-4 lg:p-6">
                        <button
                            onClick={() => setSearchOpen(false)}
                            className="w-12 h-12 flex items-center justify-center text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
                            aria-label="Fermer"
                        >
                            <X size={32} />
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center px-4">
                        <div className="w-full max-w-4xl">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8 text-center">
                                Que recherchez-vous ?
                            </h2>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Rechercher..."
                                    className="w-full px-4 lg:px-6 py-4 lg:py-6 text-xl lg:text-2xl border-b-4 border-primary focus:outline-none focus:border-primary/80 transition-colors"
                                    autoFocus
                                />
                                <button
                                    onClick={handleSearch}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors"
                                >
                                    <Search size={28} />
                                </button>
                            </div>

                            <div className="mt-8 lg:mt-12">
                                <p className="text-gray-600 mb-4 text-sm lg:text-base">Suggestions populaires :</p>
                                <div className="flex flex-wrap gap-2 lg:gap-3">
                                    {['Fenêtres aluminium', 'Portes coulissantes', 'Baies vitrées', 'Parois de douche', 'Vérandas'].map((suggestion) => (
                                        <button
                                            key={suggestion}
                                            onClick={() => setSearchQuery(suggestion)}
                                            className="px-3 lg:px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-xs lg:text-sm transition-colors"
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}