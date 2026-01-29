// import ExterieuSlide from "@/features/Contents/components/exterieurs/ext-slide";
import Footer from "@/features/Home/views/footer";
import MainHeader from "@/features/shares/main-head";
// import AboutExterieur from "../components/about-ext";
// import ParticulierGrildVenranda from "@/features/particulier/components/particulier-verndas";
// import { Realisation, REALISATIONS } from "@/features/Contents";
import PartnersCarousel from "@/features/Contents/views/partenaire";
import RealisationGrildSlide from "@/features/particulier/components/realisation-grild";
import { REALISATIONS } from "@/features/Contents";

export default function SiglassRealisation() {
    return (
        <div className="flex flex-col gap-0 px-0 m-0">
            <MainHeader 
                className="" 
                BruncumbTitle="Nos realisations" 
                BannerSrc="/banner/second.jpg"
                BannerDesc="Profitez de nos offres spéciales ce mois-ci !"
                BannerTitle="Les realisation de siglass"
                BruncumbType="Produits"
                BannerType={
                    {
                        title:"Nos Realisations",
                        description:"",
                        subDescription:""
                    }
                }
            />
            {/****************************Body Page**************************** */}
            <main className="flex-grow mb-4">
                <div className="w-full">
                    <div className="bg-primary">
                        <RealisationGrildSlide produits={REALISATIONS} className=""/>
                        {/* <AboutExterieur/> */}
                        {/* <ExterieuSlide/> */}
                    </div>
                </div>
            </main>
            <PartnersCarousel/> 
            {/****************************Footer Page**************************** */}
            <Footer/>
        </div>
    )
}