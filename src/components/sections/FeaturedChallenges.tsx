
import { useState, useEffect } from "react";
import { ChallengeCard } from "@/components/ui/ChallengeCard";
import { useNavigate } from "react-router-dom";

// Sample challenges data
const challengesData = [
  {
    id: 1,
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/76752fb8f76486aa478fa4add403f1e27d4de848",
    title: "Two Sum",
    difficulty: "Easy",
    url: "https://leetcode.com/problems/two-sum/"
  },
  {
    id: 2,
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb129968fa54aa757ff84629a7a5662da28ecf4e",
    title: "TRICHECK",
    difficulty: "Medium",
    url: "https://www.codingame.com/training/medium/tricheck"
  },
  {
    id: 3,
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/47da1d4a1a80113694945cd944f3a98d8405d44f",
    title: "Math Division",
    difficulty: "Medium",
    url: "https://www.hackerrank.com/challenges/math-division/problem"
  },
  {
    id: 4,
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/76752fb8f76486aa478fa4add403f1e27d4de848",
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    url: "https://leetcode.com/problems/merge-k-sorted-lists/"
  },
  {
    id: 5,
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb129968fa54aa757ff84629a7a5662da28ecf4e",
    title: "Binary Search",
    difficulty: "Easy",
    url: "https://www.codingame.com/training/easy/binary-search"
  },
  {
    id: 6,
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/47da1d4a1a80113694945cd944f3a98d8405d44f",
    title: "String Manipulation",
    difficulty: "Medium",
    url: "https://www.hackerrank.com/challenges/string-manipulation/problem"
  }
];

export function FeaturedChallenges() {
  const [challenges, setChallenges] = useState<typeof challengesData>([]);
  const navigate = useNavigate();

  const handleChallengeClick = (url: string) => {
    window.open(url, '_blank');
  };

  // Function to shuffle and pick random challenges
  const shuffleChallenges = () => {
    const shuffled = [...challengesData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  // Load random challenges on component mount and when the refresh button is clicked
  useEffect(() => {
    setChallenges(shuffleChallenges());
  }, []);

  const handleRefresh = () => {
    setChallenges(shuffleChallenges());
  };

  const handleViewAll = () => {
    navigate("/challenges");
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-[color:var(--bg-black)]/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-[color:var(--accent-color)]">Challenges</span>
          </h2>
          <button 
            onClick={handleRefresh}
            className="text-sm font-medium text-[color:var(--accent-color)] hover:underline flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M3 21v-5h5"></path>
            </svg>
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge) => (
            <ChallengeCard 
              key={challenge.id}
              logo={challenge.logo}
              title={challenge.title} 
              difficulty={challenge.difficulty} 
              onClick={() => handleChallengeClick(challenge.url)}
            />
          ))}
        </div>
        
        <div className="flex justify-center">
          <button 
            className="px-8 py-3 text-lg font-medium bg-white text-[color:var(--bg-black)] rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition-all"
            onClick={handleViewAll}
          >
            View All Challenges
          </button>
        </div>
      </div>
    </section>
  );
}
