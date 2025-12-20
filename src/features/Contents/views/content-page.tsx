"use client";

import PartnersCarousel from "./partenaire";
import PresentPage from "./prensent-page";
import ProjectsGrid from "./realisation";
// import SiglassAbout from "./siglass-about";

export default function ContentPage() {
    return (
        <div className="flex flex-col gap-4">
            {/** Add more content or components as needed */}
            <PresentPage/>
            <ProjectsGrid/>
            <PartnersCarousel/>
            {/* <SiglassAbout /> */}
        </div>
    );
}