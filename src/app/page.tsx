import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import PopularCategoriesSlider from "@/components/home/PopularCategoriesSlider";
import WhoWeAre from "@/components/home/WhoWeAre";
import TherapeuticSegments from "@/components/home/TherapeuticSegments";
import Divisions from "@/components/home/Divisions";
import TrustedPharma from "@/components/home/TrustedPharma";
import OurProducts from "@/components/home/OurProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Calculators from "@/components/home/Calculators";
import PromotionalInputs from "@/components/home/PromotionalInputs";
import Testimonials from "@/components/common/Testimonials";
import FAQ from "@/components/common/FAQ";
import BlogSection from "@/components/common/BlogSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <PopularCategoriesSlider />
      <WhoWeAre />
      <TherapeuticSegments />
      <Divisions />
      <TrustedPharma />
      <OurProducts />
      <WhyChooseUs />
      <Calculators />
      <PromotionalInputs />
      <Testimonials />
      <FAQ />
      <BlogSection />
      {/* <Footer /> */}
    </>
  );
}
