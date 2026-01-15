import HabitatSlide from "@/features/Contents/components/habitats/habitat-slide";
import Footer from "@/features/Home/views/footer";
import MainHeader from "@/features/shares/main-head";
import AboutHabitat from "../components/about-abita";

export default function MenuiseriePourLhabitatPage() {
    return (
        <>
            <MainHeader 
                className="" 
                BruncumbTitle="Menuiserie pour l'habitat" 
                BannerSrc="/banner/first.jpg"
            />
             {/****************************Body Page**************************** */}
                <main className="flex-grow">
                    <div className="w-full">
                        <div className="bg-primary pb-30">
                            <AboutHabitat/>
                            <HabitatSlide/>
                        </div>
                    </div>
                </main>
            {/****************************Footer Page**************************** */}
            <Footer/>
        </>
    );
}