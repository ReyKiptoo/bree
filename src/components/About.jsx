import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            I'm a passionate <strong style={{ color: 'var(--accent)' }}>Civil Engineer and Project Manager</strong>, dedicated to the world of infrastructure development and sustainable design. With a strong foundation in engineering principles and management strategies, I merge technical expertise with leadership to drive project success.
                        </p>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            My mission is to tackle the challenges of infrastructure development through innovative solutions while ensuring projects are delivered efficiently and effectively.
                        </p>
                        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            I actively engage in structural analysis, materials science, and geotechnical engineering, alongside project planning, risk management, and stakeholder coordination.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            border: '2px solid var(--accent)',
                            borderRadius: '10px',
                            padding: '2rem',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Skills & Expertise</h3>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {['Project Management', 'Civil Engineering', 'Risk Management', 'Budgeting & Scheduling', 'Site Inspections', 'AutoCAD', 'Stakeholder Mgmt', 'Team Leadership'].map((skill) => (
                                    <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ color: 'var(--accent)' }}>▹</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
