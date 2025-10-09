"use client";
import {  Twitter, Facebook, Youtube } from 'lucide-react';

export default function Navigation() {

    return (
        <div className="">
            {/* Navigation */}
            <nav className="bg-[#3193bd] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <ul className="flex space-x-8 py-4">
                            <li>
                                <a href="#" className="hover:text-gray-300 transition-colors font-medium">
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300 transition-colors font-medium">
                                    Entreprise
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300 transition-colors font-medium">
                                    Produits
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300 transition-colors font-medium">
                                    Réalisations
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300 transition-colors font-medium">
                                    Contacts
                                </a>
                            </li>
                        </ul>

                        {/* Social Media Icons */}
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 border-2 border-white rounded flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 border-2 border-white rounded flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 border-2 border-white rounded flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}