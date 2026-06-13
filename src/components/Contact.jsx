import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
    const formRef = useRef(null);
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!formRef.current) return;
        if (!serviceId || !templateId || !publicKey) {
            setStatus('error');
            setErrorMessage('Email delivery is unavailable because EmailJS is not configured.');
            return;
        }

        setStatus('sending');
        setErrorMessage('');
        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            setStatus('sent');
            formRef.current.reset();
        } catch (error) {
            setStatus('error');
            setErrorMessage('Email service failed. Check your EmailJS settings and network connection.');
            console.error(error);
        }
    };

    return (
        <section id="contact" className="mt-14 scroll-mt-24">
            <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
                <motion.div className="glass-panel rounded-[32px] border border-cyan-300/10 p-8 shadow-soft" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                    <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/75">Contact</p>
                    <h2 className="mt-4 text-3xl font-semibold text-white">Start a conversation with a premium AI engineer.</h2>
                    <p className="mt-4 max-w-xl text-slate-300">Reach out for healthcare AI collaboration, NLP systems, or full-stack deployments. Fast response for recruiter inquiries.</p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="flex min-h-[170px] flex-col justify-between rounded-3xl border border-cyan-300/10 bg-slate-950/80 p-6">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/75">Email</p>
                                <p className="mt-3 text-lg font-semibold text-white">balatiger40@gmail.com</p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm text-slate-400">For recruiter inquiries, collaboration, and healthcare AI opportunities.</p>
                                <a href="mailto:balatiger40@gmail.com" className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 border border-white/20 transition duration-200 ease-out hover:bg-cyan-400 hover:text-slate-950">Email Now</a>
                            </div>
                        </div>
                        <div className="flex min-h-[170px] flex-col justify-between rounded-3xl border border-cyan-300/10 bg-slate-950/80 p-6">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/75">Phone</p>
                                <p className="mt-3 text-lg font-semibold text-white">+91 81108 82532</p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm text-slate-400">Available for technical interviews, product calls, and AI strategy discussions.</p>
                                <a href="tel:+918110882532" className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 border border-white/20 transition duration-200 ease-out hover:bg-cyan-400 hover:text-slate-950">Call Now</a>
                            </div>
                        </div>
                        <div className="flex min-h-[170px] flex-col justify-between rounded-3xl border border-cyan-300/10 bg-slate-950/80 p-6">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/75">Location</p>
                                <p className="mt-3 text-lg font-semibold text-white">9°05'11.3"N 77°21'08.2"E</p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm text-slate-400">Kadayanallur, Tenkasi</p>
                                <a href="https://www.google.com/maps?q=9.086472,77.352278" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 border border-white/20 transition duration-200 ease-out hover:bg-cyan-400 hover:text-slate-950">View Location</a>
                            </div>
                        </div>
                        <div className="flex min-h-[170px] flex-col justify-between rounded-3xl border border-cyan-300/10 bg-slate-950/80 p-6">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/75">LinkedIn</p>
                                <a href="https://www.linkedin.com/in/balasubramani-p-2640782a2/" target="_blank" rel="noreferrer" className="mt-3 block text-lg font-semibold text-cyan-300 hover:text-cyan-200">linkedin.com/in/balasubramani-p-2640782a2</a>
                            </div>
                            <div className="space-y-3">
                                <p className="text-sm text-slate-400">Connect with my professional AI portfolio and project highlights.</p>
                                <a href="https://www.linkedin.com/in/balasubramani-p-2640782a2/" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 border border-white/20 transition duration-200 ease-out hover:bg-cyan-400 hover:text-slate-950">View Profile</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="glass-panel rounded-[32px] border border-cyan-300/10 p-8 shadow-soft" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12, duration: 0.9 }}>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        <label className="block text-sm text-slate-300">
                            Name
                            <input name="user_name" required className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300" />
                        </label>
                        <label className="block text-sm text-slate-300">
                            Email
                            <input type="email" name="user_email" required className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300" />
                        </label>
                        <label className="block text-sm text-slate-300">
                            Message
                            <textarea name="message" rows="6" required className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300" />
                        </label>
                        <p className="text-sm text-slate-500">Email delivery requires EmailJS configuration. The contact form will work once the site owner adds valid EmailJS settings.</p>
                        <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 border border-white/20 transition duration-200 ease-out hover:bg-cyan-400 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300">
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'sent' && <p className="text-sm text-emerald-300">Message sent successfully. Thank you!</p>}
                        {status === 'error' && (
                            <p className="text-sm text-rose-300">{errorMessage || 'Unable to send message. Please try again.'}</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
