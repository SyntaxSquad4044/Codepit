
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { FeaturedChallenges } from "@/components/sections/FeaturedChallenges";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";

const Index = () => {
  return (
    <div className="bg-[color:var(--bg-black)] min-h-screen">
      <Header />
      <Hero />
      <Features />
      <FeaturedChallenges />
      <FeaturedProjects />
      <Footer />
    </div>
  );
};

export default Index;
