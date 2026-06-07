export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            boxShadow: {
                glow: '0 0 45px rgba(14, 212, 255, 0.32)',
                soft: '0 20px 80px rgba(0, 0, 0, 0.35)',
            },
            colors: {
                cosmic: '#020814',
                navy: '#08172f',
                teal: '#00f2ff',
                cyan: '#4ce5ff',
                glass: 'rgba(14, 31, 72, 0.48)',
            },
            backgroundImage: {
                'hero-gradient': 'radial-gradient(circle at top left, rgba(0,255,235,0.12), transparent 35%), radial-gradient(circle at top right, rgba(0,180,255,0.18), transparent 25%), linear-gradient(180deg, rgba(2,8,20,0.96), rgba(2,8,20,0.9))',
            },
            keyframes: {
                float: {
                    '0%,100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-14px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '200% 0%' },
                },
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                shimmer: 'shimmer 12s linear infinite',
            },
        },
    },
    plugins: [],
};
