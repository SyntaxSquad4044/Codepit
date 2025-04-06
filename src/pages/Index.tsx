
import { CustomHeader } from "@/components/layout/CustomHeader";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { FeaturedChallenges } from "@/components/sections/FeaturedChallenges";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomHeader />
      <main className="flex-1 pt-16">
        <Hero />
        <Features />
        <FeaturedChallenges />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
