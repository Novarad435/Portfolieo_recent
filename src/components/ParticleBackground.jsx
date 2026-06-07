import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationId;
        const mouse = { x: width / 2, y: height / 2 };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const createParticles = () => {
            particles = Array.from({ length: 80 }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 1.8 + 1,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > height) particle.vy *= -1;

                const distance = Math.hypot(particle.x - mouse.x, particle.y - mouse.y);
                if (distance < 120) {
                    particle.x += (particle.x - mouse.x) * 0.001;
                    particle.y += (particle.y - mouse.y) * 0.001;
                }

                ctx.fillStyle = 'rgba(18, 212, 255, 0.82)';
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i += 1) {
                for (let j = i + 1; j < particles.length; j += 1) {
                    const a = particles[i];
                    const b = particles[j];
                    const distance = Math.hypot(a.x - b.x, a.y - b.y);
                    if (distance < 120) {
                        ctx.strokeStyle = `rgba(14, 242, 255, ${0.12 - distance * 0.0008})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            animationId = requestAnimationFrame(draw);
        };

        const move = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        resize();
        createParticles();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', move);
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', move);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen opacity-70"
        />
    );
};

export default ParticleBackground;
