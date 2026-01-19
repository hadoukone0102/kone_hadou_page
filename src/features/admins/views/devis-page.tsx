"use client";
import { useState } from "react";
import { 
  Search, 
  Filter, 
} from "lucide-react";
import DevisTable from "../components/devis-table";

export default function DevisPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Demandes de Devis</h1>
          <p className="text-gray-600 mt-1">Gérez toutes vos demandes de devis</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher par client, email ou ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-black pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 text-black py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">Tous les statuts</option>
              <option value="en_attente">En attente</option>
              <option value="en_cours">En cours</option>
              <option value="accepte">Accepté</option>
              <option value="refuse">Refusé</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <DevisTable/>
    </div>
  );
}