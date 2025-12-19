import { ChevronRight, ExternalLink, Github } from 'lucide-react';
import React from 'react';

const projects = [
    {
        title: 'Ngoma Zangu',
        description:
            'This interactive music website leverages the Spotify API to provide users with a personalized music experience. Users can log in with their Spotify accounts to generate custom playlists based on their listening history, favorite genres, and mood preferences.',
        tags: ['Vuejs', 'Javascript', 'Spotify API'],
        links: { github: '#', external: '#' }
    },
    {
        title: 'Fitclub Gym',
        description:
            'Fitclub is a modern, user-friendly website designed for a local gym, offering seamless subscription management and an interactive location finder. The website allows users to explore gym memberships, sign up for subscriptions, and view the physical location of the gym on an embedded map.',
        tags: ['Reactjs', 'Javascript'],
        links: { github: '#', external: '#' }
    },
    {
        title: 'Moti Care Garage Service Management',
        description:
            'This project provides an Admin Dashboard to manage customers, employees, vehicles, services and orders making garage operations efficient and organized.',
        tags: ['Reactjs', 'Node.js', 'Express', 'mySQL'],
        links: { github: '#', external: '#' }
    }
];

const ProjectCard = ({ project }) => (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-slate-800 leading-tight">
                {project.title}
            </h3>
            <div className="flex items-center gap-3">
                {project.badge && (
                    <span className="bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {project.badge}
                    </span>
                )}
                <div className="flex gap-2 text-slate-400">
                    {project.links.external && (
                        <ExternalLink
                            size={20}
                            className="cursor-pointer hover:text-slate-600"
                        />
                    )}
                    {project.links.github && (
                        <Github
                            size={20}
                            className="cursor-pointer hover:text-slate-600"
                        />
                    )}
                </div>
            </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
                <span
                    key={tag}
                    className="bg-slate-50 text-slate-500 text-xs px-3 py-1.5 rounded-md border border-gray-100"
                >
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

const ProjectsStats = () => {
    return (
        <section
            id="services"
            className="py-20 px-6 bg-[#081427] font-sans scroll-mt-24"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#5CF3CF] mb-6">
                    Featured Projects
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-16">
                    I'm Passionate about interactive Digital Experiences <br />{' '}
                    that aim to translate Good Design to Good Business.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsStats;
