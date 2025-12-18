"use client";

import ContentPage from "@/features/Contents/views/content-page";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import LandingPage from "./landing-page";
import { useState } from "react";


export default function Home_Page(){
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <div className="flex flex-col gap-0 px-0 m-0">
            {/****************Header Page**************************** */}
            <Header 
                className="sticky top-0 left-0 right-0 z-50"
                onMenuHover={setActiveMenu}
            />
            <Navigation onMenuChange={setActiveMenu} />
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