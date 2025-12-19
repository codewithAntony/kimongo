import React, { useRef } from 'react';
import {
    SiCss3,
    SiDocker,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiPython,
    SiReact,
    SiTypescript,
    SiVuedotjs
} from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert('Message sent successfully');
                    formRef.current.reset();
                },
                (error) => {
                    console.error(error);
                    alert('Failed to send message');
                }
            );
    };
    return (
        <div
            id="contact"
            className="min-h-screen bg-[#0a192f] text-slate-300 p-8 flex flex-col relative overflow-hidden scroll-mt-24"
        >
            <style>
                {`
                @keyframes orbit {
                    0% { transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg); }
                }
                .animate-orbit {
                    animation: orbit var(--orbit-duration) linear infinite;
                    animation-delay: var(--orbit-delay);
                }
                `}
            </style>

            <div className="flex-grow flex items-center justify-center z-10">
                <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
                    {/* Form Section */}
                    <div className="bg-[#112240] p-8 rounded-2xl shadow-xl w-full max-w-lg">
                        <h2 className="text-3xl font-bold text-[#5CF3CF] text-center mb-2">
                            Contact Me
                        </h2>
                        <p className="text-center text-slate-400 mb-8">
                            GET IN TOUCH WITH ME
                        </p>
                        <form
                            ref={formRef}
                            onSubmit={sendEmail}
                            className="space-y-4"
                        >
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="First Name"
                                    className="w-full bg-[#233554] text-slate-200 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#64ffda] transition-colors"
                                />
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    className="w-full bg-[#233554] text-slate-200 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#64ffda] transition-colors"
                                />
                            </div>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full bg-[#233554] text-slate-200 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#64ffda] transition-colors"
                            />
                            <input
                                name="subject"
                                type="text"
                                placeholder="Subject"
                                className="w-full bg-[#233554] text-slate-200 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#64ffda] transition-colors"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="5"
                                className="w-full bg-[#233554] text-slate-200 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#64ffda] transition-colors resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-gradient-to-l from-[#249C82] via-[#44D2B0] to-[#5CF3CF] hover:bg-[#56d8b7] text-[#0a192f] font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Skills Animation Section */}
                    <div className="relative flex justify-center items-center w-[400px] h-[400px]">
                        <h2 className="text-4xl font-bold text-white z-20 absolute">
                            Skills
                        </h2>

                        {/* Visual Orbit Rings - Adjusted sizes to match icon radii */}
                        {/* Inner: 70px radius = 140px size */}
                        <div className="absolute border border-[#64ffda]/20 rounded-full w-[140px] h-[140px]"></div>
                        {/* Middle: 120px radius = 240px size */}
                        <div className="absolute border border-[#64ffda]/20 rounded-full w-[240px] h-[240px]"></div>
                        {/* Outer: 170px radius = 340px size */}
                        <div className="absolute border border-[#64ffda]/20 rounded-full w-[340px] h-[340px]"></div>

                        <TechIcons />
                    </div>
                </div>
            </div>

            <footer className="text-center text-slate-500 text-sm py-6 border-t border-slate-800 z-10">
                <p>Copyright 2025 by Kimong'o || All Right Reserved.</p>
            </footer>
        </div>
    );
};

const TechIcons = () => {
    const icons = [
        // Inner Orbit (Radius 70px)
        {
            Icon: SiTypescript,
            color: '#3178c6',
            radius: '70px',
            duration: '10s',
            delay: '-2s'
        },
        {
            Icon: SiJavascript,
            color: '#f7df1e',
            radius: '70px',
            duration: '10s',
            delay: '-7s'
        },

        // Middle Orbit (Radius 120px)
        {
            Icon: SiHtml5,
            color: '#e34f26',
            radius: '120px',
            duration: '18s',
            delay: '0s'
        },
        {
            Icon: SiCss3,
            color: '#1572b6',
            radius: '120px',
            duration: '18s',
            delay: '-6s'
        },
        {
            Icon: SiReact,
            color: '#61dafb',
            radius: '120px',
            duration: '18s',
            delay: '-12s'
        },

        // Outer Orbit (Radius 170px)
        {
            Icon: SiVuedotjs,
            color: '#4fc08d',
            radius: '170px',
            duration: '25s',
            delay: '-3s'
        },
        {
            Icon: SiDocker,
            color: '#2496ed',
            radius: '170px',
            duration: '25s',
            delay: '-9s'
        },
        {
            Icon: SiPython,
            color: '#3776ab',
            radius: '170px',
            duration: '25s',
            delay: '-15s'
        },
        {
            Icon: SiGit,
            color: '#f05032',
            radius: '170px',
            duration: '25s',
            delay: '-20s'
        },
        {
            Icon: SiMongodb,
            color: '#47a248',
            radius: '170px',
            duration: '25s',
            delay: '-25s'
        }
    ];

    return (
        <>
            {icons.map(({ Icon, color, radius, duration, delay }, index) => (
                <div
                    key={index}
                    className="absolute flex items-center justify-center animate-orbit"
                    style={{
                        '--orbit-radius': radius,
                        '--orbit-duration': duration,
                        '--orbit-delay': delay
                    }}
                >
                    <Icon
                        size={35}
                        style={{ color }}
                        className="bg-[#0a192f] rounded-full p-1"
                    />
                </div>
            ))}
        </>
    );
};

export default Contact;
