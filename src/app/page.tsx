import Banner from "../components/organisms/Banner";
import CategorySectionHome from "../components/organisms/CategorySectionHome";
import Header from "../components/organisms/Header";
import SupportSection from "../components/organisms/SupportSection";
import TopProductCarousel from "../components/organisms/TopProductCarousel";
import WhyChooseUs from "../components/organisms/WhyChooseUs";
import Whatsapp from "../components/molecules/Whatsapp";
import BlogWidget from '../components/organisms/BlogWidget';

export default function Home() {
  return (
    <>
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