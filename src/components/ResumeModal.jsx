import { motion } from 'framer-motion';

const ResumeModal = ({ onClose }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4">
        <motion.div initial={{ y: 30, scale: 0.95 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.95 }} className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-cyan-300/15 bg-slate-950/95 shadow-soft">
            <div className="flex items-center justify-between border-b border-slate-800/70 px-5 py-4 bg-slate-900/90">
                <div>
                    <h3 className="text-xl font-semibold text-white">Resume Preview</h3>
                    <p className="text-sm text-slate-400">Download or review experience tailored for AI and healthcare recruiters.</p>
                </div>
                <button onClick={onClose} className="rounded-full bg-cyan-400 px-3 py-2 text-slate-950 font-semibold hover:bg-cyan-300">
                    Close
                </button>
            </div>
            <iframe title="Resume preview" src="/resume.pdf" className="h-[80vh] w-full bg-slate-900" />
        </motion.div>
    </motion.div>
);

export default ResumeModal;
