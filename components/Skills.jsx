'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // icons
import { SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si';

function SkillBar({ name, level, idx }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2; // seconds
        const increment = level / (duration * 60);
        const interval = setInterval(() => {
            start += increment;
            if (start >= level) {
                clearInterval(interval);
                setCount(level);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(interval);
    }, [level]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="mb-4"
        >
            <div className="flex justify-between mb-1">
                <span>{name}</span>
                <span>{count}%</span>
            </div>
            <div className="w-full bg-gray-900 rounded-full h-4">
                <motion.div
                    className="bg-indigo-800 h-4 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: idx * 0.2 }}
                />
            </div>
        </motion.div>
    );
}

const skills = [
    { name: 'HTML', level: 99 },
    { name: 'CSS', level: 99 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 90 },
    { name: 'MongoDB', level: 80 },
    { name: 'React.js', level: 88 },
    { name: 'Next.js', level: 75 },
    { name: 'Express.js', level: 80 },
];

const highlights = [
    {
        icon: <FaReact className="text-cyan-400 text-4xl" />,
        text: 'React / Next.js – Built 6+ full stack apps',
    },
    {
        icon: <FaNodeJs className="text-green-400 text-4xl" />,
        text: 'Node.js / Express.js APIs',
    },
    {
        icon: <SiMongodb className="text-green-500 text-4xl" />,
        text: 'MongoDB – Optimized DB design',
    },
    {
        icon: <FaDatabase className="text-yellow-400 text-4xl" />,
        text: 'REST / JWT Authentication',
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

                {/* Split layout */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* LEFT: Progress bars */}
                    <div>
                        {skills.map((skill, idx) => (
                            <SkillBar key={idx} {...skill} idx={idx} />
                        ))}
                    </div>

                    {/* RIGHT: Highlights with icons */}
                    <div className="grid gap-6">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05, x: 5 }}
                                className="flex items-center space-x-4 bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-all"
                            >
                                {item.icon}
                                <span className="text-lg">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
