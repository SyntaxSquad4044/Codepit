import { FeatureCard } from "@/components/ui/FeatureCard";
import { Code, ArrowRight, TrendingUp, Search, Clock } from "lucide-react";

export function Features() {
  return (
    <section className="box-border text-center m-0 px-0 py-[100px]">
      <h2 className="box-border text-4xl text-[color:var(--text-white)] font-semibold mb-[60px] m-0 p-0">
        One Platform. Everything You Need.
      </h2>
      <div className="box-border grid grid-cols-[repeat(3,1fr)] gap-10 max-w-[1200px] mx-auto my-0 px-5 py-0 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        <FeatureCard
          icon={<Code className="mx-auto" />}
          title="One Platform, endless coding question"
          description="Access coding challenges from LeetCode, CodeChef, HackerRank, and more in a single platform."
        />
        <FeatureCard
          icon={<ArrowRight className="mx-auto" />}
          title="Seamless Redirection"
          description="Directly navigate to coding challenges and projects on their original platforms."
        />
        <FeatureCard
          icon={<TrendingUp className="mx-auto" />}
          title="Trending Open-Source Projects"
          description="Explore top GitHub projects without the hassle of searching"
        />
        <FeatureCard
          icon={<Search className="mx-auto" />}
          title="Smart Search & Filters"
          description="Find challenges and projects based on difficulty, language, and topics instantly."
        />
        <FeatureCard
          icon={<Clock className="mx-auto" />}
          title="Saves Time & Effort"
          description="No more switching between multiple platforms—find everything in one place instantly."
        />
      </div>
    </section>
  );
}
