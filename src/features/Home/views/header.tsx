"use client";
import { useState } from 'react';
import { Search, X,Menu } from 'lucide-react';
import TopBar from '../components/headers/top-bar';
import Image from "next/image";
import { menuItems } from '../constants';

type HeaderProps = {
    onDevisClick?: () => void;
}

export default function Header({ onDevisClick }: HeaderProps) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Recherche:', searchQuery);
        // Ajoutez ici votre logique de recherche
    };

    return (
        <>
            {/* Top Bar - Contact Info */}
            <div className='sticky top-0 z-200'>
                <TopBar onDevisClick={onDevisClick} />
                <header className="bg-white shadow-md ">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center">
                                <Image
                                    src="/siglas.png"
                                    alt="SIGLASS Logo"
                                    width={150}
                                    height={50}
                                    className="h-12 w-auto"
                                />
                            </div>
                            
                            <nav className="hidden lg:flex items-center gap-1">
                                {menuItems.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                                            item.highlight
                                                ? 'bg-orange-500 text-white hover:bg-orange-600'
                                                : item.btn 
                                                ? "bg-primary text-white"
                                                : item.login
                                                ? "text-underline text-primary"
                                                : 'text-gray-700 hover:text-[#3193bd]'
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>

                            <button
                                onClick={() => setSearchOpen(true)}
                                className="border-r w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#3193bd] transition-colors"
                                aria-label="Rechercher"
                            >
                                <Search size={24} />
                            </button>

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700"
                                aria-label="Menu"
                            >
                                <Menu size={24} />
                            </button>
                        </div>

                        {mobileMenuOpen && (
                            <nav className="lg:hidden py-4 border-t border-gray-200">
                                {menuItems.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className={`block px-4 py-3 text-sm font-medium ${
                                            item.highlight
                                                ? 'bg-orange-500 text-white'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        )}
                    </div>
                </header>
            </div>
            <div
                className={`fixed inset-0 bg-white z-[100] transition-all duration-500 ${
                    searchOpen
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'
                }`}
            >
                <div className="h-full flex flex-col">
                    {/* Close Button */}
                    <div className="flex justify-end pt-35 pr-35">
                        <button
                            onClick={() => setSearchOpen(false)}
                            className="w-12 h-12 flex items-center justify-center text-gray-700 hover:text-[#3193bd] transition-colors"
                            aria-label="Fermer"
                        >
                            <X size={32} />
                        </button>
                    </div>

                    {/* Search Form */}
                    <div className="flex-1 flex items-center justify-center px-4">
                        <div className="w-full max-w-4xl">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
                                Que recherchez-vous ?
                            </h2>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Rechercher..."
                                    className="w-full px-6 py-6 text-2xl border-b-4 border-[#3193bd] focus:outline-none focus:border-[#2778a0] transition-colors"
                                    autoFocus
                                />
                                <button
                                    onClick={handleSearch}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3193bd] hover:text-[#2778a0] transition-colors"
                                >
                                    <Search size={32} />
                                </button>
                            </div>

                            {/* Suggestions */}
                            <div className="mt-12">
                                <p className="text-gray-600 mb-4">Suggestions populaires :</p>
                                <div className="flex flex-wrap gap-3">
                                    {['Fenêtres aluminium', 'Portes coulissantes', 'Baies vitrées', 'Parois de douche', 'Vérandas'].map((suggestion) => (
                                        <button
                                            key={suggestion}
                                            onClick={() => setSearchQuery(suggestion)}
                                            className="px-4 py-2 bg-gray-100 hover:bg-[#3193bd] hover:text-white rounded-full text-sm transition-colors"
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