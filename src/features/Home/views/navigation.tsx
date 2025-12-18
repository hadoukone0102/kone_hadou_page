"use client";
import { useState } from 'react';
import { Twitter, Facebook, Youtube, ChevronDown, Building2, Package, Image, Phone, ArrowRight } from 'lucide-react';

export default function Navigation() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const menuData = {
        entreprise: {
            title: "Entreprise",
            sections: [
                {
                    title: "À propos",
                    icon: <Building2 size={24} />,
                    links: [
                        { label: "Notre Histoire", href: "#" },
                        { label: "Notre Équipe", href: "#" },
                        { label: "Nos Valeurs", href: "#" },
                        { label: "Certifications", href: "#" }
                    ]
                },
                {
                    title: "Expertise",
                    icon: <Package size={24} />,
                    links: [
                        { label: "+20 ans d'expérience", href: "#" },
                        { label: "Projets réalisés", href: "#" },
                        { label: "Clients satisfaits", href: "#" },
                        { label: "Innovation", href: "#" }
                    ]
                }
            ]
        },
        produits: {
            title: "Produits",
            sections: [
                {
                    title: "Menuiserie Aluminium",
                    icon: <Package size={24} />,
                    links: [
                        { label: "Fenêtres", href: "#" },
                        { label: "Portes", href: "#" },
                        { label: "Baies vitrées", href: "#" },
                        { label: "Façades vitrées", href: "#" }
                    ]
                },
                {
                    title: "Menuiserie PVC",
                    icon: <Package size={24} />,
                    links: [
                        { label: "Fenêtres PVC", href: "#" },
                        { label: "Portes PVC", href: "#" },
                        { label: "Volets", href: "#" },
                        { label: "Pergolas", href: "#" }
                    ]
                },
                {
                    title: "Solutions sur mesure",
                    icon: <Package size={24} />,
                    links: [
                        { label: "Verrières", href: "#" },
                        { label: "Garde-corps", href: "#" },
                        { label: "Cloisons", href: "#" },
                        { label: "Mobilier", href: "#" }
                    ]
                }
            ]
        },
        realisations: {
            title: "Réalisations",
            sections: [
                {
                    title: "Projets résidentiels",
                    icon: <Image size={24} />,
                    links: [
                        { label: "Maisons individuelles", href: "#" },
                        { label: "Résidences de luxe", href: "#" },
                        { label: "Appartements", href: "#" }
                    ]
                },
                {
                    title: "Projets commerciaux",
                    icon: <Building2 size={24} />,
                    links: [
                        { label: "Bureaux", href: "#" },
                        { label: "Hôtels", href: "#" },
                        { label: "Centres commerciaux", href: "#" }
                    ]
                }
            ]
        }
    };

    return (
        <div className="relative">
            {/* Navigation */}
            <nav className="bg-gradient-to-r from-[#3193bd] to-[#1c6f8c] text-white relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <ul className="flex space-x-8 py-4">
                            <li>
                                <a 
                                    href="#" 
                                    className="hover:text-gray-200 transition-colors font-medium flex items-center gap-1 group"
                                >
                                    Accueil
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
                                </a>
                            </li>
                            <li
                                onMouseEnter={() => setActiveMenu('entreprise')}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <a 
                                    href="#" 
                                    className="hover:text-gray-200 transition-colors font-medium flex items-center gap-1"
                                >
                                    Entreprise
                                    <ChevronDown size={16} className={`transition-transform duration-300 ${activeMenu === 'entreprise' ? 'rotate-180' : ''}`} />
                                </a>
                            </li>
                            <li
                                onMouseEnter={() => setActiveMenu('produits')}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <a 
                                    href="#" 
                                    className="hover:text-gray-200 transition-colors font-medium flex items-center gap-1"
                                >
                                    Produits
                                    <ChevronDown size={16} className={`transition-transform duration-300 ${activeMenu === 'produits' ? 'rotate-180' : ''}`} />
                                </a>
                            </li>
                            <li
                                onMouseEnter={() => setActiveMenu('realisations')}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <a 
                                    href="#" 
                                    className="hover:text-gray-200 transition-colors font-medium flex items-center gap-1"
                                >
                                    Réalisations
                                    <ChevronDown size={16} className={`transition-transform duration-300 ${activeMenu === 'realisations' ? 'rotate-180' : ''}`} />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="hover:text-gray-200 transition-colors font-medium flex items-center gap-1 group"
                                >
                                    Contacts
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
                                </a>
                            </li>
                        </ul>

                        {/* Social Media Icons */}
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 border-2 border-white rounded flex items-center justify-center hover:bg-white hover:text-[#3193bd] transition-all duration-300 hover:scale-110">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 border-2 border-white rounded flex items-center justify-center hover:bg-white hover:text-[#3193bd] transition-all duration-300 hover:scale-110">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 border-2 border-white rounded flex items-center justify-center hover:bg-white hover:text-[#3193bd] transition-all duration-300 hover:scale-110">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mega Menu */}
            <div 
                className={`absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 z-40 ${
                    activeMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                }`}
                onMouseEnter={() => setActiveMenu(activeMenu)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                {activeMenu && menuData[activeMenu as keyof typeof menuData] && (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-3 gap-8">
                            {menuData[activeMenu as keyof typeof menuData].sections.map((section, idx) => (
                                <div 
                                    key={idx}
                                    className="group"
                                >
                                    <div className="flex items-center gap-3 mb-4 text-[#3193bd]">
                                        <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-[#3193bd] group-hover:text-white transition-colors">
                                            {section.icon}
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-800">{section.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {section.links.map((link, linkIdx) => (
                                            <li key={linkIdx}>
                                                <a 
                                                    href={link.href}
                                                    className="flex items-center justify-between text-gray-600 hover:text-[#3193bd] transition-colors py-2 px-3 rounded hover:bg-blue-50 group/item"
                                                >
                                                    <span>{link.label}</span>
                                                    <ArrowRight size={16} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* Call to Action Card */}
                            <div className="bg-gradient-to-br from-[#3193bd] to-[#1c6f8c] text-white p-6 rounded-lg">
                                <h3 className="font-bold text-xl mb-3">Besoin d'un conseil ?</h3>
                                <p className="text-sm mb-4 text-blue-100">
                                    Nos experts sont à votre disposition pour vous accompagner dans votre projet.
                                </p>
                                <button className="bg-white text-[#3193bd] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 w-full justify-center">
                                    <Phone size={18} />
                                    Nous contacter
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}