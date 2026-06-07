import { motion } from 'framer-motion';
import { stats } from '../data/portfolioData.js';

const StatCard = ({ label, value }) => (
    <div className="glass-panel rounded-[28px] border border-cyan-300/10 px-6 py-7 text-center shadow-soft min-w-[12rem] flex flex-col items-center justify-center">
        <p className="text-4xl font-semibold text-cyan-300 whitespace-nowrap">{value}</p>
        <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">{label}</p>
    </div>
);

const Stats = () => (
    <section className="mt-14 scroll-mt-24">
        <div className="flex items-start justify-between gap-6 rounded-[32px] border border-cyan-300/10 bg-slate-950/60 p-8 shadow-soft backdrop-blur-xl">
            <div className="max-w-sm">
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/75 whitespace-nowrap">Momentum</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Performance numbers recruiters notice.</h2>
            </div>
            <div className="hidden h-24 w-px bg-cyan-300/20 md:block" />
            <div className="w-full">
                <div className="flex gap-6 overflow-x-auto pb-2 md:pb-0 md:flex-wrap md:justify-end">
                    {stats.map((item) => (
                        <motion.div key={item.label} className="snap-start flex-shrink-0" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <StatCard {...item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Stats;
