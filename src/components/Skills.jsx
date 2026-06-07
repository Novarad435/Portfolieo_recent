import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData.js';

const Skills = () => (
    <section id="skills" className="mt-14 scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-3">
            <motion.div className="glass-panel rounded-[32px] border border-cyan-300/10 p-8 shadow-soft" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/75">Skills</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Futuristic AI & software skillset.</h2>
                <p className="mt-4 text-slate-300">Crafting high-impact machine learning experiences, robust backend services, and premium startup-facing UI flows.</p>
            </motion.div>
            {skillCategories.map((category) => (
                <motion.div key={category.title} className="glass-panel rounded-[32px] border border-cyan-300/10 p-6 shadow-soft" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.12 }}>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <div className="mt-5 grid gap-3">
                        {category.skills.map((skill) => (
                            <span key={skill} className="inline-flex rounded-3xl border border-cyan-300/15 bg-slate-950/70 px-4 py-2 text-sm text-slate-200">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

export default Skills;
