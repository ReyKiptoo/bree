import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    return (
        <section id="education">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Education & Certifications
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            padding: '2rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <GraduationCap size={32} color="var(--accent)" />
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Education</h3>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>BSc. Civil Engineering</h4>
                            <p style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Jomo Kenyatta University of Agriculture and Technology (JKUAT)</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Sep 2019 - Apr 2024</p>
                            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                                Activities: Executive at KYGN (Kenyan Young Generation in Nuclear).
                            </p>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Kenya Certificate of Secondary Education</h4>
                            <p style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Moi Tea Girls High School</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Feb 2015 - Dec 2018</p>
                            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                                Activities: Hockey player, Red Cross member.
                            </p>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            padding: '2rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Award size={32} color="var(--accent)" />
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Certifications</h3>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Project Management Professional (PMP)</h4>
                            <p style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Project Management Institute (PMI)</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Issued Jan 2025</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>McKinsey Forward Program</h4>
                            <p style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>McKinsey & Company</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Issued Dec 2024</p>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Certified Public Accountant (CPA 1)</h4>
                            <p style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>kasneb</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Issued Dec 2022</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
