import {Phone, Mail, MapPin } from 'lucide-react';

type HeadProps = {
    onDevisClick?: () => void;
}

export default function TopBar ({onDevisClick}:HeadProps){
    return (
        <div className="bg-primary text-white py-2 ">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href="tel:+22527212702 62" className="flex items-center gap-2 hover:text-[#3193bd] transition-colors">
                            <Phone size={14} />
                            <span>+225 27 21 27 02 62</span>
                        </a>
                        <span className="flex items-center gap-2">
                            <MapPin size={14} />
                            Abidjan, Côte d&apos;Ivoire
                        </span>
                        <a href="mailto:infos@siglass-ci.com" className="flex items-center gap-2 hover:text-[#3193bd] transition-colors">
                            <Mail size={14} />
                            <span>infos@siglass-ci.com</span>
                        </a>
                        <button 
                            onClick={onDevisClick}
                            className="bg-secondary hover:bg-secondary/100 px-4 py-1 text-sm font-medium transition-colors"
                        >
                            DEVIS GRATUIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}