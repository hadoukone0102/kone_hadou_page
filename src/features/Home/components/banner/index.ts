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
    image: "/images/angle.jpg",
    alt: "elegance",
    title: "Élégance, innovation et performance",
    desc: "Des murs rideaux conçus pour sublimer vos bâtiments, alliant design moderne, solidité et durabilité.",
  },
  {
    id: "02",
    image: "/images/coulissant.jpg",
    alt: "accessoires",
    title: "Accessoires de qualité",
    desc: "Des accessoires fiables et performants, pensés pour renforcer l’esthétique, la robustesse et la longévité de vos installations.",
  },
  {
    id: "03",
    image: "/images/pergola.jpg",
    alt: "pergola",
    title: "Notre savoir-faire",
    desc: "Une expertise maîtrisée dans la conception et l’installation de solutions vitrées et menuisées sur mesure.",
  },
  {
    id: "04",
    image: "/images/veranda.jpg",
    alt: "espace optimisé",
    title: "Espace optimisé",
    desc: "Des vérandas et structures vitrées qui maximisent la luminosité et le confort, sans compromis sur la sécurité.",
  },
  {
    id: "05",
    image: "/images/rideaux.jpg",
    alt: "exterieur elegant",
    title: "Extérieur élégant",
    desc: "Des solutions extérieures modernes et durables, conçues pour valoriser vos espaces et résister au temps.",
  },
];
