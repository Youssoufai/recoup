'use client';

import { motion } from 'framer-motion';

const Contact = () => {
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
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Message sent! (Dummy)");
                    }}
                >
                    <div>
                        <label className="block mb-2 text-sm">Name</label>
                        <input
                            type="text"
                            className="w-full bg-[#1a1a1a] text-white p-4 rounded-xl border border-[#333]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Email</label>
                        <input
                            type="email"
                            className="w-full bg-[#1a1a1a] text-white p-4 rounded-xl border border-[#333]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm">Message</label>
                        <textarea
                            rows="5"
                            className="w-full bg-[#1a1a1a] text-white p-4 rounded-xl border border-[#333]"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-white text-black px-8 py-3 rounded-full hover:scale-105 transition-transform"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
