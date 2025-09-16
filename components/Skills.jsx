'use client';
import { motion } from 'framer-motion';

const skills = [
    { name: "HTML", level: 99 },
    { name: "CSS", level: 99 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 90 },
    { name: "MongoDB", level: 80 },
    { name: "React", level: 88 },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
                <div className="space-y-6">
                    {skills.map((skill, idx) => (
                        <div key={idx}>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                            >
                                <div className="flex justify-between mb-1">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-4">
                                    <motion.div
                                        className="bg-indigo-500 h-4 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: idx * 0.2 }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
