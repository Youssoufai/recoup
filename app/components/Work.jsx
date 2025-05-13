import React from 'react';

const projects = [
    {
        title: 'AgriTech Marketplace',
        description: 'Connecting farmers with raw material buyers using Laravel & React.',
        image: '/images/cpt.jpg', // replace with your image paths
    },
    {
        title: 'Auto Dealer Platform',
        description: 'Modern UI/UX for selling cars online with integrated finance tools.',
        image: '/images/autodealer.jpg',
    },
    {
        title: 'Home Decor E-commerce',
        description: 'Built with Next.js and Stripe. Smooth, aesthetic shopping experience.',
        image: '/images/homedecor.jpg',
    },
];

const Work = () => {
    return (
        <section className="bg-[#0f0f0f] py-24 px-6 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">My Work</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#1a1a1a] p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300"
                        >
                            <div className="h-48 bg-gray-800 rounded-xl mb-4 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
