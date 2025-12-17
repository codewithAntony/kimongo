import React from 'react';
import AboutTabs from './AboutTabs';
import GetInTouch from './GetInTouch';

function About() {
    return (
        <div className="bg-[#081427] py-20 flex items-center justify-center">
            <div
                id="about"
                className="w-full max-w-7xl px-4 flex flex-col items-center"
            >
                <h1 className="text-[#5CF3CF] text-2xl uppercase sm:text-4xl mb-4 justify-center gap-4">
                    About Me
                </h1>

                <AboutTabs />
                <GetInTouch />
            </div>
        </div>
    );
}

export default About;
