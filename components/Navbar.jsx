'use client'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const menuItems = [
        { name: 'Home', to: 'hero' },
        { name: 'Skills', to: 'skills' },
        { name: 'Services', to: 'services' },
        { name: 'Projects', to: 'projects' },
        { name: 'About', to: 'about' },
        { name: 'Contact', to: 'contact' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled
                    ? 'bg-black/80 backdrop-blur-sm shadow-lg'
                    : 'bg-transparent'
                } text-white`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 font-extrabold text-lg tracking-wide cursor-pointer"
                    >
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Hamza Nasar
                        </span>
                    </motion.div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        {menuItems.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                                activeClass="text-indigo-400"
                                className="relative px-1 pb-1 cursor-pointer hover:text-indigo-400 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-indigo-400 hover:after:w-full after:transition-all"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
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
                </div>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-black/90 backdrop-blur text-center space-y-4 py-4"
                    >
                        {menuItems.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                                activeClass="text-indigo-400 font-semibold"
                                className="block cursor-pointer transition-colors hover:text-indigo-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
