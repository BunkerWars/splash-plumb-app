import { BottomNav } from "@/components/BottomNav";
import { EmergencyButton } from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WaterHeater = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>Water Heater Repair Fresno, CA | No Hot Water? Fast Fixes | Licensed Plumbers</title>
        <meta name="description" content="Water heater repair in Fresno: no hot water, strange noises, leaks, pilot light issues. Fast repairs for tank & tankless units. 79 years experience. Call (559) 292-4065!" />
        <link rel="canonical" href="https://fresno.plumbing/services/repair/water-heater" />
      </Helmet>
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/services/repair')} className="tap-scale">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-navy">Water Heater Repair</h1>
            <p className="text-sm text-muted-foreground">Fix no hot water issues</p>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-navy mb-3">Expert Water Heater Repair</h2>
          <p className="text-sm text-muted-foreground mb-4">
            No hot water? Strange noises? We repair all types of water heaters - tank, tankless, gas, and electric. Fast diagnosis and repair to restore your hot water.
          </p>
          <div className="flex gap-2">
            <a href="tel:+15592924065" className="flex-1">
              <Button className="w-full bg-gold text-navy hover:bg-gold/90 tap-scale font-semibold">Call Now</Button>
            </a>
            <Button variant="outline" className="flex-1 border-navy/20 text-navy tap-scale">Get Quote</Button>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Common Water Heater Problems</h3>
          <div className="space-y-3">
            {[
              "No Hot Water",
              "Not Enough Hot Water",
              "Water Too Hot",
              "Strange Noises (Banging, Popping)",
              "Leaking Tank or Connections",
              "Pilot Light Won't Stay Lit",
              "Rusty or Discolored Water",
              "Bad Smelling Water",
              "Pressure Relief Valve Leaking",
              "Thermostat Issues"
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
              <p className="font-semibold text-navy">Simple Repairs</p>
              <p className="text-2xl font-bold text-navy">$150 - $350</p>
              <p className="text-xs text-muted-foreground">Thermostat, pilot light, pressure relief valve</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Standard Repairs</p>
              <p className="text-2xl font-bold text-navy">$350 - $700</p>
              <p className="text-xs text-muted-foreground">Heating element, anode rod, gas valve, flush & repair</p>
            </div>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-semibold text-navy">Major Repairs</p>
              <p className="text-2xl font-bold text-navy">$700 - $1,500+</p>
              <p className="text-xs text-muted-foreground">Tank leak repair, multiple components, complex issues</p>
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
                <p className="font-semibold text-sm">Full Inspection</p>
                <p className="text-xs text-muted-foreground">Diagnose all water heater issues</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Expert Repair</p>
                <p className="text-xs text-muted-foreground">Fix or replace faulty components</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded-full bg-navy p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Safety Check</p>
                <p className="text-xs text-muted-foreground">Ensure safe operation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy p-6 rounded-2xl text-white space-y-3">
          <h3 className="text-xl font-bold">Restore Your Hot Water</h3>
          <p className="text-sm opacity-90">
            Same-day water heater repairs. Licensed plumbers, all brands, 79 years serving Fresno!
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

export default WaterHeater;