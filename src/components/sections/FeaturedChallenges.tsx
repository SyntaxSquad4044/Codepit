
import { ChallengeCard } from "@/components/ui/ChallengeCard";

export function FeaturedChallenges() {
  const handleChallengeClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-[color:var(--bg-black)]/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-[color:var(--accent-color)]">Challenges</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ChallengeCard 
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/76752fb8f76486aa478fa4add403f1e27d4de848" 
            title="Two Sum" 
            difficulty="Easy" 
            onClick={() => handleChallengeClick('https://leetcode.com/problems/two-sum/')}
          />
          <ChallengeCard 
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/bb129968fa54aa757ff84629a7a5662da28ecf4e" 
            title="TRICHECK" 
            difficulty="Medium" 
            onClick={() => handleChallengeClick('https://www.codingame.com/training/medium/tricheck')}
          />
          <ChallengeCard
            logo="https://cdn.builder.io/api/v1/image/assets/TEMP/47da1d4a1a80113694945cd944f3a98d8405d44f"
            title="Math Division"
            difficulty="Medium"
            onClick={() => handleChallengeClick('https://www.hackerrank.com/challenges/math-division/problem')}
          />
        </div>
        <div className="flex justify-center">
          <button className="px-8 py-3 text-lg font-medium bg-white text-[color:var(--bg-black)] rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition-all">
            View All Challenges
          </button>
        </div>
      </div>
    </section>
  );
}
