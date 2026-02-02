"use client";

import Footer from "@/features/Home/views/footer";
import MainHeader from "@/features/shares/main-head";

export default function ProductSelectedView({id}:{id:string}) {
    console.log("Selected product ID:", id);
    return (
        <div className="flex flex-col gap-0 px-0 m-0">
            <MainHeader 
                className="" 
                BruncumbTitle="Nos Produits" 
                BannerSrc="/banner/second.jpg"
                BannerDesc="Profitez de nos offres spéciales ce mois-ci !"
                BannerTitle="Les produits de siglass"
                BruncumbType="Produits"
                BannerType={
                    {
                        title:"Nos Produits",
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
                    </div>
                </div>
            </main>
            {/****************************Footer Page**************************** */}
            <Footer/>
        </div>
    );

    
}