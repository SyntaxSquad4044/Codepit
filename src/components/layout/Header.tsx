
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between bg-[color:var(--bg-black)]/90 backdrop-blur-md">
      <Link to="/" className="flex items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/77ee10eb93456e1a6f7181bd3b356417bf287051"
          alt="CodePit Logo"
          className="h-16 object-contain"
        />
      </Link>
      <nav className="hidden md:flex space-x-8">
        <Link
          to="/"
          className="text-white text-lg font-medium hover:text-[color:var(--accent-color)] transition-colors"
        >
          Home
        </Link>
        <Link
          to="/challenges"
          className="text-white text-lg font-medium hover:text-[color:var(--accent-color)] transition-colors"
        >
          Challenges
        </Link>
        <Link
          to="/projects"
          className="text-white text-lg font-medium hover:text-[color:var(--accent-color)] transition-colors"
        >
          Projects
        </Link>
      </nav>
      <div className="flex space-x-4">
        <button className="px-6 py-2 text-lg font-medium border border-[color:var(--accent-color)] text-[color:var(--accent-color)] rounded-md transition-all hover:bg-[color:var(--accent-color)] hover:text-white">
          Login
        </button>
        <button className="px-6 py-2 text-lg font-medium bg-[color:var(--accent-color)] text-white rounded-md transition-all hover:bg-[color:var(--accent-color)]/90">
          Get Started
        </button>
      </div>
    </header>
  );
}
