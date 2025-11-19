import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: 'Site Engineer & Project Coordinator',
            company: 'Kookaburra Group',
            period: 'Jul 2025 - Present',
            location: 'Nairobi County, Kenya',
            description: [
                'KeNHA PBC Gateway Mall - Athi River Interchange.',
                'Support daily construction activities and coordinate project timelines for a major highway interchange.',
                'Oversee site inspections, track progress against schedules, and manage contractor/consultant coordination.',
                'Ensure compliance with safety, quality, and environmental standards while monitoring resource allocation.',
                'Assist in preparing progress reports and verifying works to meet Kenya National Highways Authority specifications.'
            ]
        },
        {
            title: 'Civil Engineering Intern',
            company: 'Norken International Ltd',
            period: 'Jan 2024 - Apr 2024',
            location: 'Nairobi County, Kenya',
            description: [
                'Interned for Nairobi Satellite Town Water Supply Project [NST-WSP] Lot 4 - Mwihoko Water Supply Project.',
                'Roles included water supply system mapping, design, project inspection, and detailed reporting for stakeholder updates.'
            ]
        },
        {
            title: 'Civil Engineering Intern',
            company: 'Ekaterra Tea Kenya',
            period: 'Jan 2023 - Mar 2023',
            location: 'Kenya',
            description: [
                'Conducted site assessments and land surveys for infrastructure condition assessment.',
                'Contributed to design and planning phases, assisting in creating design plans and drafting blueprints.',
                'Collected and analyzed data, preparing detailed reports on project progress and challenges.'
            ]
        }
    ];

    return (
        <section id="experience" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                marginBottom: '3rem',
                                paddingLeft: '2rem',
                                borderLeft: '2px solid var(--accent)',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                left: '-11px',
                                top: '0',
                                width: '20px',
                                height: '20px',
                                backgroundColor: 'var(--bg-secondary)',
                                border: '2px solid var(--accent)',
                                borderRadius: '50%'
                            }} />

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{exp.title}</h3>
                            <h4 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>{exp.company}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>
                                {exp.period} | {exp.location}
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
