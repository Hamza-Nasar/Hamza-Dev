'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition ${scrolled ? 'bg-black/70 backdrop-blur' : 'bg-transparent'} text-white`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
                <div className="font-bold text-lg">Hamza Nasar</div>
                <div className="space-x-6 text-sm opacity-90">
                    <a href="#skills" className="hover:underline">Skills</a>
                    <a href="#services" className="hover:underline">Services</a>
                    <a href="#work" className="hover:underline">Work</a>
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </div>
            </div>
        </nav>
    )
}
