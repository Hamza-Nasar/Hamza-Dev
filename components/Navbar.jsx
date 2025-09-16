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
        { name: 'Home', to: 'hero' },
        { name: 'Skills', to: 'skills' },
        { name: 'Services', to: 'services' },
        { name: 'Projects', to: 'projects' },
        { name: 'About', to: 'about' },
        { name: 'Contact', to: 'contact' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors ${scrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
                } text-white`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <motion.div
                        className="font-bold text-xl cursor-pointer hover:text-indigo-500 transition-colors"
                        whileHover={{ scale: 1.05, color: '#6366F1' }}
                        transition={{ duration: 0.3 }}
                    >
                        Hamza Nasar
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
                                activeClass="text-indigo-400 border-b-2 border-indigo-400"
                                className="px-1 pb-1 cursor-pointer transition-colors hover:text-indigo-400"
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
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
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
        </nav>
    )
}
