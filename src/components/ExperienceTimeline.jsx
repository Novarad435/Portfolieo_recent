import { motion } from 'framer-motion';
import { experienceItems } from '../data/portfolioData.js';

const ExperienceCard = ({ title, company, duration, highlights }) => (
    <div className="glass-panel rounded-[28px] border border-cyan-300/10 p-6 shadow-soft">
        <div className="flex items-center justify-between gap-4">
            <div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-cyan-300">{company}</p>
            </div>
            <span className="rounded-full border border-cyan-300/20 bg-slate-900/85 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">{duration}</span>
        </div>
        <ul className="mt-5 space-y-3 text-slate-300">
            {highlights.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-300" />
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

const ExperienceTimeline = () => (
    <section id="experience" className="mt-14 scroll-mt-24">
        <div className="glass-panel rounded-[32px] border border-cyan-300/10 p-8 shadow-soft">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/75">Internship Experience</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">Interactive timeline for recruiter-ready impact.</h2>
                </div>
                <div className="rounded-3xl bg-slate-950/80 px-5 py-4 text-sm text-slate-200 shadow-soft">
                    <p className="font-semibold text-cyan-300">Mphasis Limited</p>
                    <p>Collaborative healthcare AI team experience.</p>
                </div>
            </div>
            <div className="mt-10 space-y-6">
                {experienceItems.map((item) => (
                    <motion.div key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
                        <ExperienceCard {...item} />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default ExperienceTimeline;
