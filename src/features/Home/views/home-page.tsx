"use client";

import ContentPage from "@/features/Contents/views/content-page";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import LandingPage from "./landing-page";
import { useState } from "react";
import DevisDrawer from "@/features/drawers/devis-drawer";

export default function Home_Page(){
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    console.log(activeMenu);
    return (
        <div className="flex flex-col gap-0 px-0 m-0">
            {/****************Header Page**************************** */}
            <Header 
                className="sticky top-0 left-0 right-0 z-50"
                onMenuHover={setActiveMenu}
                onDevisClick={() => setDrawerOpen(true)}
            />
            <Navigation onMenuChange={setActiveMenu} />
            {/* Drawer de devis */}
            <DevisDrawer 
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
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