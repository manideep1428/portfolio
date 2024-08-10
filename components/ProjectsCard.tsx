import Image from "next/image";
import { GitHubSvg } from "./Svg";

interface Props{
    description : string
    title :string
    imageUrl :string
    className?:string
    gitHub:string
    linkTo:string
}


export default function ProjectCard({description , title , imageUrl , className , gitHub , linkTo}:Props){
    return(
        <div className={`overflow-hidden rounded-lg shadow-2xl border-4 border-[#6c5ce7] ${className}`}>
            <Image
            src={imageUrl}
            width="800"
            height="600"
            alt="Project 1"
            // style="aspect-ratio: 800 / 600; object-fit: cover;"
            className="h-56 w-full object-cover p-2"
            />
            <div className="bg-white p-8">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-3 text-gray-600">
               {description}
            </p>
            <div className="mt-6 flex justify-between">
                <a
                className="inline-flex text-sm font-bold items-center rounded-md bg-[#5a7bd6] px-6 py-2 text-white shadow-lg transition-colors hover:bg-[#382bee] focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:ring-offset-2"
                href={linkTo}
                >
                View Project
                </a>
                <a
                target="_blank"
                className="inline-flex text-sm font-semibold  px-6 py-2 text-white shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 "
                href={gitHub}
                ><GitHubSvg/></a>
            </div>
            </div>
        </div>
    )
}