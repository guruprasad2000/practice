import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10"
    >
      <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${light ? 'text-white' : 'text-secondary'}`}>
        {title}
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mb-3 rounded-full" />
      {subtitle && (
        <p className={`text-base max-w-2xl mx-auto ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
