import React from 'react';
import ContactInfo from '../atoms/ContactInfo';

export default function SupportSection() {
    return (
        <section className="support-section">
            <div className="support-container">
                <div className="support-content">
                    <div className="support-text-column">
                        <h2 className="support-heading">Help & Support</h2>
                        <div className="support-divider"></div>
                        <p className="support-description">
                            Our team is here to help you with any questions about our products and services.
                            Contact us today and experience our exceptional customer support.
                        </p>
                        <div className="support-contact-list">
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
                        <button className="support-button">
                            Contact Us
                        </button>
                    </div>
                    <div className="support-map-column">
                        <div className="support-map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717844018!2d72.43965358671871!3d23.02049777318322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709538273842!5m2!1sen!2sin"
                                className="support-map"
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