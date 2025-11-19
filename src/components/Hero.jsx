import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-container">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 style={{ color: 'var(--accent)', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: '500' }}>
                        Hi, my name is
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1rem',
                        color: 'var(--text-primary)'
                    }}>
                        Brenda Chepkoech.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                        fontWeight: '700',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem'
                    }}>
                        I build sustainable infrastructure & manage complex projects.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ maxWidth: '600px', marginBottom: '2.5rem', marginLeft: 'auto' }}
                >
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                        Civil Engineer | Project Manager | KYGN Executive.
                        Dedicated to tackling the challenges of infrastructure development through innovative solutions and delivering successful projects on time and within budget.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a href="#experience" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        Check out my work <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="hero-image-container"
            >
                <div className="hero-image-wrapper">
                    <img
                        src="/profile.jpg"
                        alt="Brenda Chepkoech"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
