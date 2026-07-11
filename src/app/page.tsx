import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import HotelIntroduction from "@/components/HotelIntroduction";
import FullWidthImage from "@/components/FullWidthImage";
import FeatureGrid from "@/components/FeatureGrid";
import PartnerLogos from "@/components/PartnerLogos";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <UtilityBar />
      <Navbar />
      <Hero />
      <BookingForm />
      <HotelIntroduction />
      <FullWidthImage />
      <FeatureGrid />
      <PartnerLogos />
      <ContactMap />
      <Footer />
    </>
  );
}
