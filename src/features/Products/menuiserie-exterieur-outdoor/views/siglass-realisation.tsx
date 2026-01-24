// import ExterieuSlide from "@/features/Contents/components/exterieurs/ext-slide";
import Footer from "@/features/Home/views/footer";
import MainHeader from "@/features/shares/main-head";
// import AboutExterieur from "../components/about-ext";
import ParticulierGrildVenranda from "@/features/particulier/components/particulier-verndas";
import { Projects } from "@/features/Contents";
import GrildSlide from "@/features/particulier/components/gril-slide";
import PartnersCarousel from "@/features/Contents/views/partenaire";

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
                    <div className="bg-primary ">
                        <ParticulierGrildVenranda className="pb-10"/>
                        <GrildSlide produits={Projects} className=""/>
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