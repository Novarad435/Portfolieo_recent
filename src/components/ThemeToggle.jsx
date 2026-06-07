const ThemeToggle = ({ theme, setTheme }) => {
    return (
        <button
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-slate-950/30 text-cyan-300 transition hover:border-cyan-300/50 hover:bg-slate-900/70"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
        >
            <span className="text-base">{theme === 'dark' ? '☀️' : '🌙'}</span>
        </button>
    );
};

export default ThemeToggle;
