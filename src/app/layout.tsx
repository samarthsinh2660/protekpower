import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

const SITE_URL = "https://www.protekpower.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Protek Power | Servo Voltage Stabilizers, UPS Systems & Power Management",
    template: "%s | Protek Power",
  },
  description:
    "Indian manufacturer of servo voltage stabilizers, digital stabilizers, CVTs, isolation transformers, UPS systems and battery chargers for industrial and commercial use. Trusted since 1980.",
  applicationName: "Protek Power",
  keywords: [
    "servo voltage stabilizer",
    "digital voltage stabilizer",
    "constant voltage transformer",
    "isolation transformer",
    "online UPS",
    "battery charger",
    "voltage stabilizer manufacturer India",
    "power management solutions",
    "Protek Power",
  ],
  authors: [{ name: "Protek Power" }],
  creator: "Protek Power",
  publisher: "Protek Power",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Protek Power",
    locale: "en_IN",
    url: SITE_URL,
    title:
      "Protek Power | Servo Voltage Stabilizers, UPS Systems & Power Management",
    description:
      "Servo voltage stabilizers, digital stabilizers, CVTs, isolation transformers, UPS systems and battery chargers for critical industrial applications. Trusted since 1980.",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Protek Power — power management solutions since 1980",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Protek Power | Servo Voltage Stabilizers, UPS Systems & Power Management",
    description:
      "Servo voltage stabilizers, digital stabilizers, CVTs, isolation transformers, UPS systems and battery chargers. Trusted since 1980.",
    images: ["/assets/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "Electrical Equipment",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Protek Power",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logo.png`,
  foundingDate: "1980",
  description:
    "Manufacturer of servo voltage stabilizers, digital stabilizers, constant voltage transformers, isolation transformers, UPS systems and battery chargers for industrial and commercial applications.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "67, Capital Commercial Center, Nr. Sanyas Ashram, Ashram Road",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380009",
    addressCountry: "IN",
  },
  email: "swastik23@gmail.com",
  telephone: "+91-9824035667",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9426067762",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["en", "hi", "gu"],
  },
  sameAs: [
    "https://twitter.com/protekpower",
    "https://facebook.com/protekpower",
    "https://linkedin.com/company/protekpower",
    "https://instagram.com/protekpower",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="layout-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <div className="layout-container">
          <Header />
          <main className="layout-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
