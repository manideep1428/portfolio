import ProjectCard from "./ProjectsCard";

export default function ProjectPage(){
    return(
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
             title="Web3 Binance" 
             imageUrl="/crypto.jpg"
             description="Learn How Trades Works With Help Of An AI(Gemini)"
             gitHub={"https://github.com/manideep1428/web3_binance"}
             linkTo="https://web3-binance.vercel.app/"
            />
            <ProjectCard
             title="Chat With AI"
             imageUrl="/Ai.png"
             description="Chat With Large Language Model to Solve Your Doubts"
             gitHub="https://github.com/manideep1428/google_hackathon"
             linkTo="https://google-hackathon-five.vercel.app/chat"
            />
             <ProjectCard
             title="What You See"
             imageUrl={"/aitalk.jpg"}
             description="AI That Transcribes And Decribes What is Seeing Through  Camera Of Your Device"
             gitHub="https://github.com/manideep1428/google_hackathon"
             linkTo="https://google-hackathon-five.vercel.app/video"
            />          
        </div>
    )
}