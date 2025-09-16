'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false) // Mobile menu toggle

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition ${scrolled ? 'bg-black/70 backdrop-blur' : 'bg-transparent'} text-white`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
                <div className="font-bold text-lg">Hamza Nasar</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-sm opacity-90">
                    <a href="#skills" className="hover:underline">Skills</a>
                    <a href="#services" className="hover:underline">Services</a>
                    <a href="#work" className="hover:underline">Work</a>
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur text-center space-y-4 py-4">
                    <a href="#skills" className="block hover:underline" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#services" className="block hover:underline" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#work" className="block hover:underline" onClick={() => setIsOpen(false)}>Work</a>
                    <a href="#about" className="block hover:underline" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#contact" className="block hover:underline" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            )}
        </nav>
    )
}
