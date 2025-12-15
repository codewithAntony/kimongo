import React from 'react';

const Navigation = () => {
    return (
        <div className="w-full fixed top-0 left-0 z-50 bg-[#09162A] shadow-md">
            <div className="mx-auto max-w-7xl flex justify-between items-center px-4 py-3 ">
                <h1 className="font-bold text-lg tracking-wide bg-gradient-to-l from-[#249C82] via-[#44D2B0] to-[#5CF3CF] bg-clip-text text-transparent">
                    Kimong'o
                </h1>
                <ul className="hidden md:flex gap-8 font-bold">
                    {['Home', 'Services', 'About', 'Contact'].map((item) => (
                        <li
                            key={item}
                            className="cursor-pointer bg-gradient-to-l from-[#249C82] via-[#44D2B0] to-[#5CF3CF] bg-clip-text text-transparent hover:opacity-80 transition"
                        >
                            {item}
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
