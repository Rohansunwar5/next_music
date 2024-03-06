import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className=" min-h-screen overflow-y-hidden bg-black/[0.9] antialiased bg-grid-white/[0.23]">
      <HeroSection/>
      <FeaturedCourses />
      <WhyChooseUs />
    </main>
  );
}
