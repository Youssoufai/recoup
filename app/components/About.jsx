import React from "react";
const About = () => {
    return (
        <section id="about" className="bg-[#121212] text-white py-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-400 text-lg mb-6">
                        I'm Yusuf, a Nigerian-based full-stack developer passionate about building modern web and mobile apps that drive business success. I specialize in Laravel, Tailwind CSS, React, and Next.js.
                    </p>
                    <p className="text-gray-400 text-lg">
                        Whether it's an eCommerce platform, or AI-powered app, I love turning bold ideas into powerful digital products.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                    <ul className="grid grid-cols-2 gap-4 text-gray-300 text-sm">
                        <li>✅ Laravel 11</li>
                        <li>✅ React.js</li>
                        <li>✅ Tailwind CSS</li>
                        <li>✅ Next.js</li>
                        <li>✅ MongoDB</li>
                        <li>✅ MySQL</li>
                        <li>✅ Git & GitHub</li>
                        <li>✅ Figma (UI Prototyping)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
