import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaChartBar, FaCode } from 'react-icons/fa'
import { SiTensorflow, SiMongodb, SiPostgresql, SiDjango, SiJavascript, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Data Science & ML',
      icon: <FaChartBar className="text-5xl" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', level: 90, icon: <FaPython /> },
        { name: 'Pandas & NumPy', level: 85, icon: <FaCode /> },
        { name: 'Machine Learning', level: 80, icon: <SiTensorflow /> },
        { name: 'Power BI & Tableau', level: 85, icon: <FaChartBar /> },
      ],
    },
    {
      title: 'Web Development',
      icon: <FaReact className="text-5xl" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 88, icon: <FaReact /> },
        { name: 'Node.js', level: 82, icon: <FaNodeJs /> },
        { name: 'JavaScript', level: 90, icon: <SiJavascript /> },
        { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss /> },
      ],
    },
    {
      title: 'Backend & Databases',
      icon: <FaDatabase className="text-5xl" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Django', level: 80, icon: <SiDjango /> },
        { name: 'MongoDB', level: 85, icon: <SiMongodb /> },
        { name: 'PostgreSQL', level: 82, icon: <SiPostgresql /> },
        { name: 'SQL', level: 88, icon: <FaDatabase /> },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A diverse toolkit combining cutting-edge technologies with proven methodologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative group"
              style={{ perspective: '1000px' }}
            >
              {/* Glowing background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              
              {/* Card content */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-block mb-6 text-transparent bg-gradient-to-r ${category.color} bg-clip-text`}
                >
                  {category.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-6 text-white">
                  {category.title}
                </h3>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + idx * 0.1 + skillIdx * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">{skill.icon}</span>
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-purple-400 font-semibold">{skill.level}%</span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + idx * 0.1 + skillIdx * 0.1 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-300">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git & GitHub',
              'Docker',
              'REST APIs',
              'Jupyter',
              'Scikit-learn',
              'Matplotlib',
              'Seaborn',
              'Excel',
              'CCNA',
              'Linux',
              'VS Code',
              'Postman',
            ].map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + idx * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(168, 85, 247, 0.2)',
                  borderColor: 'rgba(168, 85, 247, 0.5)',
                }}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full text-gray-300 border border-white/10 hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated background shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
      />
    </div>
  )
}

export default Skills
