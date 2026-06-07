import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ThemeToggle from './components/ThemeToggle.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import GlobeScene from './components/GlobeScene.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Stats from './components/Stats.jsx';
import Skills from './components/Skills.jsx';
import ExperienceTimeline from './components/ExperienceTimeline.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import ResumeModal from './components/ResumeModal.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

function App() {
    const [theme, setTheme] = useState('dark');
    const [resumeOpen, setResumeOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('light', theme === 'light');
    }, [theme]);

    useEffect(() => {
        gsap.from('.fade-in', {
            opacity: 0,
            y: 28,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.12,
        });
    }, []);

    return (
        <div className="relative overflow-x-hidden bg-hero-gradient text-slate-100 min-h-screen">
            <ScrollProgress />
            <ParticleBackground />
            <div className="relative z-10">
                <header className="sticky top-0 z-30 border-b border-slate-700/40 bg-black/40 backdrop-blur-xl">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
                        <div className="text-sm uppercase tracking-[0.36em] text-cyan-300/90">Balasubramani P</div>
                        <div className="flex items-center gap-4">
                            <ThemeToggle theme={theme} setTheme={setTheme} />
                            <nav className="hidden items-center gap-6 text-slate-200 md:flex">
                                <a href="#about" className="text-sm text-slate-300 transition hover:text-cyan-300">About</a>
                                <a href="#projects" className="text-sm text-slate-300 transition hover:text-cyan-300">Projects</a>
                                <a href="#experience" className="text-sm text-slate-300 transition hover:text-cyan-300">Experience</a>
                                <a href="#contact" className="text-sm text-slate-300 transition hover:text-cyan-300">Contact</a>
                            </nav>
                        </div>
                    </div>
                </header>

                <main className="mx-auto max-w-7xl px-6 py-8 sm:px-8">
                    <Hero onResumeClick={() => setResumeOpen(true)} />
                    <About />
                    <Stats />
                    <Skills />
                    <ExperienceTimeline />
                    <Projects />
                    <Education />
                    <Contact />
                </main>

                <footer className="mx-auto max-w-7xl px-6 pb-8 pt-10 text-center text-slate-500 sm:px-8">
                    <p>© 2026 Balasubramani P. Designed for recruiters and future AI leaders.</p>
                </footer>
            </div>
            <AnimatePresence>{resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}</AnimatePresence>
        </div>
    );
}

export default App;
