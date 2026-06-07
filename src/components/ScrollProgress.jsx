import { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const value = height > 0 ? (window.scrollY / height) * 100 : 0;
            setProgress(value);
        };
        window.addEventListener('scroll', update);
        update();
        return () => window.removeEventListener('scroll', update);
    }, []);

    return (
        <div className="pointer-events-none fixed left-0 top-0 z-40 h-1 w-full bg-slate-900/40">
            <div className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 transition-all" style={{ width: `${progress}%` }} />
        </div>
    );
};

export default ScrollProgress;
