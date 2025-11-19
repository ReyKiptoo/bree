import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', maxWidth: '600px' }}
                    >
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Let's Connect</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                            I'm currently open to new opportunities and collaborations in Civil Engineering and Infrastructure Development.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left', minWidth: '280px' }}>
                                <div style={{ padding: '15px', backgroundColor: 'rgba(251, 191, 36, 0.1)', borderRadius: '50%', color: 'var(--accent)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>Email</h4>
                                    <a href="mailto:brendachepkoech23@gmail.com" style={{ color: 'var(--text-secondary)' }}>brendachepkoech23@gmail.com</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left', minWidth: '280px' }}>
                                <div style={{ padding: '15px', backgroundColor: 'rgba(251, 191, 36, 0.1)', borderRadius: '50%', color: 'var(--accent)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>Phone</h4>
                                    <a href="tel:+254745378190" style={{ color: 'var(--text-secondary)' }}>+254 745 378 190</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left', minWidth: '280px' }}>
                                <div style={{ padding: '15px', backgroundColor: 'rgba(251, 191, 36, 0.1)', borderRadius: '50%', color: 'var(--accent)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>Location</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Nairobi, Kenya</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left', minWidth: '280px' }}>
                                <div style={{ padding: '15px', backgroundColor: 'rgba(251, 191, 36, 0.1)', borderRadius: '50%', color: 'var(--accent)' }}>
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>LinkedIn</h4>
                                    <a
                                        href="https://www.linkedin.com/in/brenda-chepkoech-b00822254/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                                    >
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
