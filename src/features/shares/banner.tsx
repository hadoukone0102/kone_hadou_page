export default function Banner({
    className = '',
    title,
    desc = "Profitez de nos offres spéciales sur les menuiseries en aluminium ce mois-ci !",
    src
}: {
    className?: string,
    title?: string,
    src?: string
    desc?: string
}) {
    return (
        <div className={`relative w-full h-[400px] overflow-hidden ${className}`}>
            {/* Image de fond */}
            <div 
                className="absolute inset-0 bg-cover bg-center transform scale-105 hover:scale-110 transition-transform duration-700"
                style={{
                    backgroundImage: `url(${src || '/banners/banner1.jpg'})`,
                }}
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            
            {/* Contenu */}
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                           {title || "Menuiserie pour l'habitat"}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed animate-slide-up">
                            {desc}
                        </p>
                        <div className="mt-8 flex gap-4 animate-slide-up-delayed">
                            {/* <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
                                Découvrir nos produits
                            </button> */}
                            <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300 border border-white/30">
                                Demander un devis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Décoration géométrique */}
            <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-1/2 translate-y-1/2" />
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500 rounded-full transform translate-x-1/3" />
            </div>
        </div>
    );
}