"use client";

import PresentPage from "./prensent-page";
import SiglassAbout from "./siglass-about";

export default function ContentPage() {
    return (
        <div className="flex flex-col gap-4">
            {/** Add more content or components as needed */}
            <PresentPage/>
            {/* Add more content or components as needed */}
            <SiglassAbout />
        </div>
    );
}