import { motion } from 'framer-motion';

const aboutHighlights = [
    'Final-year Electronics and Communication Engineering student with hands-on experience in Machine Learning, Natural Language Processing, Speech AI, and Full-Stack AI Deployment.',
    'Passionate about building intelligent systems from model training to production deployment.',
];

const specializations = ['Machine Learning', 'NLP', 'Speech Recognition', 'AI Healthcare Systems', 'FastAPI Development', 'Full Stack Deployment'];

const About = () => (
    <section id="about" className="mt-14 scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.8fr]">
            <motion.div className="glass-panel rounded-[32px] border border-cyan-300/10 p-8 shadow-soft" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/75">About Me</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Futuristic AI systems built for healthcare.</h2>
                <div className="mt-6 space-y-4 text-slate-300">
                    {aboutHighlights.map((line) => (
                        <p key={line}>{line}</p>
                    ))}
                </div>
            </motion.div>

            <motion.div className="glass-panel rounded-[32px] border border-cyan-300/10 p-8 shadow-soft" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.9 }}>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/75">Specialized in</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {specializations.map((item) => (
                        <div key={item} className="rounded-3xl border border-cyan-300/10 bg-slate-950/70 px-4 py-4 text-sm text-slate-100 shadow-sm shadow-cyan-400/5">
                            {item}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default About;
