"use client";

export default function PresentPage(){
    return (
        <div className="bg-white py-16 flex items-center justify-center">
            {/* Company Presentation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
                <h1 className="text-4xl font-bold text-gray-800 mb-1 text-primary">Excellences <small className="text-black">&</small></h1>
                <h1 className="text-4xl font-bold text-gray-800 mb-4 text-orange-500">Expertises</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-lg text-gray-600 mb-6">
                    Chez SIGLASS, nous nous engageons à fournir des solutions en verre de haute qualité pour tous vos besoins résidentiels et commerciaux.
                    <br />
                    Forts de notre expertise et de notre savoir-faire, nous offrons une gamme complète de produits et services, allant des fenêtres et portes en aluminium aux parois de douche et caves à vin.
                    <br />
                    Notre équipe dévouée travaille en étroite collaboration avec les architectes, designers et entrepreneurs pour garantir que chaque projet est réalisé avec précision et excellence.
                    <br />
                    Faites confiance à SIGLASS pour transformer vos espaces avec des solutions en verre élégantes, durables et innovantes.
                </p>
            </div>
        </div>
    )
}