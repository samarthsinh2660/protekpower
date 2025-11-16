import React from 'react';
import Whatsapp from "../../components/molecules/Whatsapp";

export default function About() {
    return (
        <>
            <div className="about-hero-section">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">About Us</h1>
                    <p className="about-hero-subtitle">
                        Pioneering Power Management Solutions Since 1980
                    </p>
                </div>
            </div>

            <main>
                <section className="about-intro-section">
                    <div className="about-container">
                        <div className="about-two-columns">
                            <div className="about-image-column">
                                <img
                                    src="/assets/images/company-building.jpg"
                                    alt="Protek Power Headquarters"
                                    className="about-intro-image"
                                />
                            </div>
                            <div className="about-text-column">
                                <h2 className="about-section-title">Our Story</h2>
                                <p className="about-text">
                                    Founded in 1980, Protek Power has grown from a small manufacturing unit to one of India's most trusted power management solution providers. With over four decades of experience, we have established ourselves as industry leaders in developing innovative and reliable power products.
                                </p>
                                <p className="about-text">
                                    Our journey began with a simple goal: to provide dependable power solutions to businesses and homes across India. Today, we serve thousands of customers nationwide with our comprehensive range of products including inverters, batteries, UPS systems, and voltage stabilizers.
                                </p>
                                <p className="about-text">
                                    At Protek Power, we combine technical expertise with a deep understanding of our customers' needs to deliver solutions that stand the test of time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-mission-vision-section">
                    <div className="about-container">
                        <div className="about-mission-vision-container">
                            <div className="about-mission-box">
                                <div className="about-icon-container">
                                    <span className="about-icon">🚀</span>
                                </div>
                                <h2 className="about-box-title">Our Mission</h2>
                                  <div className="about-box-text">
                                    We deliver superior-quality power-management products and services — including servo
                                    voltage stabilisers, digital stabilisers, CVTs, inverters, UPS systems and battery
                                    chargers — built for critical applications. We commit to:
                                    <ul>
                                        <li>Ensuring every installation runs uninterrupted and with optimal efficiency</li>
                                        <li>Partnering with clients as a solution-provider (not just a supplier)</li>
                                        <li>Continuously innovating to meet evolving challenges in power quality</li>
                                        <li>Acting responsibly toward sustainability and the welfare of our stakeholders</li>
                                    </ul>
                                    </div>
                            </div>

                            <div className="about-vision-box">
                                <div className="about-icon-container">
                                    <span className="about-icon">👁️</span>
                                </div>
                                <h2 className="about-box-title">Our Vision</h2>
                                <p className="about-box-text">
                                    Our products are approved by D.G.Q.A. which certifies quality of products which are to be used in defense installations and by T A C (Tariff Advisory Committee) which is a leading quality assurance agency. Apart from that our fire alarms are made as per IS 2189 standards which further enhances our credibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-values-section">
                    <div className="about-container">
                        <h2 className="about-centered-section-title">Our Core Values</h2>
                        <div className="about-values-divider"></div>
                        <div className="about-values-grid">
                            <div className="about-value-card">
                                <div className="about-value-icon-container">
                                    <span className="about-value-icon">⚡</span>
                                </div>
                                <h3 className="about-value-title">Innovation</h3>
                                <p className="about-value-text">
                                    Continuously pushing boundaries to develop cutting-edge power solutions.
                                </p>
                            </div>

                            <div className="about-value-card">
                                <div className="about-value-icon-container">
                                    <span className="about-value-icon">🛡️</span>
                                </div>
                                <h3 className="about-value-title">Quality</h3>
                                <p className="about-value-text">
                                    Unwavering commitment to excellence in every product we manufacture.
                                </p>
                            </div>

                            <div className="about-value-card">
                                <div className="about-value-icon-container">
                                    <span className="about-value-icon">🤝</span>
                                </div>
                                <h3 className="about-value-title">Reliability</h3>
                                <p className="about-value-text">
                                    Building trust through consistent performance and dependable service.
                                </p>
                            </div>

                            <div className="about-value-card">
                                <div className="about-value-icon-container">
                                    <span className="about-value-icon">♻️</span>
                                </div>
                                <h3 className="about-value-title">Sustainability</h3>
                                <p className="about-value-text">
                                    Creating eco-friendly power solutions for a greener tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-achievements-section">
                    <div className="about-container">
                        <h2 className="about-centered-section-title">Our Achievements</h2>
                        <div className="about-achievements-divider"></div>

                        <div className="about-stats-container">
                            <div className="about-stat-box">
                                <div className="about-stat-number">40+</div>
                                <div className="about-stat-label">Years of Excellence</div>
                            </div>

                            <div className="about-stat-box">
                                <div className="about-stat-number">10,000+</div>
                                <div className="about-stat-label">Satisfied Customers</div>
                            </div>

                            <div className="about-stat-box">
                                <div className="about-stat-number">10+</div>
                                <div className="about-stat-label">Service Centers</div>
                            </div>

                            <div className="about-stat-box">
                                <div className="about-stat-number">50+</div>
                                <div className="about-stat-label">Product Models</div>
                            </div>
                        </div>

                       
                    </div>
                </section>

                <section className="about-team-section">
                    <div className="about-container">
                        <h2 className="about-centered-section-title">Leadership Team</h2>
                        <div className="about-team-divider"></div>
                        <p className="about-team-intro">
                            Our experienced leadership team brings decades of industry expertise and a passion for innovation
                            to guide Protek Power into the future.
                        </p>

                        <div className="about-team-grid">
                            <div className="about-team-member">
                                <div className="about-member-image-container">
                                    <div className="about-member-image"></div>
                                </div>
                                <h3 className="about-member-name">Mr. Umesh M. Agrawal</h3>
                                <p className="about-member-title">Founder & CEO</p>
                            </div>

                            <div className="about-team-member">
                                <div className="about-member-image-container">
                                    <div className="about-member-image"></div>
                                </div>
                                <h3 className="about-member-name">Mr. Yogesh M. Agrawal</h3>
                                <p className="about-member-title">Chief Technology Officer</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-cta-section">
                    <div className="about-container">
                        <div className="about-cta-content">
                            <h2 className="about-cta-heading">Ready to Experience Superior Power Solutions?</h2>
                            <p className="about-cta-text">
                                Discover how our innovative products can transform your power management experience.
                            </p>
                            <a href="/contact" className="about-cta-button">Contact Us Today</a>
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
