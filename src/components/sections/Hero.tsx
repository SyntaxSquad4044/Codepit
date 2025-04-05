
export function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          <span>One Platform, Endless Coding</span>
          <span className="text-[color:var(--accent-color)]">&lt;</span>
          <span>Challenges & Open-Source Projects</span>
          <span className="text-[color:var(--accent-color)]">&gt;</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-300">
          <span>
            Discover, filter, and access coding challenges from different coding
            platforms
          </span>
          <span className="text-[color:var(--accent-color)]"> all in one place</span>
          <span>
            . Explore trending open-source projects from GitHub and take your
            coding journey to the next level!
          </span>
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-3 text-lg font-medium bg-white text-[color:var(--bg-black)] rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition-all">
            Challenges
          </button>
          <button className="px-8 py-3 text-lg font-medium bg-white text-[color:var(--bg-black)] rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition-all">
            Projects
          </button>
          <button className="px-8 py-3 text-lg font-medium bg-[color:var(--accent-color)] text-white rounded-md hover:bg-transparent hover:text-[color:var(--accent-color)] hover:border hover:border-[color:var(--accent-color)] transition-all">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
