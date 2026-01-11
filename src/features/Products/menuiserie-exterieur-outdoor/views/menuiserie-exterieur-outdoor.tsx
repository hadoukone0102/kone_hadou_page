import ExterieuSlide from "@/features/Contents/components/exterieurs/ext-slide";
import Footer from "@/features/Home/views/footer";
import MainHeader from "@/features/shares/main-head";

export default function MenuiseriePourExterieurPage() {
    return (
        <>
            <MainHeader 
                className="" 
                BruncumbTitle="Menuiserie pour l'extérieur & Outdoor" 
                BannerSrc="/banner/second.jpg"
                BannerDesc="Profitez de nos offres spéciales sur les menuiseries en aluminium ce mois-ci !"
                BannerTitle="Menuiserie pour l'extérieur & Outdoor"
            />
            {/****************************Body Page**************************** */}
            <main className="flex-grow">
                <div className="w-full">
                    <div className="bg-primary pb-30">
                        {/* <HeadContent/> */}
                        <ExterieuSlide/>
                    </div>
                </div>
            </main>
            {/****************************Footer Page**************************** */}
            <Footer/>
        </>
    )
}