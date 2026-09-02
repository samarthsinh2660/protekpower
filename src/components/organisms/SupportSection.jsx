import React from 'react';
import ContactInfo from '../atoms/ContactInfo';

// Office address, kept in one place so the map pin and the printed address
// cannot drift apart. The previous embed was a saved view of "Ahmedabad,
// Gujarat" — the whole city, not this building.
const OFFICE_ADDRESS =
    '67, Capital Commercial Center, Nr. Sanyas Ashram, Ashram Road, Ahmedabad - 380009, Gujarat, India';

// Query-based embed: Google geocodes the address itself, so there are no
// hardcoded coordinates to go stale.
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
    OFFICE_ADDRESS
)}&z=17&output=embed`;

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
                                value={OFFICE_ADDRESS}
                            />
                        </div>
                        <button className="support-button">
                            Contact Us
                        </button>
                    </div>
                    <div className="support-map-column">
                        <div className="support-map-container">
                            <iframe
                                src={MAP_EMBED_URL}
                                className="support-map"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Protek Power office location on Google Maps"
                                allowFullScreen=""
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}