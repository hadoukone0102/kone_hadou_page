import { Routes } from "@/lib/utils/route";

export type menu = {
    label: string;
    href: string;
    highlight?: boolean;
    btn?: boolean;
    login?: boolean;
}

export const menuItems: menu[] = [
    { 
        label: "PRODUITS", 
        href: Routes.product.menuiseriePourLhabitat
    },
    { 
        label: "REALISATIONS", 
        href: Routes.product.menuiserieExterieuresEtOutdoor 
    },
    { 
        label: "ENTREPRISE", 
        href: Routes.particulier.path, 
        highlight: true
    },
    
    // { 
    //    label: "SYSTÈMES TERTIAIRES",
    //     href: Routes.product.menuiserieBatimentsEtTertiaires 
    // },

    // { 
    //     label: "PROFESSIONNELS", 
    //     href: Routes.entreprise.path, 
    //     btn: true 
    // },
    
    // { 
    //     label: "Mon Compte", 
    //     href: '#', 
    //     login: true 
    // },
];  