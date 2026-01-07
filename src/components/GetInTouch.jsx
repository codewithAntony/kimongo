import React from 'react';

function GetInTouch() {
    return (
        <section className="w-full bg-[#081427] py-20 px-4 flex justify-center">
            <div className="relative w-full max-w-6xl rounded-2xl bg-gradient-to-r from-[#0b1e3d] to-[0f274f] p-10 md:p-14 shadow-xl overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                    <p className="text-[#5CF3CF] font-medium mb-4">
                        Get In Touch
                    </p>

                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
                        Have a Project On Your Mind?
                    </h2>

                    <a
                        href="#contact"
                        className="bg-gradient-to-l from-[#249C82] via-[#44D2B0] to-[#5CF3CF] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
                    >
                        Contact Me
                    </a>
                </div>

                <div className="absolute right-10 top-1/2 translate-y-1/2 hidden md:block">
                    <div className="bg-[#5CF3CF] p-4 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="#081427"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>

                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#5CF3CF]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#5CF3CF]/10 rounded-full blur-3xl" />
            </div>
        </section>
    );
}

export default GetInTouch;
