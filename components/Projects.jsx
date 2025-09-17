'use client'
import { motion } from 'framer-motion'

const projects = [
    {
        title: 'AI Resume Builder',
        desc: 'Next.js + Node.js + MongoDB + OpenAI API | Generate resumes & cover letters instantly',
        demo: '#', // live link
        code: '#', // github link
        tech: ['Next.js', 'Node.js', 'MongoDB', 'OpenAI API'],
    },
    {
        title: 'E-Commerce SuperApp',
        desc: 'React + Tailwind + Stripe + Node.js | Multi-vendor e-commerce platform with payments',
        demo: '#',
        code: '#',
        tech: ['React', 'Node.js', 'Stripe', 'Tailwind'],
    },
    {
        title: 'Personal Dashboard Web App',
        desc: 'Full Stack App | Notes, To-Do, Expense Tracker with user authentication',
        demo: '#',
        code: '#',
        tech: ['Next.js', 'MongoDB', 'Tailwind', 'JWT Auth'],
    },
]

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-20 bg-gradient-to-br from-gray-900 to-black text-white"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((p, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{
                                scale: 1.04,
                                y: -5,
                                boxShadow: '0px 10px 30px rgba(0,0,0,0.4)',
                            }}
                            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-center text-2xl font-semibold mb-3 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                                    {p.title}
                                </h3>
                                <p className="text-center text-gray-300 mb-4">{p.desc}</p>
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {p.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center gap-4 mt-4">
                                <a
                                    href={p.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors text-sm font-medium"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={p.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm font-medium"
                                >
                                    Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
