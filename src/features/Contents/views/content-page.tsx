"use client";

import ParticulierGrildVenranda from "@/features/particulier/components/particulier-verndas";
import AboutContent from "./about-content";
import ActualityContent from "./actuality-content";
import SlideContent from "./content-slide";
import HeadContent from "./head-content";
import PartnersCarousel from "./partenaire";
import PersonnalContent from "./personnal-content";
// import PresentPage from "./prensent-page";
// import ProjectsGrid from "./realisation";

export default function ContentPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className="bg-primary pb-30">
                <HeadContent/>
                <SlideContent/>
            </div>
            <div className="bg-white pb-20">
                <AboutContent/>
            </div>
            <div className="bg-white pb-20">
                <PersonnalContent/>
            </div>
            <div className="bg-white">
                <ActualityContent/>
            </div>
            {/* <PresentPage/>*/}
            <ParticulierGrildVenranda/>
              {/*<ProjectsGrid/>*/}
            <PartnersCarousel/> 
            {/* <SiglassAbout /> */}
        </div>
    );
}