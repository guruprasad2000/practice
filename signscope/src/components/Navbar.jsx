import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Layers } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-secondary' : 'text-white'}`}>
              Sign<span className="text-primary">Scope</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : scrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/quote"
              className="ml-2 px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-secondary' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-white border-t shadow-xl px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2.5 font-medium transition-colors border-l-2 ${
                location.pathname === link.path
                  ? 'text-primary border-primary'
                  : 'text-gray-700 border-transparent hover:text-primary hover:border-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/quote"
            className="block px-4 py-2.5 bg-primary text-white rounded-lg font-medium text-center mt-2"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
