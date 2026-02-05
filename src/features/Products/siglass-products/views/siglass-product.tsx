import Footer from "@/features/Home/views/footer";
import MainHeader from "@/features/shares/main-head";
import AboutHabitat from "../components/about-abita";
import GrildSlide from "@/features/particulier/components/gril-slide";
import PartnersCarousel from "@/features/Contents/views/partenaire";
import { NOSPRODUITS, Produits } from "@/features/Contents";

export default function SiglassProducts() {
    return (
        <>
            <MainHeader 
                className="" 
                BruncumbTitle="Nos produits" 
                BannerSrc="/images/cloisonement.jpg"
                BannerTitle="Siglass vous présente ses produits"
                BannerType={
                    {
                        title:"Nos Produits",
                        description:"Des produits de haute gamme",
                        subDescription:"Bienvenue, parcourez les produits de siglass et n'hésiter surtout pas à nous contacté"
                    }
                }
            />
             {/****************************Body Page**************************** */}
                <main className="flex-grow mb-4">
                    <div className="w-full">
                        <div className="bg-primary">
                            <GrildSlide title="Nos produits" produits={NOSPRODUITS}/>
                            <AboutHabitat/>
                            {/* <GrildSlide title="Autres categorie de produits" produits={Produits}/> */}
                            {/* <PartnersCarousel/> */}
                        </div>
                    </div>
                </main>
            {/****************************Footer Page**************************** */}
            <Footer/>
        </>
    );
}