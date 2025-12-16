import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function SocialLinks() {
    const socials = [
        { icon: <FaFacebookF />, link: '/' },
        { icon: <FaLinkedin />, link: '/' },
        { icon: <FaXTwitter />, link: '/' },
        { icon: <FaGithub />, link: '/' }
    ];
    return (
        <div className="flex gap-5 mt-10">
            {socials.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                >
                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#15803d,#22c55e,#4ade80,#15803d)] animate-spin-slow"></div>
                    <div className="relative w-14 h-14 rounded-full bg-[#081427] flex items-center justify-center text-[#5CF3CF] text-xl shadow-lg group-hover:scale-110 transition">
                        {item.icon}
                    </div>
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
