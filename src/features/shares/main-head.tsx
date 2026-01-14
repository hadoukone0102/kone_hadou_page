import { useState } from "react";
import Header from "../Home/views/header";
import DevisDrawer from "../drawers/devis-drawer";
import Bruncumb from "./bruncumb";
import Banner from "./banner";
import { AccountType } from "./type";

export default function MainHeader({
    className = '',
    BruncumbTitle = 'Menuiserie pour l\'habitat',
    BruncumbType = "Produits",
    BannerSrc = '/banner/first.jpg',
    BannerDesc ,
    BannerTitle,
    BannerType,
}:{
    className?: string
    BruncumbTitle?: string
    BannerSrc?: string
    BannerDesc?: string
    BannerTitle?: string
    BruncumbType?:string;
    BannerType?:AccountType,
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

            <Banner src={BannerSrc} title={BannerTitle} desc={BannerDesc} particulier={BannerType} entreprise={BannerType}/>  

            <Bruncumb type={BruncumbType} className="" title={BruncumbTitle}/>
        </div>
    );
}