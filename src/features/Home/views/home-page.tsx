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
                    <ContentPage />
                </div>
            </main>

            {/****************Footer Page**************************** */}
            <Footer/>
        </div>
    )
}