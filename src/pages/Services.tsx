import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { ServiceCard } from "@/components/ServiceCard";
import { Helmet } from "react-helmet-async";
import { 
  Droplets, 
  Thermometer, 
  Wrench, 
  Camera,
  ShieldCheck,
  Zap,
  Building,
  Home,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const allServices = [
  {
    icon: Wrench,
    title: "Installation",
    description: "Professional installation for all plumbing fixtures and appliances."
  },
  {
    icon: Wrench,
    title: "Repair",
    description: "Fast, reliable repairs for all plumbing issues. From minor drips to major leaks."
  },
  {
    icon: ShieldCheck,
    title: "Maintenance",
    description: "Preventive maintenance to keep your plumbing system running smoothly."
  },
  {
    icon: Droplets,
    title: "Leak Detection",
    description: "Unlike major disasters, leaks can be discreet. Our advanced technology finds them fast."
  },
  {
    icon: Wrench,
    title: "Re-Piping",
    description: "Damaged or corroded pipes? We provide complete re-piping solutions for lasting reliability."
  },
  {
    icon: Thermometer,
    title: "Water Heaters",
    description: "Installation, repair, and yearly maintenance to keep your water heater performing at its best."
  },
  {
    icon: Camera,
    title: "Sewer Inspection & Video Recording",
    description: "Blockage in drain or sewer line? We use video inspection for accurate diagnosis."
  },
  {
    icon: ShieldCheck,
    title: "Backflow Testing",
    description: "Annual testing, repairs, installation and certification of all prevention devices."
  },
  {
    icon: Zap,
    title: "Gas Lines",
    description: "Safe installation and repair of gas systems for your home or business."
  },
  {
    icon: Building,
    title: "Commercial Plumbing",
    description: "Over 75 years experience in schools, hospitals, and industrial facilities."
  },
  {
    icon: Home,
    title: "New Construction",
    description: "Complete plumbing solutions for new residential and commercial builds."
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Plumbing Services in Fresno & Central Valley, CA | Installation, Repair & Maintenance</title>
        <meta name="description" content="Complete plumbing services in Fresno, CA: installation, repair, maintenance, leak detection, water heaters, drain cleaning & more. 79 years serving Central Valley. Call (559) 275-2535!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="tap-scale"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Our Services</h1>
            <p className="text-sm text-muted-foreground">Complete plumbing solutions</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-3 animate-slide-up">
          {allServices.map((service, index) => {
            const slug = service.title.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and');
            const hasDetailPage = ['installation', 'repair', 'maintenance', 'leak-detection', 'water-heaters', 'drain-cleaning'].includes(slug);
            
            return (
              <div key={index} style={{ animationDelay: `${index * 50}ms` }}>
                <ServiceCard 
                  {...service} 
                  onClick={hasDetailPage ? () => navigate(`/services/${slug}`) : undefined}
                />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 space-y-3">
          <h3 className="font-bold text-lg text-navy">Can't find what you need?</h3>
          <p className="text-sm text-muted-foreground">
            Contact us directly and we'll help you with any plumbing needs.
          </p>
          <a href="tel:+15592752535">
            <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">
              Call (559) 275-2535
            </Button>
          </a>
        </div>
      </div>

      <EmergencyButton />
      <BottomNav />
    </div>
  );
};

export default Services;
