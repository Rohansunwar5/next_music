import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicTestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className=" min-h-screen overflow-y-hidden bg-black/[0.9] antialiased ">
      <HeroSection/>
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicTestimonialCards/>
    </main>
  );
}
