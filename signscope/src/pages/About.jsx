import { motion } from 'framer-motion'
import { Target, Eye, Users, Award, Clock, TrendingUp } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const timeline = [
  { year: '2019', title: 'Founded', desc: 'SignScope was established with a vision to revolutionize visual branding in Kuwait.' },
  { year: '2020', title: 'First Major Project', desc: 'Completed our first large-scale corporate branding project for a leading retail chain.' },
  { year: '2021', title: 'Service Expansion', desc: 'Expanded into exhibition design, LED solutions, and interior branding services.' },
  { year: '2022', title: 'Regional Growth', desc: 'Extended operations across the Gulf region with key partnerships and collaborations.' },
  { year: '2023', title: '300+ Projects', desc: 'Surpassed 300 completed projects milestone with a 98% client satisfaction rate.' },
  { year: '2024', title: 'Industry Leader', desc: 'Recognized as a leading creative force in visual communication and spatial branding.' },
]

const stats = [
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Award, value: '500+', label: 'Projects Done' },
  { icon: Clock, value: '6+', label: 'Years Experience' },
  { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-14 bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative w-full px-4 sm:px-8 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            About <span className="text-primary">SignScope</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-gray-400 max-w-2xl mx-auto"
          >
            We are a full-service visual branding company dedicated to transforming spaces and creating lasting impressions.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-secondary mb-5">
                Crafting Visual Stories Since <span className="text-primary">2019</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4 text-sm">
                SignScope was born from a passion for transforming ordinary spaces into extraordinary brand experiences. What started as a small signage workshop in Kuwait has grown into a comprehensive branding solutions company serving clients across the region.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4 text-sm">
                Our team of designers, engineers, and craftsmen work together to deliver projects that exceed expectations — from eye-catching signage to complete interior branding overhauls.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed text-sm">
                We believe that every space tells a story, and we're here to make sure yours is unforgettable.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-amber-200/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold text-primary/20">SS</div>
                  <p className="text-gray-500 mt-1 text-sm">SignScope</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">6+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                "To be a leading creative force in visual communication and spatial branding — setting new standards for innovation, quality, and impact in the region."
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                "Deliver high-quality, impactful branding solutions with precision and creativity — helping businesses communicate their identity through powerful visual experiences."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-primary">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <stat.icon className="w-8 h-8 text-white/80 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <SectionHeading title="Our Journey" subtitle="From a small workshop to a leading branding company." />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <h3 className="text-base font-semibold text-secondary mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-lg shadow-primary/25 z-10">
                    {item.year}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
