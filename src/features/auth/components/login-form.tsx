import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginForm (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('Connexion:', { email, password });
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
                </label>
                <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-black pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="votre@email.com"
                    required
                />
                </div>
            </div>

            {/* Champ Mot de passe */}
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
                </label>
                <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-black pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="••••••••"
                    required
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                </div>
            </div>

            {/* Options supplémentaires */}
            <div className="flex items-center justify-between">
                <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
                </label>
                <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                Mot de passe oublié?
                </a>
            </div>

            {/* Bouton de connexion */}
            <button
                type="submit"
                className="w-full cursor-pointer bg-secondary to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition duration-200"
            >
                Se connecter
            </button>
        </form>
    )
}