import { AnimatePresence , motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Appbar(){
    const [activeSection, setActiveSection] = useState('home')
    const [isVisible, setIsVisible] = useState(true)
    const router = useRouter();

    return(
        <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-md"
          >
            <nav className="container mx-auto py-4 bg-black w-full">
              <ul className="flex justify-center space-x-6">
              <Link 
                className={`text-lg text-white hover:cursor-pointer`}
                href={"#home"}
                >
                  Home
                </Link> 
                <Link
                  className={`text-lg text-white hover:cursor-pointer`}
                  href="#contact"
                >
                  Contact
                </Link> 
                <Link
                  className={`text-lg text-white hover:cursor-pointer`}
                  href={"#about"}
                >
                  AboutMe
                </Link> 
                <Link
                  className={`text-lg text-white hover:cursor-pointer`}
                  href={'https://github.com/manideep1428'}
                >
                  GitHub
                </Link>
              </ul>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>
    )
}