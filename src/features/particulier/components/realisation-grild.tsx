import Image from 'next/image';

export default function RealisationGrildSlide ({
    produits,
    className
}:{
    produits:any[],
    className?:string
}){
    return (
        <div className={`${className} grid grid-cols-1 lg:grid-cols-3 gap-10 p-10`}>
            {produits.map((project) => (
                <div
                    key={project.id}
                    className="bg-white h-full transition-all overflow-hidden duration-700 cursor-pointer"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        height={300}
                        width={300}
                        className="w-[100%] object-cover transition-transform duration-700"
                    />
                </div>
            ))}
        </div>
    );
}