import BatimentSlide from "@/features/Contents/components/batiments/bat-slide";
import Footer from "@/features/Home/views/footer";
import MainHeader from "@/features/shares/main-head";

export default function MenuiseriePourBatimentTertiairePage() {
    return (
       <>
            <MainHeader 
                className="" 
                BruncumbTitle="Menuiserie pour le bâtiment & tertiaire" 
                BannerSrc="/banner/second.jpg"
                BannerDesc="Profitez de nos offres spéciales sur les menuiseries en batiment ce mois-ci !"
                BannerTitle="Menuiserie pour le bâtiment & tertiaire"
            />
            {/****************************Body Page**************************** */}
            <main className="flex-grow">
                <div className="w-full">
                    <div className="bg-primary pb-30">
                        {/* <HeadContent/> */}
                        <BatimentSlide/>
                    </div>
                </div>
            </main>
            {/****************************Footer Page**************************** */}
            <Footer/>
        </>
    )
}