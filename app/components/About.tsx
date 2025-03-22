import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <div className="px-5 lg:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            <div className="align-center justify-center my-auto">
                <h3 className="text-3xl font-bold text-black lg:text-5xl ">
                    Blue Sea Lighting - Professional Stage Lighting OEM/ODM
                </h3>
                <p className="text-lg font-semibold text-black py-5 lg:text-xl ">
                    Professional OEM/ODM stage light factory & manufacturer
                </p>
                <p className="text-md lg:text-lg">
                    <span className="text-blue-800 font-semibold">Blue Sea Lighting® </span>
                    is a professional OEM/ODM stage light factory & Manufacturer with 5,000 square meter plant in Huadu, Guangzhou, China. We have extensive R&D, production and sales team to meet your different demands, and most of our products have passed the CE, ROSH, FCC, and other approvals. 
                </p>
                <br />

                <p className="text-md lg:text-lg">
                        We are equipped with the most advanced automatic machines and well-equipped devices for stage lighting production, which can support our monthly production capability. 
                </p>
                <br />
                <p className="text-md lg:text-lg">
                    Our Products have been exported to more than 100 countries and regions, Our exceptional engineering and manufacturing expertise plus broad experience in the stage lighting industry add value to both our customers.
                </p>
                <br />
                <Link href={''} className="p-2 px-5 bg-indigo-500 rounded-lg text-white transition-all hover:bg-indigo-600">
                    Learn more
                </Link>
            </div>
            <div className="">
                <Image 
                    src={"/test.jpg"} 
                    alt="About" 
                    className="rounded-xl w-full " 
                    width={500}
                    height={10}
                />

            </div>
        </div>
    </div>
  )
}

export default About