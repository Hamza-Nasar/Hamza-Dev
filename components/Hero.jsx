    'use client'
    import { motion } from 'framer-motion'
    import dynamic from 'next/dynamic'

    // Lottie dynamically load karo, server-side ignore
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
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center text-center"
                >
                    <h1 className="text-xl md:text-6xl font-bold mb-6 leading-tight">
                        I am Hamza Nasar
                    </h1>
                    <p className="text-xl md:text-xl mb-8 text-gray-300">
                        Full Stack Developer | Node.js | Next.js | MongoDB | React
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-indigo-500 rounded-xl hover:bg-indigo-600 transition-all transform hover:scale-105 font-semibold"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Animation */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-10 w-80 md:w-96"
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
