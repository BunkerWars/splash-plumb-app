import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { 
  Droplets, 
  Thermometer, 
  Wrench, 
  Camera,
  ShieldCheck,
  Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Droplets,
    title: "Leak Detection",
    description: "Advanced technology to find hidden leaks quickly"
  },
  {
    icon: Wrench,
    title: "Re-Piping",
    description: "Modern pipe replacement for lasting reliability"
  },
  {
    icon: Thermometer,
    title: "Water Heaters",
    description: "Installation, repair and maintenance services"
  },
  {
    icon: Camera,
    title: "Sewer Inspection",
    description: "Video recording for accurate diagnostics"
  },
  {
    icon: ShieldCheck,
    title: "Backflow Testing",
    description: "Annual testing and certification services"
  },
  {
    icon: Zap,
    title: "Gas Lines",
    description: "Safe installation and repair of gas systems"
  }
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Hero />

      <div className="max-w-lg mx-auto px-4 space-y-6">
        {/* Services Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-navy">Our Services</h2>
            <button onClick={() => navigate('/services')} className="text-sm text-gold font-medium hover:text-gold/80">View All</button>
          </div>

          <div className="space-y-3 animate-slide-up">
            {services.map((service, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="glass-card p-6 space-y-4 animate-scale-in mt-8">
          <h3 className="text-xl font-bold text-navy">Why Choose Fresno Plumbing?</h3>
          <div className="space-y-3">
            {[
              "79+ years serving Central Valley",
              "24/7 emergency service available",
              "Licensed & certified technicians",
              "Medical gas certified for hospitals",
              "Commercial & residential expertise"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-gold"></div>
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-navy p-6 rounded-2xl text-white space-y-3 animate-scale-in mt-8">
          <h3 className="text-xl font-bold">Need Help Now?</h3>
          <p className="text-sm opacity-90">
            Our team is ready 24/7 to handle your plumbing emergencies
          </p>
          <a href="tel:+15592752535">
            <button className="w-full bg-gold text-navy py-3 rounded-xl font-semibold tap-scale hover:scale-105 transition-transform hover:bg-gold/90">
              Call (559) 275-2535
            </button>
          </a>
        </div>
      </div>

      <EmergencyButton />
      <BottomNav />
    </div>
  );
};

export default Index;
