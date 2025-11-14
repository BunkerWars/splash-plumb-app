import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WaterHeater = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Water Heater Repair</h1>
            <p className="text-sm text-muted-foreground">No hot water? We fix it fast</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Expert Water Heater Repair</h2>
          <p className="text-sm text-muted-foreground mb-4">
            No hot water is more than an inconvenience - it's an emergency! Our licensed technicians diagnose and repair all water heater issues quickly. We work on all brands, tank and tankless models.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592752535" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Water Heater Problems We Fix</h3>
          <div className="space-y-3">
            {[
              "No Hot Water",
              "Not Enough Hot Water",
              "Water Too Hot",
              "Leaking Tank or Connections",
              "Strange Noises (Popping, Rumbling)",
              "Rusty or Discolored Water",
              "Bad Smelling Water",
              "Pilot Light Won't Stay Lit",
              "Thermostat Issues",
              "Heating Element Failure"
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
              <p className="text-2xl font-bold text-navy">$150 - $300</p>
              <p className="text-xs text-muted-foreground">Thermostat, pilot light, pressure relief valve</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Heating Element Replacement</p>
              <p className="text-2xl font-bold text-navy">$250 - $450</p>
              <p className="text-xs text-muted-foreground">Electric water heater element replacement</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Major Repairs</p>
              <p className="text-2xl font-bold text-navy">$400 - $800</p>
              <p className="text-xs text-muted-foreground">Gas valve, multiple components, or complex issues</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">*Tank leaks usually require replacement. We'll advise if repair or replacement is best.</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Common Causes</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Sediment buildup reduces efficiency and causes noise</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Faulty thermostats cause temperature issues</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Corroded anode rods lead to tank rust</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-gold/20 p-1 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-gold"></div>
              </div>
              <span>Worn heating elements stop producing hot water</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">What's Included</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Complete Diagnosis</p>
                <p className="text-xs text-muted-foreground">Identify exact problem and recommend solution</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Quality Parts</p>
                <p className="text-xs text-muted-foreground">OEM or equivalent replacement parts</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Same-Day Service</p>
                <p className="text-xs text-muted-foreground">Most repairs completed same day</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Repair vs. Replace Decision</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-navy/5 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Repair if:</p>
              <p className="text-muted-foreground">Unit less than 8 years old, simple component failure, repair cost under $400</p>
            </div>
            <div className="bg-gold/10 p-3 rounded-xl">
              <p className="font-semibold text-navy mb-1">Replace if:</p>
              <p className="text-muted-foreground">Tank leak, age 10+ years, repair cost over 50% of new unit, frequent repairs</p>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Need Hot Water Now?</h3>
          <p className="text-sm opacity-90">
            Same-day water heater repairs. Call us now to get your hot water back!
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

export default WaterHeater;
