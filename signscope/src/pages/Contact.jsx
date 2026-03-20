import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import WhatsAppIcon from '../components/WhatsAppIcon'

const WHATSAPP_URL = 'https://wa.me/96565831288?text=' + encodeURIComponent('Hi SignScope! I\'m interested in your branding solutions. Could you share more details about your services and pricing?')

const contactInfo = [
  { icon: MapPin, title: 'Our Location', lines: ['Salmiya, Kuwait', 'Block 5, Street 12'] },
  { icon: Phone, title: 'Phone Numbers', lines: ['+965 6583 1288', '+965 9876 5432'] },
  { icon: Mail, title: 'Email Address', lines: ['info@signscope.com', 'quotes@signscope.com'] },
  { icon: Clock, title: 'Working Hours', lines: ['Sun–Thu: 8:00 AM – 6:00 PM', 'Fri–Sat: Closed'] },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-14 bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
        </div>
        <div className="relative w-full px-4 sm:px-8 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-gray-400 max-w-2xl mx-auto"
          >
            Get in touch with our team. We'd love to hear about your project.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={fadeUp}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-secondary text-sm mb-1">{info.title}</h3>
                {info.lines.map((line) => (
                  <p key={line} className="text-gray-600 text-sm">{line}</p>
                ))}
              </motion.div>
            ))}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                <WhatsAppIcon className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-secondary text-sm mb-1">WhatsApp</h3>
              <p className="text-gray-600 text-sm">+965 6583 1288</p>
              <p className="text-green-500 text-xs font-medium mt-1">Chat with us</p>
            </motion.a>
          </motion.div>

          {/* Contact Form + Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div>
              <SectionHeading title="Send Us a Message" subtitle="Fill out the form and we'll get back to you within 24 hours." />
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-sm">Thank you for reaching out. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+965 6583 1288"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      rows="4"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25 w-full sm:w-auto justify-center"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="w-full h-full min-h-[350px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-14 h-14 text-primary/30 mx-auto mb-3" />
                  <h3 className="text-base font-semibold text-gray-600 mb-1">Salmiya, Kuwait</h3>
                  <p className="text-gray-400 text-sm">Block 5, Street 12, Building 42</p>
                  <div className="mt-3 px-3 py-1.5 bg-white rounded-lg shadow-sm inline-block">
                    <p className="text-xs text-gray-500">Interactive map placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
