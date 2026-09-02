import type { Metadata } from "next";
import Banner from "../components/organisms/Banner";
import CategorySectionHome from "../components/organisms/CategorySectionHome";
import SupportSection from "../components/organisms/SupportSection";
import TopProductCarousel from "../components/organisms/TopProductCarousel";
import WhyChooseUs from "../components/organisms/WhyChooseUs";
import Whatsapp from "../components/molecules/Whatsapp";
import BlogWidget from '../components/organisms/BlogWidget';

export const metadata: Metadata = {
  title:
    "Servo Voltage Stabilizers, UPS Systems & Power Management | Protek Power",
  description:
    "Protek Power manufactures servo voltage stabilizers, digital stabilizers, CVTs, isolation transformers, UPS systems and battery chargers for CNC, textile, printing, medical and commercial installations. Serving India since 1980.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title:
      "Servo Voltage Stabilizers, UPS Systems & Power Management | Protek Power",
    description:
      "Power management products built for critical industrial applications. Trusted across India since 1980.",
  },
};

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        Protek Power — servo voltage stabilizers, UPS systems and power
        management solutions in India since 1980
      </h1>
      <Banner />
      <CategorySectionHome />
      <WhyChooseUs />
      <TopProductCarousel />
      <BlogWidget />
      <SupportSection />
      <Whatsapp
        phone="919426067762"   // change to Protek's number
        defaultMessage="Hi Protek, I'm interested in your stabilizers."
        enableChatBox={true}   // false = direct WhatsApp open
        position="bottom-right"
      />
    </>
  );
}
