import { Routes } from '@/lib/utils/route';
import { ChevronRight, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Breadcrumb({
    className = '',
    title,
    type="Produits"
}: {
    className?: string,
    title?: string
    type?:string;
}) {
    const router = useRouter();
    return (
        <nav className={`flex items-center py-4 px-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg mb-6 shadow-sm ${className}`}>
            <ol className="flex items-center gap-2 text-sm">
                <li className="flex items-center">
                    <small 
                        onClick={()=> router.push(Routes.home.home)}
                        className="flex cursor-pointer items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                        <Home size={16} />
                        <span className='text-sm'>Home</span>
                    </small>
                </li>
                
                <li className="flex items-center">
                    <ChevronRight size={16} className="text-gray-400" />
                </li>
                
                <li className="flex items-center">
                    <a 
                        href="#" 
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                        {type}
                    </a>
                </li>
                
                <li className="flex items-center">
                    <ChevronRight size={16} className="text-gray-400" />
                </li>
                
                <li className="text-gray-900 font-semibold">
                    {title || "Menuiserie pour l'habitat"}
                </li>
            </ol>
        </nav>
    );
}