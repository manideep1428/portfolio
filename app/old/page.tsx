'use client'
import AboutMe from '@/components/Old/AboutMe';
import ContactUs from '@/components/Old/ContactUs';
import ProjectPage from '@/components/Old/projectsPage';
import Link from 'next/link'
import React , { useEffect, useRef, useState } from 'react'


const Usepage = () => {
    const contactUs  = useRef<HTMLDivElement>(null);
    const aboutMe   =  useRef<HTMLDivElement>(null);
    const [isNewUi , setIsNewUi] = useState(false);
   
    const scrollToContact  = () => {
        contactUs.current?.scrollIntoView({behavior: 'smooth'})
      }
      const scrollToAbout  = () => {
        aboutMe.current?.scrollIntoView({behavior: 'smooth'})
      }

  useEffect(()=>{
    
  },[])
    
  return (
        <div className="flex flex-col min-h-[100dvh]">
          <header className="bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] py-16 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">Venkata Sai Manideep</h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed">
                {"I'm "}full-stack developer and  ML Engg with Link passion for creating innovative digital experiences.
              </p>
              <div className="mt-10 flex gap-6">
                <div
                  onClick={scrollToAbout}
                  className="inline-flex h-12 items-center justify-center rounded-md  border-2 bg-[#000000] px-8 py-2 text-[#ffffff] text-sm font-medium shadow-lg transition-colors hover:bg-[#ffffff] hover:text-[#000000] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  About Me
                </div>
                <div 
                onClick={scrollToContact}
                  className="inline-flex h-12 items-center bg-[#000000] justify-center rounded-md border-2~ px-8 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#ffffff] hover:text-[#000000] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Contact Me
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1">
            <section className="py-16 md:py-20 lg:py-24">
              <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Featured Projects</h2>
           
                 <ProjectPage/>
         
              </div>
            </section>
             <div ref={aboutMe}>
               <AboutMe/>
             </div>
            <section ref={contactUs} className="py-16 md:py-20 lg:py-24">
            <ContactUs/>
            </section>
          </main>
          <footer className="bg-gray-900 py-10 text-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between md:flex-row">
                <p>© 2024 Manideep. All rights reserved.</p>
                <nav className="mt-6 flex gap-6 md:mt-0">
                  <Link className="hover:underline" href="#">
                    Privacy Policy
                  </Link>
                  <Link className="hover:underline" href="#">
                    Terms of Service
                  </Link>
                </nav>
              </div>
            </div>
          </footer>
          <div className="fixed bottom-6 right-6 z-50">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 rounded-full bg-[#6c5ce7] text-white shadow-2xl hover:bg-[#a29bfe] focus:outline-none focus:ring-2 focus:ring-[#a29bfe] focus:ring-offset-2">AI</button>
          </div>
        </div>
  )
}

export default Usepage