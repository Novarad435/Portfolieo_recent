import { motion } from 'framer-motion';
import { educationItems, certifications, achievements } from '../data/portfolioData.js';

const Education = () => (
    <section id="education" className="mt-14 scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div className="glass-panel rounded-[32px] border border-cyan-300/10 p-8 shadow-soft" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/75">Education</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Academic foundation with premium AI experience.</h2>
                {educationItems.map((item) => (
                    <div key={item.degree} className="mt-8 rounded-[28px] border border-slate-800/70 bg-slate-950/80 p-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">{item.degree}</p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">{item.institution}</h3>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-3xl bg-slate-900/75 p-4 text-sm text-slate-200">CGPA: {item.cgpa}</div>
                            <div className="rounded-3xl bg-slate-900/75 p-4 text-sm text-slate-200">Minor: {item.minor}</div>
                            <div className="rounded-3xl bg-slate-900/75 p-4 text-sm text-slate-200">Expected Graduation: {item.duration}</div>
                        </div>
                    </div>
                ))}
            </motion.div>

            <motion.div className="space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12, duration: 0.9 }}>
                <div className="glass-panel rounded-[32px] border border-cyan-300/10 p-8 shadow-soft">
                    <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/75">Certifications</p>
                    <div className="mt-6 space-y-3">
                        {certifications.map((cert) => (
                            <div key={cert} className="rounded-3xl border border-cyan-300/10 bg-slate-950/75 px-4 py-3 text-sm text-slate-200">
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel rounded-[32px] border border-cyan-300/10 p-8 shadow-soft">
                    <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/75">Achievements</p>
                    <div className="mt-6 grid gap-3">
                        {achievements.map((item) => (
                            <div key={item} className="rounded-[28px] border border-cyan-300/10 bg-slate-950/80 px-5 py-4 shadow-soft">
                                <p className="text-sm font-medium text-cyan-200">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

export default Education;
