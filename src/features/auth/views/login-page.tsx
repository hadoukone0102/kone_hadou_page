
import Image from 'next/image';
import LoginForm from '../components/login-form';

export default function LoginPage() {


  return (
    <div className="lg:h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full h-full bg-white overflow-hidden bg-red-500">
        <div className="flex flex-col md:flex-row h-full ">

          {/* Section gauche - Logo et branding */}
          <div className="md:w-1/2 bg-secondary/100 p-12 flex flex-col justify-center items-center text-white">
            <div className="text-center flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-8 shadow-lg">
                  <Image src="siglas.png" width={100} height={100} alt='logo'/>
              </div>
              <h1 className="text-4xl font-bold mb-4">Bienvenue</h1>
              <p className="text-lg opacity-90">Connectez-vous pour accéder à votre espace</p>
            </div>
          </div>

          {/* Section droite - Formulaire */}
          <div className="md:w-1/2 p-12 flex flex-col items-center justify-center">
            <div className="max-w-md w-full mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">Connexion</h2>
              <p className="text-gray-600 mb-8 text-center">Entrez vos identifiants pour continuer</p>
              <LoginForm/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}