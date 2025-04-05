
interface ChallengeCardProps {
  logo: string;
  title: string;
  difficulty: string;
}

export function ChallengeCard({ logo, title, difficulty }: ChallengeCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-scale">
      <div className="p-6">
        <img
          src={logo}
          alt={title}
          className="h-16 mb-6"
        />
        <h3 className="text-2xl font-bold text-[color:var(--text-black)] mb-3">
          {title}
        </h3>
        <div className="flex items-center">
          <span className="text-gray-600">Difficulty: </span>
          <span
            className={`ml-2 font-medium ${
              difficulty === "Easy" ? "text-green-500" : "text-yellow-500"
            }`}
          >
            {difficulty}
          </span>
        </div>
      </div>
      <div className="h-1 w-full bg-[color:var(--accent-color)]"></div>
    </div>
  );
}
