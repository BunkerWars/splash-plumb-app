import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WaterLine = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Water Line Repair</h1>
            <p className="text-sm text-muted-foreground">Main & supply line repairs</p>
          </div>
        </div>

        <div className="bg-emergency/10 border border-emergency/30 rounded-xl p-4 mb-6 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-emergency flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-navy text-sm">Water Line Emergency?</p>
            <p className="text-xs text-muted-foreground">Main line breaks require immediate attention. 24/7 service available!</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Expert Water Line Repair</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Main water line leak or low pressure throughout your home? We repair and replace water lines from the street to your house. Our licensed plumbers handle everything from minor leaks to complete main line replacement.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Water Line Issues We Repair</h3>
          <div className="space-y-3">
            {[
              "Main Water Line Breaks",
              "Supply Line Leaks",
              "Corroded Water Lines",
              "Frozen Pipe Damage",
              "Low Water Pressure",
              "Pinhole Leaks in Copper",
              "Galvanized Pipe Failure",
              "Service Line Connection Issues",
              "Tree Root Damage",
              "Settlement Cracks"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Repair Pricing</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Minor Repairs</p>
              <p className="text-2xl font-bold text-navy">$500 - $1,500</p>
              <p className="text-xs text-muted-foreground">Small leaks, accessible locations, short sections</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Repairs</p>
              <p className="text-2xl font-bold text-navy">$1,500 - $4,000</p>
              <p className="text-xs text-muted-foreground">Moderate excavation, service line repair, larger sections</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Main Line Replacement</p>
              <p className="text-2xl font-bold text-navy">$4,000 - $15,000+</p>
              <p className="text-xs text-muted-foreground">Full main line, extensive excavation, street to house</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Price varies by depth, length, access, and material. Permits may be required.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Warning Signs</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Low Pressure",
              "High Water Bills",
              "Wet Spots in Yard",
              "Discolored Water",
              "Water Running Sounds",
              "Soggy Lawn Areas",
              "Cracks in Foundation",
              "Water Meter Running"
            ].map((sign, index) => (
              <div key={index} className="bg-navy/5 p-3 rounded-xl">
                <p className="text-sm font-medium">{sign}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Our Repair Process</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Leak Detection</p>
                <p className="text-xs text-muted-foreground">Electronic leak detection to pinpoint exact location</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Professional Repair</p>
                <p className="text-xs text-muted-foreground">Excavation, repair/replace, and backfill</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Pressure Testing</p>
                <p className="text-xs text-muted-foreground">Full pressure test and quality inspection</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Repair vs Replace</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-navy/5 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Repair if:</p>
              <p className="text-muted-foreground">Isolated leak, newer pipes, small damaged section</p>
            </div>
            <div className="bg-gold/10 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Replace if:</p>
              <p className="text-muted-foreground">Multiple leaks, old galvanized/polybutylene, widespread corrosion, frequent repairs</p>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Water Line Problems?</h3>
          <p className="text-sm opacity-90">
            Don't let a water line leak cause major damage. Fast, professional repairs available now!
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

export default WaterLine;
