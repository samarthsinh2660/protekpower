import React from 'react';
import ContactInfo from '../atoms/ContactInfo';

export default function SupportSection() {
    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.content}>
                    <div style={styles.textColumn}>
                        <h2 style={styles.heading}>Help & Support</h2>
                        <div style={styles.divider}></div>
                        <p style={styles.description}>
                            Our team is here to help you with any questions about our products and services.
                            Contact us today and experience our exceptional customer support.
                        </p>
                        <div style={styles.contactList}>
                            <ContactInfo
                                icon="📧"
                                title="Email"
                                value="swastik23@gmail.com"
                                link="mailto:swastik23@gmail.com"
                            />
                            <ContactInfo
                                icon="📞"
                                title="Phone"
                                value=" +919824035667, +91 9426067762"
                                link="tel:+919824035667"
                            />
                            <ContactInfo
                                icon="📍"
                                title="Address"
                                value="67, Capital Commercial Center, Nr, Sanyas ashram, Ashram Road, Ahmedabad - 9 (Guj.)"
                            />
                        </div>
                        <button style={styles.button}>
                            Contact Us
                        </button>
                    </div>
                    <div style={styles.mapColumn}>
                        <div style={styles.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717844018!2d72.43965358671871!3d23.02049777318322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709538273842!5m2!1sen!2sin"
                                style={styles.map}
                                loading="lazy"
                                title="Protek Power Location"
                                allowFullScreen=""
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    section: {
        padding: '60px 0',
        backgroundColor: '#fff',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
    },
    textColumn: {
        flex: '1',
    },
    mapColumn: {
        flex: '1',
    },
    heading: {
        fontSize: '2rem',
        margin: '0 0 10px 0',
        color: '#333',
    },
    divider: {
        width: '60px',
        height: '3px',
        backgroundColor: '#0066cc',
        marginBottom: '20px',
    },
    description: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#555',
        marginBottom: '30px',
    },
    contactList: {
        marginBottom: '30px',
    },
    mapContainer: {
        height: '100%',
        minHeight: '300px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    map: {
        border: 'none',
        width: '100%',
        height: '100%',
        minHeight: '300px',
    },
    button: {
        backgroundColor: '#0066cc',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        fontWeight: 'bold',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        fontSize: '1rem',
        ':hover': {
            backgroundColor: '#0052a3',
        }
    }
};