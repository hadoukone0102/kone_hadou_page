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
        href: '#', 
        highlight: true 
    },
    { 
        label: "ENTREPRISES", 
        href: '#', 
        btn: true 
    },
    // { 
    //     label: "Mon Compte", 
    //     href: '#', 
    //     login: true 
    // },
];