
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Sparkles } from "lucide-react";

export function AiRecommendations() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[color:var(--bg-black)]/50 to-[color:var(--bg-black)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-[color:var(--accent-color)]">AI-Powered</span> Recommendations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card border-0">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-6 h-6 text-[color:var(--accent-color)]" />
                <CardTitle>Smart Learning Path</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Our AI analyzes your coding patterns and skill level to suggest a personalized
                roadmap of challenges that gradually increase in difficulty, optimizing your learning journey.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Data Structures", "Algorithms", "System Design", "Frontend", "Backend"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[color:var(--accent-color)]/20 text-[color:var(--accent-color)] text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-6 h-6 text-[color:var(--accent-color)]" />
                <CardTitle>Project Match</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Discover open-source projects that match your interests and skill level. 
                Our AI helps you find projects where you can make meaningful contributions
                and expand your portfolio.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Beginner Friendly", "Documentation", "Bug Fixing", "Feature Development", "UI/UX"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[color:var(--accent-color)]/20 text-[color:var(--accent-color)] text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center">
          <button className="px-8 py-3 text-lg font-medium bg-[color:var(--accent-color)] text-white rounded-md hover:bg-transparent hover:border hover:border-[color:var(--accent-color)] hover:text-[color:var(--accent-color)] transition-all">
            Get Personalized Recommendations
          </button>
        </div>
      </div>
    </section>
  );
}
