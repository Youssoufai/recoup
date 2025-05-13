'use client';

import { motion } from 'framer-motion';

const services = [
    {
        title: 'Web Development',
        description: 'Building fast, responsive, and modern websites using Next.js, React & Tailwind.',
    },
    {
        title: 'Mobile Apps',
        description: 'Cross-platform apps that look amazing and perform flawlessly on Android & iOS.',
    },
    {
        title: 'UI/UX Design',
        description: 'Crafting smooth, intuitive user interfaces with a focus on user experience.',
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};

const Services = () => {
    return (
        <section className="bg-[#0d0d0d] text-white py-28 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={container}
                >
                    <motion.h2
                        variants={item}
                        className="text-5xl md:text-6xl font-bold mb-16 leading-tight text-center"
                    >
                        What I Do
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                variants={item}
                                className="bg-[#1b1b1b] p-8 rounded-3xl hover:scale-[1.03] transition-transform duration-300 border border-[#2b2b2b]"
                            >
                                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
