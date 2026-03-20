import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Sparkles, Zap, Palette, Shield,
  Monitor, Printer, Building2, LayoutGrid, PaintBucket, Tv
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const services = [
  { icon: LayoutGrid, title: 'Signage Solutions', desc: 'Indoor & outdoor signage that captures attention and elevates your brand presence.' },
  { icon: Printer, title: 'Printing & Hoarding', desc: 'Large format printing and hoarding solutions for maximum visual impact.' },
  { icon: Building2, title: 'ACP Cladding', desc: 'Premium aluminum composite panel cladding for modern architectural aesthetics.' },
  { icon: Sparkles, title: 'Exhibitions', desc: 'Custom exhibition booth design and fabrication for trade shows and events.' },
  { icon: PaintBucket, title: 'Interior & Exterior Works', desc: 'Complete interior and exterior branding solutions for commercial spaces.' },
  { icon: Tv, title: 'LED Screen Solutions', desc: 'High-resolution LED displays for dynamic advertising and communication.' },
]

const projects = [
  { title: 'Corporate Office Branding', category: 'Signage', color: 'from-orange-400 to-red-500' },
  { title: 'Mall Exhibition Setup', category: 'Exhibition', color: 'from-blue-400 to-purple-500' },
  { title: 'Hotel Lobby Interior', category: 'Interior', color: 'from-emerald-400 to-teal-500' },
  { title: 'Retail Store Signage', category: 'Signage', color: 'from-amber-400 to-orange-500' },
  { title: 'Restaurant Interior Design', category: 'Interior', color: 'from-pink-400 to-rose-500' },
  { title: 'Tech Expo Booth', category: 'Exhibition', color: 'from-cyan-400 to-blue-500' },
]

const reasons = [
  { icon: Shield, title: 'High Quality', desc: 'Premium materials and expert craftsmanship in every project.' },
  { icon: Zap, title: 'Fast Delivery', desc: 'On-time project completion without compromising quality.' },
  { icon: Palette, title: 'Creative Design', desc: 'Innovative designs that make your brand stand out.' },
  { icon: Monitor, title: 'End-to-End Solutions', desc: 'From concept to installation, we handle everything.' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/3 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative w-full px-4 sm:px-8 lg:px-12 py-24">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Premium Branding Solutions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-5"
            >
              Transforming Spaces with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                Powerful Visual Branding
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
              Signage, Printing, Interiors & Exhibition Solutions — crafted with precision and creativity to make your brand unforgettable.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/10"
            >
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '200+', label: 'Happy Clients' },
                { value: '6+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive branding and visual communication solutions tailored to your business needs."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <SectionHeading
            title="Featured Projects"
            subtitle="A glimpse of our recent work across signage, interiors, and exhibitions."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={scaleUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-105`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <Sparkles className="w-14 h-14 text-white/20 group-hover:text-white/40 group-hover:rotate-12 transition-all duration-500" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-12">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-xs rounded-full mb-1.5">{project.category}</span>
                  <h3 className="text-white font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <SectionHeading
            title="Why Choose SignScope"
            subtitle="We deliver excellence in every project, combining creativity with reliability."
            light
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </>
  )
}
