'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import myImg from '../app/images/imm.png';

export default function About() {
    return (
        <section id="about" className="py-20 bg-zinc-900 text-white">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-38">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        I am Hamza Nasar, a passionate Full Stack Developer specializing in building modern web applications using Node.js, MongoDB, and React. I focus on writing clean, scalable, and efficient code. I love transforming ideas into digital reality and delivering projects with high quality.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <Image
                        src={myImg}
                        alt="Hamza Nasar"
                        className="rounded-2xl shadow-xl object-contain"
                        width={300}
                        height={300}
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
