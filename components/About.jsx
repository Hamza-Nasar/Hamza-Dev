'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import myImg from '../app/images/imm.png';

export default function About() {
    return (
        <section id="about" className="py-20 bg-zinc-900 text-white">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <span className="inline-block bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm mb-4">
                        👋 Hello! I'm Hamza Nasar
                    </span>
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                        I'm a <span className="text-indigo-400">Full Stack Developer</span> specializing in
                        building modern web apps with <strong>Node.js</strong>, <strong>MongoDB</strong>, and
                        <strong> React / Next.js</strong>. I focus on writing clean, scalable, and efficient code.
                        I love transforming ideas into digital reality and delivering high-quality projects.
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-3">
                        {['React / Next.js', 'Node.js / Express', 'MongoDB', 'REST APIs', 'Tailwind CSS'].map((skill, idx) => (
                            <span
                                key={idx}
                                className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-indigo-600 hover:text-white transition"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <Image
                            src={myImg}
                            alt="Hamza Nasar"
                            className="rounded-2xl shadow-xl object-cover"
                            width={300}
                            height={300}
                            priority
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
