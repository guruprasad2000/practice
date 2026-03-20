import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const WHATSAPP_NUMBER = '96512345678'
const DEFAULT_MESSAGE = 'Hi SignScope! I\'m interested in your branding solutions. Could you share more details about your services and pricing?'

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false)

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-72"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary">SignScope</p>
                  <p className="text-xs text-green-500">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 mb-3">
              <p className="text-sm text-gray-600">
                Hello! How can we help you today? Tap below to start a conversation on WhatsApp.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-500 text-white rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </motion.button>
    </div>
  )
}
