import { Routes } from '@/lib/utils/route';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function GrildSlide ({
    produits,
    className,
    title
}:{
    produits:any[],
    className?:string
    title?:string
}){
    const router = useRouter();
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex items-center justify-center pt-10 ">
                <span className='text-xl italic uppercase border-b-4 border-secondary'>{title}</span>
            </div>
            <div className={`${className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 p-10`}>
                {produits.map((project) => (
                    <div
                        key={project.id}
                        className="group relative bg-white transition-all duration-700 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl"
                        onClick={() => router.push(`${Routes.product.menuiseriePourLhabitat}/${project.id}`)}
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                quality={95}
                                priority={project.id <= 2}
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-[#3193bd]/70 group-hover:via-[#3193bd]/40 transition-all duration-500"></div>

                            {/* Contenu texte */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                {project.description && (
                                    <p className="text-sm text-gray-300 mb-2">{project.description}</p>
                                )}
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                    {project.title}
                                </h3>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}