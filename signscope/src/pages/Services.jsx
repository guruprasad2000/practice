import { motion } from 'framer-motion'
import {
  LayoutGrid, Type, Printer, Presentation, PaintBucket, Tv,
  CheckCircle
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    icon: LayoutGrid,
    title: 'Indoor & Outdoor Signage',
    desc: 'Comprehensive signage solutions for both indoor and outdoor applications. From wayfinding systems to building fascia signs.',
    features: ['3D Lettering', 'Illuminated Signs', 'Wayfinding Systems', 'Monument Signs'],
  },
  {
    icon: Type,
    title: 'Acrylic & Metal Letters',
    desc: 'Premium custom-crafted acrylic and metal letters that add sophistication and dimension to your brand identity.',
    features: ['Stainless Steel', 'Brass Finish', 'LED Backlit', 'Channel Letters'],
  },
  {
    icon: Printer,
    title: 'Large Format Printing',
    desc: 'High-quality large format printing for banners, hoardings, vehicle wraps, and promotional materials.',
    features: ['Vinyl Banners', 'Vehicle Wraps', 'Wall Graphics', 'Floor Graphics'],
  },
  {
    icon: Presentation,
    title: 'Exhibition Booth Design',
    desc: 'Custom-designed exhibition booths that attract visitors and effectively showcase your products at trade shows.',
    features: ['Custom Booths', 'Modular Displays', 'Pop-up Stands', 'Interactive Kiosks'],
  },
  {
    icon: PaintBucket,
    title: 'Interior Branding',
    desc: 'Transform your workspace with comprehensive interior branding that reflects your corporate identity.',
    features: ['Office Branding', 'Retail Interiors', 'Reception Areas', 'Conference Rooms'],
  },
  {
    icon: Tv,
    title: 'LED Screens',
    desc: 'State-of-the-art LED screen installations for advertising, information display, and dynamic communication.',
    features: ['Outdoor LED', 'Indoor Displays', 'Video Walls', 'Digital Signage'],
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-14 bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative w-full px-4 sm:px-8 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive visual branding and communication solutions crafted to elevate your business presence.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <SectionHeading
            title="What We Offer"
            subtitle="From signage to interiors, we provide end-to-end branding solutions."
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
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
