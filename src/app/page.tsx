import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.23]">
      <HeroSection/>
      <FeaturedCourses />
    </main>
  );
}
