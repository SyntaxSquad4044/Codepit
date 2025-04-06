
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Sparkles, Book } from "lucide-react";

const GetStarted = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  const options = [
    {
      id: "beginner",
      title: "Beginner",
      description: "New to coding? Start with the fundamentals and basic challenges.",
      icon: <Book className="w-6 h-6 text-[color:var(--accent-color)]" />,
    },
    {
      id: "intermediate",
      title: "Intermediate",
      description: "Comfortable with coding basics? Level up with more complex problems.",
      icon: <Code className="w-6 h-6 text-[color:var(--accent-color)]" />,
    },
    {
      id: "advanced",
      title: "Advanced",
      description: "Experienced developer looking for a challenge? Try our hardest problems.",
      icon: <Brain className="w-6 h-6 text-[color:var(--accent-color)]" />,
    },
    {
      id: "ai-path",
      title: "AI-Generated Path",
      description: "Let our AI create a personalized learning journey based on your skills.",
      icon: <Sparkles className="w-6 h-6 text-[color:var(--accent-color)]" />,
    },
  ];

  const handleContinue = () => {
    if (selectedOption) {
      // In a real app, you might save this preference to user profile
      localStorage.setItem("userLevel", selectedOption);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[color:var(--bg-black)]">
      <div className="w-full max-w-3xl">
        <Card className="border-0 glass-card text-white">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Let's Get Started</CardTitle>
            <CardDescription className="text-gray-400">
              Select your experience level to personalize your journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {options.map((option) => (
                <div
                  key={option.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedOption === option.id
                      ? "border-[color:var(--accent-color)] bg-[color:var(--accent-color)]/10"
                      : "border-gray-700 hover:border-gray-500"
                  }`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {option.icon}
                    <h3 className="text-lg font-medium">{option.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400">{option.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center pt-4">
              <Button
                onClick={handleContinue}
                disabled={!selectedOption}
                className="px-8 py-6 text-lg bg-[color:var(--accent-color)] hover:bg-[color:var(--accent-color)]/80 disabled:opacity-50"
              >
                Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GetStarted;
