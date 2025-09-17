'use client'
import { motion } from 'framer-motion'
import { Wrench, Layers, Cloud, CreditCard, Cpu } from 'lucide-react'

const services = [
    {
        title: "Custom Web Apps & Dashboards",
        icon: <Wrench size={48} className="text-purple-400" />,
        desc: "Responsive, SEO-friendly Next.js dashboards and portals tailored to your business workflows."
    },
    {
        title: "Full-Stack APIs & Integrations",
        icon: <Layers size={48} className="text-blue-400" />,
        desc: "Secure REST/GraphQL APIs with Node.js, Express, MongoDB, plus third-party integrations."
    },
    {
        title: "Cloud & DevOps Deployment",
        icon: <Cloud size={48} className="text-green-400" />,
        desc: "Scalable deployments on Vercel, AWS, DigitalOcean and CI/CD pipelines."
    },
    {
        title: "Payment & SaaS Platforms",
        icon: <CreditCard size={48} className="text-yellow-400" />,
        desc: "Stripe/EasyPaisa/JazzCash integrations, subscription billing and user management."
    },
    {
        title: "AI-Powered Applications",
        icon: <Cpu size={48} className="text-pink-400" />,
        desc: "Integrate OpenAI, chatbots, or content generation directly into your web apps."
    },
    {
        title: "Mobile-Friendly Progressive Web Apps",
        icon: <Wrench size={48} className="text-orange-400" />,
        desc: "Fast, offline-ready PWAs built with React/Next.js for a native-like user experience on all devices."
    }

]

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gradient-to-br from-indigo-950 to-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 shadow-xl cursor-pointer transition"
                        >
                            <div className="mb-4">{s.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                            <p className="text-gray-300">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
