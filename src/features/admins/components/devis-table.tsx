import { 
  Eye, 
  Download, 
  MoreVertical,
} from "lucide-react";
import { demandesDevis } from "./constant";
import { useState } from "react";

export default function DevisTable (){
    const [searchTerm] = useState("");
    const [statusFilter] = useState("all");

    const filteredDevis = demandesDevis.filter((devis) => {
    const matchesSearch = 
    devis.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    devis.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    devis.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || devis.statut === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
    return (
        <div className="bg-white shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantité
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Montant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDevis.map((devis) => (
                <tr key={devis.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{devis.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{devis.client}</div>
                      <div className="text-sm text-gray-500">{devis.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{devis.produit}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{devis.quantite} unités</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-900">{devis.montant}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{devis.date}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-yellow-400">
                    {/* {getStatutBadge(devis.statut)} */}
                    en attente
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition">
                        <Download size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredDevis.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucune demande de devis trouvée</p>
          </div>
        )}

        {/* Pagination */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Affichage de <span className="font-medium">{filteredDevis.length}</span> sur{" "}
            <span className="font-medium">{demandesDevis.length}</span> résultats
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-black border border-gray-300 hover:bg-gray-100 transition text-sm">
              Précédent
            </button>
            <button className="px-4 py-2 bg-secondary text-white hover:bg-purple-700 transition text-sm">
              Suivant
            </button>
          </div>
        </div>
      </div>
    )
}