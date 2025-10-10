"use client";

export default function PresentPage(){
    return (
        <div className="bg-white py-4 flex items-center justify-center h-auto">
            <div className="flex items-center justify-center text-center h-auto w-full">
                {/* slogan */}
                <div className="max-w-7xl  sm:px-6 lg:px-2">
                    <h1 className="text-2xl font-bold text-gray-800 mb-1 text-primary">Excellences <small className="text-black">&</small></h1>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4 text-orange-500">Expertises</h1>
                </div>
                {/* Company Presentation */}
                <div className="max-w-7xl  sm:px-6 lg:px-8">
                    <p className="text-sm text-gray-600 mb-6 text-start">
                        Chez SIGLASS, nous nous engageons à fournir des solutions en verre de haute qualité <br/> pour tous vos besoins résidentiels et commerciaux.
                        Forts de notre expertise et de notre savoir-faire,<br/> nous offrons une gamme complète de produits et services, allant des fenêtres et portes <br/> en aluminium aux parois de douche et caves à vin.
                        Notre équipe dévouée travaille en étroite collaboration avec les architectes,<br/> designers et entrepreneurs pour garantir que chaque projet est réalisé avec précision et excellence.<br/>
                        Faites confiance à SIGLASS pour transformer vos espaces avec des solutions en verre élégantes, durables et innovantes.
                    </p>
                </div>
            </div>
        </div>
    )
}