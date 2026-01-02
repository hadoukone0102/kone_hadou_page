export type Slide = {
    id:string
    image:string;
    alt:string;
    title:string;
    desc:string;
}

export const banner : Slide[] =[
    {
        id:"01",
        image:"/banner/first.jpg",
        alt:"Première image",
        title:"Performance Designe, Facilité de fabrication",
        desc:"Découvrez nos systèmes de fenêtres, coulissants, portes, vérandas, murs- rideaux, portails, garde-corps et pergolas",
    } ,
    {
        id:"02",
        image:"/banner/second.jpg",
        alt:"Deuxième image",
        title:"Réalisations &, inspirations",
        desc:"Laissez-vous inspirer par les plus belles mises en œuvre de menuiseries Sepalumic et donnez vie à vos projets les plus audacieux.",
    } ,
    {
        id:"03",
        image:"/banner/firts.jpg",
        alt:"Troisième image",
        title:"Fabricants Menuisiers, Nos solutions personnalisées",
        desc:"Fabricant installateur, industriels et préfabricateurs, prescripteurs du bâtiment découvrez nos solutions produits et services pour vous accompagner dans la réussite de vos chantiers.",
    } ,
    {
        id:"04",
        image:"/banner/four.jpg",
        alt:"Première image",
        title:"Osez la couleur Libérez, votre créativité",
        desc:"Découvrez notre palette de teintes exclusives pour les menuiseries aluminium",
    } ,
    {
        id:"05",
        image:"/banner/five.jpg",
        alt:"Première image",
        title:"INNOVER, C'EST S'ENGAGER",
        desc:"Avec conscience Avec nos clients Avec impact Pour durer",
    }
]