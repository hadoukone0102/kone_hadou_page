import { AccountType } from "./type";

export default function Banner({
    className = '',
    title,
    desc = "Profitez de nos offres spéciales sur les menuiseries en aluminium ce mois-ci !",
    src,
    particulier,
    entreprise
}: {
    className?: string,
    title?: string,
    src?: string,
    desc?: string,
    particulier?: AccountType,
    entreprise?: AccountType
}) {
    const isSpecialMode = particulier || entreprise;
    const activeData = particulier || entreprise;

    return (
        <div className={`relative w-full h-[500px] md:h-[600px] overflow-hidden ${className}`}>
            <div 
                className="absolute inset-0 bg-cover bg-center transform scale-105 hover:scale-110 transition-transform duration-700"
                style={{
                    backgroundImage: `url(${src || '/banners/banner1.jpg'})`,
                }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className={`${isSpecialMode ? "w-full" : "max-w-4xl"}`}>
                        {isSpecialMode ? (
                            <div className="flex flex-col items-center justify-center">

                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                    {activeData?.title || (particulier ? "Particuliers" : "Entreprises")}
                                </h1>

                                <h2 className="text-lg text-center md:text-3xl font-semibold text-white/90 mb-6">
                                    {activeData?.description || "Nos menuiseries : la signature des beaux espaces"}
                                </h2>

                                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-3xl">
                                    {activeData?.subDescription || desc}
                                </p>

                                <div className="mt-8">
                                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/50 hover:border-white text-lg">
                                        Demander un devis
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                    {title || "Menuiserie pour l'habitat"}
                                </h1>
                                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
                                    {desc}
                                </p>
                                <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300 border border-white/30">
                                    Demander un devis
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-1/2 translate-y-1/2" />
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500 rounded-full transform translate-x-1/3" />
            </div>
        </div>
    );
}