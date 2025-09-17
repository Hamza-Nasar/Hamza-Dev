'use client'
import { motion } from 'framer-motion'
import { CalendarDays, Briefcase, GraduationCap, Award } from 'lucide-react'

const events = [
    {
        icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
        title: "BSc Computer Science",
        subtitle: "University of Karachi",
        date: "2023",
        description: "Graduated with a strong foundation in software engineering, databases and full-stack web development."
    },
    {
        icon: <Award className="w-6 h-6 text-yellow-400" />,
        title: "MERN Stack Certification",
        subtitle: "Online Bootcamp",
        date: "2024",
        description: "Completed intensive MERN stack training covering React, Node.js, MongoDB, Express and deployment."
    },
    {
        icon: <Briefcase className="w-6 h-6 text-blue-400" />,
        title: "Full Stack Developer (Remote)",
        subtitle: "Freelance / Contract",
        date: "2023 – Present",
        description: "Developing and maintaining scalable web apps with Node.js, Express, MongoDB, React & Next.js for global clients."
    },
    {
        icon: <CalendarDays className="w-6 h-6 text-green-400" />,
        title: "First SaaS Launch",
        subtitle: "AI + Payment Platform",
        date: "2024",
        description: "Building and launching innovative SaaS products integrating AI and secure payment systems."
    }
]

export default function Timeline() {
    return (
        <section id="timeline" className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>
                <div className="relative border-l border-gray-700">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="mb-12 ml-6"
                        >
                            <span className="absolute -left-3 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full ring-4 ring-gray-700">
                                {event.icon}
                            </span>
                            <h3 className="text-xl font-semibold">{event.title}</h3>
                            <span className="block text-sm text-gray-400">
                                {event.subtitle} • {event.date}
                            </span>
                            <p className="mt-2 text-gray-300">{event.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
