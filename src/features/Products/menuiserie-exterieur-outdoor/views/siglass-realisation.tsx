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
                        {/* Header */}
                        <div
                            className="pt-4" 
                            style={{ textAlign: "center", marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>
                            <div style={{
                            display: "inline-flex", alignItems: "center", gap: 6,
                            padding: "5px 12px", borderRadius: "999px", marginBottom: 12,
                            background: "rgba(255,140,0,0.1)", border: "1px solid rgba(255,140,0,0.25)",
                            }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f97316" }} />
                            <span style={{ color: "#fb923c", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                                Nos réalisations
                            </span>
                            </div>
                            <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>
                            Projets réalisés
                            </h2>
                            <p style={{ color: "#6b7280", fontSize: 13 }}>
                            Découvrez l'ensemble de nos projets en menuiserie aluminium et produits verriers.
                            </p>
                        </div>
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