'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Footer() {
    const socials = [
        { icon: <FaGithub />, link: "https://github.com/hamza-nasar" },
        { icon: <FaLinkedin />, link: "https://linkedin.com/in/hamzanasar144" },
        { icon: <FaTwitter />, link: "https://twitter.com/hamzanasar144" },
    ];

    const menuItems = [
        { name: "Home", to: "hero" },
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Services", to: "services" },
        { name: "Projects", to: "projects" },
        { name: "Timeline", to: "timeline" },
        { name: "Testimonials", to: "testimonials" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <footer className="bg-zinc-900 text-white py-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* About / Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-xl font-bold mb-4">Hamza Nasar</h3>
                    <p className="text-gray-400 leading-relaxed">
                        I am a Full Stack Developer specializing in Node.js, React, Next.js, and MongoDB. I create modern, responsive, and high-performance web applications.
                    </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {menuItems.map((item, idx) => (
                            <li key={idx}>
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="cursor-pointer text-gray-400 hover:text-indigo-500 transition"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2"><FaEnvelope /> hamzanasar144@gmail.com</li>
                        <li className="flex items-center gap-2"><FaPhone /> 03088977132</li>
                    </ul>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                    <div className="flex space-x-4 text-2xl">
                        {socials.map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, color: '#6366f1' }}
                                className="transition"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center text-gray-500 mt-12"
            >
                &copy; {new Date().getFullYear()} Hamza Nasar. All rights reserved.
            </motion.div>
        </footer>
    );
}
