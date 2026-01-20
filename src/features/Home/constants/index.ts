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
         label: "SYSTÈMES RÉSIDENTIELS", 
        href: Routes.product.menuiseriePourLhabitat
    },
    { 
        label: "SYSTÈMES EXTÉRIEURS", 
        href: Routes.product.menuiserieExterieuresEtOutdoor 
    },
    { 
       label: "SYSTÈMES TERTIAIRES",
        href: Routes.product.menuiserieBatimentsEtTertiaires 
    },
    { 
        label: "PARTICULIERS", 
        href: Routes.particulier.path, 
        highlight: true
    },
    { 
        label: "PROFESSIONNELS", 
        href: Routes.entreprise.path, 
        btn: true 
    },
    // { 
    //     label: "Mon Compte", 
    //     href: '#', 
    //     login: true 
    // },
];  