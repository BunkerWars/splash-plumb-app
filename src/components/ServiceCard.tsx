import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

export const ServiceCard = ({ icon: Icon, title, description, onClick }: ServiceCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={`glass-card p-6 hover-lift tap-scale group ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-navy p-3 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gold group-hover:shadow-lg">
          <Icon className="h-6 w-6 text-white group-hover:text-navy transition-colors" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};
