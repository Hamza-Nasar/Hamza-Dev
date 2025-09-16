'use client'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const menuItems = [
        { name: "Home", to: "hero" },
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Services", to: "services" },
        { name: "Projects", to: "projects" },
        { name: "Timeline", to: "timeline" },
        { name: "Testimonials", to: "testimonials" },
        { name: "Contact", to: "contact" },
    ]

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'} text-white`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
                <motion.div
                    className="font-bold text-xl cursor-pointer hover:text-indigo-500 transition-colors"
                    whileHover={{ scale: 1.05, color: "#6366F1" }}
                    transition={{ duration: 0.3 }}
                >
                    Hamza Nasar
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-sm font-medium">
                    {menuItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx, duration: 0.4 }}
                        >
                            <Link
                                to={item.to.toLowerCase()}
                                smooth={true}
                                offset={-70}
                                duration={600}
                                className="hover:text-indigo-500 cursor-pointer transition-colors"
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
                    <motion.svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </motion.svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-black/90 backdrop-blur text-center space-y-4 py-4"
                >
                    {menuItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * idx }}
                        >
                            <Link
                                to={item.to.toLowerCase()}
                                smooth={true}
                                offset={-70}
                                duration={600}
                                className="block hover:text-indigo-500 cursor-pointer transition-colors font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>   
            )}
        </motion.nav>
    )
}
