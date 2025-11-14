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
  Wrench,
  Thermometer,
  Trash2,
  ShowerHead,
  Home,
  Waves,
  Droplets,
  Flame
} from "lucide-react";

const repairServices = [
  {
    icon: Droplet,
    title: "Faucet Repair",
    description: "Fix leaks, drips, and handle issues on all faucet types"
  },
  {
    icon: CircleDot,
    title: "Toilet Repair",
    description: "Running toilets, leaks, flush problems, and more"
  },
  {
    icon: Wrench,
    title: "Pipe Repair (Leak, Burst)",
    description: "Emergency pipe repairs for leaks and burst pipes"
  },
  {
    icon: Thermometer,
    title: "Water Heater Repair",
    description: "No hot water, strange noises, and leak repairs"
  },
  {
    icon: Trash2,
    title: "Garbage Disposal Repair",
    description: "Fix jams, leaks, and motor issues"
  },
  {
    icon: ShowerHead,
    title: "Shower Head Repair",
    description: "Fix leaks, low pressure, and clogged spray holes"
  },
  {
    icon: Home,
    title: "Outdoor Faucet Repair",
    description: "Hose bib repairs, freeze damage, and leak fixes"
  },
  {
    icon: Waves,
    title: "Sewer Line Repair",
    description: "Repair damaged or clogged sewer lines"
  },
  {
    icon: Droplets,
    title: "Drain Repair",
    description: "Fix damaged drains and persistent clogs"
  },
  {
    icon: Wrench,
    title: "Water Line Repair",
    description: "Main water line and supply line repairs"
  },
  {
    icon: Flame,
    title: "Gas Line Repair",
    description: "Emergency gas leak repairs and line replacement"
  }
];

const Repair = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Plumbing Repair Services Fresno, CA | Fix Leaks, Pipes, Toilets & Water Heaters</title>
        <meta name="description" content="Fast plumbing repairs in Fresno: leaky faucets, burst pipes, toilets, water heaters, drains, sewer lines & more. 24/7 emergency repairs, licensed plumbers. Call (559) 292-4065!" />
        <link rel="canonical" href="https://fresno.plumbing/services/repair" />
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
            <h1 className="text-3xl font-bold text-navy">Repair Services</h1>
            <p className="text-sm text-muted-foreground">Expert repairs for all plumbing issues</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Fast, Reliable Plumbing Repairs</h2>
          <p className="text-sm text-muted-foreground mb-4">
            From minor drips to emergency pipe bursts, our licensed technicians diagnose and repair all plumbing issues quickly and correctly. With 79+ years of experience, we provide lasting solutions, not temporary fixes.
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

        {/* What needs to be repaired? */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-navy mb-4">What Needs to Be Repaired?</h2>
          <div className="space-y-3 animate-slide-up">
            {repairServices.map((service, index) => {
              const slugMap: Record<string, string> = {
                'Faucet Repair': 'faucet',
                'Toilet Repair': 'toilet',
                'Pipe Repair (Leak, Burst)': 'pipe',
                'Water Heater Repair': 'water-heater',
                'Garbage Disposal Repair': 'garbage-disposal',
                'Shower Head Repair': 'shower-head',
                'Outdoor Faucet Repair': 'outdoor-faucet',
                'Sewer Line Repair': 'sewer-line',
                'Drain Repair': 'drain',
                'Water Line Repair': 'water-line',
                'Gas Line Repair': 'gas-line'
              };
              const slug = slugMap[service.title] || service.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
              
              return (
                <div key={index} style={{ animationDelay: `${index * 50}ms` }}>
                  <ServiceCard 
                    {...service} 
                    onClick={() => navigate(`/services/repair/${slug}`)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Our Repair Guarantee</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Same-day service available</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Upfront pricing before we start</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Warranty on all repairs</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>24/7 emergency repairs available</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Need a Repair?</h3>
          <p className="text-sm opacity-90">
            Fast, professional repairs with guaranteed workmanship. Call us today!
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

export default Repair;
