
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

export function FeatureCard({ icon, title, description, onClick }: FeatureCardProps) {
  return (
    <div 
      className="glass-card p-8 hover-scale cursor-pointer" 
      onClick={onClick}
    >
      <div className="mb-6 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
}
