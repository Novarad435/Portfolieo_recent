import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData.js';

const filters = ['All', 'Healthcare', 'AI', 'Web', 'Design'];

const ProjectCard = ({ title, category, tech, bullets, demo, github }) => (
    <div className="glass-panel rounded-[32px] border border-cyan-300/10 p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/75">Featured Project</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
            </div>
            <span className="rounded-full border border-cyan-300/20 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">{category}</span>
        </div>
        <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-950/95 p-4 text-sm text-slate-300 shadow-inner">
            <div className="mb-4 grid gap-2 sm:grid-cols-2">
                {tech.map((item) => (
                    <span key={item} className="rounded-2xl bg-slate-900/95 px-3 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">
                        {item}
                    </span>
                ))}
            </div>
            <div className="grid gap-2">
                {bullets.map((point) => (
                    <p key={point} className="text-slate-300">• {point}</p>
                ))}
            </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
            <a href={demo} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300" target="_blank" rel="noreferrer">
                Live Demo
            </a>
            <a href={github} className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-800" target="_blank" rel="noreferrer">
                GitHub
            </a>
        </div>
    </div>
);

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filteredItems = activeFilter === 'All' ? projects : projects.filter((item) => item.category === activeFilter);

    return (
        <section id="projects" className="mt-14 scroll-mt-24">
            <div className="glass-panel rounded-[32px] border border-cyan-300/10 p-8 shadow-soft">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/75">Featured Projects</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white">Recruiter-facing AI & healthcare showcases.</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {filters.map((filter) => (
                            <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full border px-4 py-2 text-sm transition ${activeFilter === filter ? 'border-cyan-300 bg-cyan-400/15 text-cyan-200' : 'border-slate-700 text-slate-300 hover:border-cyan-300 hover:text-cyan-200'}`}>
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    {filteredItems.map((project) => (
                        <motion.div key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
