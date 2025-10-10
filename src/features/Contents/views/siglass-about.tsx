"use client";
import Image from "next/image";

export default function SiglassAbout() {
    const products = [
        {
            id: 1,
            title: "Fenêtres & Portes",
            description: "Systèmes de fenestration en aluminium sur mesure pour l'architecture résidentielle et commerciale de luxe.",
            image: "/about-1.jpg",
            link: "#"
        },
        {
            id: 2,
            title: "Parois de Douche",
            description: "Parois de douche élégamment conçues alliant le caractère naturel et la durabilité de l'aluminium et du verre.",
            image: "/about-2.jpg",
            link: "#"
        },
        {
            id: 3,
            title: "Caves à Vin",
            description: "Caves à vin en aluminium et verre conçues pour présenter et protéger les collections précieuses à la maison ou dans les établissements d'accueil.",
            image: "/about-3.jpg",
            link: "#"
        }
    ];

    return (
        <section className="bg-white py-16">
            {/* About Section */}
            <div className="bg-primary py-16 mb-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex-1">
                            <h2 className="text-4xl font-light text-white mb-6">À Propos de SIGLASS</h2>
                            <p className="text-white text-lg leading-relaxed">
                                Nous sommes spécialisés dans les fenêtres, portes et systèmes de vitrage de qualité supérieure, 
                                définis par un savoir-faire et des performances exceptionnels, ce qui en fait un choix d&apos;élite 
                                pour les propriétaires exigeants ou les professionnels du design.
                            </p>
                        </div>
                        <div>
                            <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-red-900 transition-all duration-300 font-medium flex items-center gap-2">
                                EN SAVOIR PLUS
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3">
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        className="relative group overflow-hidden insert-0 aspect-[4/3] cursor-pointer"
                    >
                        {/* Image avec effet zoom */}
                        <div className="absolute inset-0 overflow-hidden">
                           <Image
                                src={product.image}
                                alt="Logo"
                                width={500}
                                height={500}
                                className="w-full h-full hover:scale-110 object-cover transition-transform duration-500 transform group-hover:scale-105"
                            />
                            {/* Overlay sombre */}
                            <div className="absolute inset-0 bg-primary/20 bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex flex-col justify-end p-8 text-white">
                            <h3 className="text-3xl font-light mb-4 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                                {product.title}
                            </h3>
                            <p className="text-white text-opacity-90 mb-6 leading-relaxed transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                                {product.description}
                            </p>
                            <a 
                                href={product.link}
                                className="flex w-[40%] p-2 rounded-sm border border-orange-400 items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition-colors duration-300 transform group-hover:translate-y-[-8px]"
                            >
                                EN SAVOIR PLUS
                                <svg className="w-5 h-5 transform group-hover:translate-x-2 pl-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}