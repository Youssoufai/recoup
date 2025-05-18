'use client';

import { motion } from 'framer-motion';
import { useState, useTransition } from 'react';
import { submitContactForm } from './actions';

const Contact = () => {
    const [pending, startTransition] = useTransition();
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        startTransition(async () => {
            const res = await submitContactForm(formData);
            if (res.success) {
                form.reset();
                setMessage('Message sent successfully!');
            } else {
                setMessage(res.error || 'Something went wrong.');
            }
        });
    };

    return (
        <section id="contact" className="bg-[#0a0a0a] text-white py-28 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                >
                    Get in Touch
                </motion.h2>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="space-y-6"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label className="block mb-2 text-sm">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="w-full bg-[#1a1a1a] text-white p-4 rounded-xl border border-[#333]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full bg-[#1a1a1a] text-white p-4 rounded-xl border border-[#333]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            className="w-full bg-[#1a1a1a] text-white p-4 rounded-xl border border-[#333]"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={pending}
                        className="bg-white text-black px-8 py-3 rounded-full hover:scale-105 transition-transform"
                    >
                        {pending ? 'Sending...' : 'Send Message'}
                    </button>
                    {message && (
                        <p className="text-sm text-center pt-2">{message}</p>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
