import React from 'react';
import MetricCard from '../atoms/MetricCard';

export default function WhyChooseUs() {
    const metrics = [
        {
            icon: '👥',
            number: '5,000+',
            label: 'Satisfied Customers'
        },
        {
            icon: '📍',
            number: '6+',
            label: 'States covered'
        },
        {
            icon: '📦',
            number: '150+',
            label: 'Product Variations'
        },
        {
            icon: '🌍',
            number: '40+',
            label: 'Years of Experience'
        }
    ];

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Why Choose Protek Power</h2>
                <div style={styles.divider}></div>

                <div style={styles.content}>
                    <div style={styles.textContent}>
                        <p style={styles.paragraph}>
                            At Protek Power, we are pioneers in advanced power conditioning solutions, delivering reliable and innovative power products since 1980. Our product range includes Servo Voltage Stabilizers, Digital Voltage Stabilizers, Constant Voltage Transformers (CVT), Inverters, UPS, and Battery Chargers.
                        </p>
                        <p style={styles.paragraph}>
                            We proudly serve music events, DJ productions, hospitals, and petrol pumps across Gujarat and neighboring states. As trusted partners of Indian Oil and Hindustan Petroleum, we ensure clean power solutions for critical applications with unmatched reliability and performance.
                        </p>
                        <div style={styles.clientLogos}>
                            <div style={styles.logoTitle}>Trusted by:</div>
                            <div style={styles.logos}>
                                <img src="/assets/images/indianoil.png" alt="Indian Oil" style={styles.logo} />
                                <img src="/assets/images/hp.png" alt="Hindustan Petroleum" style={styles.logo} />
                            </div>
                        </div>
                    </div>

                    <div style={styles.metricsContainer}>
                        {metrics.map((metric, index) => (
                            <MetricCard
                                key={index}
                                icon={metric.icon}
                                number={metric.number}
                                label={metric.label}
                            />
                        ))}
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
    heading: {
        textAlign: 'center',
        fontSize: '2rem',
        margin: '0 0 10px 0',
        color: '#333',
    },
    divider: {
        width: '60px',
        height: '3px',
        margin: '0 auto 40px',
        backgroundColor: '#0066cc',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
    },
    textContent: {
        flex: '1',
    },
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#444',
        marginBottom: '20px',
    },
    metricsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
    },
    clientLogos: {
        marginTop: '30px',
    },
    logoTitle: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#333',
    },
    logos: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
    },
    logo: {
        height: '40px',
        objectFit: 'contain',
    },
};