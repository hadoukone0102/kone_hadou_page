import Footer from "@/features/Home/views/footer";
import MainHeader from "@/features/shares/main-head";

export default function EntrepriseView (){
    return (
         <>
            <MainHeader 
                className="" 
                BruncumbType="Entreprises"
                BruncumbTitle="Solutions Professionnelles" 
                BannerSrc="/banner/first.jpg"
                BannerType={
                    {
                        title:"Entreprises",
                        description:"Partenaire de vos projets d'envergure en Côte d'Ivoire",
                        subDescription:"SIGLASS accompagne les professionnels du bâtiment, promoteurs immobiliers et entreprises dans leurs projets de construction et rénovation. Bénéficiez de notre expertise en menuiserie aluminium et PVC pour vos chantiers résidentiels, commerciaux et industriels à Abidjan et dans toute la Côte d'Ivoire. Nos équipes d'experts sont à votre disposition pour vous conseiller et vous accompagner de la conception à la réalisation."
                    }
                }
            />
            <main className="flex-grow">
                <div className="w-full">
                    <div className="bg-primary pb-30">
                        {/* <HeadContent/> */}
                        {/* <HabitatSlide/> */}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}