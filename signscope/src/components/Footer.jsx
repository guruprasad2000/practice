import { Link } from 'react-router-dom'
import { Layers, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const WHATSAPP_URL = 'https://wa.me/96512345678?text=' + encodeURIComponent('Hi SignScope! I\'m interested in your branding solutions. Could you share more details about your services and pricing?')

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Sign<span className="text-primary">Scope</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming spaces with powerful visual branding solutions. Your trusted partner for signage, printing, and interiors.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-sm group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {['Signage Solutions', 'Printing & Hoarding', 'ACP Cladding', 'Interior Works', 'LED Screens'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 flex items-center gap-2 text-sm">
                    <ArrowRight className="w-3.5 h-3.5 text-primary" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">Salmiya, Kuwait</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">+965 1234 5678</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">info@signscope.com</span>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 group"
                >
                  <WhatsAppIcon className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-gray-400 text-sm group-hover:text-green-500 transition-colors">+965 1234 5678</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="border-t border-white/10" />
      <div className="w-full px-4 sm:px-8 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} SignScope. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a href="#" className="text-gray-500 hover:text-primary text-xs transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-primary text-xs transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
