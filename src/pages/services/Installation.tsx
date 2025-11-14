import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  Droplet,
  CircleDot,
  Trash2,
  ShowerHead,
  Thermometer,
  UtensilsCrossed,
  Layers,
  Filter,
  Droplets,
  Flame,
  Wrench
} from "lucide-react";

const installationServices = [
  {
    icon: Droplet,
    title: "Faucet Installation",
    description: "Kitchen and bathroom faucet installation with warranty"
  },
  {
    icon: CircleDot,
    title: "Toilet Installation",
    description: "Professional toilet installation and replacement services"
  },
  {
    icon: Trash2,
    title: "Garbage Disposal",
    description: "Expert disposal installation with proper electrical hookup"
  },
  {
    icon: ShowerHead,
    title: "Shower Head",
    description: "Upgrade to modern, water-efficient shower heads"
  },
  {
    icon: Thermometer,
    title: "Water Heater",
    description: "Tank and tankless water heater installation"
  },
  {
    icon: UtensilsCrossed,
    title: "Dishwasher",
    description: "Complete dishwasher hookup and installation"
  },
  {
    icon: Layers,
    title: "Kitchen Sink",
    description: "Professional sink installation with plumbing connections"
  },
  {
    icon: Filter,
    title: "Water Filtration System",
    description: "Clean water solutions for your entire home"
  },
  {
    icon: Droplets,
    title: "Water Softener",
    description: "Reduce hard water damage with softener installation"
  },
  {
    icon: Flame,
    title: "Gas Line",
    description: "Safe gas line installation for appliances"
  },
  {
    icon: Wrench,
    title: "Pipes (Repiping)",
    description: "Complete home repiping for modern reliability"
  }
];

const Installation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Plumbing Installation Services Fresno, CA | Faucets, Toilets, Water Heaters & More</title>
        <meta name="description" content="Expert plumbing installation in Fresno: faucets, toilets, water heaters, dishwashers, garbage disposals, sinks & repiping. Licensed installers, 79 years experience. Call (559) 292-4065!" />
        <link rel="canonical" href="https://fresno.plumbing/services/installation" />
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
            <h1 className="text-3xl font-bold text-navy">Installation Services</h1>
            <p className="text-sm text-muted-foreground">Professional installation for all fixtures</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Expert Installation Services</h2>
          <p className="text-sm text-muted-foreground mb-4">
            From simple faucet upgrades to complete repiping projects, our licensed technicians ensure every installation meets code and exceeds expectations. With 79+ years of experience, we handle all residential and commercial installations.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">
                Call Now
              </Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">
              Get Quote
            </Button>
          </div>
        </div>

        {/* What do you need to install? */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-navy mb-4">What Do You Need to Install?</h2>
          <div className="space-y-3 animate-slide-up">
            {installationServices.map((service, index) => {
              // Map titles to exact route slugs
              const slugMap: Record<string, string> = {
                'Faucet Installation': 'faucet',
                'Toilet Installation': 'toilet',
                'Garbage Disposal': 'garbage-disposal',
                'Shower Head': 'shower-head',
                'Water Heater': 'water-heater',
                'Dishwasher': 'dishwasher',
                'Kitchen Sink': 'kitchen-sink',
                'Water Filtration System': 'water-filtration-system',
                'Water Softener': 'water-softener',
                'Gas Line': 'gas-line',
                'Pipes (Repiping)': 'pipes-repiping'
              };
              const slug = slugMap[service.title] || service.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
              
              return (
                <div key={index} style={{ animationDelay: `${index * 50}ms` }}>
                  <ServiceCard 
                    {...service} 
                    onClick={() => navigate(`/services/installation/${slug}`)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Installation Guarantee</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>All installations meet California plumbing codes</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Licensed and insured technicians</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Warranty on parts and labor</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Clean job site guaranteed</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Ready to Install?</h3>
          <p className="text-sm opacity-90">
            Get professional installation with guaranteed workmanship. Call us today for a free estimate.
          </p>
          <a href="tel:+15592924065">
            <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">
              Call (559) 292-4065
            </Button>
          </a>
        </div>
      </div>

      <EmergencyButton />
      <BottomNav />
    </div>
  );
};

export default Installation;
