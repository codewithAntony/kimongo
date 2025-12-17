import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const leftVariant = {
    hidden: { x: -150, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

const rightVariant = {
    hidden: { x: 150, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

function AboutTabs() {
    const [activeTab, setActiveTab] = useState('ABOUT ME');

    const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;
    console.log('Public Key:', PUBLIC_KEY);
    emailjs.init(PUBLIC_KEY);

    const handleEmailClick = (e) => {
        e.preventDefault();

        const templateParams = {
            to_email: 'murithi3397@gmail.com',
            from_name: 'Website Visitor',
            message: "Hello, I'd like to connect with you."
        };

        emailjs
            .send('service_r6zw4c7', 'template_rcd8kkk', templateParams)
            .then((response) => {
                console.log('Email sent successfully:', response);
                window.location.href = 'mailto:murithi3397@gmail.com';
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                window.location.href = 'mailto:murithi3397@gmail.com';
            });
    };

    const tabs = [
        {
            id: 'ABOUT ME',
            content: (
                <>
                    <h3 className="text-xl text-[#5CF3CF] mb-2">ABOUT ME</h3>
                    <div
                        style={{ backgroundColor: 'var(--primary-color)' }}
                        className="w-24 h-0.5 mb-2 sm:h-1"
                    ></div>
                    <p className="text-white">Hello</p>
                    <p className="text-white mt-2">
                        I am Antony Namu, Full Stack Developer.
                    </p>
                    <p className="text-white mt-3">
                        Passionate and highly-skilled Full Stack Developer
                        withhands-on experience building wonderful projects.
                        With a strong attention to detail and accuracy and the
                        important ability to function well in a team setting.
                    </p>
                </>
            )
        },
        {
            id: 'WHY ME',
            content: (
                <>
                    <h3 className="text-xl text-[#5CF3CF] mb-2">
                        WHY TO CHOOSE ME
                    </h3>
                    <div
                        className="w-24 h-0.5 mb-2 sm:h-1"
                        style={{ backgroundColor: 'var(--primary-color)' }}
                    ></div>
                    <p className="text-white ">I bring unique value through:</p>
                    <ul className="list-disc list-inside mt-3 text-white space-y-2">
                        <li>Strong problem-solving abilities</li>
                        <li>Deep expertise in modern web technologies</li>
                        <li>
                            Proven track record of delivering quality projects
                        </li>
                        <li>
                            Excellent communication and collaboration skills
                        </li>
                    </ul>
                </>
            )
        },
        {
            id: 'MY VISION',
            content: (
                <>
                    <h3 className="text-xl text-[#5CF3CF] mb-2">
                        HERE IS MY VISION
                    </h3>
                    <div
                        className="w-24 h-0.5 mb-2 sm:h-1"
                        style={{ backgroundColor: 'var(--primary-color)' }}
                    ></div>
                    <p className="text-white ">
                        My vision is to create impactful digital experiences
                        that:
                    </p>
                    <ul className="list-disc list-inside mt-3 text-white  space-y-2">
                        <li>Transform user interactions</li>
                        <li>Push technological boundaries</li>
                        <li>Deliver exceptional value</li>
                        <li>Set new standards in web development</li>
                    </ul>
                </>
            )
        }
    ];
    return (
        <div className="h-screen max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full">
                <motion.div
                    variants={leftVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex-[2] animate-slide-in-left min-w-[280px] max-w-[280px] sm:min-w-[600px] sm:max-w-[600px]"
                >
                    <div className="flex gap-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={
                                    activeTab !== tab.id
                                        ? {
                                              backgroundColor:
                                                  'var(--primary-color)',
                                              borderColor: '#5CF3CF'
                                          }
                                        : {
                                              borderColor: '#5CF3CF'
                                          }
                                }
                                className={`px-6 py-2 font-medium text-sm transition-colors duration-200 ${
                                    activeTab === tab.id
                                        ? 'bg-[#081427] text-[#5CF3CF] border-w border-b-0 border-t border-l border-r border hover:text-gray-700 hover:border-b-0'
                                        : ' text-white hover:text-gray-700 hover:bg-[#081427] border-b-0  border-t border-l border-r border hover:border hover:border-b-0'
                                }
                                ${
                                    tab.id === 'ABOUT ME'
                                        ? 'rounded-tl-md'
                                        : tab.id === 'MY VISION'
                                        ? 'rounded-tr-md'
                                        : ''
                                }`}
                            >
                                {tab.id}
                            </button>
                        ))}
                    </div>

                    <div
                        className="border rounded-b-md rounded-tr-md p-6 bg-[#081427] min-h-[300px]"
                        style={{ borderColor: '#5CF3CF' }}
                    >
                        {tabs.find((tab) => tab.id === activeTab)?.content}
                    </div>
                </motion.div>

                <motion.div
                    variants={rightVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex-1 text-center"
                >
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-xl text-[#5CF3CF] font-semibold mb-2">
                            PERSONAL INFO
                        </h3>
                        <div
                            className="w-24 h-0.5 mb-6 sm:h-1"
                            style={{ backgroundColor: 'var(--primary-color)' }}
                        ></div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:gap-2">
                            <p className="font-medium text-[#5CF3CF]">Name:</p>
                            <p className="text-white">Antony Namu</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-2">
                            <p className="font-medium text-[#5CF3CF]">
                                Phone Number:
                            </p>
                            <p className="text-white">07-25-010-898</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-2">
                            <p className="font-medium text-[#5CF3CF]">Mail:</p>
                            <a
                                href="mailto:murithi3397@gmail.com"
                                onClick={handleEmailClick}
                                className="text-white cursor-pointer"
                            >
                                murithinamuu@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-2">
                            <p className="font-medium text-[#5CF3CF]">
                                Github:
                            </p>
                            <a
                                href="https://github.com/codewithAntony"
                                className="text-white cursor-pointer"
                            >
                                https://github.com/codewithAntony
                            </a>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-2">
                            <p className="font-medium text-[#5CF3CF]">
                                Resume:
                            </p>
                            <a
                                href="/Antony_Namu_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white cursor-pointer"
                            >
                                Antony Namu Resume
                            </a>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-2">
                            <p className="font-medium text-[#5CF3CF]">
                                LinkedIn:
                            </p>
                            <a
                                href="https://www.linkedin.com/in/antony-murithi-namu/"
                                className="text-white cursor-pointer"
                            >
                                https://www.linkedin.com/in/antony-murithi-namu/
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutTabs;
