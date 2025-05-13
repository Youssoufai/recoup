'use client';

import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="bg-[#0f0f0f] text-white py-28 px-6">
            {/*  */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Let's Build Something Incredible Together
                </h2>
                <p className="text-gray-400 text-lg mb-10">
                    Whether it's a website, app, or full-stack platform — I'm ready to bring your vision to life.
                </p>
                <a
                    href="#contact"
                    className="inline-block px-8 py-4 text-lg font-medium bg-white text-black rounded-full hover:scale-105 transition-transform duration-300"
                >
                    Get in Touch
                </a>
            </motion.div>
        </section>
    );
};

export default CTA;
