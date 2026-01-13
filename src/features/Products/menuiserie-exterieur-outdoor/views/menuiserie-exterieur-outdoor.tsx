import ExterieuSlide from "@/features/Contents/components/exterieurs/ext-slide";
import Footer from "@/features/Home/views/footer";
import MainHeader from "@/features/shares/main-head";

export default function MenuiseriePourExterieurPage() {
    return (
        <div className="flex flex-col gap-0 px-0 m-0">
            
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
                        <ExterieuSlide/>
                    </div>
                </div>
            </main>
            {/****************************Footer Page**************************** */}
            <Footer/>
        </div>
    )
}