import React from 'react';

const Navigation = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <div className="flex justify-between">
                <div className="">
                    <h2 className="font-medium text-lg">Kimong'o</h2>
                </div>
                <div className="flex justify-between gap-4">
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Projects</span>
                    <span>Contact</span>
                </div>
                <div>
                    <button>Let's chat</button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
