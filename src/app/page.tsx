import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicTestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" min-h-screen overflow-y-hidden bg-black/[0.9] antialiased ">
      <HeroSection/>
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicTestimonialCards/>
      <UpcomingWebinars />
      <Instructors/>
      <Footer />
    </main>
  );
}   