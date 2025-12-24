import React from 'react';

const Navigation = () => {
    return (
        <div className="w-full fixed top-0 left-0 z-50 bg-[#09162A] shadow-md">
            <div className="mx-auto max-w-7xl flex justify-between items-center px-4 py-3 ">
                <a href="#home">
                    <h1 className="font-bold text-lg tracking-wide bg-gradient-to-l from-[#249C82] via-[#44D2B0] to-[#5CF3CF] bg-clip-text text-transparent">
                        Kimong'o
                    </h1>
                </a>
                <ul className="hidden md:flex gap-8 font-bold">
                    {[
                        { name: 'Home', href: '#home' },
                        { name: 'About', href: '#about' },
                        { name: 'Services', href: '#services' },
                        { name: 'Contact', href: '#contact' }
                    ].map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="cursor-pointer bg-gradient-to-l from-[#249C82] via-[#44D2B0] to-[#5CF3CF] bg-clip-text text-transparent hover:opacity-80 transition"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className="bg-gradient-to-l from-[#249C82] via-[#44D2B0] to-[#5CF3CF] text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                    Let's chat
                </button>
            </div>
        </div>
    );
};

export default Navigation;
