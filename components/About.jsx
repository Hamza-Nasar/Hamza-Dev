'use client'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4"
            >
                About
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-300 max-w-3xl"
            >
                Hi, I’m Hamza — a full-stack developer focused on fast, animated websites.
                I use Next.js, Node, Prisma, and love smooth UX.
            </motion.p>
        </section>
    )
}
