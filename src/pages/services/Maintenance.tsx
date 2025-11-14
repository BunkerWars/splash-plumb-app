import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  Waves,
  Thermometer,
  Droplets,
  Trash2,
  ShieldCheck,
  Drill,
  Filter,
  ClipboardCheck
} from "lucide-react";

const maintenanceServices = [
  {
    icon: Waves,
    title: "Sewer Line Cleaning",
    description: "Prevent backups with professional hydro-jetting and rooter service"
  },
  {
    icon: Thermometer,
    title: "Water Heater Maintenance",
    description: "Annual flushing and inspection to extend heater lifespan"
  },
  {
    icon: Droplets,
    title: "Drain Cleaning & Maintenance",
    description: "Regular drain cleaning prevents clogs and keeps water flowing"
  },
  {
    icon: Trash2,
    title: "Garbage Disposal Maintenance",
    description: "Professional cleaning and sharpening to keep it running smoothly"
  },
  {
    icon: ShieldCheck,
    title: "Backflow Testing",
    description: "Annual testing and certification for backflow prevention devices"
  },
  {
    icon: Drill,
    title: "Sump Pump Maintenance",
    description: "Regular testing and cleaning to prevent basement flooding"
  },
  {
    icon: Filter,
    title: "Water Softener Maintenance",
    description: "Salt refills, cleaning, and system checks for optimal performance"
  },
  {
    icon: ClipboardCheck,
    title: "Annual Plumbing Inspection",
    description: "Complete home plumbing checkup to catch problems early"
  }
];

const Maintenance = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Plumbing Maintenance Services Fresno, CA | Prevent Costly Repairs</title>
        <meta name="description" content="Preventive plumbing maintenance in Fresno: drain cleaning, water heater service, sewer line cleaning, backflow testing & more. Save money, avoid emergencies. Call (559) 275-2535!" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/services')}
            className="tap-scale"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Maintenance Services</h1>
            <p className="text-sm text-muted-foreground">Preventive care for your plumbing</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Prevent Problems Before They Start</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Regular plumbing maintenance saves you money by preventing costly repairs and extending the life of your fixtures. Our 79+ years of experience means we know exactly what to check and when.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">
                Call Now
              </Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">
              Schedule Service
            </Button>
          </div>
        </div>

        {/* What type of maintenance do you need? */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-navy mb-4">What Type of Maintenance Do You Need?</h2>
          <div className="space-y-3 animate-slide-up">
            {maintenanceServices.map((service, index) => {
              const slugMap: Record<string, string> = {
                'Sewer Line Cleaning': 'sewer-line-cleaning',
                'Water Heater Maintenance': 'water-heater-maintenance',
                'Drain Cleaning & Maintenance': 'drain-cleaning',
                'Garbage Disposal Maintenance': 'garbage-disposal',
                'Backflow Testing': 'backflow-testing',
                'Sump Pump Maintenance': 'sump-pump',
                'Water Softener Maintenance': 'water-softener',
                'Annual Plumbing Inspection': 'annual-inspection'
              };
              const slug = slugMap[service.title] || service.title.toLowerCase().replace(/\s+/g, '-').replace(/[&()]/g, '');
              
              return (
                <div key={index} style={{ animationDelay: `${index * 50}ms` }}>
                  <ServiceCard 
                    {...service} 
                    onClick={() => navigate(`/services/maintenance/${slug}`)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits of Regular Maintenance */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Benefits of Regular Maintenance</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Prevent expensive emergency repairs</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Extend the life of your plumbing system</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Lower water and energy bills</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Maintain warranty requirements</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Peace of mind knowing everything works</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Schedule Maintenance Today</h3>
          <p className="text-sm opacity-90">
            Don't wait for problems to happen. Preventive maintenance keeps your plumbing running smoothly!
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

export default Maintenance;
