import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const categories = ['All', 'Signage', 'Interior', 'Exhibition']

const projects = [
  { title: 'Corporate Tower Signage', category: 'Signage', color: 'from-orange-400 to-red-500' },
  { title: 'Luxury Hotel Lobby', category: 'Interior', color: 'from-emerald-400 to-teal-500' },
  { title: 'Tech Summit 2024 Booth', category: 'Exhibition', color: 'from-blue-400 to-indigo-500' },
  { title: 'Shopping Mall Wayfinding', category: 'Signage', color: 'from-amber-400 to-orange-500' },
  { title: 'Restaurant Chain Branding', category: 'Interior', color: 'from-pink-400 to-rose-500' },
  { title: 'Auto Expo Display', category: 'Exhibition', color: 'from-cyan-400 to-blue-500' },
  { title: 'Bank Branch Signage', category: 'Signage', color: 'from-violet-400 to-purple-500' },
  { title: 'Boutique Store Interior', category: 'Interior', color: 'from-lime-400 to-green-500' },
  { title: 'Food Festival Booth', category: 'Exhibition', color: 'from-red-400 to-pink-500' },
  { title: 'Hospital Wayfinding System', category: 'Signage', color: 'from-teal-400 to-cyan-500' },
  { title: 'Co-working Space Design', category: 'Interior', color: 'from-fuchsia-400 to-purple-500' },
  { title: 'Real Estate Expo Stand', category: 'Exhibition', color: 'from-yellow-400 to-amber-500' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-14 bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative w-full px-4 sm:px-8 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our <span className="text-primary">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-gray-400 max-w-2xl mx-auto"
          >
            Explore our portfolio of completed projects across signage, interiors, and exhibitions.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <SectionHeading title="Project Gallery" subtitle="Filter by category to explore our diverse range of work." />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-105`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <Sparkles className="w-14 h-14 text-white/20 group-hover:text-white/40 group-hover:rotate-12 transition-all duration-500" />
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-12">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded-full mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="text-white font-semibold">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  )
}
