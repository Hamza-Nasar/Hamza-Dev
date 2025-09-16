'use client';
import { motion } from 'framer-motion';

const testimonials = [
    { name: "John Doe", role: "CEO, StartupX", text: "Hamza delivered our Node.js API ahead of schedule and exceeded our expectations. Highly recommended!" },
    { name: "Ayesha Khan", role: "Product Manager, WebWorks", text: "The React + Next.js dashboard built by Hamza is fast, beautiful, and scalable. Great communication!" },
    { name: "Michael Lee", role: "CTO, GlobalTech", text: "Professional and reliable developer. Our SaaS platform runs smoothly thanks to his backend expertise." }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">What Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
                        >
                            <p className="text-gray-300 mb-4">“{item.text}”</p>
                            <div>
                                <h4 className="font-semibold text-white">{item.name}</h4>
                                <span className="text-sm text-gray-400">{item.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
