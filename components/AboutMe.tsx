import Image from "next/image";

export default function AboutMe(){
    return(
        <section className="bg-gray-100 py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Me</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <Image
                src={"/myImage.gif"}
                width="400"
                height="400"
                alt="Manideep"
                objectFit="fill"
                // style="aspect-ratio: 400 / 400; object-fit: cover;"
                className="h-72 w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <p className="text-gray-600 text-xl">
               {" Hi, I'm John Doe, a Full-stack developer and ML Engg with over a experience in the OpenSource."}
               {" I have a passion for creating innovative digital experiences that solve real problems."}
              </p>
              <div className="mt-6">
                <h3 className="text-2xl font-bold">Skills</h3>
                <ul className="mt-3 list-disc space-y-3 pl-4 text-gray-600">
                  <li>ReactJs, NextJs, Tailwind-CSS</li>
                  <li>HTML, CSS, JavaScript</li>
                  <li>Node.js, Express, Hono </li>
                  <li>AWS, Docker, Kubernites, CI & CD pipelines</li>
                  <li>SQL, NoSQL databases, Prisma ORM</li>
                  <li>Python, Pytorch, Machine Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}