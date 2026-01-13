import Footer from "@/features/Home/views/footer";
import MainHeader from "@/features/shares/main-head";

export default function Particulier (){
    return (
        <>
            <MainHeader 
                className="" 
                BruncumbType="Particulier"
                BruncumbTitle="Menuiserie pour tous " 
                BannerSrc="/banner/first.jpg"

            />
            {/****************************Body Page**************************** */}
                <main className="flex-grow">
                    <div className="w-full">
                        <div className="bg-primary pb-30">
                            {/* <HeadContent/> */}
                            {/* <HabitatSlide/> */}
                        </div>
                    </div>
                </main>
            {/****************************Footer Page**************************** */}
            <Footer/>
        </>
    )
}