export type Slide = {
    id: string;
    image: string;
    alt: string;
    title: string;
    desc: string;
}

export const banner: Slide[] = [
    {
        id: "01",
        image: "/siglass/h-04.jpg",
        alt: "Solutions menuiserie aluminium",
        title: "Design Performant, Fabrication Simplifiée",
        desc: "Explorez notre gamme complète de solutions en aluminium : fenêtres haute performance, portes coulissantes élégantes, vérandas lumineuses, murs-rideaux architecturaux, portails sécurisés, garde-corps design et pergolas bioclimatiques. Des produits pensés pour allier esthétique moderne, efficacité énergétique et facilité de mise en œuvre.",
    },
    {
        id: "02",
        image: "/banner/second.jpg",
        alt: "Projets réalisés en menuiserie aluminium",
        title: "Réalisations & Inspirations",
        desc: "Plongez au cœur de nos plus belles réalisations et laissez-vous inspirer par des projets architecturaux remarquables. De la résidence privée aux grands ensembles commerciaux, découvrez comment nos menuiseries aluminium transforment les espaces et subliment chaque construction. Votre projet mérite l'excellence.",
    },
    {
        id: "03",
        image: "/siglass/h-06.jpg",
        alt: "Solutions pour professionnels",
        title: "Solutions Sur Mesure pour Professionnels",
        desc: "Fabricants, installateurs, industriels et prescripteurs du bâtiment : bénéficiez de notre expertise et de nos solutions personnalisées. Nous vous accompagnons à chaque étape de vos chantiers avec des produits techniques performants, un service de qualité et un support dédié pour garantir la réussite de tous vos projets.",
    },
    {
        id: "04",
        image: "/siglass/h-10.jpg",
        alt: "Palette de couleurs aluminium",
        title: "Osez la Couleur, Libérez Votre Créativité",
        desc: "Donnez une identité unique à vos projets avec notre palette exclusive de teintes pour menuiseries aluminium. Du classique au contemporain, du sobre à l'audacieux, explorez un large éventail de couleurs et de finitions pour créer des ambiances qui vous ressemblent et qui marquent les esprits.",
    },
    {
        id: "05",
        // image: "/banner/five.jpg",
        image: "/siglass/h-11.jpg",
        alt: "Engagement et innovation",
        title: "Innover avec Engagement",
        desc: "L'innovation est au cœur de notre démarche : nous créons avec conscience environnementale, nous collaborons étroitement avec nos clients pour répondre à leurs besoins, nous générons un impact positif sur le secteur et nous construisons des solutions durables pour les générations futures. Ensemble, bâtissons l'avenir.",
    }
]