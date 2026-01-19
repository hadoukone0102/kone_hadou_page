"use client";
import { useState } from "react";
import { 
  LayoutDashboard, 
//   Users, 
//   Settings, 
  FileText,
  ChevronLeft,
  ChevronRight 
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: FileText, label: "Dévis", href: "/admin/demandes/devis" },
    // { icon: Users, label: "Utilisateurs", href: "#" },
    // { icon: Settings, label: "Paramètres", href: "#" },
  ];

  return (
    <aside className={`bg-primary border-r border-gray-200 transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {!collapsed && <h1 className="text-xl w-full font-bold text-white text-center uppercase">Siglass-CI</h1>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-secondary transition cursor-pointer"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item,index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary hover:text-white transition group"
            >
              <item.icon size={20} className="flex-shrink-0" />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}