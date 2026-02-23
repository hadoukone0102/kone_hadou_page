"use client";
import { Bell, Search, User } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 bg-gray-300 rounded-lg hover:bg-secondary hover:text-white transition">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">SIGLASS</p>
            <p className="text-xs text-gray-500 text-center">Admin</p>
          </div>
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}