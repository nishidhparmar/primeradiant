import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Header from "@/components/headers/Header";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import OurProcessSection from "@/components/sections/OurProcessSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-rich-black">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <OurProcessSection />
    </div>
  );
}
