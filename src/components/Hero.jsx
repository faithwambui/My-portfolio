import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const titles = [
    'Full Stack Developer',
    'Data Scientist',
    'Problem Solver',
    'Tech Enthusiast'
  ]

  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-2 border-purple-500/30 rounded-lg"
        animate={{
          rotate: 360,
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-16 h-16 border-2 border-blue-500/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          x: mousePosition.x * -0.01,
          y: mousePosition.y * -0.01,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl"
        animate={{
          y: [-20, 20, -20],
          x: mousePosition.x * 0.015,
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
      
        { 
       <motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, type: "spring" }}
  className="mb-8 inline-block"
>
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
    <img 
      src="/images/pic.jpg" 
      alt="Faith Nyaguthii Wambui"
      className="relative w-48 h-48 rounded-full object-cover border-4 border-blue-500/50 shadow-2xl"
    />
  </div>
</motion.div>
        }

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          Faith Nyaguthii Wambui
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 mb-8"
        >
          <motion.p
            key={currentTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-2xl md:text-4xl text-gray-300 font-light"
          >
            {titles[currentTitle]}
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Transforming data into insights and ideas into elegant code. 
          Passionate about creating innovative solutions that drive business success.
        </motion.p>

        
        {
   <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="flex justify-center gap-6 mb-12"
>
  <a 
    href="https://github.com/faithwambui" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-4 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
  >
    <FaGithub className="text-3xl" />
  </a>
  <a 
    href="https://www.linkedin.com/in/faith-wambui-01b247275/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-4 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
  >
    <FaLinkedin className="text-3xl" />
  </a>
  <a 
    href="mailto:faithnyaguthii4615@gmail.com"
    className="p-4 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
  >
    <FaEnvelope className="text-3xl" />
  </a>
</motion.div>
        }

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            Let's Connect
          </a>
          <a
            href="#projects"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            View My Work
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-purple-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
