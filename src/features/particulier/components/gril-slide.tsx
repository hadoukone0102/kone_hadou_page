import Image from 'next/image';

export default function GrildSlide ({
    produits,
    className
}:{
    produits:any[],
    className?:string
}){

    return (
        <div className={`${className} grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 p-10`}>
            {produits.map((project) => (
                <div
                    key={project.id}
                    className="bg-white transition-all duration-700 cursor-pointer"
                >
                    {/* Image Container */}
                    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                            quality={95}
                            priority={project.id <= 2}
                            className="object-cover transition-transform duration-700"
                        />
                        
                        {/* Label catégorie - Toujours visible */}
                        <div className="absolute top-6 left-6 bg-white/50 px-4 py-2 rounded-md shadow-lg transform transition-all duration-500 hover:scale-110 z-10">
                            <span className="text-sm font-semibold text-gray-800">
                                {project.category}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}