"use client";

import ContentPage from "@/features/Contents/views/content-page";
import Footer from "./footer";
import Header from "./header";
import { useState } from "react";
import DevisDrawer from "@/features/drawers/devis-drawer";
import ScrollingBanner from "../components/banner/scroll-banner";

export default function Home_Page(){
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <div className="flex flex-col gap-0 px-0 m-0">
            {/*************************Header Page**************************** */}
            <Header
                onDevisClick={() => setDrawerOpen(true)}
            />
            <ScrollingBanner />

            {/* <Navigation onMenuChange={setActiveMenu} /> */}
            {/* Drawer de devis */}
            <DevisDrawer 
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
            {/* <LandingPage/> */}
            {/****************************Body Page**************************** */}
            <main className="flex-grow">
                <div className="w-full">
                    <ContentPage />
                </div>
            </main>
            {/****************************Footer Page**************************** */}
            <Footer/>
        </div>
    )
}