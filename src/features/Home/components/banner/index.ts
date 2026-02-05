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
    title: "L’élégance du mouvement, la liberté de l’espace",
    desc: "Les baies coulissantes offrent de larges ouvertures, une lumière naturelle généreuse et une continuité parfaite entre intérieur et extérieur.",
  },
  {
    id: "02",
    image: "/images/coulissant.jpg",
    alt: "accessoires",
    title: "Ouvrez grand votre intérieur aux rayons du soleil",
    desc: "Avec nos baies vitrées, l'architecture s'efface pour laisser place à la lumière. Faites de chaque rayon un élément de décoration, et de votre espace intérieur une prolongation naturelle de l'extérieur.",
  },
  {
    id: "03",
    image: "/images/pergola.jpg",
    alt: "pergola",
    title: "",
    desc: "Une expertise maitrisée dans la conception et l’installation de Pergolas bioclimatiques, des solutions adaptées à vos besoins.",
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
    desc: "mur rideaux concus pour sublimer vos batiments…..",
  },
];
