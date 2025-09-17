'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Footer() {
    const socials = [
        { icon: <FaGithub />, link: 'https://github.com/hamza-nasar' },
        { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/hamza-nasar-1363a4337' },
        { icon: <FaTwitter />, link: 'https://twitter.com/hamzanasar144' },
        { icon: <FaWhatsapp />, link: 'https://wa.me/923088977132' },
    ];

    const menuItems = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Services', to: 'services' },
        { name: 'Projects', to: 'projects' },
        { name: 'Timeline', to: 'timeline' },
        { name: 'Reviews', to: 'testimonials' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-zinc-950 to-black text-white pt-16 pb-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4">
                {/* About / Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-xl font-bold mb-4">Hamza Nasar</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        Full Stack Developer specializing in Node.js, React, Next.js, and MongoDB.
                        I build modern, responsive, and high-performance web apps.
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
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {menuItems.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.to}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="cursor-pointer text-gray-400 hover:text-indigo-400 transition text-sm"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-indigo-400" /> hamzanasar144@gmail.com
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhone className="text-indigo-400" /> 03088977132
                        </li>
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
                    <div className="flex space-x-4">
                        {socials.map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-500 text-xl transition"
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
                className="text-center text-gray-500 mt-10 text-sm"
            >
                &copy; {new Date().getFullYear()} Hamza Nasar. All rights reserved.
            </motion.div>
        </footer>
    );
}
