
import { Github } from "lucide-react";

interface ProjectCardProps {
  logo: React.ReactNode;
  title: string;
  repoUrl?: string;
}

export function ProjectCard({ logo, title, repoUrl }: ProjectCardProps) {
  const handleRepoClick = (e: React.MouseEvent<HTMLDivElement>, url?: string) => {
    if (url) {
      e.stopPropagation();
      window.open(url, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-scale">
      <div className="p-6">
        <div className="h-20 mb-6 flex items-center">
          {logo}
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-[color:var(--text-black)]">
            {title}
          </h3>
          {repoUrl && (
            <div 
              className="cursor-pointer hover:text-[color:var(--accent-color)]"
              onClick={(e) => handleRepoClick(e, repoUrl)}
            >
              <Github className="h-6 w-6 text-[color:var(--bg-black)]" />
            </div>
          )}
        </div>
      </div>
      <div className="h-1 w-full bg-[color:var(--accent-color)]"></div>
    </div>
  );
}
