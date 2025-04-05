
interface ProjectCardProps {
  logo: React.ReactNode;
  title: string;
}

export function ProjectCard({ logo, title }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-scale">
      <div className="p-6">
        <div className="h-20 mb-6 flex items-center">
          {logo}
        </div>
        <h3 className="text-2xl font-bold text-[color:var(--text-black)]">
          {title}
        </h3>
      </div>
      <div className="h-1 w-full bg-[color:var(--accent-color)]"></div>
    </div>
  );
}
