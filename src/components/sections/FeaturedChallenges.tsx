import { ChallengeCard } from "@/components/ui/ChallengeCard";

export function FeaturedChallenges() {
  return (
    <section className="box-border text-center m-0 px-0 py-[100px]">
      <h2 className="box-border text-4xl text-[color:var(--text-white)] font-semibold mb-[60px] m-0 p-0">
        Featured Challenges
      </h2>
      <div className="box-border grid grid-cols-[repeat(3,1fr)] gap-10 max-w-[1200px] mt-0 mb-10 mx-auto px-5 py-0 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        <ChallengeCard logo="https://cdn.builder.io/api/v1/image/assets/TEMP/76752fb8f76486aa478fa4add403f1e27d4de848" title="Two Sum" difficulty="Easy" />
        <ChallengeCard logo="https://cdn.builder.io/api/v1/image/assets/TEMP/bb129968fa54aa757ff84629a7a5662da28ecf4e" title="TRICHECK" difficulty="Medium" />
        <ChallengeCard
          logo="https://cdn.builder.io/api/v1/image/assets/TEMP/47da1d4a1a80113694945cd944f3a98d8405d44f"
          title="Math Division"
          difficulty="Medium"
        />
      </div>
      <button className="box-border border border-[color:var(--text-white)] text-[color:var(--text-black)] text-[23px] cursor-pointer bg-[color:var(--bg-white)] m-0 px-[30px] py-2.5 rounded-[3px] border-solid hover:bg-transparent hover:text-[color:var(--text-white)]">
        Challenges
      </button>
    </section>
  );
}
