import React from 'react';
import Whatsapp from "../../components/molecules/Whatsapp";

export default function About() {
    return (
        <>
            <div style={styles.heroSection}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>About Us</h1>
                    <p style={styles.heroSubtitle}>
                        Pioneering Power Management Solutions Since 1980
                    </p>
                </div>
            </div>

            <main>
                <section style={styles.introSection}>
                    <div style={styles.container}>
                        <div style={styles.twoColumns}>
                            <div style={styles.imageColumn}>
                                <img
                                    src="/assets/images/company-building.jpg"
                                    alt="Protek Power Headquarters"
                                    style={styles.introImage}
                                />
                            </div>
                            <div style={styles.textColumn}>
                                <h2 style={styles.sectionTitle}>Our Story</h2>
                                <p style={styles.text}>
                                    Founded in 1980, Protek Power has grown from a small manufacturing unit to one of India's most trusted power management solution providers. With over four decades of experience, we have established ourselves as industry leaders in developing innovative and reliable power products.
                                </p>
                                <p style={styles.text}>
                                    Our journey began with a simple goal: to provide dependable power solutions to businesses and homes across India. Today, we serve thousands of customers nationwide with our comprehensive range of products including inverters, batteries, UPS systems, and voltage stabilizers.
                                </p>
                                <p style={styles.text}>
                                    At Protek Power, we combine technical expertise with a deep understanding of our customers' needs to deliver solutions that stand the test of time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={styles.missionVisionSection}>
                    <div style={styles.container}>
                        <div style={styles.missionVisionContainer}>
                            <div style={styles.missionBox}>
                                <div style={styles.iconContainer}>
                                    <span style={styles.icon}>🚀</span>
                                </div>
                                <h2 style={styles.boxTitle}>Our Mission</h2>
                                <p style={styles.boxText}>
                                    Our teams of researchers have made path breaking innovations in the field of industrial automation and thus have provided us with competitive advantage over our rivals.
                                </p>
                            </div>

                            <div style={styles.visionBox}>
                                <div style={styles.iconContainer}>
                                    <span style={styles.icon}>👁️</span>
                                </div>
                                <h2 style={styles.boxTitle}>Our Vision</h2>
                                <p style={styles.boxText}>
                                    Our products are approved by D.G.Q.A. which certifies quality of products which are to be used in defense installations and by T A C (Tariff Advisory Committee) which is a leading quality assurance agency. Apart from that our fire alarms are made as per IS 2189 standards which further enhances our credibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={styles.valuesSection}>
                    <div style={styles.container}>
                        <h2 style={styles.centeredSectionTitle}>Our Core Values</h2>
                        <div style={styles.valuesDivider}></div>
                        <div style={styles.valuesGrid}>
                            <div style={styles.valueCard}>
                                <div style={styles.valueIconContainer}>
                                    <span style={styles.valueIcon}>⚡</span>
                                </div>
                                <h3 style={styles.valueTitle}>Innovation</h3>
                                <p style={styles.valueText}>
                                    Continuously pushing boundaries to develop cutting-edge power solutions.
                                </p>
                            </div>

                            <div style={styles.valueCard}>
                                <div style={styles.valueIconContainer}>
                                    <span style={styles.valueIcon}>🛡️</span>
                                </div>
                                <h3 style={styles.valueTitle}>Quality</h3>
                                <p style={styles.valueText}>
                                    Unwavering commitment to excellence in every product we manufacture.
                                </p>
                            </div>

                            <div style={styles.valueCard}>
                                <div style={styles.valueIconContainer}>
                                    <span style={styles.valueIcon}>🤝</span>
                                </div>
                                <h3 style={styles.valueTitle}>Reliability</h3>
                                <p style={styles.valueText}>
                                    Building trust through consistent performance and dependable service.
                                </p>
                            </div>

                            <div style={styles.valueCard}>
                                <div style={styles.valueIconContainer}>
                                    <span style={styles.valueIcon}>♻️</span>
                                </div>
                                <h3 style={styles.valueTitle}>Sustainability</h3>
                                <p style={styles.valueText}>
                                    Creating eco-friendly power solutions for a greener tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={styles.achievementsSection}>
                    <div style={styles.container}>
                        <h2 style={styles.centeredSectionTitle}>Our Achievements</h2>
                        <div style={styles.achievementsDivider}></div>

                        <div style={styles.statsContainer}>
                            <div style={styles.statBox}>
                                <div style={styles.statNumber}>40+</div>
                                <div style={styles.statLabel}>Years of Excellence</div>
                            </div>

                            <div style={styles.statBox}>
                                <div style={styles.statNumber}>10,000+</div>
                                <div style={styles.statLabel}>Satisfied Customers</div>
                            </div>

                            <div style={styles.statBox}>
                                <div style={styles.statNumber}>200+</div>
                                <div style={styles.statLabel}>Service Centers</div>
                            </div>

                            <div style={styles.statBox}>
                                <div style={styles.statNumber}>50+</div>
                                <div style={styles.statLabel}>Product Models</div>
                            </div>
                        </div>

                        <div style={styles.certificationsContainer}>
                            <h3 style={styles.certificationsTitle}>Our Certifications</h3>
                            <div style={styles.certificationsList}>
                                <div style={styles.certificationItem}>
                                    <span style={styles.certIcon}>✓</span> D.G.Q.A. Approved for Defense Installations
                                </div>
                                <div style={styles.certificationItem}>
                                    <span style={styles.certIcon}>✓</span> T.A.C. Certified (Tariff Advisory Committee)
                                </div>
                                <div style={styles.certificationItem}>
                                    <span style={styles.certIcon}>✓</span> IS 2189 Standards Compliance
                                </div>
                                <div style={styles.certificationItem}>
                                    <span style={styles.certIcon}>✓</span> ISO 9001:2015 Certified
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={styles.teamSection}>
                    <div style={styles.container}>
                        <h2 style={styles.centeredSectionTitle}>Leadership Team</h2>
                        <div style={styles.teamDivider}></div>
                        <p style={styles.teamIntro}>
                            Our experienced leadership team brings decades of industry expertise and a passion for innovation
                            to guide Protek Power into the future.
                        </p>

                        <div style={styles.teamGrid}>
                            <div style={styles.teamMember}>
                                <div style={styles.memberImageContainer}>
                                    <div style={styles.memberImage}></div>
                                </div>
                                <h3 style={styles.memberName}>Mr. Umesh M. Agrawal</h3>
                                <p style={styles.memberTitle}>Founder & CEO</p>
                            </div>

                            <div style={styles.teamMember}>
                                <div style={styles.memberImageContainer}>
                                    <div style={styles.memberImage}></div>
                                </div>
                                <h3 style={styles.memberName}>Mr. Yogesh M. Agrawal</h3>
                                <p style={styles.memberTitle}>Chief Technology Officer</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={styles.ctaSection}>
                    <div style={styles.container}>
                        <div style={styles.ctaContent}>
                            <h2 style={styles.ctaHeading}>Ready to Experience Superior Power Solutions?</h2>
                            <p style={styles.ctaText}>
                                Discover how our innovative products can transform your power management experience.
                            </p>
                            <a href="/contact" style={styles.ctaButton}>Contact Us Today</a>
                        </div>
                    </div>
                </section>
            </main>
            <Whatsapp
                phone="919426067762"
                defaultMessage="Hi Protek, I'm interested in your stabilizers."
                enableChatBox={true}
                position="bottom-right"
            />
        </>
    );
}

