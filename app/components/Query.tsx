import Image from "next/image";
import Link from "next/link";

const images = [
    {
        name: "Product1",
        link: "#",
        image: "https://images.unsplash.com/photo-1726064855757-ac8720008fe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Product2",
        link: "#",
        image: "https://images.unsplash.com/photo-1742240216264-f0aac25ef4ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MXx8fGVufDB8fHx8fA%3D%3D"
    },
];

const Query = () => {
    return (
        <div className="bg-gray-950 text-white h-full">
            <div className="px-5 lg:px-10">
                <h3 className="text-center text-2xl font-bold lg:text-4xl py-5">
                    Hot Sale Stage Lights In Blue Sea Lighting
                </h3>
                <p className="text-center text-white text-lg p-5">
                    250W Beam Moving Head Light from BLUE SEA LIGHTING is a powerful and precise lighting fixture designed to create intense,
                    
                    sharp beams that elevate any event or stage production.
                </p>
                <div className="py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                        {images.map((image, index) => (
                            <div key={index} className="relative w-full h-[20em] group">
                                {/* Imagen */}
                                <Image
                                    src={image.image}
                                    alt={image.name}
                                    fill // Reemplaza layout="fill"
                                    className="rounded-xl object-cover" // Reemplaza objectFit="cover"
                                />
                                {/* Texto del enlace */}
                                <div className="absolute bottom-2 left-2">
                                    {/* Capa de fondo desvanecido */}
                                    <div className=" bg-black px-3 py-1 rounded-md">
                                        {/* Enlace con el texto */}
                                        <Link href={image.link} className="text-white font-semibold hover:underline">
                                            {image.name}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                    <div className="flex justify-center mt-5">
                        <Link href={'#'} className="bg-indigo-500 rounded-lg text-white text-center p-2 px-10 transition-all hover:bg-indigo-600">
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Query;