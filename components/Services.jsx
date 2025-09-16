"use client";
import { motion } from "framer-motion";
import { Wrench, Layers, Cloud } from "lucide-react";

const services = [
    {
        title: "Custom Web Apps",
        icon: <Wrench size={48} />,
        desc: "Tailored Next.js web applications to scale your business.",
    },
    {
        title: "Full-Stack APIs",
        icon: <Layers size={48} />,
        desc: "Secure and fast REST/GraphQL APIs with databases.",
    },
    {
        title: "Cloud Deployment",
        icon: <Cloud size={48} />,
        desc: "Deploy & manage apps on Vercel, AWS and DigitalOcean.",
    },
];

export default function Services() {
    return (
        <section className="py-20 bg-gradient-to-br from-indigo-950 to-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition shadow-xl"
                        >
                            <div className="mb-4">{s.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                            <p className="text-gray-300">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
