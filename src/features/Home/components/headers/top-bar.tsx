import { Phone, Mail, MapPin } from 'lucide-react';

type HeadProps = {
    onDevisClick?: () => void;
}

export default function TopBar({ onDevisClick }: HeadProps) {
    return (
        <div className="bg-primary text-white py-2">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between lg:justify-end items-center text-sm">
                    {/* Version Mobile - Seulement téléphone et bouton */}
                    <div className="flex lg:hidden items-center gap-3">
                        <a href="tel:+22527212702 62" className="flex items-center gap-2 hover:text-orange-300 transition-colors">
                            <Phone size={14} />
                            <span className="hidden sm:inline">+225 27 21 27 02 62</span>
                        </a>
                    </div>

                    {/* Version Desktop - Tout visible */}
                    <div className="hidden lg:flex items-center gap-6">
                        <a href="tel:+22527212702 62" className="flex items-center gap-2 hover:text-orange-300 transition-colors">
                            <Phone size={14} />
                            <span>+225 27 21 27 02 62</span>
                        </a>
                        <span className="flex items-center gap-2">
                            <MapPin size={14} />
                            Abidjan, Côte d&apos;Ivoire
                        </span>
                        <a href="mailto:infos@siglass-ci.com" className="flex items-center gap-2 hover:text-orange-300 transition-colors">
                            <Mail size={14} />
                            <span>infos@siglass-ci.com</span>
                        </a>
                    </div>

                    {/* Bouton DEVIS - Toujours visible */}
                    <button 
                        onClick={onDevisClick}
                        className="bg-secondary hover:bg-orange-600 px-4 py-1 ml-2 text-sm font-semibold transition-colors whitespace-nowrap"
                    >
                        DEVIS GRATUIT
                    </button>
                </div>
            </div>
        </div>
    );
}