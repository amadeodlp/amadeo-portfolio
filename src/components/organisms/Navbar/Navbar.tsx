import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NavbarProps } from './types'
import ContactButton from '@/components/atoms/ContactButton'

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    if (isMenuOpen) {
      const handleRouteChange = () => setIsMenuOpen(false);
      window.addEventListener('popstate', handleRouteChange);
      return () => window.removeEventListener('popstate', handleRouteChange);
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-white flex items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {"<Amadeo />"}
          </motion.div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-6 mr-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "text-white/80 hover:text-white transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "text-white/80 hover:text-white transition-colors"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "text-white/80 hover:text-white transition-colors"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "text-white/80 hover:text-white transition-colors"
              }
            >
              About
            </NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "text-white/80 hover:text-white transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "text-white/80 hover:text-white transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "text-white/80 hover:text-white transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "text-white/80 hover:text-white transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="bg-red-600 text-white font-medium uppercase tracking-wide px-4 py-2 inline-block transition-colors hover:bg-red-700 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar