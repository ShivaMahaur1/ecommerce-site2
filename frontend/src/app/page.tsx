import Image from "next/image";
import { HeroSection } from "../components/HeroSection"
import Cetegory from "../components/Cetegory"
import Cards from "@/components/Cards";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import PromoBanner from "@/components/PromoBanner";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection/>
      <Cetegory/>
      <Cards/>
      <Benefits/>
      <PromoBanner/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </main>
  );
}
