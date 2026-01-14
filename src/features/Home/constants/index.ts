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
        label: "MENUISERIES,POUR L'HABITAT", 
        href: Routes.product.menuiseriePourLhabitat
    },
    { 
        label: "MENUISERIES,EXTÉRIEURES & OUTDOOR", 
        href: Routes.product.menuiserieExterieuresEtOutdoor 
    },
    { 
        label: "MENUISERIES,BÂTIMENTS & TERTIAIRES", 
        href: Routes.product.menuiserieBatimentsEtTertiaires 
    },
    { 
        label: "PARTICULIERS", 
        href: Routes.particulier.path, 
        highlight: true
    },
    { 
        label: "ENTREPRISES", 
        href: Routes.entreprise.path, 
        btn: true 
    },
    // { 
    //     label: "Mon Compte", 
    //     href: '#', 
    //     login: true 
    // },
];