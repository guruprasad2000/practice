import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronRight, ChevronLeft, Upload, CheckCircle2,
  LayoutGrid, Printer, PaintBucket, Tv, Presentation, Building2
} from 'lucide-react'

const serviceOptions = [
  { icon: LayoutGrid, label: 'Indoor & Outdoor Signage' },
  { icon: Printer, label: 'Large Format Printing' },
  { icon: PaintBucket, label: 'Interior Branding' },
  { icon: Tv, label: 'LED Screens' },
  { icon: Presentation, label: 'Exhibition Design' },
  { icon: Building2, label: 'ACP Cladding' },
]

const budgetRanges = [
  '$500 - $1,000',
  '$1,000 - $3,000',
  '$3,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000+',
]

const steps = ['Service', 'Size', 'Budget', 'Upload', 'Review']

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
}

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    size: '',
    budget: '',
    fileName: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const next = () => { setDirection(1); setCurrentStep((s) => Math.min(s + 1, steps.length - 1)) }
  const prev = () => { setDirection(-1); setCurrentStep((s) => Math.max(s - 1, 0)) }

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.service !== ''
      case 1: return formData.size !== ''
      case 2: return formData.budget !== ''
      default: return true
    }
  }

  if (submitted) {
    return (
      <>
        <section className="relative pt-24 pb-14 bg-secondary" />
        <section className="py-16 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl mx-auto px-4 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-secondary mb-3">Quote Request Submitted!</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-5">
              <p className="text-gray-600 mb-3 text-sm">Based on your requirements:</p>
              <div className="text-4xl font-bold text-primary mb-1">$1,200 - $2,000</div>
              <p className="text-xs text-gray-500">Estimated Cost Range</p>
            </div>
            <p className="text-gray-600 text-sm">Our team will review your request and contact you within 24 hours with a detailed quotation.</p>
          </motion.div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-14 bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
        </div>
        <div className="relative w-full px-4 sm:px-8 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Get a <span className="text-primary">Quote</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-gray-400 max-w-2xl mx-auto"
          >
            Tell us about your project and get an instant estimate.
          </motion.p>
        </div>
      </section>

      {/* Multi-step form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          {/* Progress bar */}
          <div className="flex items-center justify-between mb-10">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      backgroundColor: i <= currentStep ? '#ff6b00' : '#e5e7eb',
                      scale: i === currentStep ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  >
                    {i < currentStep ? <CheckCircle2 className="w-4 h-4" /> : <span className={i <= currentStep ? 'text-white' : 'text-gray-500'}>{i + 1}</span>}
                  </motion.div>
                  <span className={`text-xs mt-1.5 font-medium hidden sm:block ${i <= currentStep ? 'text-primary' : 'text-gray-400'}`}>
                    {step}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <motion.div
                    animate={{ backgroundColor: i < currentStep ? '#ff6b00' : '#e5e7eb' }}
                    transition={{ duration: 0.3 }}
                    className="w-10 sm:w-20 h-0.5 mx-1.5"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 min-h-[300px] overflow-hidden relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Step 1: Select Service */}
                {currentStep === 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-secondary mb-1">Select a Service</h2>
                    <p className="text-gray-500 text-sm mb-6">Choose the service you're interested in.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt.label}
                          onClick={() => setFormData({ ...formData, service: opt.label })}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all text-left ${
                            formData.service === opt.label
                              ? 'border-primary bg-orange-50 shadow-sm'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            formData.service === opt.label ? 'bg-primary' : 'bg-gray-100'
                          }`}>
                            <opt.icon className={`w-5 h-5 ${formData.service === opt.label ? 'text-white' : 'text-gray-500'}`} />
                          </div>
                          <span className={`font-medium text-sm ${formData.service === opt.label ? 'text-primary' : 'text-gray-700'}`}>
                            {opt.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Size */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-xl font-bold text-secondary mb-1">Project Size</h2>
                    <p className="text-gray-500 text-sm mb-6">Enter the approximate size of your project.</p>
                    <div className="max-w-md">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Area (sq ft)</label>
                      <input
                        type="number"
                        placeholder="e.g., 500"
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base focus:border-primary focus:outline-none transition-colors"
                      />
                      <p className="text-xs text-gray-400 mt-2">Approximate area helps us provide a more accurate estimate.</p>
                    </div>
                  </div>
                )}

                {/* Step 3: Budget */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-xl font-bold text-secondary mb-1">Budget Range</h2>
                    <p className="text-gray-500 text-sm mb-6">Select your preferred budget range.</p>
                    <div className="space-y-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`w-full flex items-center justify-between p-3.5 rounded-xl border-2 transition-all text-left ${
                            formData.budget === range
                              ? 'border-primary bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <span className={`font-medium text-sm ${formData.budget === range ? 'text-primary' : 'text-gray-700'}`}>
                            {range}
                          </span>
                          {formData.budget === range && <CheckCircle2 className="w-4 h-4 text-primary" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Upload */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-xl font-bold text-secondary mb-1">Upload Design</h2>
                    <p className="text-gray-500 text-sm mb-6">Upload your design file or reference image (optional).</p>
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-primary transition-colors cursor-pointer"
                      onClick={() => setFormData({ ...formData, fileName: 'design-mockup.pdf' })}
                    >
                      <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                      {formData.fileName ? (
                        <div>
                          <p className="text-primary font-medium text-sm">{formData.fileName}</p>
                          <p className="text-xs text-gray-400 mt-1">File selected</p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-gray-600 font-medium text-sm">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-400 mt-1">PDF, PNG, JPG up to 10MB</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 5: Review */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-xl font-bold text-secondary mb-1">Review Your Request</h2>
                    <p className="text-gray-500 text-sm mb-6">Confirm your details before submitting.</p>
                    <div className="space-y-3">
                      {[
                        { label: 'Service', value: formData.service || 'Not selected' },
                        { label: 'Size', value: formData.size ? `${formData.size} sq ft` : 'Not specified' },
                        { label: 'Budget', value: formData.budget || 'Not selected' },
                        { label: 'Design File', value: formData.fileName || 'No file uploaded' },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between items-center py-2.5 border-b border-gray-100">
                          <span className="text-gray-500 text-sm">{item.label}</span>
                          <span className="font-medium text-secondary text-sm">{item.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-5 bg-orange-50 rounded-xl border border-orange-100">
                      <p className="text-xs text-gray-600 mb-1">Estimated Cost</p>
                      <p className="text-3xl font-bold text-primary">$1,200 - $2,000</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-200 bg-gray-100'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            {currentStep === steps.length - 1 ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSubmitted(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                Submit Request
                <CheckCircle2 className="w-4 h-4" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={canProceed() ? { scale: 1.02 } : {}}
                whileTap={canProceed() ? { scale: 0.98 } : {}}
                onClick={next}
                disabled={!canProceed()}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  canProceed()
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
