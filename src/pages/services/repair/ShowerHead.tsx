import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShowerHead = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Shower Head Repair</h1>
            <p className="text-sm text-muted-foreground">Fix leaks & pressure issues</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Professional Shower Head Repairs</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Leaky shower head or poor water pressure ruining your shower? Our plumbers fix all shower head issues quickly - from clogged spray holes to leaking connections. Get your perfect shower pressure back!
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Common Shower Head Problems We Fix</h3>
          <div className="space-y-3">
            {[
              "Leaking Shower Head",
              "Low Water Pressure",
              "Clogged Spray Holes",
              "Broken Swivel Joint",
              "Leaking Connection to Pipe",
              "Mineral Buildup",
              "Dripping After Shutoff",
              "Uneven Spray Pattern",
              "Stuck or Frozen Shower Head",
              "Corroded Threads"
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
              <p className="font-semibold text-navy">Basic Cleaning & Minor Repairs</p>
              <p className="text-2xl font-bold text-navy">$80 - $150</p>
              <p className="text-xs text-muted-foreground">Unclog spray holes, tighten connections, replace washers</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Repairs</p>
              <p className="text-2xl font-bold text-navy">$150 - $250</p>
              <p className="text-xs text-muted-foreground">Valve repair, pipe thread repair, arm replacement</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Major Repairs</p>
              <p className="text-2xl font-bold text-navy">$250 - $450</p>
              <p className="text-xs text-muted-foreground">Behind-wall valve work, multiple fixture issues</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Often replacement is more cost-effective than extensive repairs.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What's Included</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Full Inspection</p>
                <p className="text-xs text-muted-foreground">Check shower head, valve, and connections</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Professional Repair</p>
                <p className="text-xs text-muted-foreground">Fix or replace damaged components</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Pressure Testing</p>
                <p className="text-xs text-muted-foreground">Ensure optimal water flow and spray pattern</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">DIY vs Professional Help</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-navy/5 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">DIY for:</p>
              <p className="text-muted-foreground">Simple cleaning, unclogging spray holes with vinegar</p>
            </div>
            <div className="bg-gold/10 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Call a Pro for:</p>
              <p className="text-muted-foreground">Leaks, valve issues, behind-wall problems, low pressure throughout house</p>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Need Shower Head Repair?</h3>
          <p className="text-sm opacity-90">
            Fast repairs to restore your perfect shower. Same-day service available!
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

export default ShowerHead;
