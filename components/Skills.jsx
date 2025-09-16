"use client";
import { motion } from "framer-motion";
import { Code, Database, Globe, Server } from "lucide-react";

const skills = [
    { name: "Next.js / React", icon: <Code size={36} /> },
    { name: "Node.js / Express", icon: <Server size={36} /> },
    { name: "MongoDB / Prisma", icon: <Database size={36} /> },
    { name: "Responsive UI/UX", icon: <Globe size={36} /> },
];

export default function Skills() {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {skills.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition shadow-lg"
                        >
                            <div className="flex justify-center mb-3">{s.icon}</div>
                            <p className="font-semibold">{s.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
