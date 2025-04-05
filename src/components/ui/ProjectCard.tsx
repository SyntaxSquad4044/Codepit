interface ProjectCardProps {
  logo: React.ReactNode;
  title: string;
}

export function ProjectCard({ logo, title }: ProjectCardProps) {
  return (
    <div className="box-border relative bg-[color:var(--bg-white)] m-0 p-10 rounded-3xl hover:shadow-lg transition-shadow">
      <div className="box-border w-[156px] h-[81px] object-contain mb-[30px] m-0 p-0">
        {logo}
      </div>
      <h3 className="box-border text-[45px] text-[color:var(--text-black)] underline font-bold mb-5 m-0 p-0 max-sm:text-[32px]">
        {title}
      </h3>
      <div className="box-border w-3 h-[19px] absolute bg-[color:var(--text-black)] m-0 p-0 right-5 bottom-5" />
    </div>
  );
}
