import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GlobeScene = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
        camera.position.set(0, 0, 10);

        const ambient = new THREE.AmbientLight(0x84f7ff, 0.35);
        const point = new THREE.PointLight(0x64d7ff, 1.4);
        point.position.set(5, 5, 10);
        scene.add(ambient, point);

        const geometry = new THREE.SphereGeometry(3.05, 64, 64);
        const material = new THREE.MeshStandardMaterial({
            color: 0x0a1930,
            metalness: 0.4,
            roughness: 0.15,
            emissive: 0x08283f,
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.98,
        });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        const wireframe = new THREE.LineSegments(
            new THREE.WireframeGeometry(geometry),
            new THREE.LineBasicMaterial({ color: 0x00ffcc, opacity: 0.22, transparent: true })
        );
        scene.add(wireframe);

        const resize = () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        const animate = () => {
            globe.rotation.y += 0.0035;
            wireframe.rotation.y += 0.0035;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        resize();
        animate();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
            renderer.dispose();
        };
    }, []);

    return (
        <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
            <canvas ref={canvasRef} className="h-full w-full" />
        </div>
    );
};

export default GlobeScene;
