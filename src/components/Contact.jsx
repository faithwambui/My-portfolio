import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useState } from 'react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    // You can integrate with EmailJS, Formspree, or your own backend
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'faithnyaguthii4615@gmail.com',
      href: 'mailto:faithnyaguthii4615@gmail.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+254 798 983 272',
      href: 'tel:+254798983272',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: '#',
      color: 'from-green-500 to-emerald-500',
    },
  ]

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
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Whether you need a data analyst, full-stack developer, or someone passionate about technology, let's talk!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="block relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-300 flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`text-3xl text-transparent bg-gradient-to-r ${info.color} bg-clip-text`}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links - MANUALLY ADD YOUR LINKS */}
            {<div>
  <h4 className="text-xl font-semibold mb-4 text-white">Follow Me</h4>
  <div className="flex gap-4">
    <motion.a
      href="https://github.com/faithwambui"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 360 }}
      className="p-4 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
    >
      <FaGithub className="text-2xl" />
    </motion.a>
    <motion.a
      href="https://www.linkedin.com/in/faith-wambui-01b247275/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 360 }}
      className="p-4 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
    >
      <FaLinkedin className="text-2xl" />
    </motion.a>
  </div>
</div>}

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-green-500 rounded-full"
              ></motion.div>
              <span className="text-green-400 font-semibold">Available for new opportunities</span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <form onSubmit={handleSubmit} className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl px-8 py-4 font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center"
        >
          {/* 
          <a
            href="/path-to-your-cv.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full font-semibold transition-all duration-300 border border-white/20 hover:border-purple-500/50 hover:scale-105"
          >
            <FaDownload />
            Download My CV
          </a>
          */}
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
      />
    </div>
  )
}

export default Contact
