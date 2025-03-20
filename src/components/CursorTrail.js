import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/CursorTrail.css";

const CursorTrail = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newParticle = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY
            };

            setParticles((prev) => [...prev, newParticle]);

            // Auto-remove particles to avoid overflow
            setTimeout(() => {
                setParticles((prev) => prev.filter(p => p.id !== newParticle.id));
            }, 1000); // Particle fade duration
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="cursor-trail">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="particle"
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 2 }}
                    transition={{ duration: 1 }}
                    style={{
                        top: particle.y,
                        left: particle.x
                    }}
                />
            ))}
        </div>
    );
};

export default CursorTrail;
