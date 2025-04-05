interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="box-border text-center m-0 p-5">
      <div className="box-border text-[40px] text-[color:var(--accent-color)] mb-5 m-0 p-0">
        {icon}
      </div>
      <h3 className="box-border text-lg text-[color:var(--text-white)] font-bold mb-[15px] m-0 p-0">
        {title}
      </h3>
      <p className="box-border text-base text-[color:var(--accent-color)] leading-normal m-0 p-0">
        {description}
      </p>
    </div>
  );
}
