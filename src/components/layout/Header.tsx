import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="box-border flex items-center justify-between relative z-10 m-0 px-14 py-5 max-sm:p-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/77ee10eb93456e1a6f7181bd3b356417bf287051"
        alt="CodePit Logo"
        className="box-border w-[292px] h-[292px] object-contain mt-[-62px] m-0 p-0"
      />
      <nav className="box-border flex gap-10 m-0 p-0 max-sm:hidden">
        <Link
          to="/"
          className="box-border text-[color:var(--text-white)] no-underline text-[23px] transition-[color] duration-[0.3s] hover:text-[color:var(--accent-color)]"
        >
          Home
        </Link>
        <Link
          to="/challenges"
          className="box-border text-[color:var(--text-white)] no-underline text-[23px] transition-[color] duration-[0.3s] hover:text-[color:var(--accent-color)]"
        >
          Challenges
        </Link>
        <Link
          to="/projects"
          className="box-border text-[color:var(--text-white)] no-underline text-[23px] transition-[color] duration-[0.3s] hover:text-[color:var(--accent-color)]"
        >
          Projects
        </Link>
      </nav>
      <div className="box-border flex gap-5 m-0 p-0 max-sm:flex-col">
        <button className="box-border rounded text-[23px] cursor-pointer border border-[color:var(--accent-color)] text-[color:var(--accent-color)] m-0 px-[30px] py-2.5 border-solid hover:bg-[color:var(--accent-color)] hover:text-[color:var(--text-black)]">
          Login
        </button>
        <button className="box-border rounded text-[23px] cursor-pointer border border-[color:var(--accent-color)] text-[color:var(--text-black)] bg-[color:var(--accent-color)] m-0 px-[30px] py-2.5 border-solid hover:bg-transparent hover:text-[color:var(--accent-color)]">
          Get Started
        </button>
      </div>
    </header>
  );
}
