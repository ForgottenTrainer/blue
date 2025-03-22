import Image from "next/image"

const certificate = [
    {
        images: 'https://images.unsplash.com/photo-1742238896849-303d74d8a8de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }, 
    {
        images: 'https://images.unsplash.com/photo-1742238896849-303d74d8a8de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }, 
    {
        images: 'https://images.unsplash.com/photo-1742238896849-303d74d8a8de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }, 
    {
        images: 'https://images.unsplash.com/photo-1742238896849-303d74d8a8de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }, 
]

const Certificate = () => {
  return (
    <div className="bg-slate-950 text-white px-5 lg:px-10 py-5">
        <h3 className="text-center text-3xl font-bold lg:text-6xl">
            Certificates
        </h3>
        <br />
        <div className="py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    certificate.map((item, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <Image src={item.images} alt="certificate" width={300} height={500} className="rounded-xl h-[20em]" />
                        </div>
                    ))
                }
            </div>     
        </div>

    </div>
  )
}

export default Certificate