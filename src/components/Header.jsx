import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import SocialLinks from './SocialLinks';

function Header() {
    const [text] = useTypewriter({
        words: ['Backend Developer'],
        loop: true,
        delaySpeed: 2000
    });

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-[#081427] pt-24 scroll-mt-24"
        >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="textlg uppercase font-semibold text-gray-400 mb-4">
                        Welcome to my world
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        Hi, I'm Antony
                    </h1>
                    <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
                        a{' '}
                        <span className="bg-gradient-to-l from-[#249C82] via-[#44D2B0] to-[#5CF3CF] drop-shadow-sm bg-clip-text text-transparent">
                            {text}
                        </span>
                        <Cursor cursorColor="#22c55e" />
                    </h2>

                    <p className="mt-6 text-gray-400 max-w-xl">
                        A passionate and highly-skilled Backend Developer with
                        hands-on experience building wonderful projects.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="bg-gradient-to-l from-[#249C82] via-[#44D2B0] to-[#5CF3CF] text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                            Hire Me
                        </button>

                        <a
                            href="/Antony_Murithi-resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-l from-[#249C82] via-[#44D2B0] to-[#5CF3CF] text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                        >
                            My Work
                        </a>
                    </div>

                    <div>
                        <SocialLinks />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-700 via-green-500 to-green-400 blur-3xl opacity-30"></div>
                        <img
                            src="/images/pic1.svg"
                            alt="Tech Image"
                            className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Header;
