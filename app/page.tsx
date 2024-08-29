'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Shield, Zap, Eye, MessageCircle, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Appbar from '@/components/Appbar'

const HeroBackground = () => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-red-900 via-red-800 to-gray-900 dark:from-red-950 dark:via-red-900 dark:to-gray-950" />
    <motion.div
      className="absolute inset-0"
      initial={{ backgroundPosition: '0 0' }}
      animate={{ backgroundPosition: '100% 100%' }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 20 }}
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
        backgroundSize: '400px 400px',
      }}
    />
  </div>
)

export default function Component() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { scrollY } = useScroll()
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0);
  const contactUs  = useRef<HTMLDivElement>(null);
  const aboutMe   =  useRef<HTMLDivElement>(null);
  const router  =  useRouter();
    
  const scrollToContact  = () => {
    contactUs.current?.scrollIntoView({behavior: 'smooth'})
  }
  const scrollToAbout  = () => {
    aboutMe.current?.scrollIntoView({behavior: 'smooth'})
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest
    setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50)
    setLastScrollY(currentScrollY)
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projectsData = [
    { icon: Shield, title: "Web3 Shield", description: "Secure Crypto Trading platform to Learn about Web3 and with AI-powered " },
    { icon: Zap, title: "Thunder Chat", description: "Lightning-fast AI communication platform with Prowered by Gemini API" },
    { icon: Eye, title: "Vision Assist", description: "AI-powered commentator that describes what's it sees on the camera" },
  ]

  return (
    <div className="min-h-screen text-gray-900 dark:text-white font-sans">
      <HeroBackground />
      <Appbar/>
      <main className="relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Venkata Sai Manideep
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl mb-8 text-gray-700 dark:text-gray-300"
            >
              Full-stack Developer & AI Engineer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white dark:bg-red-700 dark:hover:bg-red-600"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Assemble Your Team
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Superhero Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white dark:bg-gray-700 border-red-500 border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                        <project.icon className="w-8 h-8 mr-2 text-red-500 dark:text-red-400" />
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                      <Button className="mt-4 bg-red-600 hover:bg-red-700 text-white dark:bg-red-700 dark:hover:bg-red-600">Learn More</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" ref={aboutMe} className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">The Hero Behind the Code</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 mb-8 md:mb-0"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Origin Story</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  With great power comes great responsibility. As a Full-stack developer and ML Engineer,
                  I harness the power of code to create innovative digital experiences that solve real-world problems.
                </p>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Superpowers</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>React.js & Next.js Mastery</li>
                  <li>AI & Machine Learning Expertise</li>
                  <li>Full-Stack Development</li>
                  <li>Cloud Infrastructure Management</li>
                  <li>Database Optimization</li>
                  <li>Agile Methodology</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/3"
              >
                <Image
                  src="/placeholder.svg?"
                  alt="Hero Portrait"
                  height={400}
                  width={400}
                  className="rounded-full border-4 border-red-500 dark:border-red-400"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" ref={contactUs} className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Send a Signal</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Alias"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white dark:bg-gray-700 border-red-500 dark:border-red-400 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                />
                <Input
                  type="email"
                  placeholder="Your Communication Channel"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white dark:bg-gray-700 border-red-500 dark:border-red-400 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                />
                <Textarea
                  placeholder="Your Message to the Hero"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-white dark:bg-gray-700 border-red-500 dark:border-red-400 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                />
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white dark:bg-red-700 dark:hover:bg-red-600">Send Signal</Button>
              </form>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.8 }}
                  href="#"
                  className="text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-400"
                >
                  <Icon className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-center py-4">
        <p>© 2024 Venkata Sai Manideep | Superhero Developer</p>
        <div className="mt-2">
          <a href="#" className="text-sm hover:text-red-500 dark:hover:text-red-400">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#" className="text-sm hover:text-red-500 dark:hover:text-red-400">Terms of Service</a>
        </div>
      </footer>
    </div>
  )
}