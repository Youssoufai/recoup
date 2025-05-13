const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-gray-400 text-sm py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© {new Date().getFullYear()} Yusuf Muhammad. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="https://twitter.com" target="_blank" className="hover:text-white">Twitter</a>
                    <a href="https://github.com" target="_blank" className="hover:text-white">GitHub</a>
                    <a href="mailto:youremail@example.com" className="hover:text-white">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
