import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GlobeScene from './GlobeScene.jsx';
import { heroTitles } from '../data/portfolioData.js';

const Hero = ({ onResumeClick }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current + 1) % heroTitles.length);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative overflow-hidden rounded-[32px] border border-cyan-400/10 bg-black/50 p-6 shadow-soft backdrop-blur-2xl sm:p-10">
            <GlobeScene />
            <div className="relative z-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="max-w-2xl space-y-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
                        <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-cyan-200 backdrop-blur-sm">
                            AI & Healthcare Systems • ECE Graduate
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.9 }}>
                        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                            BALASUBRAMANI <span className="text-cyan-300">P</span>
                        </h1>
                        <p className="mt-5 max-w-xl text-lg text-slate-300 sm:text-xl">
                            Building Intelligent Systems that Transform Real-World Healthcare Through AI.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }}>
                        <div className="mt-6 flex flex-wrap gap-3 text-sm text-cyan-300">
                            <span className="rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 backdrop-blur-sm">{heroTitles[index]}</span>
                        </div>
                    </motion.div>

                    <motion.div className="flex flex-wrap gap-4 pt-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.9 }}>
                        <a id="view-projects-button" href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                            View Projects
                        </a>
                        <button onClick={onResumeClick} className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-slate-800">
                            Download Resume
                        </button>
                        <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-slate-800">
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                <div className="relative overflow-hidden rounded-[28px] border border-cyan-300/10 bg-slate-950/60 p-6 shadow-glow backdrop-blur-xl">
                    <div className="pointer-events-none absolute inset-x-0 top-8 h-1 bg-gradient-to-r from-cyan-400/20 via-teal-300/10 to-cyan-500/20" />
                    <div className="space-y-6">
                        <div className="rounded-3xl border border-cyan-400/12 bg-slate-900/70 p-5 backdrop-blur-lg">
                            <p className="text-sm uppercase tracking-[0.34em] text-cyan-300/80">Virtual Neural Console</p>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                {['FastAPI', 'Streamlit', 'Scikit-Learn', 'OpenAI Whisper'].map((skill) => (
                                    <div key={skill} className="rounded-2xl bg-slate-950/80 px-4 py-3 text-sm text-slate-200 shadow-md shadow-cyan-400/5">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-cyan-300/15 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-5 text-slate-200 shadow-xl shadow-cyan-400/10">
                            <p className="text-sm uppercase tracking-[0.26em] text-cyan-200/80">Interactive Mode</p>
                            <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-950/90 p-4">
                                <div className="flex items-center justify-between text-xs text-slate-400">
                                    <span>Neural signal capture</span>
                                    <span>98.7%</span>
                                </div>
                                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
