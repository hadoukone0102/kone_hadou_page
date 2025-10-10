"use client";

import ContentPage from "@/features/Contents/views/content-page";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import LandingPage from "./landing-page";


export default function Home_Page(){
    return (
        <div className="flex flex-col gap-0 px-0 m-0">
            {/****************Header Page**************************** */}
            <Header/>
            <Navigation/>
            <LandingPage/>
            {/****************Body Page**************************** */}
            <main className="flex-grow">
                <div className="w-full py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-8">Bienvenue chez SIGLASS</h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Chez SIGLASS, nous nous engageons à fournir des solutions en verre de haute qualité pour tous vos besoins résidentiels et commerciaux.
                        </p>
                    </div>
                    <ContentPage />
                </div>
            </main>

            {/****************Footer Page**************************** */}
            <Footer/>
        </div>
    )
}