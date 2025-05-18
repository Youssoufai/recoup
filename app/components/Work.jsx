import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'ClipSage',
        description: 'ClipSage turns your raw content or written ideas into emotionally engaging short videos — even if you never shot a frame. Built with Nextjs',
        image: 'clps.PNG',
        github: 'https://github.com/Youssoufai/animated',
        live: 'https://klipsage.vercel.app',
    },
    {
        title: 'LiveLens',
        description: 'Livelens is a mobile application built with React Native that allows users to complete simple tasks like taking photos, videos, or answering surveys in exchange for reward points.',
        image: '/livelens.jpg',
        github: 'https://github.com/Youssoufai/livelens',
        live: '',
    },
    {
        title: 'GhostSKU',
        description: 'Built with Next.js. Smooth, aesthetic shopping experience.',
        image: '/gsku.PNG',
        github: 'https://github.com/Youssoufai/silver-landing',
        live: 'https://ghostsku.vercel.app',
    },
    {
        title: 'Capital Cars',
        description: 'Built for Capital Cars an automobile dealership based in Abuja. Built with Laravel 11',
        image: '/cpt3.PNG',
        github: 'https://github.com/Youssoufai/capitalcars2',
        live: 'https://capitalcars.site',
    },
];

const Work = () => {
    return (
        <section id='work' className="bg-[#0f0f0f] py-24 px-6 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">My Work</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#1a1a1a] p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="h-48 bg-gray-800 rounded-xl mb-4 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                            </div>

                            <div className="mt-auto flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 text-sm bg-[#282828] hover:bg-white hover:text-black rounded-lg transition-colors"
                                    >
                                        <Github size={16} />
                                        GitHub
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 text-sm bg-[#282828] hover:bg-white hover:text-black rounded-lg transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                        Live Site
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