const styles = {
    heroSection: {
        backgroundColor: '#0066cc',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
    },
    heroContent: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    heroTitle: {
        fontSize: '3rem',
        marginBottom: '1rem',
        fontWeight: 'bold',
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        opacity: '0.9',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    introSection: {
        padding: '80px 0',
        backgroundColor: '#fff',
    },
    twoColumns: {
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
    },
    imageColumn: {
        flex: '1',
    },
    textColumn: {
        flex: '1',
    },
    introImage: {
        width: '100%',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    },
    sectionTitle: {
        fontSize: '2rem',
        marginBottom: '1.5rem',
        color: '#333',
        position: 'relative',
        paddingBottom: '15px',
    },
    text: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#555',
        marginBottom: '1rem',
    },
    missionVisionSection: {
        padding: '80px 0',
        backgroundColor: '#f8f9fa',
    },
    missionVisionContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
    },
    missionBox: {
        flex: '1',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease',
    },
    visionBox: {
        flex: '1',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease',
    },
    iconContainer: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 102, 204, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    icon: {
        fontSize: '2rem',
    },
    boxTitle: {
        fontSize: '1.5rem',
        marginBottom: '15px',
        color: '#333',
    },
    boxText: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#555',
    },
    valuesSection: {
        padding: '80px 0',
        backgroundColor: '#fff',
    },
    centeredSectionTitle: {
        fontSize: '2rem',
        textAlign: 'center',
        color: '#333',
    },
    valuesDivider: {
        width: '80px',
        height: '3px',
        backgroundColor: '#0066cc',
        margin: '15px auto 40px',
    },
    valuesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
    },
    valueCard: {
        padding: '30px 20px',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
    },
    valueIconContainer: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 15px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    },
    valueIcon: {
        fontSize: '1.8rem',
    },
    valueTitle: {
        fontSize: '1.2rem',
        color: '#333',
        marginBottom: '10px',
    },
    valueText: {
        fontSize: '0.95rem',
        color: '#666',
        lineHeight: '1.5',
    },
    achievementsSection: {
        padding: '80px 0',
        backgroundColor: '#f8f9fa',
    },
    achievementsDivider: {
        width: '80px',
        height: '3px',
        backgroundColor: '#0066cc',
        margin: '15px auto 50px',
    },
    statsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '60px',
    },
    statBox: {
        backgroundColor: '#fff',
        padding: '30px 15px',
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    },
    statNumber: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#0066cc',
        marginBottom: '5px',
    },
    statLabel: {
        fontSize: '1rem',
        color: '#555',
    },
    certificationsContainer: {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
    },
    certificationsTitle: {
        fontSize: '1.5rem',
        marginBottom: '20px',
        color: '#333',
        textAlign: 'center',
    },
    certificationsList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '15px',
    },
    certificationItem: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
        color: '#555',
    },
    certIcon: {
        color: '#0066cc',
        marginRight: '10px',
        fontWeight: 'bold',
    },
    teamSection: {
        padding: '80px 0',
        backgroundColor: '#fff',
    },
    teamDivider: {
        width: '80px',
        height: '3px',
        backgroundColor: '#0066cc',
        margin: '15px auto 20px',
    },
    teamIntro: {
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto 50px',
        fontSize: '1.1rem',
        color: '#555',
        lineHeight: '1.6',
    },
    teamGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
    },
    teamMember: {
        textAlign: 'center',
    },
    memberImageContainer: {
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        overflow: 'hidden',
        margin: '0 auto 20px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
    },
    memberImage: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ddd',
    },
    memberName: {
        fontSize: '1.3rem',
        color: '#333',
        marginBottom: '5px',
    },
    memberTitle: {
        fontSize: '1rem',
        color: '#666',
    },
    ctaSection: {
        padding: '60px 0',
        backgroundColor: '#0066cc',
    },
    ctaContent: {
        textAlign: 'center',
        color: 'white',
    },
    ctaHeading: {
        fontSize: '2rem',
        marginBottom: '15px',
    },
    ctaText: {
        fontSize: '1.1rem',
        marginBottom: '30px',
        opacity: '0.9',
        maxWidth: '700px',
        margin: '0 auto 30px',
    },
    ctaButton: {
        display: 'inline-block',
        backgroundColor: '#fff',
        color: '#0066cc',
        padding: '14px 32px',
        borderRadius: '30px',
        fontSize: '1.1rem',
        fontWeight: '500',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
    },
};
