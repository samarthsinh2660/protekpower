import Link from 'next/link';
import Whatsapp from '../../components/molecules/Whatsapp';
import { CONTACT, MAP_EMBED_URL, MAP_LINK_URL } from '../../lib/contact';

export const metadata = {
    title: 'Contact Us — Ahmedabad Office',
    description:
        'Get in touch with Protek Power in Ahmedabad for servo voltage stabilizers, digital stabilizers, CVTs, isolation transformers, UPS systems and battery chargers. Phone, WhatsApp, email and office address.',
    alternates: { canonical: '/contact' },
    openGraph: {
        url: '/contact',
        title: 'Contact Protek Power — Ahmedabad',
        description:
            'Phone, WhatsApp, email and office address for Protek Power, Ahmedabad.',
    },
};

export default function Contact() {
    return (
        <>
            <div className="about-hero-section">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">Contact Us</h1>
                    <p className="about-hero-subtitle">
                        Tell us what you need to protect, and we will size it with you
                    </p>
                </div>
            </div>

            <main className="contact-page">
                <div className="contact-container">
                    <section className="contact-details">
                        <h2 className="contact-section-title">Get in touch</h2>

                        <div className="contact-block">
                            <h3 className="contact-block-title">Phone</h3>
                            {CONTACT.phones.map((phone) => (
                                <p key={phone.tel} className="contact-block-line">
                                    <a href={`tel:${phone.tel}`} className="contact-link">
                                        {phone.display}
                                    </a>
                                </p>
                            ))}
                        </div>

                        <div className="contact-block">
                            <h3 className="contact-block-title">WhatsApp</h3>
                            <p className="contact-block-line">
                                <a
                                    href={`https://wa.me/${CONTACT.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    Message us on WhatsApp
                                </a>
                            </p>
                        </div>

                        <div className="contact-block">
                            <h3 className="contact-block-title">Email</h3>
                            <p className="contact-block-line">
                                <a href={`mailto:${CONTACT.email}`} className="contact-link">
                                    {CONTACT.email}
                                </a>
                            </p>
                        </div>

                        <div className="contact-block">
                            <h3 className="contact-block-title">Office</h3>
                            <address className="contact-address">
                                {CONTACT.addressLines.map((line) => (
                                    <span key={line} className="contact-block-line">
                                        {line}
                                    </span>
                                ))}
                            </address>
                            <p className="contact-block-line">
                                <a
                                    href={MAP_LINK_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    Open in Google Maps →
                                </a>
                            </p>
                        </div>

                        <p className="contact-footnote">
                            Looking for a specific product? Browse the{' '}
                            <Link href="/product" className="contact-link">
                                full range
                            </Link>
                            .
                        </p>
                    </section>

                    <section className="contact-map-section" aria-label="Office location">
                        <iframe
                            src={MAP_EMBED_URL}
                            className="contact-map"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Protek Power office location on Google Maps"
                            allowFullScreen=""
                        ></iframe>
                    </section>
                </div>
            </main>

            <Whatsapp
                phone={CONTACT.whatsapp}
                defaultMessage="Hi Protek, I'd like to discuss a power requirement."
                enableChatBox={true}
                position="bottom-right"
            />
        </>
    );
}
