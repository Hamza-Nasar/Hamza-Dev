'use client';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Sarah Ahmed',
        role: 'Founder, FinTechNow',
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 5,
        text:
            'Hamza built a secure Node.js + MongoDB API for our fintech app in record time. The code quality and documentation were top notch.',
    },
    {
        name: 'James Carter',
        role: 'Product Lead, ShopSphere',
        img: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5,
        text:
            'Our e-commerce dashboard in React/Next.js is now blazing fast and scalable. Hamza understood our requirements and delivered beyond expectations.',
    },
    {
        name: 'Uzair Khan',
        role: 'CTO, CloudBase',
        img: 'https://randomuser.me/api/portraits/men/78.jpg',
        rating: 4,
        text:
            'Professional and reliable developer. His backend expertise with JWT Auth and payments made our SaaS platform rock-solid.',
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-20 bg-gradient-to-br from-zinc-900 to-black text-white"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">
                    What Clients Say
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
                        >
                            {/* Avatar */}
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-indigo-500"
                            />
                            {/* Name & Role */}
                            <h4 className="font-semibold text-white">{item.name}</h4>
                            <span className="text-sm text-gray-400 mb-2">{item.role}</span>
                            {/* Stars */}
                            <div className="flex justify-center mb-4">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400" />
                                ))}
                            </div>
                            {/* Text */}
                            <p className="text-gray-300 text-sm leading-relaxed">
                                “{item.text}”
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
