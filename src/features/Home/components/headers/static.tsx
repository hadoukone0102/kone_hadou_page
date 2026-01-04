"use client";

import { useState } from "react";
import Image from "next/image";
import { menuItems } from "../../constants";
import { Menu, Search } from "lucide-react";
    

export default function StaticHeader (){
    const [searchOpen, setSearchOpen] = useState(false);
    // const [searchQuery, setSearchQuery] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
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
    )
}