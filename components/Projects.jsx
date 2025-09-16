'use client';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "AI Resume Builder",
        desc: "Next.js + Node.js + MongoDB + OpenAI API | Generate resumes & cover letters instantly",
        link: "#", // Replace with live demo or repo link
        tech: "Next.js, Node.js, MongoDB, OpenAI API"
    },
    {
        title: "E-Commerce SuperApp",
        desc: "React + Tailwind + Stripe + Node.js | Multi-vendor e-commerce platform with payments",
        link: "#",
        tech: "React, Node.js, Stripe, Tailwind"
    },
    {
        title: "Personal Dashboard Web App",
        desc: "Full Stack App | Notes, To-Do, Expense Tracker with user authentication",
        link: "#",
        tech: "Next.js, MongoDB, Tailwind, JWT Auth"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((p, idx) => (
                        <motion.a
                            key={idx}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all block"
                        >
                            <h3 className="text-center text-2xl font-semibold mb-2">{p.title}</h3>
                            <p className="text-center text-gray-400 mb-2">{p.desc}</p>
                            <span className="text-center flex justify-center text-sm text-indigo-400">{p.tech}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
