"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, content }),
            });
            if (res.ok) {
                setStatus("sent");
                setName("");
                setEmail("");
                setContent("");
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
            <div className="max-w-3xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-10"
                >
                    Get in Touch
                </motion.h2>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-gray-900/70 backdrop-blur rounded-2xl shadow-xl p-8 space-y-5"
                >
                    <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                    <textarea
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Message"
                        className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition"
                        >
                            Send Message
                        </button>
                        <div className="text-sm text-gray-300">
                            {status === "sending" && "Sending..."}
                            {status === "sent" && "✅ Message sent successfully!"}
                            {status === "error" && "❌ Error, try again."}
                        </div>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
