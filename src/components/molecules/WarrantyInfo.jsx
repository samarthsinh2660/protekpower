import React from 'react';

export default function WarrantyInfo({ warranty }) {
    // Handle different warranty formats
    let period = '1 Year';
    let type = 'Manufacturer';
    let coverage = 'Comprehensive coverage including parts and labor';

    if (typeof warranty === 'string') {
        // Simple string format like "1 Year" or "2 Years"
        period = warranty;
    } else if (warranty && typeof warranty === 'object') {
        // Object format with period, type, coverage
        period = warranty.period || period;
        type = warranty.type || type;
        coverage = warranty.coverage || coverage;
    }

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Warranty Information</h3>
            <div style={styles.warrantyBox}>
                <div style={styles.warrantyHeader}>
                    <div style={styles.warrantyIcon}>⚡</div>
                    <div>
                        <h4 style={styles.warrantyTitle}>{period} {type} Warranty</h4>
                        <p style={styles.coverageDesc}>{coverage}</p>
                    </div>
                </div>

                <ul style={styles.warrantyCoverage}>
                    <li>Technical support via phone, email and whatsapp</li>
                    <li>Defected parts will be replaced</li>
                </ul>

                <div style={styles.warrantyActions}>
                    <a href="/warranty-policy" style={styles.warrantyLink}>
                        View Full Warranty Policy
                    </a>
                    <a href="/register-product" style={styles.registerButton}>
                        Register Your Product
                    </a>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        marginBottom: '40px',
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '20px',
        color: '#333',
        position: 'relative',
        paddingBottom: '10px',
    },
    warrantyBox: {
        border: '1px solid #e1e4e8',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
    },
    warrantyHeader: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
    },
    warrantyIcon: {
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 102, 204, 0.1)',
        borderRadius: '50%',
        marginRight: '15px',
        fontSize: '1.2rem',
        color: '#0066cc',
    },
    warrantyTitle: {
        margin: '0 0 5px 0',
        fontSize: '1.1rem',
        color: '#333',
    },
    coverageDesc: {
        margin: '0',
        fontSize: '0.9rem',
        color: '#666',
    },
    warrantyCoverage: {
        margin: '15px 0',
        paddingLeft: '20px',
        color: '#555',
        fontSize: '0.95rem',
    },
    warrantyActions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
        flexWrap: 'wrap',
        gap: '10px',
    },
    warrantyLink: {
        color: '#0066cc',
        textDecoration: 'none',
        fontSize: '0.9rem',
        ':hover': {
            textDecoration: 'underline',
        }
    },
    registerButton: {
        backgroundColor: '#0066cc',
        color: 'white',
        textDecoration: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '0.9rem',
        transition: 'background-color 0.2s ease',
        ':hover': {
            backgroundColor: '#0052a3',
        }
    }
};