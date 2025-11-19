import React from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, Users, Calendar, DollarSign } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Pan-African Tech Summit 2024',
            category: 'Event Management',
            role: 'Lead Organizer',
            description: 'Organized a 3-day international conference for 500+ delegates, focusing on innovation and technology in Africa.',
            highlights: [
                'Managed a $200k budget with 15% cost savings.',
                'Coordinated 50+ vendors and international speakers.',
                'Oversaw logistics, marketing, and on-site operations.'
            ],
            icon: <Users size={24} />
        },
        {
            title: 'Enterprise Digital Transformation',
            category: 'IT & Operations',
            role: 'Project Manager',
            description: 'Led the migration to a cloud-based ERP system for a mid-sized logistics firm to improve operational efficiency.',
            highlights: [
                'Reduced data processing time by 40%.',
                'Managed stakeholder communication and change management.',
                'Mitigated risks associated with data migration and downtime.'
            ],
            icon: <FolderKanban size={24} />
        },
        {
            title: 'Community Health Outreach Program',
            category: 'Social Impact',
            role: 'Program Coordinator',
            description: 'Coordinated a nationwide health awareness campaign reaching 10,000+ individuals in rural areas.',
            highlights: [
                'Secured and managed grant funding.',
                'Recruited and trained 100+ volunteers.',
                'Conducted impact assessment and reporting for donors.'
            ],
            icon: <Users size={24} />
        },

    ];

    return (
        <section id="projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Key Projects
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                padding: '2rem',
                                borderRadius: '10px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                <div style={{ padding: '10px', backgroundColor: 'rgba(251, 191, 36, 0.1)', borderRadius: '50%', color: 'var(--accent)' }}>
                                    {project.icon}
                                </div>
                                <span style={{
                                    fontSize: '0.8rem',
                                    padding: '0.3rem 0.8rem',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    borderRadius: '20px',
                                    color: 'var(--text-secondary)'
                                }}>
                                    {project.category}
                                </span>
                            </div>

                            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '500' }}>{project.role}</p>

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                                {project.description}
                            </p>

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Key Highlights:</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {project.highlights.map((highlight, i) => (
                                        <li key={i} style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.85rem',
                                            marginBottom: '0.3rem',
                                            display: 'flex',
                                            alignItems: 'start',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{ color: 'var(--accent)', lineHeight: '1.4' }}>▹</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
