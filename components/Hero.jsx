"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white overflow-hidden"
        >
            {/* Background animated gradient circles */}
            <motion.div
                className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 rounded-full mix-blend-screen blur-3xl opacity-30"
                animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
                transition={{ repeat: Infinity, duration: 12 }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-700 rounded-full mix-blend-screen blur-3xl opacity-20"
                animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 14 }}
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center px-6 z-10"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    Transform Your Business <br />
                    <span className="text-indigo-400">With Modern Web Apps</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Full-Stack Development • AI Solutions • Scalable Web Apps
                </p>
                <motion.a
                    href="#contact"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition shadow-lg"
                >
                    Get Free Assessment
                </motion.a>
            </motion.div>
        </section>
    );
}
