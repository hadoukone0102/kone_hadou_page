export type menu ={
    label:string;
    href:string;
    highlight?:boolean;
    btn?:boolean;
    login?:boolean;
}
export const menuItems: menu [] = [
    { label: 'MENUISERIES POUR L\'HABITAT', href: '#' },
    { label: 'MENUISERIES EXTÉRIEURES & OUTDOOR', href: '#' },
    { label: 'MENUISERIES BÂTIMENTS & TERTIAIRES', href: '#' },
    { label: 'PARTICULIERS', href: '#', highlight: true },
    { label: 'ENTREPRISES', href: '#', highlight: false, btn:true },
    { label: 'Mon Compte', href: '#', login:true},
];
