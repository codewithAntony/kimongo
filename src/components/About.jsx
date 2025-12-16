import React from 'react';
import AboutTabs from './AboutTabs';
import { div } from 'framer-motion/client';

function About() {
    return (
        <div className="bg-[#081427]">
            <div id="about" className="mx-auto min-h-screen max-w-7xl px-4">
                <div className="flex flex-col pt-8 items-center space-y-3 sm:pt-15">
                    <h1 className="text-[#5CF3CF] text-2xl uppercase sm:text-4xl">
                        About Me
                    </h1>
                </div>
                <div className="flex space-x-2 justify-around pt-[20px] sm:pt-[70px]">
                    <div>
                        <AboutTabs />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
