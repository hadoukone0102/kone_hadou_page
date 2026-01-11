import { useState } from "react";
import Header from "../Home/views/header";
import DevisDrawer from "../drawers/devis-drawer";
import Bruncumb from "./bruncumb";
import Banner from "./banner";

export default function MainHeader({
    className = '',
    BruncumbTitle = 'Menuiserie pour l\'habitat',
    BannerSrc = '/banner/first.jpg',
    BannerDesc ,
    BannerTitle,
}:{
    className?: string
    BruncumbTitle?: string
    BannerSrc?: string
    BannerDesc?: string
    BannerTitle?: string
}) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <div className={className}>
            <Header
                onDevisClick={() => setDrawerOpen(true)}
            />

            <DevisDrawer 
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />

            <Banner src={BannerSrc} title={BannerTitle} desc={BannerDesc}/>  

            <Bruncumb className="" title={BruncumbTitle}/>
        </div>
    );
}