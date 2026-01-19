"use client";
import { useState, useEffect } from 'react';
import { X, User, Building2, MessageSquare, FileText } from 'lucide-react';

type DevisDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
}

export default function DevisDrawer({ isOpen, onClose }: DevisDrawerProps) {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        entreprise: '',
        typeProjet: '',
        budget: '',
        ville: '',
        message: ''
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Ajoutez ici la logique d'envoi du formulaire
        alert('Demande de devis envoyée avec succès !');
        
        // Réinitialiser le formulaire
        setFormData({
            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            entreprise: '',
            typeProjet: '',
            budget: '',
            ville: '',
            message: ''
        });
        
        onClose();
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {/* Overlay du drawer */}
            <div 
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-60 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={handleOverlayClick}
            />

            {/* Drawer - Formulaire de devis */}
            <div 
                className={`fixed top-0 right-0 h-full w-full sm:w-[90%] md:w-[50%] bg-white shadow-2xl z-[600] transform transition-transform duration-500 ease-in-out overflow-y-auto ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Header du drawer */}
                <div className="sticky top-0 bg-gradient-to-r from-primary text-white p-6 flex justify-between items-center shadow-lg z-10">
                    <div>
                        <h2 className="text-2xl font-bold mb-1">Demande de Devis</h2>
                        <p className="text-sm text-blue-100">Remplissez le formulaire ci-dessous</p>
                    </div>
                    <button 
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-primary cursor-pointer flex items-center justify-center transition-colors"
                        aria-label="Fermer"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Contenu du formulaire */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Informations personnelles */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-2 mb-4">
                            <User size={20} className="text-[#3193bd]" />
                            <h3 className="text-lg font-bold text-gray-800">Informations personnelles</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nom *
                                </label>
                                <input
                                    type="text"
                                    name="nom"
                                    required
                                    value={formData.nom}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3193bd] focus:border-transparent transition-all"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Prénom *
                                </label>
                                <input
                                    type="text"
                                    name="prenom"
                                    required
                                    value={formData.prenom}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3193bd] focus:border-transparent transition-all"
                                    placeholder="Votre prénom"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3193bd] focus:border-transparent transition-all"
                                    placeholder="exemple@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Téléphone *
                                </label>
                                <input
                                    type="tel"
                                    name="telephone"
                                    required
                                    value={formData.telephone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3193bd] focus:border-transparent transition-all"
                                    placeholder="+225 XX XX XX XX XX"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Informations du projet */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-2 mb-4">
                            <Building2 size={20} className="text-[#3193bd]" />
                            <h3 className="text-lg font-bold text-gray-800">Détails du projet</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Entreprise (optionnel)
                                </label>
                                <input
                                    type="text"
                                    name="entreprise"
                                    value={formData.entreprise}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3193bd] focus:border-transparent transition-all"
                                    placeholder="Nom de votre entreprise"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Type de projet *
                                </label>
                                <select
                                    name="typeProjet"
                                    required
                                    value={formData.typeProjet}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3193bd] focus:border-transparent transition-all"
                                >
                                    <option value="">Sélectionnez un type</option>
                                    <option value="residentiel">Projet Résidentiel</option>
                                    <option value="commercial">Projet Commercial</option>
                                    <option value="hotelier">Projet Hôtelier</option>
                                    <option value="renovation">Rénovation</option>
                                    <option value="autre">Autre</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Budget estimé
                                </label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3193bd] focus:border-transparent transition-all"
                                >
                                    <option value="">Sélectionnez une fourchette</option>
                                    <option value="moins-5m">Moins de 5M FCFA</option>
                                    <option value="5m-10m">5M - 10M FCFA</option>
                                    <option value="10m-20m">10M - 20M FCFA</option>
                                    <option value="plus-20m">Plus de 20M FCFA</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Ville *
                                </label>
                                <input
                                    type="text"
                                    name="ville"
                                    required
                                    value={formData.ville}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3193bd] focus:border-transparent transition-all"
                                    placeholder="Abidjan, Yamoussoukro..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center gap-2 mb-4">
                            <MessageSquare size={20} className="text-[#3193bd]" />
                            <h3 className="text-lg font-bold text-gray-800">Votre message</h3>
                        </div>
                        <textarea
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3193bd] focus:border-transparent transition-all resize-none"
                            placeholder="Décrivez votre projet en détail : type de menuiserie, dimensions, délais souhaités..."
                        />
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-4 border-2 border-red-300 text-red-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-4 bg-secondary text-white rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <FileText size={20} />
                            Envoyer la demande
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}