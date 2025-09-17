'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Lottie dynamically load karo
const Player = dynamic(
    () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
    { ssr: false }
)

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-indigo-950 to-black text-white px-6 md:px-16"
        >
            {/* Text + Button */}
            <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center text-center"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                    I’m Hamza Nasar
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-base md:text-xl mb-8 text-gray-300"
                >
                    Full Stack Developer · Node.js · Next.js · MongoDB · React
                </motion.p>

                <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="inline-block px-8 py-4 bg-indigo-500 rounded-xl hover:bg-indigo-600 transition-all font-semibold shadow-lg"
                >
                    Contact Me
                </motion.a>
            </motion.div>

            {/* Animation */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-12 w-72 md:w-96"
            >
                {/* <Player
                    autoplay
                    loop
                    src="/assets/hero-animation.json"
                    style={{ width: '100%', height: '100%' }}
                /> */}
            </motion.div>
        </section>
    )
}
