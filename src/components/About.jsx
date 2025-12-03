import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Technologies Mastered' },
  ]

  return (
    <div className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Placeholder */}
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

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-3xl font-bold mb-4 text-purple-400">
                  Who I Am
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm a results-oriented IT specialist and Full Stack Developer based in Nairobi, Kenya, 
                  with a passion for turning complex problems into elegant solutions. With expertise spanning 
                  both development and data science, I bring a unique perspective to every project.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-3xl font-bold mb-4 text-pink-400">
                  What I Do
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I specialize in building scalable web applications using modern frameworks like React and Node.js, 
                  while also diving deep into data analysis and machine learning. My goal is to create solutions 
                  that not only work flawlessly but also drive real business value.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-3xl font-bold mb-4 text-blue-400">
                  My Approach
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I believe in continuous learning and staying ahead of the curve. Whether it's mastering 
                  a new programming language or exploring cutting-edge data science techniques, I'm always 
                  pushing my boundaries to deliver exceptional results.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center group hover:border-purple-500/50 transition-all duration-300"
              >
                <motion.h4
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform"
                >
                  {stat.number}
                </motion.h4>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 right-10 w-32 h-32 border border-purple-500/20 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-20 left-10 w-24 h-24 border border-pink-500/20 rounded-lg"
      />
    </div>
  )
}

export default About
