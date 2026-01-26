import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'SiteCam',
        // type: 'Web App',
        image: '/images/jengalog.png',
        // liveLink: 'https://moticare.netlify.app/',
        sourceLink: 'https://github.com/codewithAntony/jengalog',
        tags: ['Next.js', 'Supabase'],
        description:
            'This is a full-stack SaaS solution designed to bridge the communication gap between site engineers and property owners. It provides a centralized platform for tracking construction milestones, managing site imagery, and providing clients with a transparent, real-time feed of their project.'
    },
    {
        id: 2,
        title: 'Ngoma Zangu',
        //type: 'Web App',
        image: '/images/ngomazanguss.png',
        liveLink: 'https://ngomazangu.netlify.app/',
        sourceLink: 'https://github.com/codewithAntony/ngomazangu',
        tags: ['Vue.js', 'Offline First', 'Spotify API'],
        description:
            'This interactive music website leverages the Spotify API to provide users with a personalized music experience. Users can log in with their Spotify accounts to generate custom playlists based on their listening history, favorite genres, and mood preferences.'
    },
    {
        id: 3,
        title: 'Moti Care Garage Service Management',
        // type: 'Web App',
        image: '/images/auto-1.png',
        liveLink: 'https://moticare.netlify.app/',
        sourceLink: 'https://github.com/codewithAntony/moticaree',
        tags: ['Go', 'vue.js'],
        description:
            'This project provides an Admin Dashboard to manage customers, employees, vehicles, services and orders making garage operations efficient and organized.'
    },
    {
        id: 4,
        title: 'Fitclub Gym',
        // type: 'Web Apps',
        image: '/images/fitclub.png',
        liveLink: 'https://fittclubb.netlify.app/',
        sourceLink: 'https://github.com/codewithAntony/gym-fitness-website',
        tags: ['Javascript', 'email.js', 'express'],
        description:
            'Fitclub is a modern, user-friendly website designed for a local gym, offering seamless subscription management and an interactive location finder. The website allows users to explore gym memberships, sign up for subscriptions, and view the physical location of the gym on an embedded map.'
    },
    {
        id: 5,
        title: 'WordWonder',
        // type: 'Web App',
        image: '/images/Wordwonder.png',
        liveLink: 'https://github.com/codewithAntony/wordwonder',
        sourceLink: 'https://github.com/codewithAntony/wordwonder',
        tags: ['Typescript', 'Node.js'],
        description:
            "WordWonder is a specialized educational web application built to support children developing their speech and literacy skills. Originally inspired by my niece's journey with speech challenges, this tool provides a safe, encouraging, and fun environment to practice communication."
    },
    {
        id: 6,
        title: 'A Brand Kenya',
        // type: 'Web App',
        image: '/images/abrandke.png',
        liveLink: 'https://abrandke.netlify.app/',
        sourceLink: 'https://github.com/codewithAntony/moticaree',
        tags: ['React.js', 'Tailwindcss', 'framer-motion'],
        description:
            'An Agency that builds websites also converting digital storefronts.'
    },
    {
        id: 7,
        title: 'Evergreen Dental Care',
        // type: 'Web App',
        image: '/images/evergreen.png',
        liveLink: 'https://evergreendentalcareltd.netlify.app/',
        sourceLink: 'https://evergreendentalcareltd.netlify.app/',
        tags: ['Go', 'vue.js'],
        description:
            'This project provides an Admin Dashboard to manage customers, employees, vehicles, services and orders making garage operations efficient and organized.'
    }
    // ... add up to 12 projects here
];

const ProjectGallery = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const totalProjects = projects.length;

    const showMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <section className="bg-[#081427] text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.slice(0, visibleCount).map((project) => (
                        <div
                            key={project.id}
                            className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden flex flex-col"
                        >
                            {/* Image/Icon Header Area */}
                            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                                <span className="absolute top-4 left-4 text-xs bg-black/40 px-2 py-1 rounded-full text-blue-400">
                                    {project.type}
                                </span>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.src =
                                            'https://via.placeholder.com/400x200?text=No+Image';
                                    }}
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] bg-gray-800 px-2 py-1 rounded border border-gray-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-l from-[#249C82] via-[#44D2B0] to-[#5CF3CF] text-white font-semibold py-2 rounded text-sm transition-all duration-300"
                                    >
                                        <span className="text-xs">↗</span> Live
                                        Demo
                                    </a>
                                    <a
                                        href={project.sourceLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-[#1c2128] border border-gray-700 hover:bg-gray-700 py-2 rounded text-sm transition-all duration-300"
                                    >
                                        {/* GitHub Icon (Simplified) */}
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Section */}
                <div className="mt-12 text-center flex flex-col items-center">
                    <p className="text-gray-500 text-sm mb-4">
                        Showing {Math.min(visibleCount, totalProjects)} of{' '}
                        {totalProjects} projects
                    </p>

                    {visibleCount < totalProjects && (
                        <button
                            onClick={showMore}
                            className="bg-[#1c2128] text-white border border-gray-700 px-8 py-3 rounded-lg hover:bg-gray-700 transition flex items-center gap-2"
                        >
                            View More <span>↓</span>
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
