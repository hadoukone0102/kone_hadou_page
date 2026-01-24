import Footer from "@/features/Home/views/footer";
import MainHeader from "@/features/shares/main-head";
// import ParticulierGrildSlide from "../components/particulier-gril-slide";
// import ParticulierGrildVenranda from "../components/particulier-verndas";

export default function Particulier (){
    return (
        <>
            <MainHeader 
                className="" 
                BruncumbType="Particuliers"
                BruncumbTitle="Votre Habitat, Notre Passion" 
                BannerSrc="/banner/second.jpg"
                BannerType={
                    {
                        title:"Particuliers",
                        description:"Des menuiseries aluminium et PVC qui transforment votre habitat",
                        subDescription:"Bienvenue dans votre espace dédié à l'aménagement de votre maison. SIGLASS vous accompagne dans tous vos projets : construction neuve, extension, rénovation ou embellissement. Découvrez nos solutions de fenêtres, portes, baies vitrées, vérandas et pergolas conçues sur mesure pour créer des espaces de vie lumineux, confortables et élégants. Nos conseillers SIGLASS sont à votre écoute pour transformer vos envies en réalité."
                    }
                }
            />
            {/* <main className="flex-grow">
                <div className="w-full">
                    <div className="bg-primary pb-30">
                        <ParticulierGrildSlide/>
                        <ParticulierGrildVenranda className="pb-20"/>
                    </div>
                </div>
            </main> */}
            <Footer/>
        </>
    )
}