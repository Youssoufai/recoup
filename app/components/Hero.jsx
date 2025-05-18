import React from 'react';

const Hero = () => {
    return (
        <section className="bg-[#0f0f0f] text-white min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Hi, I'm <span className="bg-gradient-to-r from-[#00FFA3] to-[#0077FF] text-transparent bg-clip-text">Yusuf</span><br />
                    I Build Web & Mobile Apps.
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-8">
                    Helping businesses grow through modern, scalable technology — from websites to full digital solutions.
                </p>
                <button className="bg-[#00FFA3] text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition duration-300">
                    Let’s Work Together
                </button>
            </div>
        </section>
    );
};

export default Hero;
