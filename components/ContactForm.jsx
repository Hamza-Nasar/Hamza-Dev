'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        // do your backend call here if needed…
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: `Thank you ${form.name}, I’ll get back to you soon 😊`,
            showConfirmButton: false,
            timer: 3000,
            background: '#1f2937',
            color: '#fff'
        })
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <section
            id='contact'
            className='py-20 bg-gradient-to-br from-gray-900 to-indigo-950 text-white'
        >
            <div className='max-w-6xl mx-auto px-6'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-12'
                >
                    Let’s Work Together
                </motion.h2>

                <div className='grid md:grid-cols-2 gap-12'>
                    {/* Left Side – Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='space-y-6'
                    >
                        <p className='text-gray-300'>
                            Have a project in mind or want to discuss an idea? Fill out the
                            form or reach me directly:
                        </p>
                        <div className='flex items-center gap-4'>
                            <Mail className='text-indigo-400' />
                            <span>hamzanasar144@gmail.com</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Phone className='text-indigo-400' />
                            <span>+92 308 8977132</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <MapPin className='text-indigo-400' />
                            <span>Karachi, Pakistan</span>
                        </div>
                    </motion.div>

                    {/* Right Side – Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='bg-gray-800 rounded-2xl p-8 shadow-xl space-y-6'
                    >
                        <div>
                            <label className='block mb-1 text-sm font-medium'>Name</label>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                className='w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                placeholder='Your name'
                                required
                            />
                        </div>
                        <div>
                            <label className='block mb-1 text-sm font-medium'>Email</label>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                className='w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                placeholder='you@example.com'
                                required
                            />
                        </div>
                        <div>
                            <label className='block mb-1 text-sm font-medium'>Message</label>
                            <textarea
                                rows={4}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                className='w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                placeholder='Tell me about your project...'
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            className='flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition'
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
