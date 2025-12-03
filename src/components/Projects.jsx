import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaPython, FaChartLine } from 'react-icons/fa'
import { useState } from 'react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    // Data Analytics Projects - Beginner
    {
      title: 'Sales Performance Dashboard',
      category: 'data-analytics',
      level: 'beginner',
      description: 'Interactive Power BI dashboard analyzing retail sales data across multiple regions. Features include revenue trends, product performance metrics, and customer segmentation analysis.',
      technologies: ['Power BI', 'Excel', 'DAX'],
      color: 'from-purple-500 to-pink-500',
      icon: <FaChartLine />,
      features: [
        'Dynamic KPI cards showing YoY growth',
        'Geographic sales heat maps',
        'Product category performance analysis',
        'Customer demographic insights',
      ],
    },
    {
      title: 'Customer Churn Analysis',
      category: 'data-analytics',
      level: 'beginner',
      description: 'Comprehensive analysis of customer retention patterns using Python and Pandas. Identified key factors contributing to churn and provided actionable recommendations.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      color: 'from-blue-500 to-cyan-500',
      icon: <FaPython />,
      features: [
        'Exploratory data analysis on 10K+ customers',
        'Churn rate calculation and visualization',
        'Correlation analysis of churn factors',
        'Statistical hypothesis testing',
      ],
    },
    {
      title: 'E-commerce Product Analytics',
      category: 'data-analytics',
      level: 'beginner',
      description: 'Web scraping and analysis of e-commerce product listings to identify pricing trends and market opportunities using Python Beautiful Soup.',
      technologies: ['Python', 'BeautifulSoup', 'Pandas', 'Plotly'],
      color: 'from-green-500 to-emerald-500',
      icon: <FaChartLine />,
      features: [
        'Automated web scraping pipeline',
        'Price distribution analysis',
        'Competitive pricing insights',
        'Interactive Plotly visualizations',
      ],
    },
    {
      title: 'Social Media Sentiment Analysis',
      category: 'data-analytics',
      level: 'intermediate',
      description: 'NLP-powered sentiment analysis of social media posts to gauge brand perception. Classified 50K+ tweets using machine learning techniques.',
      technologies: ['Python', 'NLTK', 'Scikit-learn', 'WordCloud'],
      color: 'from-pink-500 to-rose-500',
      icon: <FaPython />,
      features: [
        'Text preprocessing and cleaning',
        'Sentiment classification (positive/negative/neutral)',
        'Word cloud generation for key themes',
        'Temporal sentiment trend analysis',
      ],
    },
    {
      title: 'Financial Market Forecasting',
      category: 'data-analytics',
      level: 'intermediate',
      description: 'Time series analysis and forecasting of stock prices using ARIMA models. Achieved 85% accuracy in predicting short-term trends.',
      technologies: ['Python', 'Statsmodels', 'Pandas', 'yFinance'],
      color: 'from-orange-500 to-yellow-500',
      icon: <FaChartLine />,
      features: [
        'Historical data collection via API',
        'Time series decomposition',
        'ARIMA model implementation',
        'Forecast visualization with confidence intervals',
      ],
    },
    {
      title: 'Healthcare Data Insights',
      category: 'data-analytics',
      level: 'intermediate',
      description: 'Analysis of patient readmission rates to identify high-risk factors. Created predictive model with 82% accuracy using logistic regression.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Tableau'],
      color: 'from-red-500 to-pink-500',
      icon: <FaPython />,
      features: [
        'Data cleaning of 5K+ patient records',
        'Feature engineering for risk factors',
        'Logistic regression modeling',
        'Interactive Tableau dashboard',
      ],
    },
    // Web Development Projects
    {
      title: 'StudyHub Kenya',
      category: 'web-development',
      level: 'advanced',
      description: 'Full-stack MERN application connecting students with educational resources. Aligned with UN Sustainable Development Goals for quality education.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      color: 'from-violet-500 to-purple-500',
      icon: <FaExternalLinkAlt />,
      features: [
        'User authentication with JWT',
        'Real-time chat functionality',
        'Resource sharing platform',
        'Responsive design with Tailwind CSS',
      ],
    },
    {
      title: 'Task Management App',
      category: 'web-development',
      level: 'intermediate',
      description: 'React-based productivity app with drag-and-drop functionality. Features include task prioritization, deadlines, and progress tracking.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
      color: 'from-cyan-500 to-blue-500',
      icon: <FaExternalLinkAlt />,
      features: [
        'Drag-and-drop task management',
        'Real-time database sync',
        'Custom animations',
        'Dark mode support',
      ],
    },
  ]

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            A showcase of data analytics and web development projects demonstrating technical expertise and problem-solving skills
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'All Projects', value: 'all' },
              { label: 'Data Analytics', value: 'data-analytics' },
              { label: 'Web Development', value: 'web-development' },
            ].map((btn) => (
              <motion.button
                key={btn.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(btn.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === btn.value
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {btn.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Glowing effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                {/* Level Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
                    {project.level}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`text-3xl text-transparent bg-gradient-to-r ${project.color} bg-clip-text`}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-gray-400 flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links - Add your actual project links */}
                {/* 
                <div className="flex gap-4 mt-auto">
                  <a
                    href="YOUR_GITHUB_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-all duration-300"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href="YOUR_DEMO_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-sm transition-all duration-300"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
                */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to see more projects?</p>
          {/* 
          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            <FaGithub className="text-xl" />
            Visit My GitHub
          </a>
          */}
        </motion.div>
      </div>

      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
      />
    </div>
  )
}

export default Projects
