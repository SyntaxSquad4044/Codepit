export function Hero() {
  return (
    <section className="box-border text-center relative m-0 px-0 py-[100px]">
      <div className="box-border m-0 p-0">
        <h1 className="box-border text-6xl text-[color:var(--text-white)] mb-10 m-0 px-5 py-0 max-md:text-5xl max-sm:text-4xl">
          <span>One Platform, Endless Coding</span>
          <span className="box-border text-[color:var(--accent-color)] m-0 p-0">
            &lt;
          </span>
          <span>Challenges & Open-Source Projects</span>
          <span className="box-border text-[color:var(--accent-color)] m-0 p-0">
            &gt;
          </span>
        </h1>
        <p className="box-border text-[23px] text-[color:var(--text-white)] max-w-[1016px] mt-0 mb-[60px] mx-auto px-5 py-0 max-md:text-xl max-sm:text-lg">
          <span>
            Discover, filter, and access coding challenges from different coding
            platforms
          </span>
          <span className="box-border text-[color:var(--accent-color)] m-0 p-0">
            {" "}
            all in one place
          </span>
          <span>
            . Explore trending open-source projects from GitHub and take your
            coding journey to the next level!
          </span>
        </p>
        <div className="box-border flex gap-5 justify-center m-0 p-0 max-sm:flex-col max-sm:items-center">
          <button className="box-border border border-[color:var(--text-white)] text-[color:var(--text-black)] text-[23px] cursor-pointer bg-[color:var(--bg-white)] m-0 px-[30px] py-2.5 rounded-[3px] border-solid hover:bg-transparent hover:text-[color:var(--text-white)]">
            Challenges
          </button>
          <button className="box-border border border-[color:var(--text-white)] text-[color:var(--text-black)] text-[23px] cursor-pointer bg-[color:var(--bg-white)] m-0 px-[30px] py-2.5 rounded-[3px] border-solid hover:bg-transparent hover:text-[color:var(--text-white)]">
            Projects
          </button>
          <button className="box-border border border-[color:var(--accent-color)] text-[color:var(--text-black)] rounded text-[23px] cursor-pointer bg-[color:var(--accent-color)] m-0 px-[30px] py-2.5 border-solid hover:bg-transparent hover:text-[color:var(--accent-color)]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
