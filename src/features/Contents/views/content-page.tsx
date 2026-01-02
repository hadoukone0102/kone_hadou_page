"use client";

import SlideContent from "./content-slide";
import HeadContent from "./head-content";
import PartnersCarousel from "./partenaire";
import PresentPage from "./prensent-page";
import ProjectsGrid from "./realisation";
// import SiglassAbout from "./siglass-about";

export default function ContentPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className="bg-primary">
                <HeadContent/>
                <SlideContent/>
            </div>
            {/* <PresentPage/>
            <ProjectsGrid/>*/}
            <PartnersCarousel/> 
            {/* <SiglassAbout /> */}
        </div>
    );
}