
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Code, ArrowRight, TrendingUp, Search, Clock } from "lucide-react";

export function Features() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[color:var(--bg-black)]/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          One Platform. <span className="text-[color:var(--accent-color)]">Everything You Need.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code size={28} className="text-[color:var(--accent-color)]" />}
            title="One Platform, endless coding question"
            description="Access coding challenges from LeetCode, CodeChef, HackerRank, and more in a single platform."
          />
          <FeatureCard
            icon={<ArrowRight size={28} className="text-[color:var(--accent-color)]" />}
            title="Seamless Redirection"
            description="Directly navigate to coding challenges and projects on their original platforms."
          />
          <FeatureCard
            icon={<TrendingUp size={28} className="text-[color:var(--accent-color)]" />}
            title="Trending Open-Source Projects"
            description="Explore top GitHub projects without the hassle of searching"
          />
          <FeatureCard
            icon={<Search size={28} className="text-[color:var(--accent-color)]" />}
            title="Smart Search & Filters"
            description="Find challenges and projects based on difficulty, language, and topics instantly."
          />
          <FeatureCard
            icon={<Clock size={28} className="text-[color:var(--accent-color)]" />}
            title="Saves Time & Effort"
            description="No more switching between multiple platforms—find everything in one place instantly."
          />
        </div>
      </div>
    </section>
  );
}
