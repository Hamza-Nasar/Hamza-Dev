'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${form.name}! Your message has been sent.`);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white">
            <div className="max-w-3xl mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Contact Me
                </motion.h2>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 bg-gray-800 p-8 rounded-3xl shadow-2xl hover:shadow-indigo-600/40 transition-all duration-500"
                >
                    <motion.input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        whileFocus={{ scale: 1.02, borderColor: '#6366f1', boxShadow: '0 0 10px rgba(99,102,241,0.5)' }}
                        className="p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none transition-all"
                    />
                    <motion.input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        whileFocus={{ scale: 1.02, borderColor: '#6366f1', boxShadow: '0 0 10px rgba(99,102,241,0.5)' }}
                        className="p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none transition-all"
                    />
                    <motion.textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        whileFocus={{ scale: 1.02, borderColor: '#6366f1', boxShadow: '0 0 10px rgba(99,102,241,0.5)' }}
                        className="p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none transition-all"
                    />
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05, backgroundColor: '#4f46e5' }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-semibold mt-4 transition-all duration-300"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}
