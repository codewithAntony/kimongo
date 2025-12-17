import React from 'react';
import AboutTabs from './AboutTabs';
import { div } from 'framer-motion/client';

function About() {
    return (
        <div className="bg-[#081427] min-h-screen flex items-center justify-center">
            <div
                id="about"
                className="w-full max-w-7xl px-4 flex flex-col items-center"
            >
                <h1 className="text-[#5CF3CF] text-2xl uppercase sm:text-4xl mb-10">
                    About Me
                </h1>

                <AboutTabs />
            </div>
        </div>
    );
}

export default About;
