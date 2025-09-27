import React from 'react';

export default function MetricCard({ icon, number, label }) {
    return (
        <div style={styles.card}>
            <div style={styles.iconContainer}>{icon}</div>
            <div style={styles.number}>{number}</div>
            <div style={styles.label}>{label}</div>
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0, 102, 204, 0.1)',
        transition: 'transform 0.3s ease',
        ':hover': {
            transform: 'translateY(-5px)'
        }
    },
    iconContainer: {
        fontSize: '2.5rem',
        color: '#0066cc',
        marginBottom: '10px'
    },
    number: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '5px'
    },
    label: {
        fontSize: '1rem',
        color: '#666',
        textAlign: 'center'
    }
};