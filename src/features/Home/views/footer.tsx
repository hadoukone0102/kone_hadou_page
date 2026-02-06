"use client";

import { ArrowBigDown, Facebook, Instagram, Mail, Navigation, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-16" style={{ minHeight: '90vh' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* SIGLASS Section */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">SIGLASS</h3>
                            <p className="text-white text-opacity-90 leading-relaxed mb-8">
                                SIGLASS conçoit, fabrique et installe des solutions sur mesure en vitrerie et menuiserie aluminium/PVC, pour les professionnels du bâtiment et les particuliers.
                            </p>
                            <div className="w-20 h-20 bg-white bg-opacity-10 flex items-center justify-center rounded">
                               <Image
                                    src="/siglas.png"
                                    alt="Logo"
                                    width={60}
                                    height={60}
                                />
                            </div>
                        </div>

                        {/* Notre Société */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Notre Société</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="text-white text-opacity-90 hover:text-opacity-100 transition-opacity flex items-center">
                                        <span className="mr-2"><ArrowBigDown/></span>
                                        Qui sommes nous
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white text-opacity-90 hover:text-opacity-100 transition-opacity flex items-center">
                                        <span className="mr-2"><ArrowBigDown/></span>
                                        Entreprise
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white text-opacity-90 hover:text-opacity-100 transition-opacity flex items-center">
                                        <span className="mr-2"><ArrowBigDown/></span>
                                        Nos Produits
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white text-opacity-90 hover:text-opacity-100 transition-opacity flex items-center">
                                        <span className="mr-2"><ArrowBigDown/></span>
                                        Réalisations
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white text-opacity-90 hover:text-opacity-100 transition-opacity flex items-center">
                                        <span className="mr-2"><ArrowBigDown/></span>
                                        Contacts
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Nous Contacter */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Nous Contacter</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white bg-opacity-20 text-[#3193bd] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <Navigation/>
                                    </div>
                                    <div>
                                        <p className="text-white text-opacity-90">
                                            Zone portuaire, Vridi Tri postal,
                                            <br />
                                            après l&apos;école ESAM.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white text-[#3193bd] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail/>
                                    </div>
                                    <a href="tel:+22527212702 62" className="text-white text-opacity-90 hover:text-opacity-100 transition-opacity">
                                        +225 27 21 27 02 62
                                    </a>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white text-[#3193bd] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail/>
                                    </div>
                                    <a href="mailto:infos@siglass-ci.com" className="text-white text-opacity-90 hover:text-opacity-100 transition-opacity">
                                        infos@siglass-ci.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Téléchargements */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Téléchargements</h3>
                            <a 
                                // href="https://siglass-ci.com/site/wp-content/uploads/2017/11/catalogue_siglass.pdf" 
                                href="/catalogue"
                                className="inline-block bg-white text-[#3193bd] px-6 py-4 rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-semibold">CATALOGUE-PRODUITS.PDF</span>
                                </div>
                            </a>

                            {/* Réseaux sociaux https://www.instagram.com/siglass.ci?igsh=eHVlYmVoZ21tbmp4&utm_source=qr */}
                            <div className="mt-12">
                                <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
                                <div className="flex gap-3">
                                    <a 
                                        href="https://www.facebook.com/profile.php?id=100066527658255#" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white text-[#3193bd] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white text-[#3193bd] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                                        <Twitter size={20} />
                                    </a>
                                    <a 
                                        href="https://www.youtube.com/watch?v=mDIsu5PvHpU" 
                                        target="_blank" rel="noopener noreferrer" 
                                        className="w-10 h-10 bg-white text-[#3193bd] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                                        <Youtube size={20} />
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/siglass.ci?igsh=eHVlYmVoZ21tbmp4&utm_source=qr" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white text-[#3193bd] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                                        <Instagram size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="border-t border-white border-opacity-20 pt-12 mb-12">
                        <div className="max-w-2xl">
                            <h3 className="text-2xl font-bold mb-4">Inscrivez-vous à notre newsletter</h3>
                            <p className="text-white text-opacity-90 mb-6">
                                Recevez les dernières actualités, nos nouveaux produits et nos réalisations directement dans votre boîte mail.
                            </p>
                            <div className="flex gap-4">
                                <input 
                                    type="email" 
                                    placeholder="Votre adresse email"
                                    className="flex-1 px-6 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:bg-opacity-30 transition-all"
                                />
                                <button className="bg-white text-[#3193bd] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                                    S&apos;inscrire
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-white border-opacity-20 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-white text-opacity-80 text-sm">
                                Copyright © 2017 Bienvenue sur SIGLASS Côte d&apos;Ivoire. Une Réalisation Digital Group.
                            </p>
                            <a href="#" className="text-white text-opacity-80 text-sm hover:text-opacity-100 transition-opacity">
                                Politique de confidentialité
                            </a>
                        </div>
                    </div>
                </div>
        </footer>
    );
}