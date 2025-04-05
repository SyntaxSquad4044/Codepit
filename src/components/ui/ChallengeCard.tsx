interface ChallengeCardProps {
  logo: string;
  title: string;
  difficulty: string;
}

export function ChallengeCard({ logo, title, difficulty }: ChallengeCardProps) {
  return (
    <div className="box-border relative bg-[color:var(--bg-white)] m-0 p-10 rounded-3xl hover:shadow-lg transition-shadow">
      <img
        src={logo}
        alt={title}
        className="box-border w-[156px] h-[81px] object-contain mb-[30px] m-0 p-0"
      />
      <h3 className="box-border text-[45px] text-[color:var(--text-black)] underline font-bold mb-5 m-0 p-0 max-sm:text-[32px]">
        {title}
      </h3>
      <p className="box-border text-[23px] mb-5 m-0 p-0">
        <span>Difficulty: </span>
        <span
          className={`box-border ${
            difficulty === "Easy"
              ? "text-[color:var(--accent-color)]"
              : "text-[#7E9104]"
          } m-0 p-0`}
        >
          {difficulty}
        </span>
      </p>
      <div className="box-border w-3 h-[19px] absolute bg-[color:var(--text-black)] m-0 p-0 right-5 bottom-5" />
    </div>
  );
}
