import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      type: 'work',
      title: 'Customer Service Representative',
      company: 'Frozen Food Solution',
      location: 'Kilimani, Nairobi',
      period: 'May 2023 - May 2025',
      description: 'Delivered exceptional customer support while maintaining high satisfaction rates and improving operational efficiency.',
      achievements: [
        'Assisted 50+ customers daily with inquiries and issue resolution',
        'Maintained 95% customer satisfaction rate',
        'Reduced customer waiting time by 20% through efficient problem-solving',
        'Provided bilingual support in English and Swahili',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      type: 'work',
      title: 'Social Media Manager',
      company: 'Smart Hub Ventures',
      location: 'Nairobi',
      period: 'Sep 2022 - Dec 2022',
      description: 'Developed and executed comprehensive social media strategies to enhance brand presence and drive engagement.',
      achievements: [
        'Developed social media strategies increasing brand awareness',
        'Managed presence across Facebook, Instagram, and Twitter',
        'Achieved 3x return on ad spend (ROAS) through targeted campaigns',
        'Monitored analytics and optimized performance using data insights',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'education',
      title: 'ALX Software Engineering Program',
      company: 'ALX Africa',
      location: 'Remote',
      period: 'Present',
      description: 'Intensive software engineering program focusing on full-stack development, data science, and modern programming practices.',
      achievements: [
        'Data analysis and machine learning fundamentals',
        'Python programming and statistical modeling',
        'SQL and database management',
        'Real-world project implementation',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      type: 'education',
      title: 'Diploma in Computer Science',
      company: 'Zetech University',
      location: 'Nairobi',
      period: 'Sep 2021 - Nov 2023',
      description: 'Comprehensive computer science education covering programming, networking, and cybersecurity fundamentals.',
      achievements: [
        'Strong foundation in programming and algorithms',
        'Database management and system design',
        'Completed CCNA 1-4 certification',
        'Practical projects in software development and data analysis',
      ],
      color: 'from-orange-500 to-yellow-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
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
            Experience & Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey of continuous growth and diverse experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-30 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-5/12 ${
                    idx % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                    {/* Card */}
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        {idx % 2 === 0 ? (
                          <>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">
                                {exp.title}
                              </h3>
                              <p className="text-purple-400 font-semibold">
                                {exp.company}
                              </p>
                            </div>
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.6 }}
                              className={`text-3xl ml-auto text-transparent bg-gradient-to-r ${exp.color} bg-clip-text`}
                            >
                              {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                            </motion.div>
                          </>
                        ) : (
                          <>
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.6 }}
                              className={`text-3xl text-transparent bg-gradient-to-r ${exp.color} bg-clip-text`}
                            >
                              {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                            </motion.div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">
                                {exp.title}
                              </h3>
                              <p className="text-purple-400 font-semibold">
                                {exp.company}
                              </p>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, aIdx) => (
                          <li
                            key={aIdx}
                            className="text-gray-400 text-sm flex items-start gap-2"
                          >
                            <span className={`text-transparent bg-gradient-to-r ${exp.color} bg-clip-text font-bold`}>
                              •
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} shadow-lg relative`}
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} blur-md animate-pulse`}></div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'CCNA 1-4',
                issuer: 'Cisco Networking Academy',
                date: 'Nov 2022',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                name: 'Data Analysis & Machine Learning',
                issuer: 'ALX Africa',
                date: 'Present',
                color: 'from-purple-500 to-pink-500',
              },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <p className="text-purple-400 text-sm mt-2">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated background shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 left-10 w-32 h-32 border border-purple-500/20 rounded-lg"
      />
    </div>
  )
}

export default Experience
