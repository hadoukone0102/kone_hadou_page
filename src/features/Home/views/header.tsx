"use client";
import Image from "next/image";
type headerProps ={
    className?:string
}
export default function Header({className}:headerProps) {
    return (
        <header className={`${className} bg-white shadow-sm`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center p-2 border-b-4 border-[#3193bd] pt-2">
                        <Image
                            src="/siglas.png"
                            alt="Logo"
                            width={60}
                            height={60}
                        />
                    </div>

                    {/* Contact et CTA */}
                    <div className="flex items-center gap-6">
                        <a href="tel:+22527212702 62" className="text-gray-700 font-bold hover:text-gray-900 transition-colors">
                            +225 27 21 27 02 62
                        </a>
                        <button className="cursor-pointer bg-[#3193bd] hover:bg-[#1c6f8c] text-white font-bold px-6 py-3 rounded font-medium transition-colors">
                            Demande de devis
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}